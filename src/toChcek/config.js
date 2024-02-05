import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config({
  path: path.join(__dirname, '.env')
});

export const config = {
  plasma: {
    parent: {
      erc20: '0x6B9eE7ccd9109cab044C377a0AB3A82e28C4aD93',
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
};
