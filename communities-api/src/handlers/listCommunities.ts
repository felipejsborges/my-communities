import CommunitiesRepository from "../repositories/communities";


export const handler = async (event, context) => {
	try {
		console.log('List Communities')
		const communitiesRepository = new CommunitiesRepository();
		const communities = await communitiesRepository.list();
		console.log('Response:', {
			statusCode: 200,
			body: JSON.stringify(communities),
		})
		return {
			statusCode: 200,
			body: JSON.stringify(communities),
		};
	} catch (error) {
		console.error('Error:', error);
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Internal Server Error!!' }),
		};
	}
};
