import CommunitiesRepository from "../repositories/communities";


export const handler = async (event, context, callback) => {
	try {
		const { id } = event.pathParameters;
		const data = JSON.parse(event.body)

		const communitiesRepository = new CommunitiesRepository();
		await communitiesRepository.updateById(id, data);

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
