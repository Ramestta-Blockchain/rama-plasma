// import {config} from "./config";
// import {Web3ClientPlugin} from "@ramesttanetwork/rama-web3"
// import {PlasmaClient} from "@ramesttanetwork/rama-plasma"
// import {use} from "@ramesttanetwork/ramajs"
// import HDWalletProvider from "@truffle/hdwallet-provider"


// // install web3 plugin
// use(Web3ClientPlugin)

// const privateKey = config.user1.privateKey

// const from = config.user1.address

// async function getPlasmaClient (network = 'testnet', version = 'mumbai') {
//   try {
//     const plasmaClient = new PlasmaClient()
//     return plasmaClient.init({
//       network: network,
//       version: version,
//       parent: {
//         provider: new HDWalletProvider(privateKey, config.parent.rpc),
//         defaultConfig: {
//           from
//         }
//       },
//       child: {
//         provider: new HDWalletProvider(privateKey, config.child.rpc),
//         defaultConfig: {
//           from
//         }
//       }
//     })
//   } catch (error) {
//     console.error('error unable to initiate plasmaClient', error)
//   }
// }

// console.log(getPlasmaClient());


// // export const lol = {
// //   getPlasmaClient: getPlasmaClient,
// //   child: config.child,
// //   plasma: config.plasma,
// //   from: config.user1.address,
// //   privateKey: config.user1.privateKey,
// //   to: config.user2.address
// // }

