import mongoDb from '../db'

const CommunitySchema = new mongoDb.Schema({
	name: { type: String, required: true, unique: true },
	ownerId: { type: String, required: true },
	createdAt: { type: Date, required: true },
})

const CommunityModel = mongoDb.model('communities', CommunitySchema)

export default CommunityModel
