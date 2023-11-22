/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  RouterETHMock,
  RouterETHMockInterface,
} from "../../../stargate/mocks/RouterETHMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_stgRouter",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_lpToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "addLiquidityETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpToken",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "stargateRouter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stgRouter",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161032e38038061032e83398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b610270806100be6000396000f3fe60806040526004361061004e5760003560e01c80633e0dc34e1461005a5780635fcbd2851461007b578063a9e56f3c146100b3578063b298e8e9146100d1578063ed995307146100f157600080fd5b3661005557005b600080fd5b34801561006657600080fd5b50604051600181526020015b60405180910390f35b34801561008757600080fd5b5060015461009b906001600160a01b031681565b6040516001600160a01b039091168152602001610072565b3480156100bf57600080fd5b506000546001600160a01b031661009b565b3480156100dd57600080fd5b5060005461009b906001600160a01b031681565b6100f96100fb565b005b600154604051637c928fe960e01b81523460048201526001600160a01b0390911690637c928fe990602401600060405180830381600087803b15801561014057600080fd5b505af1158015610154573d6000803e3d6000fd5b5050600180546001600160a01b0316925063a9059cbb9150339061017890346101ea565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af11580156101c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e79190610211565b50565b8181038181111561020b57634e487b7160e01b600052601160045260246000fd5b92915050565b60006020828403121561022357600080fd5b8151801515811461023357600080fd5b939250505056fea26469706673582212206ecfdac281b2f080d21553666cd884b63e25af82d898d141e3374f8dd014331464736f6c63430008120033";

type RouterETHMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RouterETHMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RouterETHMock__factory extends ContractFactory {
  constructor(...args: RouterETHMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "RouterETHMock";
  }

  override deploy(
    _stgRouter: PromiseOrValue<string>,
    _lpToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RouterETHMock> {
    return super.deploy(
      _stgRouter,
      _lpToken,
      overrides || {}
    ) as Promise<RouterETHMock>;
  }
  override getDeployTransaction(
    _stgRouter: PromiseOrValue<string>,
    _lpToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_stgRouter, _lpToken, overrides || {});
  }
  override attach(address: string): RouterETHMock {
    return super.attach(address) as RouterETHMock;
  }
  override connect(signer: Signer): RouterETHMock__factory {
    return super.connect(signer) as RouterETHMock__factory;
  }
  static readonly contractName: "RouterETHMock";

  public readonly contractName: "RouterETHMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RouterETHMockInterface {
    return new utils.Interface(_abi) as RouterETHMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RouterETHMock {
    return new Contract(address, _abi, signerOrProvider) as RouterETHMock;
  }
}
