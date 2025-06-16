export const handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { description } = JSON.parse(event.body);
    
    // Return style parameters based on description
    const params = {
      threshold: description.includes('fine') ? 140 : 128,
      blur: description.includes('soft') ? 2 : 1,
      scale: 1,
      strokeWidth: description.includes('bold') ? 2 : 1
    };

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(params)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}; 