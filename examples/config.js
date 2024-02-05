const dotenv = require('dotenv')
const path = require('path')
const env = dotenv.config({
  path: path.join(__dirname, '.env')
})

module.exports = {
  plasma: {
    parent: {
      erc20: '0x0B58c0aA2bA5955f1761Edd3EB522833F96bD57a',
      erc721: ''
    },
    child: {
      erc20: '0x0000000000000000000000000000000000001010',
      erc721: ''
    },
  },
  parent: {
    rpc: process.env.ROOT_RPC
  },
  child: {
    rpc: process.env.RAMESTTA_RPC
  },
  user1: {
    // '<paste your private key here>' - A sample private key prefix with `0x`
    privateKey: process.env.USER1_PRIVATE_KEY,
    // '<paste address belonging to private key here>', Your address
    address: process.env.USER1_FROM
  },
  user2: {
    address: process.env.USER2_FROM
  }
}
