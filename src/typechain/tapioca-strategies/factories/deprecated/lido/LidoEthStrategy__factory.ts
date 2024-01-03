/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LidoEthStrategy,
  LidoEthStrategyInterface,
} from "../../../deprecated/lido/LidoEthStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stEth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_curvePool",
        type: "address",
      },
      {
        internalType: "contract IOracle",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_oracleData",
        type: "bytes",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountQueued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "DepositThreshold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "OracleDataUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "OracleDeviationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "OracleUpdated",
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
    name: "claimOwnership",
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
    name: "compound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "compoundAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
    inputs: [],
    name: "curveStEthPool",
    outputs: [
      {
        internalType: "contract ICurveEthStEthPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositThreshold",
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
        internalType: "uint256",
        name: "amount",
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
        name: "description_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "oracleData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracleDeviation",
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
    name: "oracleEthStEth",
    outputs: [
      {
        internalType: "contract IOracle",
        name: "",
        type: "address",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "rescueEth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setDepositThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_oracleData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_oracleDeviation",
        type: "uint256",
      },
    ],
    name: "setOracleDetails",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "setSlippage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stEth",
    outputs: [
      {
        internalType: "contract IStEth",
        name: "",
        type: "address",
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
        name: "_val",
        type: "bool",
      },
    ],
    name: "updatePaused",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "wrappedNative",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x61010060405261271060065560326009553480156200001d57600080fd5b50604051620025443803806200254483398101604081905262000040916200020b565b6001600160a01b03808716608052851660a052600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a360016002556001600160a01b0385811660c05284811660e052600380546001600160a01b031990811686841617909155600480549091169184169190911790556005620000e08282620003da565b5060405163095ea7b360e01b81526001600160a01b0384811660048301526000602483015285169063095ea7b3906044016020604051808303816000875af115801562000131573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001579190620004a6565b5060405163095ea7b360e01b81526001600160a01b038481166004830152600019602483015285169063095ea7b3906044016020604051808303816000875af1158015620001a9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001cf9190620004a6565b50505050505050620004d1565b6001600160a01b0381168114620001f257600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60008060008060008060c087890312156200022557600080fd5b86516200023281620001dc565b809650506020808801516200024781620001dc565b60408901519096506200025a81620001dc565b60608901519095506200026d81620001dc565b60808901519094506200028081620001dc565b60a08901519093506001600160401b03808211156200029e57600080fd5b818a0191508a601f830112620002b357600080fd5b815181811115620002c857620002c8620001f5565b604051601f8201601f19908116603f01168101908382118183101715620002f357620002f3620001f5565b816040528281528d868487010111156200030c57600080fd5b600093505b8284101562000330578484018601518185018701529285019262000311565b60008684830101528096505050505050509295509295509295565b600181811c908216806200036057607f821691505b6020821081036200038157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003d557600081815260208120601f850160051c81016020861015620003b05750805b601f850160051c820191505b81811015620003d157828155600101620003bc565b5050505b505050565b81516001600160401b03811115620003f657620003f6620001f5565b6200040e816200040784546200034b565b8462000387565b602080601f8311600181146200044657600084156200042d5750858301515b600019600386901b1c1916600185901b178555620003d1565b600085815260208120601f198616915b82811015620004775788860151825594840194600190910190840162000456565b5085821015620004965787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208284031215620004b957600080fd5b81518015158114620004ca57600080fd5b9392505050565b60805160a05160c05160e051611fd76200056d6000396000818161043801528181610b9401528181610e050152818161126201526113bd01526000818161053501528181610cb9015281816110f0015281816111e1015281816113450152818161151b0152818161165a015281816116e501526117b7015260006105a90152600081816104e101528181610a100152610d790152611fd76000f3fe6080604052600436106101dc5760003560e01c8063734daaa111610102578063dc1ce87611610095578063eb6d3a1111610064578063eb6d3a1114610523578063f0fa55a914610557578063f3fef3a314610577578063f6b4dfb41461059757600080fd5b8063dc1ce876146104af578063de406577146104cf578063e30c397814610503578063e3575f051461038757600080fd5b8063afa91cc6116100d1578063afa91cc61461045a578063b25ea8fb1461047a578063ce845d1d14610387578063db2e21bc1461049a57600080fd5b8063734daaa1146103db57806374645ff3146103f15780638da5cb5b1461040657806399940ece1461042657600080fd5b80633efa63e81161017a5780634e71e0c8116101495780634e71e0c81461037257806350188301146103875780635c975abb1461039c5780637284e416146103c657600080fd5b80633efa63e81461030857806348dcb0511461031e57806349607943146103325780634cce992d1461035257600080fd5b806317d70f7c116101b657806317d70f7c1461026d57806318fdd9b41461029057806322a58c5d146102c857806330fa738c146102e657600080fd5b806306fdde03146101e8578063078dfbe71461022b57806308cdc2a81461024d57600080fd5b366101e357005b600080fd5b3480156101f457600080fd5b50604080518082019091526008815267098d2c8de5a8aa8960c31b60208201525b60405161022291906119e2565b60405180910390f35b34801561023757600080fd5b5061024b610246366004611a26565b6105cb565b005b34801561025957600080fd5b5061024b610268366004611a6f565b6106e2565b34801561027957600080fd5b50610282600081565b604051908152602001610222565b34801561029c57600080fd5b506004546102b0906001600160a01b031681565b6040516001600160a01b039091168152602001610222565b3480156102d457600080fd5b5061024b6102e3366004611aa2565b50565b3480156102f257600080fd5b506102fb600181565b6040516102229190611b53565b34801561031457600080fd5b5061028260065481565b34801561032a57600080fd5b506000610282565b34801561033e57600080fd5b5061024b61034d366004611b7b565b61071f565b34801561035e57600080fd5b5061024b61036d366004611c04565b61082d565b34801561037e57600080fd5b5061024b61088b565b34801561039357600080fd5b50610282610948565b3480156103a857600080fd5b506008546103b69060ff1681565b6040519015158152602001610222565b3480156103d257600080fd5b50610215610957565b3480156103e757600080fd5b5061028260075481565b3480156103fd57600080fd5b50610215610977565b34801561041257600080fd5b506000546102b0906001600160a01b031681565b34801561043257600080fd5b506102b07f000000000000000000000000000000000000000000000000000000000000000081565b34801561046657600080fd5b5061024b610475366004611c04565b610a05565b34801561048657600080fd5b5061024b610495366004611c1d565b610a75565b3480156104a657600080fd5b50610282610b42565b3480156104bb57600080fd5b506003546102b0906001600160a01b031681565b3480156104db57600080fd5b506102b07f000000000000000000000000000000000000000000000000000000000000000081565b34801561050f57600080fd5b506001546102b0906001600160a01b031681565b34801561052f57600080fd5b506102b07f000000000000000000000000000000000000000000000000000000000000000081565b34801561056357600080fd5b5061024b610572366004611c04565b610d3f565b34801561058357600080fd5b5061024b610592366004611c49565b610d6e565b3480156105a357600080fd5b506102b07f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b031633146105fe5760405162461bcd60e51b81526004016105f590611c73565b60405180910390fd5b81156106c1576001600160a01b0383161515806106185750805b61065c5760405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b60448201526064016105f5565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055505050565b600180546001600160a01b0319166001600160a01b0385161790555b505050565b6000546001600160a01b0316331461070c5760405162461bcd60e51b81526004016105f590611c73565b6008805460ff1916911515919091179055565b6000546001600160a01b031633146107495760405162461bcd60e51b81526004016105f590611c73565b6001600160a01b038416156107ae576004546040516001600160a01b038087169216907f078c3b417dadf69374a59793b829c52001247130433427049317bde56607b1b790600090a3600480546001600160a01b0319166001600160a01b0386161790555b81156107ec576040517fa6f004921c944d4b8bf6e38462b00f36a58d62495d56b51f571ab78f732c981590600090a160056107ea838583611d30565b505b8015610827576006546040518291907f99c78ec4281c7a74edf68a9a15dd9843dd492f91a6f229510d1ebacd26f6497e90600090a360068190555b50505050565b6000546001600160a01b031633146108575760405162461bcd60e51b81526004016105f590611c73565b6007546040518291907f3b779194d2cc7daf4de546bec10f6f325d421b2e202c11aa24e86e39845860cc90600090a3600755565b6001546001600160a01b03163381146108e65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e657260448201526064016105f5565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b6000610952610de3565b905090565b60606040518060600160405280602b8152602001611f77602b9139905090565b6005805461098490611ca8565b80601f01602080910402602001604051908101604052809291908181526020018280546109b090611ca8565b80156109fd5780601f106109d2576101008083540402835291602001916109fd565b820191906000526020600020905b8154815290600101906020018083116109e057829003601f168201915b505050505081565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a6c5760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b60448201526064016105f5565b6102e38161117b565b6000546001600160a01b03163314610a9f5760405162461bcd60e51b81526004016105f590611c73565b6000816001600160a01b03168360405160006040518083038185875af1925050503d8060008114610aec576040519150601f19603f3d011682016040523d82523d6000602084013e610af1565b606091505b50509050806106dd5760405162461bcd60e51b815260206004820152601e60248201527f4c69646f53747261746567793a207472616e73666572206661696c65642e000060448201526064016105f5565b600080546001600160a01b03163314610b6d5760405162461bcd60e51b81526004016105f590611c73565b6040805160208101909152600090526040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610be3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c079190611df0565b9050600061271060095483610c1c9190611e1f565b610c269190611e3c565b610c309083611e5e565b600354604051630f7c084960e21b8152600160048201526000602482015260448101859052606481018390529192506001600160a01b031690633df02124906084016020604051808303816000875af1158015610c91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb59190611df0565b92507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0846040518263ffffffff1660e01b81526004016000604051808303818588803b158015610d1257600080fd5b505af1158015610d26573d6000803e3d6000fd5b50506008805460ff191660011790555093949350505050565b6000546001600160a01b03163314610d695760405162461bcd60e51b81526004016105f590611c73565b600955565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610dd55760405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b60448201526064016105f5565b610ddf828261149f565b5050565b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610e4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e709190611df0565b90506000808211610e82576000610efd565b600354604051635e0d443f60e01b81526001600482015260006024820152604481018490526001600160a01b0390911690635e0d443f90606401602060405180830381865afa158015610ed9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efd9190611df0565b6004805460405163eeb8a8d360e01b815292935060009283926001600160a01b039092169163eeb8a8d391610f359160059101611e71565b6040805180830381865afa158015610f51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f759190611efc565b9150915081610fc65760405162461bcd60e51b815260206004820181905260248201527f4c69646f53747261746567793a206f7261636c652063616c6c206661696c656460448201526064016105f5565b6000670de0b6b3a7640000610fdb8684611e1f565b610fe59190611e3c565b90506000620186a060065486610ffb9190611e1f565b6110059190611e3c565b9050816110128287611e5e565b111561106f5760405162461bcd60e51b815260206004820152602660248201527f4c69646f53747261746567793a207072696365206e6f742076616c69643b20746044820152656f6f206c6f7760d01b60648201526084016105f5565b6110798186611f2a565b8211156110d85760405162461bcd60e51b815260206004820152602760248201527f4c69646f53747261746567793a207072696365206e6f742076616c69643b20746044820152660dede40d0d2ced60cb1b60648201526084016105f5565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561113f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111639190611df0565b905061116f8187611f2a565b97505050505050505090565b611183611820565b60085460ff16156111c95760405162461bcd60e51b815260206004820152601060248201526f14dd185c99d85d194e881c185d5cd95960821b60448201526064016105f5565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611230573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112549190611df0565b9050600754811115611468577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631ea7ca896040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e29190611f3d565b1561132f5760405162461bcd60e51b815260206004820152601c60248201527f4c69646f53747261746567793a207374616b696e67207061757365640000000060448201526064016105f5565b604051632e1a7d4d60e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632e1a7d4d90602401600060405180830381600087803b15801561139157600080fd5b505af11580156113a5573d6000803e3d6000fd5b505060405163a1903eab60e01b8152600060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316925063a1903eab9150839060240160206040518083038185885af1158015611411573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906114369190611df0565b5060405181907fde22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d390600090a250611495565b60405182907f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca90600090a2505b6102e36001600255565b6114a7611820565b60006114b1610de3565b9050818110156115035760405162461bcd60e51b815260206004820152601e60248201527f4c69646f53747261746567793a20616d6f756e74206e6f742076616c6964000060448201526064016105f5565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561156a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061158e9190611df0565b9050808311156116d05760006115a48285611e5e565b90506000612710600954836115b99190611e1f565b6115c39190611e3c565b6115cd9083611e5e565b600354604051630f7c084960e21b81526001600482015260006024820181905260448201869052606482018490529293506001600160a01b0390911690633df02124906084016020604051808303816000875af1158015611632573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116569190611df0565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156116b357600080fd5b505af11580156116c7573d6000803e3d6000fd5b50505050505050505b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611734573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117589190611df0565b9050828110156117aa5760405162461bcd60e51b815260206004820152601860248201527f4c69646f53747261746567793a206e6f7420656e6f756768000000000000000060448201526064016105f5565b6117de6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168585611877565b60405183906001600160a01b038616907f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d890600090a35050610ddf6001600255565b60028054036118715760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105f5565b60028055565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392908716916118d39190611f5a565b6000604051808303816000865af19150503d8060008114611910576040519150601f19603f3d011682016040523d82523d6000602084013e611915565b606091505b509150915081801561193f57508051158061193f57508080602001905181019061193f9190611f3d565b61198b5760405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c65640000000060448201526064016105f5565b5050505050565b60005b838110156119ad578181015183820152602001611995565b50506000910152565b600081518084526119ce816020860160208601611992565b601f01601f19169290920160200192915050565b6020815260006119f560208301846119b6565b9392505050565b80356001600160a01b0381168114611a1357600080fd5b919050565b80151581146102e357600080fd5b600080600060608486031215611a3b57600080fd5b611a44846119fc565b92506020840135611a5481611a18565b91506040840135611a6481611a18565b809150509250925092565b600060208284031215611a8157600080fd5b81356119f581611a18565b634e487b7160e01b600052604160045260246000fd5b600060208284031215611ab457600080fd5b813567ffffffffffffffff80821115611acc57600080fd5b818401915084601f830112611ae057600080fd5b813581811115611af257611af2611a8c565b604051601f8201601f19908116603f01168101908382118183101715611b1a57611b1a611a8c565b81604052828152876020848701011115611b3357600080fd5b826020860160208301376000928101602001929092525095945050505050565b6020810160058310611b7557634e487b7160e01b600052602160045260246000fd5b91905290565b60008060008060608587031215611b9157600080fd5b611b9a856119fc565b9350602085013567ffffffffffffffff80821115611bb757600080fd5b818701915087601f830112611bcb57600080fd5b813581811115611bda57600080fd5b886020828501011115611bec57600080fd5b95986020929092019750949560400135945092505050565b600060208284031215611c1657600080fd5b5035919050565b60008060408385031215611c3057600080fd5b82359150611c40602084016119fc565b90509250929050565b60008060408385031215611c5c57600080fd5b611c65836119fc565b946020939093013593505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600181811c90821680611cbc57607f821691505b602082108103611cdc57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156106dd57600081815260208120601f850160051c81016020861015611d095750805b601f850160051c820191505b81811015611d2857828155600101611d15565b505050505050565b67ffffffffffffffff831115611d4857611d48611a8c565b611d5c83611d568354611ca8565b83611ce2565b6000601f841160018114611d905760008515611d785750838201355b600019600387901b1c1916600186901b17835561198b565b600083815260209020601f19861690835b82811015611dc15786850135825560209485019460019092019101611da1565b5086821015611dde5760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b600060208284031215611e0257600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417611e3657611e36611e09565b92915050565b600082611e5957634e487b7160e01b600052601260045260246000fd5b500490565b81810381811115611e3657611e36611e09565b6000602080835260008454611e8581611ca8565b80848701526040600180841660008114611ea65760018114611ec057611eee565b60ff1985168984015283151560051b890183019550611eee565b896000528660002060005b85811015611ee65781548b8201860152908301908801611ecb565b8a0184019650505b509398975050505050505050565b60008060408385031215611f0f57600080fd5b8251611f1a81611a18565b6020939093015192949293505050565b80820180821115611e3657611e36611e09565b600060208284031215611f4f57600080fd5b81516119f581611a18565b60008251611f6c818460208701611992565b919091019291505056fe4c69646f2d45544820737472617465677920666f722077726170706564206e617469766520617373657473a264697066735822122085aa0e62b03c12036b34c298ecee78f694046b839e358eb1e7d163a30f8394c864736f6c63430008120033";

type LidoEthStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LidoEthStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LidoEthStrategy__factory extends ContractFactory {
  constructor(...args: LidoEthStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "LidoEthStrategy";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _stEth: PromiseOrValue<string>,
    _curvePool: PromiseOrValue<string>,
    _oracle: PromiseOrValue<string>,
    _oracleData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LidoEthStrategy> {
    return super.deploy(
      _yieldBox,
      _token,
      _stEth,
      _curvePool,
      _oracle,
      _oracleData,
      overrides || {}
    ) as Promise<LidoEthStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _stEth: PromiseOrValue<string>,
    _curvePool: PromiseOrValue<string>,
    _oracle: PromiseOrValue<string>,
    _oracleData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _token,
      _stEth,
      _curvePool,
      _oracle,
      _oracleData,
      overrides || {}
    );
  }
  override attach(address: string): LidoEthStrategy {
    return super.attach(address) as LidoEthStrategy;
  }
  override connect(signer: Signer): LidoEthStrategy__factory {
    return super.connect(signer) as LidoEthStrategy__factory;
  }
  static readonly contractName: "LidoEthStrategy";

  public readonly contractName: "LidoEthStrategy";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LidoEthStrategyInterface {
    return new utils.Interface(_abi) as LidoEthStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LidoEthStrategy {
    return new Contract(address, _abi, signerOrProvider) as LidoEthStrategy;
  }
}