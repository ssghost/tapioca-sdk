/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ConvexBoosterMock,
  ConvexBoosterMockInterface,
} from "../../../../deprecated/convex/mocks/ConvexBoosterMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiptToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_crvRewards",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "crvRewards",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "lptoken",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "gauge",
            type: "address",
          },
          {
            internalType: "address",
            name: "crvRewards",
            type: "address",
          },
          {
            internalType: "address",
            name: "stash",
            type: "address",
          },
          {
            internalType: "bool",
            name: "shutdown",
            type: "bool",
          },
        ],
        internalType: "struct IConvexBooster.PoolInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "receiptToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161083138038061083183398101604081905261002f91610172565b600080546001600160a01b03199081166001600160a01b0386811691821784556001805484168783161790556002805490931690851690811790925560405163095ea7b360e01b81526004810192909252602482019290925263095ea7b3906044016020604051808303816000875af11580156100b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100d491906101b5565b5060005460405163095ea7b360e01b81526001600160a01b03838116600483015260001960248301529091169063095ea7b3906044016020604051808303816000875af1158015610129573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014d91906101b5565b505050506101de565b80516001600160a01b038116811461016d57600080fd5b919050565b60008060006060848603121561018757600080fd5b61019084610156565b925061019e60208501610156565b91506101ac60408501610156565b90509250925092565b6000602082840312156101c757600080fd5b815180151581146101d757600080fd5b9392505050565b610644806101ed6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631526fe271461005c57806343a0d0661461014a5780635fcbd2851461016d578063b6bff29514610198578063ec78e832146101ab575b600080fd5b6100e461006a366004610514565b506040805160c08082018352600080835260208084018290528385018290526060808501839052608080860184905260a095860184905286519485018752958401839052948301829052928201819052546001600160a01b0390811682526001548116928201929092526002549091169181019190915290565b604051610141919081516001600160a01b0390811682526020808401518216908301526040808401518216908301526060808401518216908301526080808401519091169082015260a09182015115159181019190915260c00190565b60405180910390f35b61015d61015836600461053e565b6101be565b6040519015158152602001610141565b600054610180906001600160a01b031681565b6040516001600160a01b039091168152602001610141565b600254610180906001600160a01b031681565b600154610180906001600160a01b031681565b600080546101d7906001600160a01b0316333086610245565b6002546040516305dc812160e31b8152336004820152602481018590526001600160a01b0390911690632ee4090890604401600060405180830381600087803b15801561022357600080fd5b505af1158015610237573d6000803e3d6000fd5b506001979650505050505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261029f9085906102a5565b50505050565b60006102fa826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166103849092919063ffffffff16565b905080516000148061031b57508080602001905181019061031b9190610577565b61037f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b505050565b6060610393848460008561039b565b949350505050565b6060824710156103fc5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610376565b600080866001600160a01b0316858760405161041891906105bf565b60006040518083038185875af1925050503d8060008114610455576040519150601f19603f3d011682016040523d82523d6000602084013e61045a565b606091505b509150915061046b87838387610476565b979650505050505050565b606083156104e55782516000036104de576001600160a01b0385163b6104de5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610376565b5081610393565b61039383838151156104fa5781518083602001fd5b8060405162461bcd60e51b815260040161037691906105db565b60006020828403121561052657600080fd5b5035919050565b801515811461053b57600080fd5b50565b60008060006060848603121561055357600080fd5b8335925060208401359150604084013561056c8161052d565b809150509250925092565b60006020828403121561058957600080fd5b81516105948161052d565b9392505050565b60005b838110156105b657818101518382015260200161059e565b50506000910152565b600082516105d181846020870161059b565b9190910192915050565b60208152600082518060208401526105fa81604085016020870161059b565b601f01601f1916919091016040019291505056fea2646970667358221220a904532813d4b0f5a01fe0d50d5b538e0d9c30ec28086aa88b0447ac22877f8d64736f6c63430008120033";

type ConvexBoosterMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConvexBoosterMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConvexBoosterMock__factory extends ContractFactory {
  constructor(...args: ConvexBoosterMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ConvexBoosterMock";
  }

  override deploy(
    _lpToken: PromiseOrValue<string>,
    _receiptToken: PromiseOrValue<string>,
    _crvRewards: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConvexBoosterMock> {
    return super.deploy(
      _lpToken,
      _receiptToken,
      _crvRewards,
      overrides || {}
    ) as Promise<ConvexBoosterMock>;
  }
  override getDeployTransaction(
    _lpToken: PromiseOrValue<string>,
    _receiptToken: PromiseOrValue<string>,
    _crvRewards: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _lpToken,
      _receiptToken,
      _crvRewards,
      overrides || {}
    );
  }
  override attach(address: string): ConvexBoosterMock {
    return super.attach(address) as ConvexBoosterMock;
  }
  override connect(signer: Signer): ConvexBoosterMock__factory {
    return super.connect(signer) as ConvexBoosterMock__factory;
  }
  static readonly contractName: "ConvexBoosterMock";

  public readonly contractName: "ConvexBoosterMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConvexBoosterMockInterface {
    return new utils.Interface(_abi) as ConvexBoosterMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConvexBoosterMock {
    return new Contract(address, _abi, signerOrProvider) as ConvexBoosterMock;
  }
}