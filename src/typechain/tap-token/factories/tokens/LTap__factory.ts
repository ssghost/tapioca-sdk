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
import type { PromiseOrValue } from "../../common";
import type { LTap, LTapInterface } from "../../tokens/LTap";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_tapToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxLockedUntil",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [],
    name: "StillLocked",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    inputs: [],
    name: "TooLate",
    type: "error",
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
    inputs: [],
    name: "EIP712DomainChanged",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        name: "account",
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
    name: "claimOwnership",
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
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
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
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    name: "lockedUntil",
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
    name: "maxLockedUntil",
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
        name: "owner",
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
        name: "owner",
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
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lockedUntil",
        type: "uint256",
      },
    ],
    name: "setLockedUntil",
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
] as const;

const _bytecode =
  "0x6101a0346200055257601f6200223b38819003918201601f19168301916001600160401b038311848410176200055757808492604094855283398101031262000552578051906001600160a01b038216820362000552576020015190604051916200006a836200056d565b6004918284526304c5441560e41b93846020820152604051946200008e866200056d565b84865280602087015260405190620000a6826200056d565b858252602082015260405195620000bd876200056d565b60018752603160f81b6020880152600080546001600160a01b031916339081178255907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a38051906001600160401b0382116200053d57600554600181811c9116801562000532575b60208210146200051d579081601f849311620004c7575b50602090601f831160011462000438576000926200042c575b50508160011b916000199060031b1c1916176005555b8051906001600160401b0382116200041757600654600181811c911680156200040c575b6020821014620003f7579081601f84931162000393575b50602090601f831160011462000319576000926200030d575b50508160011b916000199060031b1c1916176006555b620001e38162000589565b610120908152620001f48662000766565b9161014092835260208151910120958660e0526020815191012095610100968088524660a0526040519060208201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8452604083015260608201524660808201523060a082015260a0815260c081019681881060018060401b03891117620002f85750866040525190206080523060c05261016092835283600b556101809384526118fc95866200091f87396080518661143c015260a05186611508015260c0518661140d015260e0518661148b015251856114b1015251846108440152518361086e0152518281816104380152610574015251818181610b000152610b6c0152f35b604190634e487b7160e01b6000525260246000fd5b015190503880620001c2565b600660009081526000805160206200221b8339815191529350601f198516905b8181106200037a575090846001959493921062000360575b505050811b01600655620001d8565b015160001960f88460031b161c1916905538808062000351565b9293602060018192878601518155019501930162000339565b60066000529091506000805160206200221b833981519152601f840160051c81019160208510620003ec575b90601f859493920160051c01905b818110620003dc5750620001a9565b60008155849350600101620003cd565b9091508190620003bf565b602287634e487b7160e01b6000525260246000fd5b90607f169062000192565b604186634e487b7160e01b6000525260246000fd5b01519050388062000158565b6005600090815293507f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db091905b601f1984168510620004ab576001945083601f1981161062000491575b505050811b016005556200016e565b015160001960f88460031b161c1916905538808062000482565b8181015183556020948501946001909301929091019062000465565b90915060056000526020600020601f840160051c81016020851062000515575b90849392915b601f830160051c82018110620005055750506200013f565b60008155859450600101620004ed565b5080620004e7565b602288634e487b7160e01b6000525260246000fd5b90607f169062000128565b604187634e487b7160e01b6000525260246000fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176200055757604052565b805160209081811015620006265750601f825111620005c55780825192015190808310620005b657501790565b82600019910360031b1b161790565b90604051809263305a27a960e01b82528060048301528251908160248401526000935b8285106200060c575050604492506000838284010152601f80199101168101030190fd5b8481018201518686016044015293810193859350620005e8565b906001600160401b0382116200055757600754926001938481811c911680156200075b575b838210146200074557601f81116200070b575b5081601f84116001146200069f575092829391839260009462000693575b50501b916000199060031b1c19161760075560ff90565b0151925038806200067c565b919083601f198116600760005284600020946000905b88838310620006f05750505010620006d6575b505050811b0160075560ff90565b015160001960f88460031b161c19169055388080620006c8565b858701518855909601959485019487935090810190620006b5565b600760005284601f84600020920160051c820191601f860160051c015b828110620007385750506200065e565b6000815501859062000728565b634e487b7160e01b600052602260045260246000fd5b90607f16906200064b565b805160209081811015620007f45750601f825111620007935780825192015190808310620005b657501790565b90604051809263305a27a960e01b82528060048301528251908160248401526000935b828510620007da575050604492506000838284010152601f80199101168101030190fd5b8481018201518686016044015293810193859350620007b6565b906001600160401b0382116200055757600854926001938481811c9116801562000913575b838210146200074557601f8111620008d9575b5081601f84116001146200086d575092829391839260009462000861575b50501b916000199060031b1c19161760085560ff90565b0151925038806200084a565b919083601f198116600860005284600020946000905b88838310620008be5750505010620008a4575b505050811b0160085560ff90565b015160001960f88460031b161c1916905538808062000896565b85870151885590960195948501948793509081019062000883565b600860005284601f84600020920160051c820191601f860160051c015b828110620009065750506200082c565b60008155018590620008f6565b90607f16906200081956fe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde0314610dd357508163078dfbe714610cb9578163095ea7b314610c8f57816318160ddd14610c7157816323b872dd14610ba65781632cb60e9214610b3f578163313ce56714610b235781633391165214610ae85781633644e51514610ac45781633950935114610a755781634e71e0c8146109b857816370a08231146109815781637ecebe001461094a57816384b0196e1461082c5781638da5cb5b1461080657816395d89b411461071d578163a457c2d714610674578163a9059cbb14610643578163b6b55f2514610519578163be040fb014610378578163ce0617ec14610359578163d505accf1461019f57508063dd62ed3e146101575763e30c39781461012d57600080fd5b346101535781600319360112610153576020906001600160a01b03600154169051908152f35b5080fd5b503461015357806003193601126101535780602092610174610ebb565b61017c610ed6565b6001600160a01b0391821683526003865283832091168252845220549051908152f35b839150346101535760e0366003190112610153576101bb610ebb565b6101c3610ed6565b906044359260643560843560ff8116810361035557814211610312576001600160a01b0390818516928389526009602052898920908154916001830190558a519060208201927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98452868d840152858a1660608401528a608084015260a083015260c082015260c0815260e0810181811067ffffffffffffffff8211176102ff578b525190206102a79161029f91610279611403565b908c519161190160f01b83526002830152602282015260c43591604260a4359220611374565b91909161125a565b16036102bc57506102b9939450611158565b80f35b606490602087519162461bcd60e51b8352820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152fd5b634e487b7160e01b8b526041875260248bfd5b875162461bcd60e51b8152602081850152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606490fd5b8680fd5b505034610153578160031936011261015357602090600b549051908152f35b838334610153578160031936011261015357600b5442111561050a57338252602090600282528083205433156104bd57338452600283528184205481811061046f5781903386526002855203828520558085540385558382518281527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef853392a381519263a9059cbb60e01b90840152336024840152604483015260448252608082019082821067ffffffffffffffff83111761045c576102b9939450527f00000000000000000000000000000000000000000000000000000000000000006116e4565b634e487b7160e01b845260418552602484fd5b825162461bcd60e51b8152808701859052602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b815162461bcd60e51b8152808601849052602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608490fd5b51636100d92960e11b81529050fd5b9190503461063f57602036600319011261063f5781359181516323b872dd60e01b60208201523360248201523060448201528360648201526064815260a0810181811067ffffffffffffffff82111761062c578352610598907f00000000000000000000000000000000000000000000000000000000000000006116e4565b33156105ea576105a9838254610fc5565b9055338352600260205280832082815401905551908152817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60203393a380f35b6020606492519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b634e487b7160e01b865260418352602486fd5b8280fd5b50503461015357806003193601126101535760209061066d610663610ebb565b6024359033610fe8565b5160018152f35b9050823461071a578260031936011261071a5761068f610ebb565b91836024359233815260036020528181206001600160a01b03861682526020522054908282106106c95760208561066d8585038733611158565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b5050346101535781600319360112610153578051908260065461073f81610f37565b808552916001918083169081156107de5750600114610781575b50505061076b8261077d940383610fa3565b51918291602083526020830190610e7b565b0390f35b9450600685527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f5b8286106107c65750505061076b82602061077d9582010194610759565b805460208787018101919091529095019481016107a9565b61077d97508693506020925061076b94915060ff191682840152151560051b82010194610759565b5050346101535781600319360112610153576001600160a01b0360209254169051908152f35b9190503461063f578260031936011261063f576108687f000000000000000000000000000000000000000000000000000000000000000061152e565b926108927f000000000000000000000000000000000000000000000000000000000000000061162a565b908251926020928385019585871067ffffffffffffffff881117610937575092806108ed8388966108e0998b9996528686528151998a99600f60f81b8b5260e0868c015260e08b0190610e7b565b91898303908a0152610e7b565b924660608801523060808801528460a088015286840360c088015251928381520193925b82811061092057505050500390f35b835185528695509381019392810192600101610911565b634e487b7160e01b845260419052602483fd5b50503461015357602036600319011261015357806020926001600160a01b03610971610ebb565b1681526009845220549051908152f35b50503461015357602036600319011261015357806020926001600160a01b036109a8610ebb565b1681526002845220549051908152f35b9190503461063f578260031936011261063f57600154906001600160a01b039283831691823303610a325750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a373ffffffffffffffffffffffffffffffffffffffff199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b50503461015357806003193601126101535761066d602092610abd610a98610ebb565b91338152600386528481206001600160a01b0384168252865284602435912054610fc5565b9033611158565b505034610153578160031936011261015357602090610ae1611403565b9051908152f35b505034610153578160031936011261015357602090517f00000000000000000000000000000000000000000000000000000000000000008152f35b5050346101535781600319360112610153576020905160128152f35b90503461063f57602036600319011261063f57803591610b6a6001600160a01b038554163314610eec565b7f00000000000000000000000000000000000000000000000000000000000000008311610b99575050600b5580f35b5163ecdd1c2960e01b8152fd5b8391503461015357606036600319011261015357610bc2610ebb565b610bca610ed6565b9184604435946001600160a01b038416815260036020528181203382526020522054906000198203610c05575b60208661066d878787610fe8565b848210610c2e5750918391610c236020969561066d95033383611158565b919394819350610bf7565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b90503461063f578260031936011261063f5760209250549051908152f35b50503461015357806003193601126101535760209061066d610caf610ebb565b6024359033611158565b9190503461063f57606036600319011261063f57610cd5610ebb565b91602435918215158303610dcf57604435928315158403610dcb576001600160a01b03948591610d09838954163314610eec565b15610db1571692831590811591610da9575b5015610d665750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b03198092161782556001541660015580f35b906020606492519162461bcd60e51b8352820152601560248201527f4f776e61626c653a207a65726f206164647265737300000000000000000000006044820152fd5b905038610d1b565b9350505050166001600160a01b0319600154161760015580f35b8580fd5b8480fd5b8490843461063f578260031936011261063f5782600554610df381610f37565b808552916001918083169081156107de5750600114610e1e5750505061076b8261077d940383610fa3565b9450600585527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db05b828610610e635750505061076b82602061077d9582010194610759565b80546020878701810191909152909501948101610e46565b919082519283825260005b848110610ea7575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610e86565b600435906001600160a01b0382168203610ed157565b600080fd5b602435906001600160a01b0382168203610ed157565b15610ef357565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b90600182811c92168015610f67575b6020831014610f5157565b634e487b7160e01b600052602260045260246000fd5b91607f1691610f46565b6040810190811067ffffffffffffffff821117610f8d57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610f8d57604052565b91908201809211610fd257565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0380911691821561110557169182156110b4576000828152600260205260408120549180831061106057604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef95876020965260028652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b0380911691821561120957169182156111b95760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260038252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b600581101561135e578061126b5750565b600181036112b85760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b600281036113055760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b60031461130e57565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116113f75791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156113ea5781516001600160a01b038116156113e4579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016301480611505575b1561145e577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c0810181811067ffffffffffffffff821117610f8d5760405251902090565b507f00000000000000000000000000000000000000000000000000000000000000004614611435565b60ff811461156c5760ff811690601f821161155a576040519161155083610f71565b8252602082015290565b604051632cd44ac360e21b8152600490fd5b5060405160075481600061157f83610f37565b8083529260019081811690811561160857506001146115a9575b506115a692500382610fa3565b90565b6007600090815291507fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6885b8483106115ed57506115a6935050810160200138611599565b819350908160209254838589010152019101909184926115d4565b9050602092506115a694915060ff191682840152151560051b82010138611599565b60ff811461164c5760ff811690601f821161155a576040519161155083610f71565b5060405160085481600061165f83610f37565b80835292600190818116908115611608575060011461168557506115a692500382610fa3565b6008600090815291507ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee35b8483106116c957506115a6935050810160200138611599565b819350908160209254838589010152019101909184926116b0565b6001600160a01b0316906040516116fa81610f71565b6020928382527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564848301526000808486829651910182855af13d1561181f573d9167ffffffffffffffff831161180b57906117759392916040519261176888601f19601f8401160185610fa3565b83523d868885013e611829565b8051918215918483156117e7575b5050509050156117905750565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b9193818094500103126101535782015190811515820361071a575080388084611783565b634e487b7160e01b85526041600452602485fd5b9061177592916060915b9192901561188b575081511561183d575090565b3b156118465790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b82519091501561189e5750805190602001fd5b60405162461bcd60e51b8152602060048201529081906118c2906024830190610e7b565b0390fdfea2646970667358221220c39075ff279d8145d2ed6ca03d90320b8ebdccdedb496811c4d53fb69562e91764736f6c63430008130033f652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f";

type LTapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LTapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LTap__factory extends ContractFactory {
  constructor(...args: LTapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "LTap";
  }

  override deploy(
    _tapToken: PromiseOrValue<string>,
    _maxLockedUntil: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LTap> {
    return super.deploy(
      _tapToken,
      _maxLockedUntil,
      overrides || {}
    ) as Promise<LTap>;
  }
  override getDeployTransaction(
    _tapToken: PromiseOrValue<string>,
    _maxLockedUntil: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tapToken,
      _maxLockedUntil,
      overrides || {}
    );
  }
  override attach(address: string): LTap {
    return super.attach(address) as LTap;
  }
  override connect(signer: Signer): LTap__factory {
    return super.connect(signer) as LTap__factory;
  }
  static readonly contractName: "LTap";

  public readonly contractName: "LTap";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LTapInterface {
    return new utils.Interface(_abi) as LTapInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): LTap {
    return new Contract(address, _abi, signerOrProvider) as LTap;
  }
}
