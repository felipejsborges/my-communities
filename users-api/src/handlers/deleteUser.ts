import UsersRepository from "../repositories/users";

export const handler = async (event, context, callback) => {
	try {
		const { id } = event.pathParameters;

		const usersRepository = new UsersRepository();

		await usersRepository.deleteById(id);

		return {
			statusCode: 204,
		};
	} catch (error) {
		console.error("Error getting	user:", error);
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Internal Server Error!!' }),
		};
	}
};
