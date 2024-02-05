import { BaseToken, Web3SideChainClient } from "@ramestta/ramajs";
import { IPlasmaClientConfig } from "../interfaces";


export class RegistryContract extends BaseToken<IPlasmaClientConfig> {

    constructor(client: Web3SideChainClient<IPlasmaClientConfig>, address: string) {
        super(
            {
                isParent: true,
                address: address,
                name: "Registry"
            },
            client
        );
    }

}
