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
import type { PromiseOrValue } from "../common";
import type { Vesting, VestingInterface } from "../Vesting";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_cliff",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "ConservatorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "oldState",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "newState",
        type: "bool",
      },
    ],
    name: "PausedUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "RevokeCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "RevokeRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "UserRegistered",
    type: "event",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "claimable",
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
    name: "claimable",
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
    name: "cliff",
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
    name: "conservator",
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
    name: "duration",
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
        name: "_user",
        type: "address",
      },
    ],
    name: "emergencyRevoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyRevoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_seededAmount",
        type: "uint256",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "registerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestEmergencyRevoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "requestEmergencyRevoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "revokeRequestedAt",
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
    name: "revokeTimeWindow",
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
    name: "revoked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "seeded",
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
        name: "_conservator",
        type: "address",
      },
    ],
    name: "setConservator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "start",
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
    name: "token",
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
    inputs: [],
    name: "totalClaimed",
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
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "val",
        type: "bool",
      },
    ],
    name: "updatePause",
    outputs: [],
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
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "latestClaimTimestamp",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "revoked",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "vested",
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
    name: "vested",
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
] as const;

const _bytecode =
  "0x608060405260006006556007805461ffff60a01b1916905562015180600a5534801561002a57600080fd5b50604051611a7e380380611a7e83398101604081905261004991610113565b600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600081116100dc5760405162461bcd60e51b815260206004820152601360248201527f56657374696e673a206e6f2076657374696e6700000000000000000000000000604482015260640160405180910390fd5b600491909155600555600280546001600160a01b039092166001600160a01b03199283161790556007805490911633179055610156565b60008060006060848603121561012857600080fd5b83516001600160a01b038116811461013f57600080fd5b602085015160409095015190969495509392505050565b611919806101656000396000f3fe608060405234801561001057600080fd5b506004361061018f5760003560e01c80638da5cb5b116100e4578063d54ad2a111610092578063d54ad2a114610340578063e30c397814610348578063f8974de01461035b578063fa0b5e551461036e578063fa74f0b514610381578063fbe4cfa514610394578063fc0c546a1461039d578063fea5657c146103b057600080fd5b80638da5cb5b1461027c578063a87430ba146102a7578063af38d75714610301578063b5b615b414610309578063b7b0422d14610311578063be9a655514610324578063ce8849ed1461032d57600080fd5b80634e71e0c8116101415780634e71e0c8146101fb5780635808402414610203578063584a1c19146102165780635c975abb1461021e57806363d256ce146102425780636f051448146102565780637102b7281461026957600080fd5b8063078dfbe7146101945780630a054c7e146101a95780630fb5a6b4146101c557806313d033c0146101ce578063334041a6146101d7578063402914f5146101e05780634e71d92d146101f3575b600080fd5b6101a76101a23660046115aa565b6103b8565b005b6101b260095481565b6040519081526020015b60405180910390f35b6101b260055481565b6101b260045481565b6101b260065481565b6101b26101ee3660046115f3565b6104cf565b6101a7610507565b6101a76106c5565b6101a76102113660046115f3565b610782565b6101a761091f565b60075461023290600160a01b900460ff1681565b60405190151581526020016101bc565b60075461023290600160a81b900460ff1681565b6101a76102643660046115f3565b6109d1565b6101b26102773660046115f3565b610aae565b60005461028f906001600160a01b031681565b6040516001600160a01b0390911681526020016101bc565b6102df6102b53660046115f3565b60086020526000908152604090208054600182015460028301546003909301549192909160ff1684565b60408051948552602085019390935291830152151560608201526080016101bc565b6101b2610ad0565b6101a7610aef565b6101a761031f36600461160e565b610c77565b6101b260035481565b60075461028f906001600160a01b031681565b600c546101b2565b60015461028f906001600160a01b031681565b6101a7610369366004611627565b610dc6565b6101a761037c366004611644565b610ed8565b6101a761038f3660046115f3565b61111e565b6101b2600a5481565b60025461028f906001600160a01b031681565b6101b26111fa565b6000546001600160a01b031633146103eb5760405162461bcd60e51b81526004016103e29061166e565b60405180910390fd5b81156104ae576001600160a01b0383161515806104055750805b6104495760405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b60448201526064016103e2565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055505050565b600180546001600160a01b0319166001600160a01b0385161790555b505050565b6001600160a01b0381166000908152600860205260408120600181015490546104f790611203565b61050191906116b9565b92915050565b600754600160a01b900460ff16156105315760405162461bcd60e51b81526004016103e2906116d0565b600060035411801561054557506000600654115b6105885760405162461bcd60e51b815260206004820152601460248201527315995cdd1a5b99ce881b9bdd081cdd185c9d195960621b60448201526064016103e2565b600754600160a81b900460ff161580156105b557503360009081526008602052604090206003015460ff16155b6105d15760405162461bcd60e51b81526004016103e2906116f9565b60006105dc336104cf565b9050600081116106215760405162461bcd60e51b815260206004820152601060248201526f56657374696e673a206e6f7468696e6760801b60448201526064016103e2565b80600c60008282546106339190611723565b9091555050336000908152600860205260408120600101805483929061065a908490611723565b9091555050336000818152600860205260409020426002918201555461068c916001600160a01b039091169083611280565b60405181815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a906020015b60405180910390a250565b6001546001600160a01b03163381146107205760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e657260448201526064016103e2565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b6000546001600160a01b031633146107ac5760405162461bcd60e51b81526004016103e29061166e565b6001600160a01b03811660009081526008602090815260409182902082516080810184528154815260018201549281019290925260028101549282019290925260039091015460ff90811615156060830152600754600160a81b90041615801561081857508060600151155b6108345760405162461bcd60e51b81526004016103e2906116f9565b6009546108535760405162461bcd60e51b81526004016103e29061173b565b600a546009546108639190611723565b42116108815760405162461bcd60e51b81526004016103e29061176b565b6001600160a01b03821660009081526008602090815260408220600301805460ff19166001179055600982905582015182516108bd91906116b9565b6002549091506108d7906001600160a01b03163383611280565b826001600160a01b03167f4b6476f7ec20333ea010aafc1297337cb4a83d0d443d80e4b0888db7b46bece34260405161091291815260200190565b60405180910390a2505050565b6000546001600160a01b031633146109495760405162461bcd60e51b81526004016103e29061166e565b600754600160a81b900460ff16156109735760405162461bcd60e51b81526004016103e2906116f9565b600954156109935760405162461bcd60e51b81526004016103e290611797565b4260098190556040519081526000907fbd836b46511e5e2abf6057e397e05948421f67dc3d8399467c57bd139d3e20e09060200160405180910390a2565b6000546001600160a01b031633146109fb5760405162461bcd60e51b81526004016103e29061166e565b600754600160a81b900460ff16158015610a3157506001600160a01b03811660009081526008602052604090206003015460ff16155b610a4d5760405162461bcd60e51b81526004016103e2906116f9565b60095415610a6d5760405162461bcd60e51b81526004016103e290611797565b4260098190556040519081526001600160a01b038216907fbd836b46511e5e2abf6057e397e05948421f67dc3d8399467c57bd139d3e20e0906020016106ba565b6001600160a01b03811660009081526008602052604081205461050190611203565b6000600c54610ae0600654611203565b610aea91906116b9565b905090565b6000546001600160a01b03163314610b195760405162461bcd60e51b81526004016103e29061166e565b600754600160a81b900460ff1615610b435760405162461bcd60e51b81526004016103e2906116f9565b600954610b625760405162461bcd60e51b81526004016103e29061173b565b600a54600954610b729190611723565b4211610b905760405162461bcd60e51b81526004016103e29061176b565b600780546000600981905561ffff60a01b1990911661010160a01b179091556002546040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b158015610bf257600080fd5b505afa158015610c06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2a91906117c3565b600254909150610c44906001600160a01b03163383611280565b6040514281526000907f4b6476f7ec20333ea010aafc1297337cb4a83d0d443d80e4b0888db7b46bece3906020016106ba565b6000546001600160a01b03163314610ca15760405162461bcd60e51b81526004016103e29061166e565b600754600160a01b900460ff1615610ccb5760405162461bcd60e51b81526004016103e2906116d0565b600754600160a81b900460ff1615610cf55760405162461bcd60e51b81526004016103e2906116f9565b60035415610d155760405162461bcd60e51b81526004016103e2906117dc565b60008111610d5a5760405162461bcd60e51b815260206004820152601260248201527156657374696e673a206e6f20746f6b656e7360701b60448201526064016103e2565b80600b541115610da25760405162461bcd60e51b81526020600482015260136024820152720accae6e8d2dcce7440dcdee840cadcdeeaced606b1b60448201526064016103e2565b600681905542600355600254610dc3906001600160a01b03163330846112e3565b50565b6007546001600160a01b03163314610e185760405162461bcd60e51b815260206004820152601560248201527415995cdd1a5b99ce881d5b985d5d1a1bdc9a5e9959605a1b60448201526064016103e2565b600760149054906101000a900460ff1615158115151415610e715760405162461bcd60e51b815260206004820152601360248201527256657374696e673a2073616d6520737461746560681b60448201526064016103e2565b60075460408051600160a01b90920460ff161515825282151560208301527f9c13c5f6c628c1c82eb2b3fd8714da5c2857dbd0ad8ab6b2074abcf81015d396910160405180910390a160078054911515600160a01b0260ff60a01b19909216919091179055565b6000546001600160a01b03163314610f025760405162461bcd60e51b81526004016103e29061166e565b600754600160a81b900460ff1615610f2c5760405162461bcd60e51b81526004016103e2906116f9565b60035415610f4c5760405162461bcd60e51b81526004016103e2906117dc565b6001600160a01b038216610f9c5760405162461bcd60e51b815260206004820152601760248201527615995cdd1a5b99ce881d5cd95c881b9bdd081d985b1a59604a1b60448201526064016103e2565b60008111610fe75760405162461bcd60e51b815260206004820152601860248201527715995cdd1a5b99ce881d985b1a59081b9bdd081d985b1a5960421b60448201526064016103e2565b6001600160a01b038216600090815260086020526040902054156110485760405162461bcd60e51b815260206004820152601860248201527715995cdd1a5b99ce881d5cd95c881c9959da5cdd195c995960421b60448201526064016103e2565b61107560405180608001604052806000815260200160008152602001600081526020016000151581525090565b818152600060208083018281526060840183815260408086018581526001600160a01b03891686526008909452842085518155915160018301559151600282015590516003909101805460ff1916911515919091179055600b80548492906110de908490611723565b90915550506040518281526001600160a01b038416907fe29d35093005f4d575e1003753426b57a7f64378ba73332eef9c6ccc2b8decd690602001610912565b6000546001600160a01b031633146111485760405162461bcd60e51b81526004016103e29061166e565b6001600160a01b03811661119e5760405162461bcd60e51b815260206004820152601a60248201527f56657374696e673a2061646472657373206e6f742076616c696400000000000060448201526064016103e2565b6007546040516001600160a01b038084169216907f5a62d22209e370e38eea92cfddcd228e656e6ec139243392a760a7769f5877fd90600090a3600780546001600160a01b0319166001600160a01b0392909216919091179055565b6000610aea6006545b60006003546000141561121857506000919050565b600454600354839161122991611723565b4210156112395750600092915050565b6005546003546112499190611723565b42106112555792915050565b60055460035461126590426116b9565b61126f908361180a565b6112799190611829565b9392505050565b6040516001600160a01b0383166024820152604481018290526104ca90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611321565b6040516001600160a01b038085166024830152831660448201526064810182905261131b9085906323b872dd60e01b906084016112ac565b50505050565b6000611376826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113f39092919063ffffffff16565b8051909150156104ca5780806020019051810190611394919061184b565b6104ca5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016103e2565b6060611402848460008561140a565b949350505050565b60608247101561146b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016103e2565b600080866001600160a01b031685876040516114879190611894565b60006040518083038185875af1925050503d80600081146114c4576040519150601f19603f3d011682016040523d82523d6000602084013e6114c9565b606091505b50915091506114da878383876114e5565b979650505050505050565b6060831561155157825161154a576001600160a01b0385163b61154a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103e2565b5081611402565b61140283838151156115665781518083602001fd5b8060405162461bcd60e51b81526004016103e291906118b0565b80356001600160a01b038116811461159757600080fd5b919050565b8015158114610dc357600080fd5b6000806000606084860312156115bf57600080fd5b6115c884611580565b925060208401356115d88161159c565b915060408401356115e88161159c565b809150509250925092565b60006020828403121561160557600080fd5b61127982611580565b60006020828403121561162057600080fd5b5035919050565b60006020828403121561163957600080fd5b81356112798161159c565b6000806040838503121561165757600080fd5b61166083611580565b946020939093013593505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000828210156116cb576116cb6116a3565b500390565b6020808252600f908201526e15995cdd1a5b99ce881c185d5cd959608a1b604082015260600190565b60208082526010908201526f15995cdd1a5b99ce881c995d9bdad95960821b604082015260600190565b60008219821115611736576117366116a3565b500190565b60208082526016908201527515995cdd1a5b99ce881b9bdd081c995c5d595cdd195960521b604082015260600190565b60208082526012908201527156657374696e673a20746f6f206561726c7960701b604082015260600190565b60208082526012908201527115995cdd1a5b99ce881c995c5d595cdd195960721b604082015260600190565b6000602082840312156117d557600080fd5b5051919050565b60208082526014908201527315995cdd1a5b99ce881a5b9a5d1a585b1a5e995960621b604082015260600190565b6000816000190483118215151615611824576118246116a3565b500290565b60008261184657634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561185d57600080fd5b81516112798161159c565b60005b8381101561188357818101518382015260200161186b565b8381111561131b5750506000910152565b600082516118a6818460208701611868565b9190910192915050565b60208152600082518060208401526118cf816040850160208701611868565b601f01601f1916919091016040019291505056fea264697066735822122055a7d0c75b9efda643681ba1f40f86e0ef9dd2ba3c1e91ab8f14bf737cf7640b64736f6c63430008090033";

type VestingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VestingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vesting__factory extends ContractFactory {
  constructor(...args: VestingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Vesting";
  }

  override deploy(
    _token: PromiseOrValue<string>,
    _cliff: PromiseOrValue<BigNumberish>,
    _duration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Vesting> {
    return super.deploy(
      _token,
      _cliff,
      _duration,
      overrides || {}
    ) as Promise<Vesting>;
  }
  override getDeployTransaction(
    _token: PromiseOrValue<string>,
    _cliff: PromiseOrValue<BigNumberish>,
    _duration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _token,
      _cliff,
      _duration,
      overrides || {}
    );
  }
  override attach(address: string): Vesting {
    return super.attach(address) as Vesting;
  }
  override connect(signer: Signer): Vesting__factory {
    return super.connect(signer) as Vesting__factory;
  }
  static readonly contractName: "Vesting";

  public readonly contractName: "Vesting";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VestingInterface {
    return new utils.Interface(_abi) as VestingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Vesting {
    return new Contract(address, _abi, signerOrProvider) as Vesting;
  }
}
