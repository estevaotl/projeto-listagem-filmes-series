export async function handler(event) {
    const API_KEY = process.env.TMDB_API_KEY;
    const { path } = event.queryStringParameters;

    if (!path) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Missing TMDB path parameter.' })
        };
    }

    try {
        const endpoint = `https://api.themoviedb.org/3/${decodeURIComponent(path)}?language=pt-BR`;
        const res = await fetch(endpoint, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        });

        const data = await res.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch from TMDB', details: err.message })
        };
    }
}
