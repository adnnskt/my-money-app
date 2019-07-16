const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: true}
})

const debtSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: [true, 'Informe o valor do débito!']}, //Mensagem de validação
    status: {type: String, required: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
  name: {type: String, required: true},
  month: {type: Number, min: 1, max: 12, required: true}, //min e max utilizados para validação 
  year: {type: Number, min: 1970, max: 2100, required: true}, //min e max utilizados para validação 
  credits: [creditSchema], //Chamada o Schema credit
  debts: [debtSchema]  //Chama o Schema Debt
})

module.exports = restful.model('BillingCycle', billingCycleSchema) //exporta um Schema que contem dois outros Schemas aninhado