const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)

    const BillingCycles = require('../api/billingCycle/billingCycleService')
    BillingCycles.register(router, '/billingCycles')
}