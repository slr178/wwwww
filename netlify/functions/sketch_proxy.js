import fetch from 'node-fetch';

export const handler = async (event) => {
  // Only allow GET
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { url } = event.queryStringParameters;
  if (!url) {
    return { statusCode: 400, body: 'Missing url parameter' };
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { statusCode: response.status, body: 'Failed to fetch image' };
    }

    const buffer = await response.buffer();
    const contentType = response.headers.get('content-type') || 'image/png';

    return {
      statusCode: 200,
      headers: {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      },
      body: buffer.toString('base64'),
      isBase64Encoded: true
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}; 