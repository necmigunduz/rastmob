import mongoose from 'mongoose'
const Schema = mongoose.Schema

const postSchema = Schema({
    class: String,
    title: String,
    description: String,
    color: String,
    tags: [String]
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage
