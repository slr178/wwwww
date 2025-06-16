export const handler = async (event) => {
  // Only allow GET
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { url } = event.queryStringParameters || {};
  if (!url) {
    return { statusCode: 400, body: 'Missing url parameter' };
  }

  try {
    console.log('Fetching URL:', url);
    
    const response = await fetch(url);
    if (!response.ok) {
      console.error('Fetch failed:', response.status, response.statusText);
      return { statusCode: response.status, body: `Failed to fetch image: ${response.statusText}` };
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const contentType = response.headers.get('content-type') || 'image/png';

    console.log('Successfully fetched image:', contentType, buffer.length, 'bytes');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600'
      },
      body: buffer.toString('base64'),
      isBase64Encoded: true
    };
  } catch (error) {
    console.error('Proxy error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: error.message })
    };
  }
}; 