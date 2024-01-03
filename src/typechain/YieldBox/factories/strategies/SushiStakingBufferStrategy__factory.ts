/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SushiStakingBufferStrategy,
  SushiStakingBufferStrategyInterface,
} from "../../strategies/SushiStakingBufferStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MAX_RESERVE_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TARGET_RESERVE_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cheapWithdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractAddress",
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
    name: "currentBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
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
    name: "deposited",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenType",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract IYieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610eac380380610eac83398101604081905261002f91610058565b6001600160a01b0316608052736b3595068778dd592e39a122f4f5a5cf09c90fe260a052610088565b60006020828403121561006a57600080fd5b81516001600160a01b038116811461008157600080fd5b9392505050565b60805160a051610de36100c9600039600081816101e1015281816104e001526106a50152600081816101780152818161024b015261034a0152610de36000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063afa91cc61161008c578063dee8df8211610066578063dee8df82146101b2578063e3575f05146101c1578063f3fef3a3146101c9578063f6b4dfb4146101dc57600080fd5b8063afa91cc61461015e578063ce845d1d1461014e578063de4065771461017357600080fd5b806301b7af0c146100d457806306fdde03146100f657806317d70f7c1461013157806330fa738c14610139578063501883011461014e5780637284e41614610156575b600080fd5b6100e3674563918244f4000081565b6040519081526020015b60405180910390f35b6101246040518060400160405280600f81526020016e1e14d554d2124b509d5999995c9959608a1b81525081565b6040516100ed9190610bcb565b6100e3600081565b610141600181565b6040516100ed9190610bfe565b6100e3610203565b610124610224565b61017161016c366004610c26565b610240565b005b61019a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100ed565b6100e3678ac7230489e8000081565b6100e3610335565b6101716101d7366004610c3f565b61033f565b61019a7f000000000000000000000000000000000000000000000000000000000000000081565b600061020d610446565b6102156104d1565b61021f9190610c8d565b905090565b604051806060016040528060378152602001610d776037913981565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102ac5760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b60448201526064015b60405180910390fd5b60006102b6610446565b905060006102c26104d1565b905060006102d08284610c8d565b6102e38368056bc75e2d63100000610ca5565b6102ed9190610cc4565b9050678ac7230489e8000081111561032f5761032f61032a610317674563918244f4000084610ce6565b859068056bc75e2d631000006000610506565b61055a565b50505050565b600061021f6104d1565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103a65760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b60448201526064016102a3565b60006103b0610446565b905060006103bc6104d1565b90508281101561032f57826103d18284610c8d565b14156103f5576103df6105c2565b6103f0846103eb6104d1565b610698565b61032f565b61043c61042d674563918244f4000068056bc75e2d6310000060008761041b8789610c8d565b6104259190610ce6565b929190610506565b6104379084610ce6565b6106d0565b61032f8484610698565b60008061047b736b3595068778dd592e39a122f4f5a5cf09c90fe2738798249c2e607446efb7ad49ec89dd1865ff427261087a565b9050600061049d738798249c2e607446efb7ad49ec89dd1865ff42723061087a565b90506104ca826104c0738798249c2e607446efb7ad49ec89dd1865ff4272610991565b8391906000610506565b9250505090565b600061021f6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163061087a565b6000826105138587610ca5565b61051d9190610cc4565b905081801561053f575084846105338584610ca5565b61053d9190610cc4565b105b15610552578061054e81610cfd565b9150505b949350505050565b604051632967cf8360e21b815260048101829052738798249c2e607446efb7ad49ec89dd1865ff42729063a59f3e0c90602401600060405180830381600087803b1580156105a757600080fd5b505af11580156105bb573d6000803e3d6000fd5b5050505050565b6040516370a0823160e01b8152306004820152738798249c2e607446efb7ad49ec89dd1865ff4272906367dfd4c99082906370a082319060240160206040518083038186803b15801561061457600080fd5b505afa158015610628573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064c9190610d18565b6040518263ffffffff1660e01b815260040161066a91815260200190565b600060405180830381600087803b15801561068457600080fd5b505af115801561032f573d6000803e3d6000fd5b6106cc6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168383610a8b565b5050565b6000738798249c2e607446efb7ad49ec89dd1865ff42726001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561071f57600080fd5b505afa158015610733573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107579190610d18565b6040516370a0823160e01b8152738798249c2e607446efb7ad49ec89dd1865ff42726004820152909150600090736b3595068778dd592e39a122f4f5a5cf09c90fe2906370a082319060240160206040518083038186803b1580156107bb57600080fd5b505afa1580156107cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f39190610d18565b90506000816108028486610ca5565b61080c9190610cc4565b6040516367dfd4c960e01b815260048101829052909150738798249c2e607446efb7ad49ec89dd1865ff4272906367dfd4c990602401600060405180830381600087803b15801561085c57600080fd5b505af1158015610870573d6000803e3d6000fd5b5050505050505050565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b179052915160009283928392918716916108d49190610d31565b600060405180830381855afa9150503d806000811461090f576040519150601f19603f3d011682016040523d82523d6000602084013e610914565b606091505b509150915081801561092857506020815110155b6109745760405162461bcd60e51b815260206004820152601d60248201527f426f72696e6745524332303a2042616c616e63654f66206661696c656400000060448201526064016102a3565b808060200190518101906109889190610d18565b95945050505050565b60408051600481526024810182526020810180516001600160e01b03166318160ddd60e01b1790529051600091829182916001600160a01b038616916109d79190610d31565b600060405180830381855afa9150503d8060008114610a12576040519150601f19603f3d011682016040523d82523d6000602084013e610a17565b606091505b5091509150818015610a2b57506020815110155b610a775760405162461bcd60e51b815260206004820152601f60248201527f426f72696e6745524332303a20746f74616c537570706c79206661696c65640060448201526064016102a3565b808060200190518101906105529190610d18565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839290871691610ae79190610d31565b6000604051808303816000865af19150503d8060008114610b24576040519150601f19603f3d011682016040523d82523d6000602084013e610b29565b606091505b5091509150818015610b53575080511580610b53575080806020019051810190610b539190610d4d565b6105bb5760405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c65640000000060448201526064016102a3565b60005b83811015610bba578181015183820152602001610ba2565b8381111561032f5750506000910152565b6020815260008251806020840152610bea816040850160208701610b9f565b601f01601f19169190910160400192915050565b6020810160058310610c2057634e487b7160e01b600052602160045260246000fd5b91905290565b600060208284031215610c3857600080fd5b5035919050565b60008060408385031215610c5257600080fd5b82356001600160a01b0381168114610c6957600080fd5b946020939093013593505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610ca057610ca0610c77565b500190565b6000816000190483118215151615610cbf57610cbf610c77565b500290565b600082610ce157634e487b7160e01b600052601260045260246000fd5b500490565b600082821015610cf857610cf8610c77565b500390565b6000600019821415610d1157610d11610c77565b5060010190565b600060208284031215610d2a57600080fd5b5051919050565b60008251610d43818460208701610b9f565b9190910192915050565b600060208284031215610d5f57600080fd5b81518015158114610d6f57600080fd5b939250505056fe5374616b657320535553484920696e746f2074686520537573686942617220666f72207853757368692077697468206120627566666572a2646970667358221220876cc965ef10d7487da74ad6d88a838f75ab019841e513a4eda002593a3fa6d464736f6c63430008090033";

type SushiStakingBufferStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SushiStakingBufferStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SushiStakingBufferStrategy__factory extends ContractFactory {
  constructor(...args: SushiStakingBufferStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SushiStakingBufferStrategy";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SushiStakingBufferStrategy> {
    return super.deploy(
      _yieldBox,
      overrides || {}
    ) as Promise<SushiStakingBufferStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yieldBox, overrides || {});
  }
  override attach(address: string): SushiStakingBufferStrategy {
    return super.attach(address) as SushiStakingBufferStrategy;
  }
  override connect(signer: Signer): SushiStakingBufferStrategy__factory {
    return super.connect(signer) as SushiStakingBufferStrategy__factory;
  }
  static readonly contractName: "SushiStakingBufferStrategy";

  public readonly contractName: "SushiStakingBufferStrategy";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SushiStakingBufferStrategyInterface {
    return new utils.Interface(_abi) as SushiStakingBufferStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SushiStakingBufferStrategy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SushiStakingBufferStrategy;
  }
}