import UsersRepository from "../repositories/users";

export const handler = async (event, context, callback) => {
	try {
		const { id } = event.pathParameters;
		const data = JSON.parse(event.body)

		const usersRepository = new UsersRepository();

		await usersRepository.updateById(id, data);

		return {
			statusCode: 204,
		};
	} catch (error) {
		console.error("Error updating	user:", error);
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Internal Server Error!!' }),
		};
	}
};
