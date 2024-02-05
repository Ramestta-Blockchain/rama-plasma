const { use } = require("@ramestta/ramajs");
const { Web3ClientPlugin } = require("@ramestta/rama-web3");
const { PlasmaClient } = require("@ramestta/rama-plasma");

const HDWalletProvider = require("@truffle/hdwallet-provider");
const { user1, rpc, plasma, user2 } = require("./config");
use(Web3ClientPlugin);
const from = user1.address;
const to = user2.address;

const execute = async () => {
  const privateKey = user1.privateKey;
  const l2ERC20 = plasma.child.erc20;
  const mumbaiERC20 = plasma.parent.erc20;
  const mumbaiERC721 = plasma.parent.erc721;
  const l2ERC721 = plasma.child.erc721;

  const client = new PlasmaClient();


  await client.init({
    log: true,
    network: 'testnet',
    version: 'v1',
    parent: {
      provider: new HDWalletProvider(privateKey, rpc.parent),
      defaultConfig: {
        from
      }
    },
    child: {
      provider: new HDWalletProvider(privateKey, rpc.child),
      defaultConfig: {
        from
      }
    }
  });
  console.log("init called");

  const l2ERC20Token = client.erc20(l2ERC20);
  const mumbaiERC20Token = client.erc20(mumbaiERC20, true);
  const mumbaiERC721Token = client.erc721(mumbaiERC721, true);
  const l2ERC721Token = client.erc721(l2ERC721);



  const ramaToken = client.erc20(plasma.parent.rama, true);

  // const user1ramaBalance = await ramaToken.getBalance(from);
  // console.log('user1ramabalance', user1ramaBalance);

  // const user2ramaBalance = await ramaToken.getBalance(to);
  // console.log('user2ramaBalance', user2ramaBalance);

  const result = await ramaToken.approveMax({
    // returnTransaction: true
  })
  // return console.log('result', result);
  const txHash = await result.getTransactionHash();
  console.log(txHash)
  const txReceipt = await result.getReceipt();
  console.log(txReceipt)
}

execute().then(_ => {
  process.exit(0)
}).catch(err => {
  console.error(err);
  process.exit(0);
})
