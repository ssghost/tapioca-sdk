/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ConvexZapMock,
  ConvexZapMockInterface,
} from "../../../../deprecated/convex/mocks/ConvexZapMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_reward1",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_reward2",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cvx",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "cvxRewards",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "reward1",
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
    name: "reward2",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107c33803806107c383398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b610705806100be6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80635a7b87f21461005c578063889069cd14610071578063923c1d61146100a0578063aa5ccb90146100a0578063facf85b1146100a7575b600080fd5b61006f61006a366004610558565b6100ba565b005b600054610084906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6000610084565b600154610084906001600160a01b031681565b600054604051637c928fe960e01b8152678ac7230489e8000060048201526001600160a01b0390911690637c928fe990602401600060405180830381600087803b15801561010757600080fd5b505af115801561011b573d6000803e3d6000fd5b5050600154604051637c928fe960e01b8152678ac7230489e8000060048201526001600160a01b039091169250637c928fe99150602401600060405180830381600087803b15801561016c57600080fd5b505af1158015610180573d6000803e3d6000fd5b50506000546101a492506001600160a01b0316905033678ac7230489e800006101ce565b6001546101c3906001600160a01b031633678ac7230489e800006101ce565b505050505050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610220908490610225565b505050565b600061027a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166102ff9092919063ffffffff16565b905080516000148061029b57508080602001905181019061029b9190610633565b6102205760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b606061030e8484600085610316565b949350505050565b6060824710156103775760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102f6565b600080866001600160a01b031685876040516103939190610680565b60006040518083038185875af1925050503d80600081146103d0576040519150601f19603f3d011682016040523d82523d6000602084013e6103d5565b606091505b50915091506103e6878383876103f1565b979650505050505050565b60608315610460578251600003610459576001600160a01b0385163b6104595760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102f6565b508161030e565b61030e83838151156104755781518083602001fd5b8060405162461bcd60e51b81526004016102f6919061069c565b634e487b7160e01b600052604160045260246000fd5b80356001600160a01b03811681146104bc57600080fd5b919050565b600082601f8301126104d257600080fd5b8135602067ffffffffffffffff808311156104ef576104ef61048f565b8260051b604051601f19603f830116810181811084821117156105145761051461048f565b60405293845285810183019383810192508785111561053257600080fd5b83870191505b848210156103e657610549826104a5565b83529183019190830190610538565b60008060008060008060008060006101208a8c03121561057757600080fd5b893567ffffffffffffffff8082111561058f57600080fd5b61059b8d838e016104c1565b9a5060208c01359150808211156105b157600080fd5b6105bd8d838e016104c1565b995060408c01359150808211156105d357600080fd5b6105df8d838e016104c1565b985060608c01359150808211156105f557600080fd5b506106028c828d016104c1565b999c989b50969960808101359860a0820135985060c0820135975060e0820135965061010090910135945092505050565b60006020828403121561064557600080fd5b8151801515811461065557600080fd5b9392505050565b60005b8381101561067757818101518382015260200161065f565b50506000910152565b6000825161069281846020870161065c565b9190910192915050565b60208152600082518060208401526106bb81604085016020870161065c565b601f01601f1916919091016040019291505056fea26469706673582212209efb94c9f0e93eaa47e4e7a3c35b230b3ba0779380ae46b81e652b273114b58a64736f6c63430008120033";

type ConvexZapMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConvexZapMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConvexZapMock__factory extends ContractFactory {
  constructor(...args: ConvexZapMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ConvexZapMock";
  }

  override deploy(
    _reward1: PromiseOrValue<string>,
    _reward2: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConvexZapMock> {
    return super.deploy(
      _reward1,
      _reward2,
      overrides || {}
    ) as Promise<ConvexZapMock>;
  }
  override getDeployTransaction(
    _reward1: PromiseOrValue<string>,
    _reward2: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_reward1, _reward2, overrides || {});
  }
  override attach(address: string): ConvexZapMock {
    return super.attach(address) as ConvexZapMock;
  }
  override connect(signer: Signer): ConvexZapMock__factory {
    return super.connect(signer) as ConvexZapMock__factory;
  }
  static readonly contractName: "ConvexZapMock";

  public readonly contractName: "ConvexZapMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConvexZapMockInterface {
    return new utils.Interface(_abi) as ConvexZapMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConvexZapMock {
    return new Contract(address, _abi, signerOrProvider) as ConvexZapMock;
  }
}
