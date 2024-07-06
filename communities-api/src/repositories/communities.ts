import CommunityModel from '../models/Community'


export default class CommunitiesRepository {
	private communityModel: typeof CommunityModel

	constructor() {
		this.communityModel = CommunityModel
	}

	async list() {
		return await this.communityModel.find()
	}

	async create(community) {
		return await this.communityModel.create(community)
	}

	async findByName(name) {
		return await this.communityModel.findOne({ name })
	}

	async findById(id) {
		return await this.communityModel.findById(id)
	}

	async updateById(id, data) {
		return await this.communityModel.findByIdAndUpdate(id, data)
	}

	async deleteById(id) {
		return await this.communityModel.findByIdAndDelete(id)
	}
}