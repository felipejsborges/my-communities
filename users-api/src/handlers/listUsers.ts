import UsersRepository from "../repositories/users";


export const handler = async (event, context) => {
	try {
		const usersRepository = new UsersRepository();

		const users = await usersRepository.list();

		return {
			statusCode: 200,
			body: JSON.stringify(users),
		};
	} catch (error) {
		console.error("Error listing	users:", error);

		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Internal Server Error!!' }),
		};
	}
};
