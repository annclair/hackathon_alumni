module.exports = {
    token : process.env.SECRET_TOKEN || 'secretToken',
    db : process.env.MONGODB_URI || 'mongodb://localhost:27017/projectDB'
}
