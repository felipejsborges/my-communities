import CommunitiesRepository from "../repositories/communities";


export const handler = async (event, context, callback) => {
	try {
		console.log(event)
		const { id } = event.pathParameters;
		console.log('Get Community:', id)

		const communitiesRepository = new CommunitiesRepository();
		const community = await communitiesRepository.findById(id);

		return {
			statusCode: 200,
			body: JSON.stringify(community),
		};
	} catch (error) {
		console.error("Error getting	community:", error);
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Internal Server Error!!' }),
		};
	}
};
