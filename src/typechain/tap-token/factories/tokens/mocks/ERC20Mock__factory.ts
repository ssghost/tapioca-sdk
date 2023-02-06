/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20Mock,
  ERC20MockInterface,
} from "../../../tokens/mocks/ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_initialAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_decimals",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
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
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    name: "freeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
    name: "owner",
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
        internalType: "address",
        name: "owner_",
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
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    name: "totalSupply",
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
    name: "transfer",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
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
    name: "transferFrom",
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
] as const;

const _bytecode =
  "0x60e06040523360c0523480156200001557600080fd5b50604051620011cb380380620011cb833981016040819052620000389162000261565b4660a08190526200009c81604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152908101829052306060820152600090608001604051602081830303815290604052805190602001209050919050565b608052508351620000b5906005906020870190620000ee565b508251620000cb906006906020860190620000ee565b506003919091556004805460ff191660ff90921691909117905550620003189050565b828054620000fc90620002db565b90600052602060002090601f0160209004810192826200012057600085556200016b565b82601f106200013b57805160ff19168380011785556200016b565b828001600101855582156200016b579182015b828111156200016b5782518255916020019190600101906200014e565b50620001799291506200017d565b5090565b5b808211156200017957600081556001016200017e565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001bc57600080fd5b81516001600160401b0380821115620001d957620001d962000194565b604051601f8301601f19908116603f0116810190828211818310171562000204576200020462000194565b816040528381526020925086838588010111156200022157600080fd5b600091505b8382101562000245578582018301518183018401529082019062000226565b83821115620002575760008385830101525b9695505050505050565b600080600080608085870312156200027857600080fd5b84516001600160401b03808211156200029057600080fd5b6200029e88838901620001aa565b95506020870151915080821115620002b557600080fd5b50620002c487828801620001aa565b604087015160609097015195989097509350505050565b600181811c90821680620002f057607f821691505b602082108114156200031257634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c051610e7562000356600039600081816101d90152818161053e01526105bc0152600061098c015260006109c10152610e756000f3fe608060405234801561001057600080fd5b50600436106100d55760003560e01c806370a082311161008757806370a08231146101815780637c928fe9146101a15780637ecebe00146101b45780638da5cb5b146101d457806395d89b4114610213578063a9059cbb1461021b578063d505accf1461022e578063dd62ed3e1461024157600080fd5b806306fdde03146100da578063095ea7b3146100f857806318160ddd1461011b57806323b872dd14610132578063313ce567146101455780633644e51514610164578063449a52f81461016c575b600080fd5b6100e261026c565b6040516100ef9190610b67565b60405180910390f35b61010b610106366004610bb6565b6102fa565b60405190151581526020016100ef565b61012460035481565b6040519081526020016100ef565b61010b610140366004610be0565b610366565b6004546101529060ff1681565b60405160ff90911681526020016100ef565b610124610524565b61017f61017a366004610bb6565b610533565b005b61012461018f366004610c1c565b60006020819052908152604090205481565b61017f6101af366004610c3e565b6105b1565b6101246101c2366004610c1c565b60026020526000908152604090205481565b6101fb7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100ef565b6100e261063e565b61010b610229366004610bb6565b61064b565b61017f61023c366004610c57565b61073e565b61012461024f366004610cca565b600160209081526000928352604080842090915290825290205481565b6005805461027990610cfd565b80601f01602080910402602001604051908101604052809291908181526020018280546102a590610cfd565b80156102f25780601f106102c7576101008083540402835291602001916102f2565b820191906000526020600020905b8154815290600101906020018083116102d557829003601f168201915b505050505081565b3360008181526001602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103559086815260200190565b60405180910390a350600192915050565b600081156104df576001600160a01b038416600090815260208190526040902054828110156103b05760405162461bcd60e51b81526004016103a790610d38565b60405180910390fd5b836001600160a01b0316856001600160a01b0316146104dd576001600160a01b0385166000908152600160209081526040808320338452909152902054600019811461047057838110156104415760405162461bcd60e51b815260206004820152601860248201527745524332303a20616c6c6f77616e636520746f6f206c6f7760401b60448201526064016103a7565b61044b8482610d7e565b6001600160a01b03871660009081526001602090815260408083203384529091529020555b6001600160a01b0385166104965760405162461bcd60e51b81526004016103a790610d95565b6104a08483610d7e565b6001600160a01b0380881660009081526020819052604080822093909355908716815290812080548692906104d6908490610dc5565b9091555050505b505b826001600160a01b0316846001600160a01b0316600080516020610e208339815191528460405161051291815260200190565b60405180910390a35060019392505050565b600061052e610987565b905090565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105a35760405162461bcd60e51b815260206004820152601560248201527422a921991826b7b1b59d1037b7363c9037bbb732b960591b60448201526064016103a7565b6105ad82826109e7565b5050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610631576a52b7d2dcc80cd2e400000081106106315760405162461bcd60e51b815260206004820152601360248201527208aa48664609adec6d67440e8dede40daeac6d606b1b60448201526064016103a7565b61063b33826109e7565b50565b6006805461027990610cfd565b6000811515806106635750336001600160a01b038416145b156107135733600090815260208190526040902054828110156106985760405162461bcd60e51b81526004016103a790610d38565b336001600160a01b03851614610711576001600160a01b0384166106ce5760405162461bcd60e51b81526004016103a790610d95565b6106d88382610d7e565b33600090815260208190526040808220929092556001600160a01b0386168152908120805485929061070b908490610dc5565b90915550505b505b6040518281526001600160a01b038416903390600080516020610e2083398151915290602001610355565b6001600160a01b03871661078f5760405162461bcd60e51b8152602060048201526018602482015277045524332303a204f776e65722063616e6e6f7420626520360441b60448201526064016103a7565b8342106107cf5760405162461bcd60e51b815260206004820152600e60248201526d115490cc8c0e88115e1c1a5c995960921b60448201526064016103a7565b6001600160a01b03871660008181526002602052604081208054600192610879927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928d928d928d929161082283610ddd565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810188905260e00160405160208183030381529060405280519060200120610aa1565b6040805160008152602081018083529290925260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156108c7573d6000803e3d6000fd5b505050602060405103516001600160a01b0316146109225760405162461bcd60e51b815260206004820152601860248201527745524332303a20496e76616c6964205369676e617475726560401b60448201526064016103a7565b6001600160a01b038781166000818152600160209081526040808320948b168084529482529182902089905590518881527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6000467f000000000000000000000000000000000000000000000000000000000000000081146109bf576109ba81610af6565b6109e1565b7f00000000000000000000000000000000000000000000000000000000000000005b91505090565b6000816003546109f79190610dc5565b9050600354811015610a3b5760405162461bcd60e51b815260206004820152600d60248201526c4d696e74206f766572666c6f7760981b60448201526064016103a7565b60038190556001600160a01b03831660009081526020819052604081208054849290610a68908490610dc5565b90915550506040518281526001600160a01b03841690600090600080516020610e208339815191529060200160405180910390a3505050565b600060405180604001604052806002815260200161190160f01b815250610ac6610987565b83604051602001610ad993929190610df8565b604051602081830303815290604052805190602001209050919050565b604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152908101829052306060820152600090608001610ad9565b60005b83811015610b52578181015183820152602001610b3a565b83811115610b61576000848401525b50505050565b6020815260008251806020840152610b86816040850160208701610b37565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610bb157600080fd5b919050565b60008060408385031215610bc957600080fd5b610bd283610b9a565b946020939093013593505050565b600080600060608486031215610bf557600080fd5b610bfe84610b9a565b9250610c0c60208501610b9a565b9150604084013590509250925092565b600060208284031215610c2e57600080fd5b610c3782610b9a565b9392505050565b600060208284031215610c5057600080fd5b5035919050565b600080600080600080600060e0888a031215610c7257600080fd5b610c7b88610b9a565b9650610c8960208901610b9a565b95506040880135945060608801359350608088013560ff81168114610cad57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610cdd57600080fd5b610ce683610b9a565b9150610cf460208401610b9a565b90509250929050565b600181811c90821680610d1157607f821691505b60208210811415610d3257634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526016908201527545524332303a2062616c616e636520746f6f206c6f7760501b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082821015610d9057610d90610d68565b500390565b60208082526016908201527545524332303a206e6f207a65726f206164647265737360501b604082015260600190565b60008219821115610dd857610dd8610d68565b500190565b6000600019821415610df157610df1610d68565b5060010190565b60008451610e0a818460208901610b37565b9190910192835250602082015260400191905056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220fae050e9685775d4277ecdce5931ffbd82f19a1038fe91fab901358ad7e9b1c864736f6c63430008090033";

type ERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Mock__factory extends ContractFactory {
  constructor(...args: ERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Mock";
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _initialAmount: PromiseOrValue<BigNumberish>,
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(
      _name,
      _symbol,
      _initialAmount,
      _decimals,
      overrides || {}
    ) as Promise<ERC20Mock>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _initialAmount: PromiseOrValue<BigNumberish>,
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _initialAmount,
      _decimals,
      overrides || {}
    );
  }
  override attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  override connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }
  static readonly contractName: "ERC20Mock";

  public readonly contractName: "ERC20Mock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}
