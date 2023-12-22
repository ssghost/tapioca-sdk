/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  OracleChainlinkSingle,
  OracleChainlinkSingleInterface,
} from "../../../contracts/oracle/OracleChainlinkSingle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolChainlink",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_isChainlinkMultiplied",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_inBase",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "stalePeriod",
        type: "uint32",
      },
      {
        internalType: "address[]",
        name: "guardians",
        type: "address[]",
      },
      {
        internalType: "bytes32",
        name: "_description",
        type: "bytes32",
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
    name: "InvalidChainlinkRate",
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
    name: "BASE",
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
    name: "GUARDIAN_ROLE_CHAINLINK",
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
    inputs: [],
    name: "chainlinkDecimals",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_stalePeriod",
        type: "uint32",
      },
    ],
    name: "changeStalePeriod",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "description",
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
    inputs: [],
    name: "inBase",
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
    name: "isChainlinkMultiplied",
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
    inputs: [],
    name: "poolChainlink",
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
    name: "read",
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
    name: "readAll",
    outputs: [
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "readLower",
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
    inputs: [
      {
        internalType: "uint256",
        name: "quoteAmount",
        type: "uint256",
      },
    ],
    name: "readQuote",
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
        name: "quoteAmount",
        type: "uint256",
      },
    ],
    name: "readQuoteLower",
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
    name: "readUpper",
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
    inputs: [],
    name: "stalePeriod",
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
] as const;

