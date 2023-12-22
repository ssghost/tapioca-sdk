/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { OTAP, OTAPInterface } from "../../../options/oTAP.sol/OTAP";

const _abi = [
  {
    inputs: [],
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
    name: "NotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyBroker",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyOnce",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "expiry",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "discount",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "tOLP",
            type: "uint256",
          },
        ],
        indexed: true,
        internalType: "struct TapOption",
        name: "option",
        type: "tuple",
      },
    ],
    name: "Burn",
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
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "expiry",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "discount",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "tOLP",
            type: "uint256",
          },
        ],
        indexed: true,
        internalType: "struct TapOption",
        name: "option",
        type: "tuple",
      },
    ],
    name: "Mint",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "attributes",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "expiry",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "discount",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "tOLP",
            type: "uint256",
          },
        ],
        internalType: "struct TapOption",
        name: "",
        type: "tuple",
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
    inputs: [
      {
        internalType: "bytes[]",
        name: "calls",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "revertOnFail",
        type: "bool",
      },
    ],
    name: "batch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "broker",
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
    name: "brokerClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "isApprovedOrOwner",
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
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_expiry",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_discount",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "_tOLP",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintedOTAP",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "options",
    outputs: [
      {
        internalType: "uint128",
        name: "expiry",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "discount",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "tOLP",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "setTokenURI",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenURIs",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610160604090808252346200041b57620000198162000420565b600a81526020908181016904f7074696f6e205441560b41b92838252845193620000438562000420565b600a855281850152845190620000598262000420565b6004958683526306f5441560e41b82840152805192620000798462000420565b600180855283850190603160f81b825288519260018060401b03998a851162000406576000948554918483811c93168015620003fb575b8984101462000306578190601f93848111620003a8575b5089908483116001146200034457889262000338575b5050600019600383901b1c191690841b1785555b8151918b8311620003255783548481811c911680156200031a575b89821014620003065790818385949311620002b1575b50889183116001146200024d57869262000241575b5050600019600383901b1c191690821b1790555b620001568762000452565b9561012096875262000168866200062f565b97610140988952519020948560e0525190209761010098808a524660a0528351948501957f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f87528486015260608501524660808501523060a085015260a0845260c0840197848910908911176200022e5750508590525190206080523060c05261230d9384620007e88539608051846121f6015260a051846122b1015260c051846121c7015260e051846122450152518361226b01525182610ef601525181610f1f0152f35b634e487b7160e01b825260419052602490fd5b01519050388062000137565b8487528887208594509190601f198416885b8b8282106200029a575050841162000280575b505050811b0190556200014b565b015160001960f88460031b161c1916905538808062000272565b83850151865588979095019493840193016200025f565b909192508487528887208380860160051c8201928b8710620002fc575b91869588929594930160051c01915b828110620002ed57505062000122565b898155869550879101620002dd565b92508192620002ce565b50634e487b7160e01b865260228d52602486fd5b90607f16906200010c565b634e487b7160e01b865260418d52602486fd5b015190503880620000dd565b8880528a89208794509190601f1984168a5b8d82821062000391575050841162000377575b505050811b018555620000f1565b015160001960f88460031b161c1916905538808062000369565b8385015186558a9790950194938401930162000356565b9091508780528988208480850160051c8201928c8610620003f1575b918891869594930160051c01915b828110620003e2575050620000c7565b8a8155859450889101620003d2565b92508192620003c4565b92607f1692620000b0565b60418c634e487b7160e01b6000525260246000fd5b600080fd5b604081019081106001600160401b038211176200043c57604052565b634e487b7160e01b600052604160045260246000fd5b805160209081811015620004ef5750601f8251116200048e57808251920151908083106200047f57501790565b82600019910360031b1b161790565b90604051809263305a27a960e01b82528060048301528251908160248401526000935b828510620004d5575050604492506000838284010152601f80199101168101030190fd5b8481018201518686016044015293810193859350620004b1565b906001600160401b0382116200043c57600654926001938481811c9116801562000624575b838210146200060e57601f8111620005d4575b5081601f84116001146200056857509282939183926000946200055c575b50501b916000199060031b1c19161760065560ff90565b01519250388062000545565b919083601f198116600660005284600020946000905b88838310620005b957505050106200059f575b505050811b0160065560ff90565b015160001960f88460031b161c1916905538808062000591565b8587015188559096019594850194879350908101906200057e565b600660005284601f84600020920160051c820191601f860160051c015b8281106200060157505062000527565b60008155018590620005f1565b634e487b7160e01b600052602260045260246000fd5b90607f169062000514565b805160209081811015620006bd5750601f8251116200065c57808251920151908083106200047f57501790565b90604051809263305a27a960e01b82528060048301528251908160248401526000935b828510620006a3575050604492506000838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506200067f565b906001600160401b0382116200043c57600754926001938481811c91168015620007dc575b838210146200060e57601f8111620007a2575b5081601f84116001146200073657509282939183926000946200072a575b50501b916000199060031b1c19161760075560ff90565b01519250388062000713565b919083601f198116600760005284600020946000905b888383106200078757505050106200076d575b505050811b0160075560ff90565b015160001960f88460031b161c191690553880806200075f565b8587015188559096019594850194879350908101906200074c565b600760005284601f84600020920160051c820191601f860160051c015b828110620007cf575050620006f5565b60008155018590620007bf565b90607f1690620006e256fe6080604052600436101561001257600080fd5b60003560e01c806301ffc9a7146101e257806306fdde03146101dd578063081812fc146101d8578063095ea7b3146101d35780631239824c146101ce578063162094c4146101c95780631eac071c146101c457806323b872dd146101bf5780633644e515146101ba578063409e2205146101b557806342842e0e146101b057806342966c68146101ab578063430c2081146101a65780634f558e79146101a15780636352211e1461019c5780636c8b703f1461016a57806370a08231146101975780637ac2ff7b146101925780637ecebe001461018d57806384b0196e1461018857806395d89b4114610183578063a22cb4651461017e578063abff011014610179578063b47be4fc14610174578063b88d4fde1461016f578063c87b56dd1461016a578063d05dcc6a14610165578063d2423b51146101605763e985e9c51461015b57600080fd5b611409565b61130d565b61125a565b610bdc565b6111d1565b611197565b611170565b611087565b610fd3565b610edb565b610ea1565b610d53565b610cb2565b610ad7565b610aa2565b610a71565b61093d565b610915565b6108cc565b6108a9565b610880565b610806565b610694565b610526565b610406565b6103ab565b6102c8565b6101fe565b6001600160e01b03198116036101f957565b600080fd5b346101f95760203660031901126101f957602060043561021d816101e7565b63ffffffff60e01b166380ac58cd60e01b811490811561025b575b811561024a575b506040519015158152f35b6301ffc9a760e01b1490503861023f565b635b5e139f60e01b81149150610238565b60005b83811061027f5750506000910152565b818101518382015260200161026f565b906020916102a88151809281855285808601910161026c565b601f01601f1916010190565b9060206102c592818152019061028f565b90565b346101f9576000806003193601126103a857604051908080546102ea81610af5565b8085529160019180831690811561037e5750600114610324575b6103208561031481870382610bba565b604051918291826102b4565b0390f35b80809450527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b82841061036657505050810160200161031482610320610304565b8054602085870181019190915290930192810161034b565b8695506103209693506020925061031494915060ff191682840152151560051b8201019293610304565b80fd5b346101f95760203660031901126101f95760206103c9600435611663565b6001600160a01b0360405191168152f35b600435906001600160a01b03821682036101f957565b602435906001600160a01b03821682036101f957565b346101f95760403660031901126101f95761041f6103da565b60243561042b816115cf565b916001600160a01b0380841680918316146104ab5761045d9361045891331490811561045f575b506115f1565b6119d0565b005b6104a5915061049e9061048633916001600160a01b03166000526005602052604060002090565b906001600160a01b0316600052602052604060002090565b5460ff1690565b38610452565b60405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608490fd5b602435906001600160801b03821682036101f957565b604435906001600160801b03821682036101f957565b346101f95760803660031901126101f95761053f6103da565b6105476104fa565b90610550610510565b916001600160a01b039283600b5416330361064f57610619610320926105eb61057a600a5461146b565b9361058485600a55565b61058e8588611df7565b6105c26105a586600052600c602052604060002090565b9384906001600160801b03166001600160801b0319825416179055565b82546001600160801b031660809190911b6fffffffffffffffffffffffffffffffff1916178255565b606435600182018190556040805192546001600160801b038116845260801c60208401528201526060902090565b81604051958695167ff85fc5db92230761a679201cf357af068b25f3ca445054bcf465e9bc61383920600080a482526020820190565b60405162461bcd60e51b815260206004820152601560248201527f4f5441503a206f6e6c79206f6e6c7942726f6b657200000000000000000000006044820152606490fd5b346101f95760403660031901126101f9576024600435813567ffffffffffffffff8082116101f957366023830112156101f95781600401359081116101f957368482840101116101f9576106e8833361179c565b156107c2576000928352602093600d855260408420926107128361070c8654610af5565b86611da3565b8495601f8411600114610751575094849583949593610744575b5050508160011b916000199060031b1c191617905580f35b010135905038808061072c565b91601f1984169661076786600052602060002090565b9387905b8982106107a85750508460019697981061078c575b50505050811b01905580f35b60001960f88660031b161c199201013516905538808080610780565b80600184978683959689010135815501960192019061076b565b60405162461bcd60e51b815260206004820152601c818601527f4f5441503a206f6e6c7920617070726f766564206f72206f776e6572000000006044820152606490fd5b346101f95760003660031901126101f957600b546001600160a01b038116610839576001600160a01b0319163317600b55005b60405163041d6a9760e51b8152600490fd5b60609060031901126101f9576001600160a01b039060043582811681036101f9579160243590811681036101f9579060443590565b346101f95761045d6108913661084b565b916108a461089f843361179c565b6116a5565b611877565b346101f95760003660031901126101f95760206108c46121bd565b604051908152f35b346101f95760203660031901126101f957600435600052600c6020526060604060002060018154910154604051916001600160801b038116835260801c60208301526040820152f35b346101f95761045d6109263661084b565b906040519261093484610b66565b60008452611707565b346101f95760203660031901126101f95760043561095b813361179c565b15610a5f57806109726001600160a01b03926115cf565b508061097d816115cf565b6000938491838352600460205260408320821981541690551680825260036020526040822060001981540190556109d16109c1846000526002602052604060002090565b80546001600160a01b0319169055565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8280a4610a36610a0c82600052600c602052604060002090565b60609060016040519180546001600160801b038116845260801c6020840152015460408201522090565b90337f0f3b9092d3439c7f5326f5648434eeaea09fe55519bc9331f2a1dc2bc1e542458480a480f35b60405163ea8e4eb560e01b8152600490fd5b346101f95760403660031901126101f9576020610a98610a8f6103da565b6024359061179c565b6040519015158152f35b346101f95760203660031901126101f9576020610a9860043560005260026020526001600160a01b0360406000205416151590565b346101f95760203660031901126101f95760206103c96004356115cf565b90600182811c92168015610b25575b6020831014610b0f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610b04565b634e487b7160e01b600052604160045260246000fd5b6060810190811067ffffffffffffffff821117610b6157604052565b610b2f565b6020810190811067ffffffffffffffff821117610b6157604052565b6040810190811067ffffffffffffffff821117610b6157604052565b60c0810190811067ffffffffffffffff821117610b6157604052565b90601f8019910116810190811067ffffffffffffffff821117610b6157604052565b346101f9576020806003193601126101f9576000906004358252600d81526040822060405183819490835490610c1182610af5565b94858552600192878482169182600014610c8e575050600114610c52575b505050610c3e92500383610bba565b61032060405192828493845283019061028f565b869350819291528282205b858310610c76575050610c3e9350820101388080610c2f565b80548389018501528794508693909201918101610c5d565b935094505050610c3e94915060ff191682840152151560051b820101388080610c2f565b346101f95760203660031901126101f9576001600160a01b03610cd36103da565b168015610cfc576000526003602052610320604060002054604051918291829190602083019252565b60405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608490fd5b346101f95760c03660031901126101f957610d6c6103da565b602435604435916064359260ff841684036101f957804211610e5c5761045d93610e4961045892610e23610d9f876115cf565b93610e31610dc9866001600160a01b03166000526008602052604060002090815491600183019055565b9360405193849160208301968c8c89909493926080926001600160a01b0360a08401977f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad8552166020840152604083015260608201520152565b03601f198101845283610bba565b610e4460a4359360843593519020612197565b611fb1565b6001600160a01b03908116911614611f65565b60405162461bcd60e51b815260206004820152601e60248201527f4552433732315065726d69743a206578706972656420646561646c696e6500006044820152606490fd5b346101f95760203660031901126101f9576001600160a01b03610ec26103da565b1660005260086020526020604060002054604051908152f35b346101f9576000806003193601126103a857610f8590610f1a7f0000000000000000000000000000000000000000000000000000000000000000611bf0565b610f437f0000000000000000000000000000000000000000000000000000000000000000611ce9565b9160405191610f5183610b66565b818352604051948594600f60f81b8652610f7760209360e08589015260e088019061028f565b90868203604088015261028f565b904660608601523060808601528260a086015284820360c08601528080855193848152019401925b828110610fbc57505050500390f35b835185528695509381019392810192600101610fad565b346101f9576000806003193601126103a85760405190806001805491610ff883610af5565b8086529282811690811561037e575060011461101e576103208561031481870382610bba565b92508083527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b82841061106057505050810160200161031482610320610304565b80546020858701810191909152909301928101611045565b6024359081151582036101f957565b346101f95760403660031901126101f9576110a06103da565b6110a8611078565b6001600160a01b0382169182331461112b57816110e86110f9923360005260056020526040600020906001600160a01b0316600052602052604060002090565b9060ff801983541691151516179055565b604051901515815233907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190602090a3005b60405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606490fd5b346101f95760003660031901126101f95760206001600160a01b03600b5416604051908152f35b346101f95760003660031901126101f9576020600a54604051908152f35b67ffffffffffffffff8111610b6157601f01601f191660200190565b346101f95760803660031901126101f9576111ea6103da565b6111f26103f0565b6064359167ffffffffffffffff83116101f957366023840112156101f95782600401359161121f836111b5565b9261122d6040519485610bba565b80845236602482870101116101f957602081600092602461045d9801838801378501015260443591611707565b346101f95760203660031901126101f957600435604090600082805161127f81610b45565b8281528260208201520152611293816115cf565b90600052600c602052610320826000209260018151946112b286610b45565b80546001600160801b038116875260801c6020870152015481850152519283928390929160406060916001600160a01b0360808501961684526001600160801b03808251166020860152602082015116828501520151910152565b6040806003193601126101f95767ffffffffffffffff600480358281116101f957366023820112156101f95780820135928084116101f9576024600594368282881b860101116101f95794611360611078565b9336819003604219019160005b88811061137657005b8481831b84010135848112156101f957830185810135908782116101f95760440181360381136101f95760009182916113b38e5180938193611490565b0390305af46113c061149e565b901580611402575b6113db57506113d69061146b565b61136d565b886113fe6113e98d936114ce565b925162461bcd60e51b815292839283016102b4565b0390fd5b50876113c8565b346101f95760403660031901126101f957602060ff61145f6114296103da565b6001600160a01b036114396103f0565b9116600052600584526040600020906001600160a01b0316600052602052604060002090565b54166040519015158152f35b600019811461147a5760010190565b634e487b7160e01b600052601160045260246000fd5b908092918237016000815290565b3d156114c9573d906114af826111b5565b916114bd6040519384610bba565b82523d6000602084013e565b606090565b6044815110611549576004810151810190602081602484019303126101f95760248101519067ffffffffffffffff82116101f95701816043820112156101f957602481015161151c816111b5565b9261152a6040519485610bba565b818452604482840101116101f9576102c591604460208501910161026c565b5060405161155681610b82565b601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b1561158a57565b60405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606490fd5b60005260026020526001600160a01b03604060002054166102c5811515611583565b156115f857565b60405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608490fd5b61168b6116868260005260026020526001600160a01b0360406000205416151590565b611583565b60005260046020526001600160a01b036040600020541690565b156116ac57565b60405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b6064820152608490fd5b91611733939161172e9361171e61089f843361179c565b611729838383611877565b611bac565b611735565b565b1561173c57565b60405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608490fd5b6001600160a01b03806117ae846115cf565b1692818316928484149485156117e4575b505083156117ce575b50505090565b6117da91929350611663565b16143880806117c8565b60ff929550906118139160005260056020526040600020906001600160a01b0316600052602052604060002090565b54169238806117bf565b1561182457565b60405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608490fd5b61189b90611884846115cf565b6001600160a01b038281169390918216841461181d565b831692831561197f576118fd611958926118cd856118c76118bb8a6115cf565b6001600160a01b031690565b1461181d565b6118e46109c1886000526004602052604060002090565b6001600160a01b03166000526003602052604060002090565b6000198154019055611922816001600160a01b03166000526003602052604060002090565b6001815401905561193d856000526002602052604060002090565b906001600160a01b03166001600160a01b0319825416179055565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a4565b60405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b600082815260046020526040902080546001600160a01b0319166001600160a01b0383161790556001600160a01b0380611a09846115cf565b169116907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600080a4565b908160209103126101f957516102c5816101e7565b6102c593926001600160a01b03608093168252600060208301526040820152816060820152019061028f565b90926102c594936080936001600160a01b0380921684521660208301526040820152816060820152019061028f565b909190803b15611ba457611ade6020916001600160a01b03936000604051958680958194630a85bd0160e11b9a8b84523360048501611a49565b0393165af160009181611b74575b50611b6657611af961149e565b80519081611b615760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608490fd5b602001fd5b6001600160e01b0319161490565b611b9691925060203d8111611b9d575b611b8e8183610bba565b810190611a34565b9038611aec565b503d611b84565b505050600190565b92909190823b15611be757611ade9260209260006001600160a01b03604051809781968295630a85bd0160e11b9b8c85523360048601611a75565b50505050600190565b60ff8114611c2e5760ff811690601f8211611c1c5760405191611c1283610b82565b8252602082015290565b604051632cd44ac360e21b8152600490fd5b50604051600654816000611c4183610af5565b80835292600190818116908115611cc75750600114611c68575b506102c592500382610bba565b6006600090815291507ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f5b848310611cac57506102c5935050810160200138611c5b565b81935090816020925483858901015201910190918492611c93565b9050602092506102c594915060ff191682840152151560051b82010138611c5b565b60ff8114611d0b5760ff811690601f8211611c1c5760405191611c1283610b82565b50604051600754816000611d1e83610af5565b80835292600190818116908115611cc75750600114611d4457506102c592500382610bba565b6007600090815291507fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6885b848310611d8857506102c5935050810160200138611c5b565b81935090816020925483858901015201910190918492611d6f565b90601f8111611db157505050565b600091825260208220906020601f850160051c83019410611ded575b601f0160051c01915b828110611de257505050565b818155600101611dd6565b9092508290611dcd565b90604051611e0481610b66565b600081526001600160a01b038316918215611ed557611733938161172e94611e4b611e458360005260026020526001600160a01b0360406000205416151590565b15611f19565b611e6e611e458360005260026020526001600160a01b0360406000205416151590565b611e8b836001600160a01b03166000526003602052604060002090565b60018154019055611eaa8361193d846000526002602052604060002090565b60007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8180a4611aa4565b606460405162461bcd60e51b815260206004820152602060248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152fd5b15611f2057565b60405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606490fd5b15611f6c57565b60405162461bcd60e51b815260206004820152601f60248201527f4552433732315065726d69743a20696e76616c6964207369676e6174757265006044820152606490fd5b916102c59391611fc093612108565b919091611fe8565b60051115611fd257565b634e487b7160e01b600052602160045260246000fd5b611ff181611fc8565b80611ff95750565b61200281611fc8565b6001810361204f5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b61205881611fc8565b600281036120a55760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b806120b1600392611fc8565b146120b857565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831161218b5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa1561217e5781516001600160a01b03811615612178579190565b50600190565b50604051903d90823e3d90fd5b50505050600090600390565b6042906121a26121bd565b906040519161190160f01b8352600283015260228201522090565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163014806122ae575b15612218577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a081526122a881610b9e565b51902090565b507f000000000000000000000000000000000000000000000000000000000000000046146121ef56fea2646970667358221220667fbb7d29a2d4e3f7c81d92cd848ebfa748cc24fd6de692d3541498a3ae3a9e64736f6c63430008130033";

type OTAPConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OTAPConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OTAP__factory extends ContractFactory {
  constructor(...args: OTAPConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "OTAP";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OTAP> {
    return super.deploy(overrides || {}) as Promise<OTAP>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OTAP {
    return super.attach(address) as OTAP;
  }
  override connect(signer: Signer): OTAP__factory {
    return super.connect(signer) as OTAP__factory;
  }
  static readonly contractName: "OTAP";

  public readonly contractName: "OTAP";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OTAPInterface {
    return new utils.Interface(_abi) as OTAPInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): OTAP {
    return new Contract(address, _abi, signerOrProvider) as OTAP;
  }
}
