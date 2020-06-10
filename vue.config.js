const IsProd = process.env.NODE_ENV === 'production' 

const config = {}

if (!IsProd) config.baseUrl = './'

module.exports = config
