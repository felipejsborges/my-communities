const COMMUNITIES_API_URL = 'https://92ln6i2b1k.execute-api.us-east-1.amazonaws.com/dev';


export async function fetchCommunities(query: string) {
	try {
		const response_promise = await fetch(COMMUNITIES_API_URL)

		const data = await response_promise.json()

		const notBlankData = data.filter((community) => !!community.name && !!community.createdAt);

		return notBlankData;
	} catch (err) {
		console.error('Database Error:', err);

		throw new Error('Failed to fetch communities.');
	}
}