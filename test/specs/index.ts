import { use } from "@ramestta/ramajs";
import { Web3ClientPlugin } from "@ramestta/rama-web3";

use(Web3ClientPlugin);

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

import './plasma_bridge'
import './erc20.spec'
import './ramestta.spec'
import './erc721.spec'
