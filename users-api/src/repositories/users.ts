import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

import {
	DeleteCommand,
	DeleteCommandInput,
	DynamoDBDocumentClient,
	GetCommand,
	GetCommandInput,
	PutCommand,
	PutCommandInput,
	ScanCommand,
	ScanCommandInput,
} from "@aws-sdk/lib-dynamodb";

export default class UsersRepository {
	private table: string;
	private docClient: DynamoDBDocumentClient;

	constructor() {
		this.table = process.env.USERS_TABLE!;

		const client = new DynamoDBClient();
		this.docClient = DynamoDBDocumentClient.from(client);
	}

	async list() {
		const params: ScanCommandInput = { TableName: this.table };

		const command = new ScanCommand(params);

		const { Items } = await this.docClient.send(command);

		return Items;
	}

	async create(data) {
		const params: PutCommandInput = { TableName: this.table, Item: data };

		const command = new PutCommand(params);

		await this.docClient.send(command);

		return data;
	}

	async findById(id) {
		const params: GetCommandInput = { TableName: this.table, Key: { userId: id } };

		const command = new GetCommand(params);

		const { Item } = await this.docClient.send(command);

		return Item
	}

	async updateById(id, data) {
		const updatedData = { ...data, userId: id };

		const params: PutCommandInput = {
			TableName: this.table, Item: updatedData
		};

		const command = new PutCommand(params);

		await this.docClient.send(command);

		return updatedData;
	}

	async deleteById(id) {
		const params: DeleteCommandInput = { TableName: this.table, Key: { userId: id } };

		const command = new DeleteCommand(params);

		await this.docClient.send(command);
	}
}