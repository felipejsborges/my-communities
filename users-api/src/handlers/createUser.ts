import UsersRepository from "../repositories/users";

export const handler = async (event, context, callback) => {
	try {
		const data = JSON.parse(event.body)

		const usersRepository = new UsersRepository();

		const user = await usersRepository.create({
			...data,
		});

		return {
			statusCode: 200,
			body: JSON.stringify(user),
		};
	} catch (error) {
		console.error("Error creating	user:", error);
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Internal Server Error!!' }),
		};
	}
};
