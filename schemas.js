const Joi = require('joi')

const postSchema = Joi.object({
    post: Joi.object({
        body: Joi.string().required().trim().max(63206).truncate()
    }),
    image: Joi.binary().encoding('base64'),
    deleteImgs: Joi.array()
}).required()

const commentSchema = Joi.object({
    comment: Joi.object({
        body: Joi.string().required().trim().max(63206).truncate()
    }).required()
}).required()

module.exports = {
    postSchema,
    commentSchema
}