/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MasterContractMock,
  MasterContractMockInterface,
} from "../../mocks/MasterContractMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract YieldBox",
        name: "_yieldBox",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "setApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract YieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161039738038061039783398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161030061009760003960008181606a0152818160f9015261018f01526103006000f3fe60806040526004361061003f5760003560e01c80634ddf47d414610044578063de40657714610058578063e18c6b19146100a8578063e2bbb158146100bd575b600080fd5b610056610052366004610212565b5050565b005b34801561006457600080fd5b5061008c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b3480156100b457600080fd5b506100566100dd565b3480156100c957600080fd5b506100566100d8366004610284565b61015f565b60405163a22cb46560e01b8152336004820152600160248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a22cb46590604401600060405180830381600087803b15801561014557600080fd5b505af1158015610159573d6000803e3d6000fd5b50505050565b604051634d4d7cbd60e11b81526004810183905233602482015230604482015260006064820152608481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690639a9af97a9060a4016040805180830381600087803b1580156101da57600080fd5b505af11580156101ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015991906102a6565b6000806020838503121561022557600080fd5b823567ffffffffffffffff8082111561023d57600080fd5b818501915085601f83011261025157600080fd5b81358181111561026057600080fd5b86602082850101111561027257600080fd5b60209290920196919550909350505050565b6000806040838503121561029757600080fd5b50508035926020909101359150565b600080604083850312156102b957600080fd5b50508051602090910151909290915056fea26469706673582212206a752dfd386352ea40ce463818c6580f8ce0956230c9d22421fd4e91e675ee2864736f6c63430008090033";

type MasterContractMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MasterContractMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MasterContractMock__factory extends ContractFactory {
  constructor(...args: MasterContractMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MasterContractMock";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MasterContractMock> {
    return super.deploy(
      _yieldBox,
      overrides || {}
    ) as Promise<MasterContractMock>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yieldBox, overrides || {});
  }
  override attach(address: string): MasterContractMock {
    return super.attach(address) as MasterContractMock;
  }
  override connect(signer: Signer): MasterContractMock__factory {
    return super.connect(signer) as MasterContractMock__factory;
  }
  static readonly contractName: "MasterContractMock";

  public readonly contractName: "MasterContractMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MasterContractMockInterface {
    return new utils.Interface(_abi) as MasterContractMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterContractMock {
    return new Contract(address, _abi, signerOrProvider) as MasterContractMock;
  }
}
