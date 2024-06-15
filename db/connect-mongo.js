const mongoose = require('mongoose');

const getConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {})
        console.log('conexion exitosa');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getConnection
}