const _bytecode =
  "0x61010060409080825234620003e05762001dfe8038038091620000238285620003fb565b8339810161010082820312620003e0576200003e826200041f565b9060206200004e81850162000434565b94808501519460608101519563ffffffff8716809703620003e05760808201516001600160401b039590868111620003e057830181601f82011215620003e0578051968711620003e5578660051b90855197620000ae8884018a620003fb565b88528680890192820101928311620003e05786809101915b838310620003c5575050505060a082015191620000f460e0620000ec60c084016200041f565b92016200041f565b6001600160a01b0380821699909890918a15620003ad57600380546001600160d01b03166107e960d71b17905560048054909b908b81166200039d576001600160a01b031916178b558991906200014b906200046e565b506201518063ffffffff196005541617600555168015620003745786818b9260805287519283809263313ce56760e01b82525afa908115620003695760009162000329575b5060c052865115620003005760005b8751811015620002275788620001b6828a62000443565b5116156200020057620001d789620001cf838b62000443565b5116620004ef565b506000198114620001eb576001016200019f565b60118a634e487b7160e01b6000525260246000fd5b855162461bcd60e51b8152808b0188905260016024820152600360fc1b6044820152606490fd5b5090650e100000000088928b88600260008051602062001dde8339815191529182600052526001896000200198818a549a555198817fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff600080a46005549060a05260018060401b03191617176005551660e052600160065560005560015561183c90816200058282396080518181816108bf01528181610e2b01526110b9015260a05181818161096a01528181610e740152611167015260c05181818161088f01528181610bb20152611085015260e051816104180152f35b845162461bcd60e51b8152808a01879052600360248201526231303160e81b6044820152606490fd5b908782813d831162000361575b620003428183620003fb565b810103126200035e5750620003579062000434565b3862000190565b80fd5b503d62000336565b86513d6000823e3d90fd5b855162461bcd60e51b8152808b01889052600360248201526231303560e81b6044820152606490fd5b8851631fe1e13d60e11b81528d90fd5b8651636116401160e11b815260006004820152602490fd5b8190620003d2846200041f565b8152019101908690620000c6565b600080fd5b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b03821190821017620003e557604052565b51906001600160a01b0382168203620003e057565b519060ff82168203620003e057565b8051821015620004585760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b031660008181527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b602052604081205490919060ff16620004eb5781805260026020526040822081835260205260408220600160ff19825416179055339160008051602062001dbe8339815191528180a4600190565b5090565b6001600160a01b031660008181527fe414d6e9efd528fe34946c9948de56cf8a209abe14dcce3202417cd89e77a63b602052604081205490919060008051602062001dde8339815191529060ff166200057c5780835260026020526040832082845260205260408320600160ff1982541617905560008051602062001dbe833981519152339380a4600190565b50509056fe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a714610f6157508163022d63fb14610f435781630942d09a14610f1a5781630aa6220b14610e985781631d1ff67514610e5a578163210d5a2914610e16578163240fd5ab14610d86578163248a9ca314610deb5781632f2ff15d14610da65781633593ba7b14610d8657816336568abe14610c9e578163408b054614610c2857816341f654f714610bff578163442133bd146105045781634842855c14610bd657816351e6437314610b9857816357de26a414610866578163630914d1146107e1578163634e93da14610717578163649a5ec7146105bb5781637284e4161461059c57816384ef8ffc146105745781638da5cb5b1461057457816391d148541461052957816392611e33146105045781639aefb5c3146104e7578163a1eda53c14610487578163a217fddf1461046c578163a5b36a3614610447578163c598018214610403578163cc8463c8146103d7578163cefc1429146102f5578163cf6eefb7146102ba578163d547741f1461026357508063d602b9fd14610206578063ec342ad0146101e45763ed2f8603146101bc57600080fd5b346101e057816003193601126101e0576005549051602091821c63ffffffff168152f35b5080fd5b50346101e057816003193601126101e05760209051670de0b6b3a76400008152f35b823461026057806003193601126102605761021f611349565b65ffffffffffff61022e61159a565b600380546001600160d01b031916905591909116905061024b5780f35b6000805160206117878339815191528180a180f35b80fd5b839150346101e057826003193601126101e0578035610280610fce565b9181156102ac57506102a360018495836102a8965260026020528620015461138f565b611490565b5080f35b8451631fe1e13d60e11b8152fd5b8284346102605780600319360112610260575065ffffffffffff6102dc61159a565b83516001600160a01b0390921682529091166020820152f35b839150346101e057816003193601126101e05761031061159a565b506001600160a01b039390841633036103c0579065ffffffffffff9161033461159a565b909316801580156103b6575b6103a1575081546001600160a01b03198082168455906103619087166114ce565b50825491868316610392575061037e9495841691161790556113b5565b50600380546001600160d01b031916905580f35b51631fe1e13d60e11b81528390fd5b90516319ca5ebb60e01b815291820152602490fd5b5042811015610340565b602492505190636116401160e11b82523390820152fd5b5050346101e057816003193601126101e05760209065ffffffffffff6103fb6115b9565b915191168152f35b5050346101e057816003193601126101e057517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346101e057816003193601126101e05760209063ffffffff600554169051908152f35b5050346101e057816003193601126101e05751908152602090f35b839150346101e057816003193601126101e057548060d01c91821515806104dd575b156104cf575065ffffffffffff6104cb9160a01c1691925b5192839283610fe9565b0390f35b928392506104cb91506104c1565b50428310156104a9565b5050346101e057816003193601126101e057602091549051908152f35b5050346101e057816003193601126101e0576105226020925461104b565b9051908152f35b9050346105705781600319360112610570578160209360ff9261054a610fce565b90358252600286528282206001600160a01b039091168252855220549151911615158152f35b8280fd5b9050346105705782600319360112610570575490516001600160a01b03909116815260209150f35b5050346101e057816003193601126101e0576020906001549051908152f35b839150346101e05760203660031901126101e057803565ffffffffffff80821690818303610713576105eb611349565b6105f44261160c565b91816105fe6115b9565b16808211156106d957506106829286979261063b926000805160206117c78339815191529850620697808082106000146106d257505b16906115f2565b9380548060d01c80610688575b505080546001600160a01b031660a085901b65ffffffffffff60a01b161760d086901b6001600160d01b0319161790555192839283610fe9565b0390a180f35b4211156106ba57600380546001600160d01b031660309290921b6001600160d01b0319169190911790555b8780610648565b506000805160206117678339815191528780a16106b3565b9050610634565b03908111610700579461063b610682926000805160206117c78339815191529697906115f2565b634e487b7160e01b855260118452602485fd5b8480fd5b90503461057057602036600319011261057057356001600160a01b03811691908290036105705760207f3377dc44241e779dd06afab5b788a35ca5f3b778836e2990bdb26a2a4b2e5ed69161076a611349565b6107846107764261160c565b61077e6115b9565b906115f2565b9061078d61159a565b600380546001600160d01b031916881760a086901b65ffffffffffff60a01b1617905565ffffffffffff92915082166107ca575b5191168152a280f35b6000805160206117878339815191528780a16107c1565b9050346105705760203660031901126105705780359163ffffffff8316809303610862576000805160206117e783398151915290818552600260205280852033865260205260ff8186205416156108465750505063ffffffff19600554161760055580f35b60449350519163e2517d3f60e01b835233908301526024820152fd5b8380fd5b8284346102605780600319360112610260578151633fabe5a360e21b81526001600160a01b03937f000000000000000000000000000000000000000000000000000000000000000060ff1692670de0b6b3a764000091907f0000000000000000000000000000000000000000000000000000000000000000871660a0858481845afa8015610b8e5782958391610b3b575b508751986309169eff60e21b92838b5260209a8b818881855afa908115610b145783918d918891610b1e575b50888d5180948193630455b78f60e31b8352165afa908115610b1457908c918791610af7575b5060170b891394851595610a33575b505050508115610a05575b506109f6577f000000000000000000000000000000000000000000000000000000000000000060ff166001036109b85750506109a661052293926109ac92611002565b91611673565b9061102b565b51908152f35b909594936109c590611673565b808302928304036109e357506109dd9293945061102b565b906109b2565b634e487b7160e01b815260118652602490fd5b50845163ae19356360e01b8152fd5b90504203428111610a205763ffffffff600554161088610963565b506011602492634e487b7160e01b835252fd5b909192939450868b518094819382525afa908115610aed57908a918591610ac0575b50858a51809481936370da2f6760e01b8352165afa908115610ab6578391610a89575b5060170b8512159089808a81610958565b610aa99150893d8b11610aaf575b610aa18183611681565b8101906116ed565b89610a78565b503d610a97565b88513d85823e3d90fd5b610ae09150823d8411610ae6575b610ad88183611681565b8101906116ce565b8b610a55565b503d610ace565b89513d86823e3d90fd5b610b0e9150823d8411610aaf57610aa18183611681565b8d610949565b8b513d88823e3d90fd5b610b359150823d8411610ae657610ad88183611681565b8e610923565b95505060a0853d8211610b86575b81610b5660a09383611681565b810103126101e057610b67856116ba565b506020850151610b7e6080606088015197016116ba565b5094896108f7565b3d9150610b49565b87513d84823e3d90fd5b5050346101e057816003193601126101e0576020905160ff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b5050346101e057816003193601126101e057602090516000805160206117478339815191528152f35b828434610260578060031936011261026057610c1b905461104b565b8151908082526020820152f35b9050346105705760203660031901126105705780359163ffffffff831683036108625760008051602061174783398151915290818552600260205280852033865260205260ff818620541615610846575050506005549063ffffffff60201b9060201b169063ffffffff60201b19161760055580f35b8383346101e057806003193601126101e0578235610cba610fce565b91811580610d70575b610cf2575b336001600160a01b03841603610ce35750906102a891611490565b5163334bd91960e11b81528490fd5b610cfa61159a565b906001600160a01b031615801590610d60575b8015610d4e575b610d3057506003805465ffffffffffff60a01b19169055610cc8565b8565ffffffffffff60249351926319ca5ebb60e01b84521690820152fd5b504265ffffffffffff82161015610d14565b5065ffffffffffff811615610d0d565b5084546001600160a01b03848116911614610cc3565b82843461026057602036600319011261026057506105226020923561104b565b839150346101e057826003193601126101e0578035610dc3610fce565b9181156102ac5750610de660018495836102a8965260026020528620015461138f565b611422565b9050346105705760203660031901126105705781602093600192358152600285522001549051908152f35b5050346101e057816003193601126101e057517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346101e057816003193601126101e0576020905160ff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b8390346101e057816003193601126101e057610eb2611349565b80548060d01c80610ed0575b505080546001600160a01b0316905580f35b421115610f0257600380546001600160d01b031660309290921b6001600160d01b0319169190911790555b8280610ebe565b506000805160206117678339815191528280a1610efb565b5050346101e057816003193601126101e057602090516000805160206117e78339815191528152f35b5050346101e057816003193601126101e05760209051620697808152f35b849134610570576020366003190112610570573563ffffffff60e01b811680910361057057602092506318a4c3c360e11b8114908115610fa3575b5015158152f35b637965db0b60e01b811491508115610fbd575b5083610f9c565b6301ffc9a760e01b14905083610fb6565b602435906001600160a01b0382168203610fe457565b600080fd5b65ffffffffffff91821681529116602082015260400190565b8181029291811591840414171561101557565b634e487b7160e01b600052601160045260246000fd5b8115611035570490565b634e487b7160e01b600052601260045260246000fd5b670de0b6b3a7640000908181029181830414901517156110155761107360009182549061102b565b60408051633fabe5a360e21b815260ff7f000000000000000000000000000000000000000000000000000000000000000016939092918291600491906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116919060a0888681865afa90811561133f57829883926112ea575b5084516309169eff60e21b808252946020929183818a81855afa9081156112c3578391859188916112cd575b508a8a5180948193630455b78f60e31b8352165afa9081156112c35786916112a6575b5060170b8b13958615966111ff575b5050505082156111ce575b50506111c15750507f000000000000000000000000000000000000000000000000000000000000000060ff166001036111a557506109a66111a293926109ac92611002565b90565b6111bc91506111b66111a294611673565b90611002565b61102b565b5163ae19356360e01b8152fd5b42908103925082116111ec575063ffffffff6005541610388061115d565b634e487b7160e01b815260118452602490fd5b83949650888894929394518094819382525afa90811561129c57908391859161127f575b50878751809481936370da2f6760e01b8352165afa918215611275578392611258575b505060170b8712159138808080611152565b61126e9250803d10610aaf57610aa18183611681565b3880611246565b85513d85823e3d90fd5b6112969150823d8411610ae657610ad88183611681565b38611223565b86513d86823e3d90fd5b6112bd9150843d8611610aaf57610aa18183611681565b38611143565b88513d88823e3d90fd5b6112e49150823d8411610ae657610ad88183611681565b38611120565b9850905060a0883d8211611337575b8161130660a09383611681565b810103126101e057611317886116ba565b50602088015161132e608060608b01519a016116ba565b509790386110f4565b3d91506112f9565b84513d84823e3d90fd5b336000908152600080516020611727833981519152602052604081205460ff16156113715750565b6044906040519063e2517d3f60e01b82523360048301526024820152fd5b80600052600260205260406000203360005260205260ff60406000205416156113715750565b6001600160a01b03166000818152600080516020611727833981519152602052604081205490919060ff1661141e5781805260026020526040822081835260205260408220600160ff1982541617905533916000805160206117078339815191528180a4600190565b5090565b906000918083526002602052604083209160018060a01b03169182845260205260ff6040842054161560001461148b5780835260026020526040832082845260205260408320600160ff19825416179055600080516020611707833981519152339380a4600190565b505090565b906111a2918015806114b7575b1561153557600480546001600160a01b0319169055611535565b506004546001600160a01b0383811691161461149d565b6001600160a01b03166000818152600080516020611727833981519152602052604081205490919060ff161561141e578180526002602052604082208183526020526040822060ff19815416905533916000805160206117a78339815191528180a4600190565b906000918083526002602052604083209160018060a01b03169182845260205260ff60408420541660001461148b578083526002602052604083208284526020526040832060ff1981541690556000805160206117a7833981519152339380a4600190565b6003546001600160a01b0381169160a09190911c65ffffffffffff1690565b6004548060d01c80151590816115e8575b50156115de5760a01c65ffffffffffff1690565b5060035460d01c90565b90504211386115ca565b91909165ffffffffffff8080941691160191821161101557565b65ffffffffffff9081811161161f571690565b60405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203460448201526538206269747360d01b6064820152608490fd5b604d811161101557600a0a90565b601f909101601f19168101906001600160401b038211908210176116a457604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160501b0382168203610fe457565b90816020910312610fe457516001600160a01b0381168103610fe45790565b90816020910312610fe457518060170b8103610fe4579056fe2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0dac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077bac4f1890dc96c9a02330d1fa696648a38f3b282d2449c2d8e6f10507488c84c82b1fa2edafe6f7b9e97c1a9e0c3660e645beb2dcaa2d45bdbf9beaf5472e1ec58886ebfc4259abdbc16601dd8fb5678e54878f47b3c34836cfc51154a9605109f6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171bf1038c18cf84a56e432fdbfaf746924b7ea511dfe03a6506a0ceba4888788d9b55435dd261a4b9b3364963f7738a7a662ad9c84396d64be3365284bb7f0a5041a2646970667358221220bf48f31820a7b4c0844a83b184d0e9191af28f757eed219ee85222e36a1a90f764736f6c634300081300332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d55435dd261a4b9b3364963f7738a7a662ad9c84396d64be3365284bb7f0a5041";

type OracleChainlinkSingleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleChainlinkSingleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleChainlinkSingle__factory extends ContractFactory {
  constructor(...args: OracleChainlinkSingleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "OracleChainlinkSingle";
  }

  override deploy(
    _poolChainlink: PromiseOrValue<string>,
    _isChainlinkMultiplied: PromiseOrValue<BigNumberish>,
    _inBase: PromiseOrValue<BigNumberish>,
    stalePeriod: PromiseOrValue<BigNumberish>,
    guardians: PromiseOrValue<string>[],
    _description: PromiseOrValue<BytesLike>,
    _sequencerUptimeFeed: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OracleChainlinkSingle> {
    return super.deploy(
      _poolChainlink,
      _isChainlinkMultiplied,
      _inBase,
      stalePeriod,
      guardians,
      _description,
      _sequencerUptimeFeed,
      _admin,
      overrides || {}
    ) as Promise<OracleChainlinkSingle>;
  }
  override getDeployTransaction(
    _poolChainlink: PromiseOrValue<string>,
    _isChainlinkMultiplied: PromiseOrValue<BigNumberish>,
    _inBase: PromiseOrValue<BigNumberish>,
    stalePeriod: PromiseOrValue<BigNumberish>,
    guardians: PromiseOrValue<string>[],
    _description: PromiseOrValue<BytesLike>,
    _sequencerUptimeFeed: PromiseOrValue<string>,
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _poolChainlink,
      _isChainlinkMultiplied,
      _inBase,
      stalePeriod,
      guardians,
      _description,
      _sequencerUptimeFeed,
      _admin,
      overrides || {}
    );
  }
  override attach(address: string): OracleChainlinkSingle {
    return super.attach(address) as OracleChainlinkSingle;
  }
  override connect(signer: Signer): OracleChainlinkSingle__factory {
    return super.connect(signer) as OracleChainlinkSingle__factory;
  }
  static readonly contractName: "OracleChainlinkSingle";

  public readonly contractName: "OracleChainlinkSingle";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleChainlinkSingleInterface {
    return new utils.Interface(_abi) as OracleChainlinkSingleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleChainlinkSingle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OracleChainlinkSingle;
  }
}
