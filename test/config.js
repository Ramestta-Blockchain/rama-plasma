// const dotenv = require('dotenv');
// const path = require('path');
// const env = dotenv.config({
//     path: path.join(__dirname, '.env')
// });
module.exports = {
    rpc: {
        parent: process.env.ROOT_RPC,
        child: process.env.RAMESTTA_RPC,
    },
    plasma: {
        parent: {
            erc20: '',
            erc721: '',
            rama: '0x1eB6956E6c5F27d822FC34DF076f38e6535fA079'
        },
        child: {
            erc20: '',
            erc721: '',
            rama: '0x0000000000000000000000000000000000001010'
        },
        registryAddress: '',
        rootChainAddress: '', // The address for the main Plasma contract in  polygon mumbai
        withdrawManagerAddress: '', // An address for the WithdrawManager contract on polygon mumbai
        depositManagerAddress: '', // An address for a DepositManager contract in polygon mumbai
    },
    user1: {
        "privateKey": process.env.USER1_PRIVATE_KEY,
        "address": process.env.USER1_FROM
    },
    user2: {
        address: process.env.USER2_FROM, // Your address
        "privateKey": process.env.USER2_PRIVATE_KEY,

    },
}
