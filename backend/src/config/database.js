const mongoose = require('mongoose')
require('dotenv').config()
module.exports = mongoose.connect(process.env.HOST_AND_DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'"
mongoose.Error.messages.String.enum = "O '{VALUE}' informado não é válido para o atributo '{PATH}'"