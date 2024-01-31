/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TapiocaOmnichainExtExec,
  TapiocaOmnichainExtExecInterface,
} from "../../../../contracts/tapiocaOmnichainEngine/extension/TapiocaOmnichainExtExec";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct ERC20PermitApprovalMsg[]",
        name: "_approvals",
        type: "tuple[]",
      },
    ],
    name: "erc20PermitApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct ERC721PermitApprovalMsg[]",
        name: "_approvals",
        type: "tuple[]",
      },
    ],
    name: "erc721PermitApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506105b0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063853e85fd1461003b578063f78c451514610050575b600080fd5b61004e610049366004610413565b610063565b005b61004e61005e366004610488565b610264565b8060005b8181101561025e57838382818110610081576100816104eb565b61009892602061010090920201908101915061051a565b73ffffffffffffffffffffffffffffffffffffffff1663d505accf8585848181106100c5576100c56104eb565b9050610100020160200160208101906100de919061051a565b8686858181106100f0576100f06104eb565b905061010002016040016020810190610109919061051a565b87878681811061011b5761011b6104eb565b9050610100020160600135888887818110610138576101386104eb565b9050610100020160800135898988818110610155576101556104eb565b9050610100020160a001602081019061016e9190610557565b8a8a89818110610180576101806104eb565b9050610100020160c001358b8b8a81811061019d5761019d6104eb565b60405160e08b811b7fffffffff0000000000000000000000000000000000000000000000000000000016825273ffffffffffffffffffffffffffffffffffffffff9a8b1660048301529890991660248a0152604489019690965250606487019390935260ff91909116608486015260a485015261010090910201013560c482015260e401600060405180830381600087803b15801561023b57600080fd5b505af115801561024f573d6000803e3d6000fd5b50505050806001019050610067565b50505050565b8060005b8181101561025e57838382818110610282576102826104eb565b61029892602060e090920201908101915061051a565b73ffffffffffffffffffffffffffffffffffffffff16637ac2ff7b8585848181106102c5576102c56104eb565b905060e0020160200160208101906102dd919061051a565b8686858181106102ef576102ef6104eb565b905060e002016040013587878681811061030b5761030b6104eb565b905060e0020160600135888887818110610327576103276104eb565b905060e00201608001602081019061033f9190610557565b898988818110610351576103516104eb565b905060e0020160a001358a8a8981811061036d5761036d6104eb565b905060e0020160c001356040518763ffffffff1660e01b81526004016103d69695949392919073ffffffffffffffffffffffffffffffffffffffff9690961686526020860194909452604085019290925260ff166060840152608083015260a082015260c00190565b600060405180830381600087803b1580156103f057600080fd5b505af1158015610404573d6000803e3d6000fd5b50505050806001019050610268565b6000806020838503121561042657600080fd5b823567ffffffffffffffff8082111561043e57600080fd5b818501915085601f83011261045257600080fd5b81358181111561046157600080fd5b8660208260081b850101111561047657600080fd5b60209290920196919550909350505050565b6000806020838503121561049b57600080fd5b823567ffffffffffffffff808211156104b357600080fd5b818501915085601f8301126104c757600080fd5b8135818111156104d657600080fd5b86602060e08302850101111561047657600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561052c57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461055057600080fd5b9392505050565b60006020828403121561056957600080fd5b813560ff8116811461055057600080fdfea26469706673582212205fe2f954ae400b352fdd3250f70b798b730894f6222eabdc2ca75023fc58303764736f6c63430008160033";

type TapiocaOmnichainExtExecConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TapiocaOmnichainExtExecConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TapiocaOmnichainExtExec__factory extends ContractFactory {
  constructor(...args: TapiocaOmnichainExtExecConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TapiocaOmnichainExtExec";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TapiocaOmnichainExtExec> {
    return super.deploy(overrides || {}) as Promise<TapiocaOmnichainExtExec>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TapiocaOmnichainExtExec {
    return super.attach(address) as TapiocaOmnichainExtExec;
  }
  override connect(signer: Signer): TapiocaOmnichainExtExec__factory {
    return super.connect(signer) as TapiocaOmnichainExtExec__factory;
  }
  static readonly contractName: "TapiocaOmnichainExtExec";

  public readonly contractName: "TapiocaOmnichainExtExec";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TapiocaOmnichainExtExecInterface {
    return new utils.Interface(_abi) as TapiocaOmnichainExtExecInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TapiocaOmnichainExtExec {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TapiocaOmnichainExtExec;
  }
}
