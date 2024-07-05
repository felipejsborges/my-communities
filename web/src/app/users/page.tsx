import { API_URL } from "../../../constants/api";
import { UsersCRUD } from "./_components/UsersCrud";

function UsersList({ users }: any) {
	return (
		<div>
			{users.map((user: any) => (
				<h1>{user.name}</h1>
			))}
		</div>
	)

}

export default async function Users() {
	const users = (await fetch(API_URL + "/users", { cache: 'no-store' }).then((res) => res.json())).users;

	return (
		<>
			<UsersCRUD />
			<UsersList users={users} />
		</>
	)
}
