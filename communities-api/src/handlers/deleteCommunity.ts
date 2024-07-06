import CommunitiesRepository from "../repositories/communities";


export const handler = async (event, context, callback) => {
	try {
		const { id } = event.pathParameters;

		const communitiesRepository = new CommunitiesRepository();
		await communitiesRepository.deleteById(id);

		return {
			statusCode: 204,
		};
	} catch (error) {
		console.error("Error getting	community:", error);
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Internal Server Error!!' }),
		};
	}
};
