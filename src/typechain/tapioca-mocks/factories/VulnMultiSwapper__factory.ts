/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  VulnMultiSwapper,
  VulnMultiSwapperInterface,
} from "../VulnMultiSwapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPenroseMock",
        name: "penrose",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "counterfeitSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576102a2908161001c8239f35b600080fdfe6080604081815260048036101561001557600080fd5b600092833560e01c6347feaff91461002c57600080fd5b346101ff5760603660031901126101ff57813573ffffffffffffffffffffffffffffffffffffffff928382168092036101fb576024359086604435958087168097036101905763de40657760e01b80875260209689969088818781855afa9283156101f157899186946101d2575b508689518094819382525afa90811561019b578391899186916101a5575b5060448b8a519485938492632a18be8b60e11b84528b8401528b6024840152165afa90811561019b578491610161575b508660a4969798505198899788966311a5cc7760e31b885287015260248601523360448601526064850152826084850152165af180156101555761012a578280f35b813d831161014e575b61013d8183610203565b8101031261014b5738808280f35b80fd5b503d610133565b505051903d90823e3d90fd5b959650509584813d8311610194575b61017a8183610203565b8101031261019057879560a494518796956100e8565b5080fd5b503d610170565b87513d86823e3d90fd5b6101c59150823d84116101cb575b6101bd8183610203565b81019061023b565b386100b8565b503d6101b3565b6101ea919450823d84116101cb576101bd8183610203565b923861009a565b88513d87823e3d90fd5b8580fd5b8380fd5b90601f8019910116810190811067ffffffffffffffff82111761022557604052565b634e487b7160e01b600052604160045260246000fd5b90816020910312610267575173ffffffffffffffffffffffffffffffffffffffff811681036102675790565b600080fdfea2646970667358221220cc566065e95d76a0d17fe7f896b50cac4fd9eda7026c2e8d9340fda2dd9ed41564736f6c63430008120033";

type VulnMultiSwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VulnMultiSwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VulnMultiSwapper__factory extends ContractFactory {
  constructor(...args: VulnMultiSwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "VulnMultiSwapper";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VulnMultiSwapper> {
    return super.deploy(overrides || {}) as Promise<VulnMultiSwapper>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VulnMultiSwapper {
    return super.attach(address) as VulnMultiSwapper;
  }
  override connect(signer: Signer): VulnMultiSwapper__factory {
    return super.connect(signer) as VulnMultiSwapper__factory;
  }
  static readonly contractName: "VulnMultiSwapper";

  public readonly contractName: "VulnMultiSwapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VulnMultiSwapperInterface {
    return new utils.Interface(_abi) as VulnMultiSwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VulnMultiSwapper {
    return new Contract(address, _abi, signerOrProvider) as VulnMultiSwapper;
  }
}