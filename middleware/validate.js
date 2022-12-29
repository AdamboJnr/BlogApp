const Joi = require('joi')

const schema = Joi.object({
    title: Joi.string()
        .max(100)
        .required(),
    content: Joi.string()
        .max(400)
        .required()   
})

module.exports = { schema } ;