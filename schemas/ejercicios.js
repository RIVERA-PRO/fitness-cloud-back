import Joi from 'joi-oid';

const schema = Joi.object({
    likes: Joi
        .number(),

    photo: Joi
        .string()
        .min(8)
        .uri()
        .messages(
            {
                'string.min': 'La foto debe tener al menos 8 caracteres',
                'string.empty': 'La foto no puede estar vacía',
                'any.required': 'Se requiere una foto',
                'string.uri': 'Se necesita una URL válida'
            }
        ),
    mail: Joi
        .string()
        .min(3)
        .max(100)
    ,

    name: Joi
        .string()
        .min(3)
        .max(100)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 30 characters",
            'string.required': 'the title is required',
        }),
    title: Joi
        .string()
        .required()
        .min(3)
        .max(100)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 30 characters",
            'string.required': 'the title is required',
        }),

    fondo: Joi
        .string()
        .min(0)
        .max(1000),
    img: Joi
        .string()
        .min(0)
        .max(1000),
    description: Joi
        .string()
        .required()
        .min(0)
        .max(2000)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 2000 characters",
            'string.required': 'the title is required',
        }),

    categoria: Joi
        .required()
        .messages({
            "string.min": "The description must have at least 20 characters",
            "string.max": "The description must have a maximum of 200 characters",
            'string.required': 'the description is required',
        }),
    user_id: Joi
        .objectId()
        .required(),

    consejo1: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    consejo2: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    consejo3: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    consejo4: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    consejo5: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),

    paso1: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    paso2: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),

    paso3: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    paso4: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),

    paso5: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),

    paso6: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    paso7: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    paso8: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    paso9: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),
    paso10: Joi
        .string()
        .min(0)
        .max(500)
        .messages({
            "string.min": "The title must have at least 3 characters",
            "string.max": "The title must have a maximum of 500 characters",
            'string.required': 'the title is required',
        }),


})

export default schema

