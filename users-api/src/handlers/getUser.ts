import UsersRepository from "../repositories/users";

export const handler = async (event, context, callback) => {
	try {
		const { id } = event.pathParameters;

		const usersRepository = new UsersRepository();

		const user = await usersRepository.findById(id);

		return {
			statusCode: 200,
			body: JSON.stringify(user),
		};
	} catch (error) {
		console.error("Error getting	user:", error);
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Internal Server Error!!' }),
		};
	}
};
