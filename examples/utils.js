const { Web3ClientPlugin } = require('@ramestta/rama-web3')
const { PlasmaClient } = require('@ramestta/rama-plasma')
const { use } = require('@ramestta/ramajs')
const HDWalletProvider = require('@truffle/hdwallet-provider')
const config = require('./config')

// install web3 plugin
use(Web3ClientPlugin)

const privateKey = config.user1.privateKey
const from = config.user1.address

async function getPlasmaClient (network = 'testnet', version = 'v1') {
  try {
    const plasmaClient = new PlasmaClient()
    return plasmaClient.init({
      network: network,
      version: version,
      parent: {
        provider: new HDWalletProvider(privateKey, config.parent.rpc),
        defaultConfig: {
          from
        }
      },
      child: {
        provider: new HDWalletProvider(privateKey, config.child.rpc),
        defaultConfig: {
          from
        }
      }
    })
  } catch (error) {
    console.error('error unable to initiate plasmaClient', error)
  }
}

module.exports = {
  getPlasmaClient: getPlasmaClient,
  child: config.child,
  plasma: config.plasma,
  from: config.user1.address,
  privateKey: config.user1.privateKey,
  to: config.user2.address
}
