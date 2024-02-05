import { IBaseClientConfig } from "@ramestta/ramajs";

export interface IPlasmaClientConfig extends IBaseClientConfig {

    depositManager?: string;
    withdrawManager?: string;
    registry?: string;
    rootChain?: string;
    erc20Predicate?: string;
    erc721Predicate?: string;
}
