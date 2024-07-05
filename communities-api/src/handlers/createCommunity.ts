import CommunitiesRepository from "../repositories/communities";


export const handler = async (event, context, callback) => {
	try {
		const data = JSON.parse(event.body)

		const communitiesRepository = new CommunitiesRepository();
		const community = await communitiesRepository.create(data);

		return {
			statusCode: 200,
			body: JSON.stringify(community),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Internal Server Error!!' }),
		};
	}
};
