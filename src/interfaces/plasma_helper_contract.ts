import { ExitUtil } from "@ramestta/ramajs";
import { DepositManager, RegistryContract, WithdrawManager } from "../contracts";



export interface IPlasmaContracts {
    depositManager: DepositManager;
    registry: RegistryContract;
    exitUtil: ExitUtil;
    withdrawManager: WithdrawManager;
}
