"use client"

import { useState } from "react";
import { API_URL } from "../../../../constants/api";

export function UsersCRUD() {
	const [form, setForm] = useState({ name: "", "userId": "" });

	const handleChange = (e: any) => {
		setForm({ name: e.target.value, userId: e.target.value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		await fetch(API_URL + "/users", {
			method: "POST",
			body: JSON.stringify(form),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	return (
		<div>
			<h1>Users CRUD</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Name"
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}