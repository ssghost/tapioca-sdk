/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  EthGlpOracle,
  EthGlpOracleInterface,
} from "../../../../../contracts/oracle/implementation/Arbitrum/EthGlpOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ITapiocaOracle",
        name: "_wethUsdOracle",
        type: "address",
      },
      {
        internalType: "contract ITapiocaOracle",
        name: "_glpUsdOracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sequencerUptimeFeed",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "schedule",
        type: "uint48",
      },
    ],
    name: "AccessControlEnforcedDefaultAdminDelay",
    type: "error",
  },
  {
    inputs: [],
    name: "AccessControlEnforcedDefaultAdminRules",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "defaultAdmin",
        type: "address",
      },
    ],
    name: "AccessControlInvalidDefaultAdmin",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "GracePeriodNotOver",
    type: "error",
  },
  {
    inputs: [],
    name: "SequencerDown",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "DefaultAdminDelayChangeCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint48",
        name: "newDelay",
        type: "uint48",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "effectSchedule",
        type: "uint48",
      },
    ],
    name: "DefaultAdminDelayChangeScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "DefaultAdminTransferCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "acceptSchedule",
        type: "uint48",
      },
    ],
    name: "DefaultAdminTransferScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    inputs: [],
    name: "GRACE_PERIOD_TIME",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SEQUENCER_ROLE",
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
    inputs: [],
    name: "SEQUENCER_UPTIME_FEED",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptDefaultAdminTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "beginDefaultAdminTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelDefaultAdminTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "newDelay",
        type: "uint48",
      },
    ],
    name: "changeDefaultAdminDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_gracePeriod",
        type: "uint32",
      },
    ],
    name: "changeGracePeriod",
    outputs: [],
    stateMutability: "nonpayable",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultAdmin",
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
    name: "defaultAdminDelay",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultAdminDelayIncreaseWait",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
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
    name: "get",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
    inputs: [],
    name: "glpUsdOracle",
    outputs: [
      {
        internalType: "contract ITapiocaOracle",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "peekSpot",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingDefaultAdmin",
    outputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "schedule",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingDefaultAdminDelay",
    outputs: [
      {
        internalType: "uint48",
        name: "newDelay",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "schedule",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rollbackDefaultAdminDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "wethUsdOracle",
    outputs: [
      {
        internalType: "contract ITapiocaOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040526000805463ffffffff1916610e101790553480156200002257600080fd5b5060405162001e6d38038062001e6d833981016040819052620000459162000241565b6001600160a01b038083166080526203f48090829081166200008157604051636116401160e11b81526000600482015260240160405180910390fd5b600280546001600160d01b0316600160d01b65ffffffffffff851602179055620000ad6000826200011c565b5050600160045550600580546001600160a01b038087166001600160a01b0319928316179092556006805492861692909116919091179055620001117fac4f1890dc96c9a02330d1fa696648a38f3b282d2449c2d8e6f10507488c84c8826200011c565b5050505050620002a9565b6000826200017d576000620001396003546001600160a01b031690565b6001600160a01b0316146200016157604051631fe1e13d60e11b815260040160405180910390fd5b600380546001600160a01b0319166001600160a01b0384161790555b62000189838362000192565b90505b92915050565b60008281526001602090815260408083206001600160a01b038516845290915281205460ff166200021f5760008381526001602081815260408084206001600160a01b0387168086529252808420805460ff19169093179092559051339286917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45060016200018c565b5060006200018c565b6001600160a01b03811681146200023e57600080fd5b50565b600080600080608085870312156200025857600080fd5b8451620002658162000228565b6020860151909450620002788162000228565b60408601519093506200028b8162000228565b60608601519092506200029e8162000228565b939692955090935050565b608051611b9a620002d3600039600081816103f90152818161106c01526110ac0152611b9a6000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c806391d1485411610104578063cf6eefb7116100a2578063d602b9fd11610071578063d602b9fd146104f1578063d6d7d525146104f9578063ed2f860314610523578063eeb8a8d31461054857600080fd5b8063cf6eefb71461047f578063d39bbef0146104cb578063d547741f146104de578063d568866c1461041b57600080fd5b8063c5980182116100de578063c5980182146103f4578063c699c4d61461041b578063cc8463c81461046f578063cefc14291461047757600080fd5b806391d148541461037f578063a1eda53c146103c5578063a217fddf146103ec57600080fd5b806336568abe1161017c578063634e93da1161014b578063634e93da14610333578063649a5ec71461034657806384ef8ffc146103595780638da5cb5b1461037757600080fd5b806336568abe146102c6578063408b0546146102d95780634842855c146102ec57806362b96c511461031357600080fd5b8063234474dc116101b8578063234474dc1461022d578063248a9ca3146102725780632f2ff15d146102a4578063313ce567146102b757600080fd5b806301ffc9a7146101df578063022d63fb146102075780630aa6220b14610223575b600080fd5b6101f26101ed3660046117f6565b61055b565b60405190151581526020015b60405180910390f35b620697805b60405165ffffffffffff90911681526020016101fe565b61022b6105b7565b005b60055461024d9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101fe565b610296610280366004611838565b6000908152600160208190526040909120015490565b6040519081526020016101fe565b61022b6102b236600461187a565b6105cd565b604051601281526020016101fe565b61022b6102d436600461187a565b610612565b61022b6102e73660046118a6565b61071c565b6102967fac4f1890dc96c9a02330d1fa696648a38f3b282d2449c2d8e6f10507488c84c881565b60065461024d9073ffffffffffffffffffffffffffffffffffffffff1681565b61022b6103413660046118cc565b61077e565b61022b6103543660046118e7565b610792565b60035473ffffffffffffffffffffffffffffffffffffffff1661024d565b61024d6107a6565b6101f261038d36600461187a565b600091825260016020908152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b6103cd6107cc565b6040805165ffffffffffff9384168152929091166020830152016101fe565b610296600081565b61024d7f000000000000000000000000000000000000000000000000000000000000000081565b61046261042936600461190f565b505060408051808201909152600781527f4554482f474c5000000000000000000000000000000000000000000000000000602082015290565b6040516101fe9190611981565b61020c610848565b61022b6108e6565b6002546040805173ffffffffffffffffffffffffffffffffffffffff831681527401000000000000000000000000000000000000000090920465ffffffffffff166020830152016101fe565b6102966104d936600461190f565b610942565b61022b6104ec36600461187a565b610956565b61022b610997565b61050c61050736600461190f565b6109aa565b6040805192151583526020830191909152016101fe565b6000546105339063ffffffff1681565b60405163ffffffff90911681526020016101fe565b61050c61055636600461190f565b610b39565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f314987860000000000000000000000000000000000000000000000000000000014806105b157506105b182610cab565b92915050565b60006105c281610d42565b6105ca610d4c565b50565b81610604576040517f3fc3c27a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61060e8282610d59565b5050565b8115801561063a575060035473ffffffffffffffffffffffffffffffffffffffff8281169116145b156107125760025473ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900465ffffffffffff168115158061068e575065ffffffffffff8116155b806106a157504265ffffffffffff821610155b156106e7576040517f19ca5ebb00000000000000000000000000000000000000000000000000000000815265ffffffffffff821660048201526024015b60405180910390fd5b5050600280547fffffffffffff000000000000ffffffffffffffffffffffffffffffffffffffff1690555b61060e8282610d85565b7fac4f1890dc96c9a02330d1fa696648a38f3b282d2449c2d8e6f10507488c84c861074681610d42565b50600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff92909216919091179055565b600061078981610d42565b61060e82610de3565b600061079d81610d42565b61060e82610e63565b60006107c760035473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6003546000907a010000000000000000000000000000000000000000000000000000900465ffffffffffff16801515801561080f57504265ffffffffffff821610155b61081b57600080610840565b60035474010000000000000000000000000000000000000000900465ffffffffffff16815b915091509091565b6003546000907a010000000000000000000000000000000000000000000000000000900465ffffffffffff16801515801561088a57504265ffffffffffff8216105b6108bc576002547a010000000000000000000000000000000000000000000000000000900465ffffffffffff166108e0565b60035474010000000000000000000000000000000000000000900465ffffffffffff165b91505090565b60025473ffffffffffffffffffffffffffffffffffffffff1633811461093a576040517fc22c80220000000000000000000000000000000000000000000000000000000081523360048201526024016106de565b6105ca610ed3565b600061094e8383610b39565b949350505050565b8161098d576040517f3fc3c27a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61060e8282610fc6565b60006109a281610d42565b6105ca610fec565b6000806109b5610ff7565b6109bd61106a565b6005546040517fd6d7d525000000000000000000000000000000000000000000000000000000008152602060048201526000602482018190529173ffffffffffffffffffffffffffffffffffffffff169063d6d7d5259060440160408051808303816000875af1158015610a35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5991906119ee565b6006546040517fd6d7d5250000000000000000000000000000000000000000000000000000000081526020600482015260006024820181905292945091925073ffffffffffffffffffffffffffffffffffffffff169063d6d7d5259060440160408051808303816000875af1158015610ad6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afa91906119ee565b91506001905081610b18846c0c9f2c9cd04674edea40000000611a50565b610b229190611a67565b935093505050610b326001600455565b9250929050565b6005546040517feeb8a8d300000000000000000000000000000000000000000000000000000000815260206004820152600060248201819052918291829173ffffffffffffffffffffffffffffffffffffffff169063eeb8a8d3906044016040805180830381865afa158015610bb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd791906119ee565b6006546040517feeb8a8d30000000000000000000000000000000000000000000000000000000081526020600482015260006024820181905292945091925073ffffffffffffffffffffffffffffffffffffffff169063eeb8a8d3906044016040805180830381865afa158015610c52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7691906119ee565b91506001905081610c94846c0c9f2c9cd04674edea40000000611a50565b610c9e9190611a67565b9350935050509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806105b157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146105b1565b6105ca81336111cb565b610d57600080611253565b565b60008281526001602081905260409091200154610d7581610d42565b610d7f83836113ad565b50505050565b73ffffffffffffffffffffffffffffffffffffffff81163314610dd4576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dde8282611474565b505050565b6000610ded610848565b610df6426114d6565b610e009190611aa2565b9050610e0c8282611572565b60405165ffffffffffff8216815273ffffffffffffffffffffffffffffffffffffffff8316907f3377dc44241e779dd06afab5b788a35ca5f3b778836e2990bdb26a2a4b2e5ed69060200160405180910390a25050565b6000610e6e8261160e565b610e77426114d6565b610e819190611aa2565b9050610e8d8282611253565b6040805165ffffffffffff8085168252831660208201527ff1038c18cf84a56e432fdbfaf746924b7ea511dfe03a6506a0ceba4888788d9b910160405180910390a15050565b60025473ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900465ffffffffffff16801580610f2357504265ffffffffffff821610155b15610f64576040517f19ca5ebb00000000000000000000000000000000000000000000000000000000815265ffffffffffff821660048201526024016106de565b610f8d6000610f8860035473ffffffffffffffffffffffffffffffffffffffff1690565b611474565b50610f996000836113ad565b5050600280547fffffffffffff000000000000000000000000000000000000000000000000000016905550565b60008281526001602081905260409091200154610fe281610d42565b610d7f8383611474565b610d57600080611572565b600260045403611063576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016106de565b6002600455565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166110a757565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015611115573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111399190611ae2565b50919450925050821590508061117b576040517f032b3d0000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006111878342611b32565b60005490915063ffffffff168111610d7f576040517fd15f73b500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff1661060e576040517fe2517d3f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82166004820152602481018390526044016106de565b6003547a010000000000000000000000000000000000000000000000000000900465ffffffffffff168015611328574265ffffffffffff821610156112fe576003546002805479ffffffffffffffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000090920465ffffffffffff167a01000000000000000000000000000000000000000000000000000002919091179055611328565b6040517f2b1fa2edafe6f7b9e97c1a9e0c3660e645beb2dcaa2d45bdbf9beaf5472e1ec590600090a15b506003805473ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000065ffffffffffff9485160279ffffffffffffffffffffffffffffffffffffffffffffffffffff16177a0100000000000000000000000000000000000000000000000000009290931691909102919091179055565b6000826114635760006113d560035473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614611422576040517f3fc3c27a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84161790555b61146d8383611656565b9392505050565b60008215801561149e575060035473ffffffffffffffffffffffffffffffffffffffff8381169116145b156114cc57600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555b61146d8383611721565b600065ffffffffffff82111561156e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203460448201527f382062697473000000000000000000000000000000000000000000000000000060648201526084016106de565b5090565b600280547401000000000000000000000000000000000000000065ffffffffffff84811682027fffffffffffff0000000000000000000000000000000000000000000000000000841673ffffffffffffffffffffffffffffffffffffffff881617179093559004168015610dde576040517f8886ebfc4259abdbc16601dd8fb5678e54878f47b3c34836cfc51154a960510990600090a1505050565b600080611619610848565b90508065ffffffffffff168365ffffffffffff16116116415761163c8382611b45565b61146d565b61146d65ffffffffffff8416620697806117e0565b600082815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205460ff1661171957600083815260016020818152604080842073ffffffffffffffffffffffffffffffffffffffff8716808652925280842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169093179092559051339286917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45060016105b1565b5060006105b1565b600082815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205460ff161561171957600083815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016105b1565b60008183106117ef578161146d565b5090919050565b60006020828403121561180857600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461146d57600080fd5b60006020828403121561184a57600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461187557600080fd5b919050565b6000806040838503121561188d57600080fd5b8235915061189d60208401611851565b90509250929050565b6000602082840312156118b857600080fd5b813563ffffffff8116811461146d57600080fd5b6000602082840312156118de57600080fd5b61146d82611851565b6000602082840312156118f957600080fd5b813565ffffffffffff8116811461146d57600080fd5b6000806020838503121561192257600080fd5b823567ffffffffffffffff8082111561193a57600080fd5b818501915085601f83011261194e57600080fd5b81358181111561195d57600080fd5b86602082850101111561196f57600080fd5b60209290920196919550909350505050565b60006020808352835180602085015260005b818110156119af57858101830151858201604001528201611993565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b60008060408385031215611a0157600080fd5b82518015158114611a1157600080fd5b6020939093015192949293505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820281158282048414176105b1576105b1611a21565b600082611a9d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b65ffffffffffff818116838216019080821115611ac157611ac1611a21565b5092915050565b805169ffffffffffffffffffff8116811461187557600080fd5b600080600080600060a08688031215611afa57600080fd5b611b0386611ac8565b9450602086015193506040860151925060608601519150611b2660808701611ac8565b90509295509295909350565b818103818111156105b1576105b1611a21565b65ffffffffffff828116828216039080821115611ac157611ac1611a2156fea2646970667358221220590a135b10826b1ceb668b05e855ebe90e3b89420eb704d0ffbf71f6c3ead84a64736f6c63430008160033";

type EthGlpOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EthGlpOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EthGlpOracle__factory extends ContractFactory {
  constructor(...args: EthGlpOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "EthGlpOracle";
  }

  override deploy(
    _wethUsdOracle: PromiseOrValue<string>,
    _glpUsdOracle: PromiseOrValue<string>,
    _sequencerUptimeFeed: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EthGlpOracle> {
    return super.deploy(
      _wethUsdOracle,
      _glpUsdOracle,
      _sequencerUptimeFeed,
      _admin,
      overrides || {}
    ) as Promise<EthGlpOracle>;
  }
  override getDeployTransaction(
    _wethUsdOracle: PromiseOrValue<string>,
    _glpUsdOracle: PromiseOrValue<string>,
    _sequencerUptimeFeed: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _wethUsdOracle,
      _glpUsdOracle,
      _sequencerUptimeFeed,
      _admin,
      overrides || {}
    );
  }
  override attach(address: string): EthGlpOracle {
    return super.attach(address) as EthGlpOracle;
  }
  override connect(signer: Signer): EthGlpOracle__factory {
    return super.connect(signer) as EthGlpOracle__factory;
  }
  static readonly contractName: "EthGlpOracle";

  public readonly contractName: "EthGlpOracle";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EthGlpOracleInterface {
    return new utils.Interface(_abi) as EthGlpOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EthGlpOracle {
    return new Contract(address, _abi, signerOrProvider) as EthGlpOracle;
  }
}
