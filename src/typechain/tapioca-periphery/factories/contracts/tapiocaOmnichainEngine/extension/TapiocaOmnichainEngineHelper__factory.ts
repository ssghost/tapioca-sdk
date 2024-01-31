/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TapiocaOmnichainEngineHelper,
  TapiocaOmnichainEngineHelperInterface,
} from "../../../../contracts/tapiocaOmnichainEngine/extension/TapiocaOmnichainEngineHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint16",
        name: "msgIndex",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "expectedIndex",
        type: "uint16",
      },
    ],
    name: "InvalidExtraOptionsIndex",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "msgIndex",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "expectedIndex",
        type: "uint16",
      },
    ],
    name: "InvalidMsgIndex",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "msgType",
        type: "uint16",
      },
    ],
    name: "InvalidMsgType",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "optionType",
        type: "uint16",
      },
    ],
    name: "InvalidOptionType",
    type: "error",
  },
  {
    inputs: [],
    name: "MSG_APPROVALS",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MSG_NFT_APPROVALS",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MSG_REMOTE_TRANSFER",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MSG_SEND",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
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
        internalType: "struct ERC721PermitApprovalMsg[]",
        name: "_erc721PermitApprovalMsg",
        type: "tuple[]",
      },
    ],
    name: "buildNftPermitApprovalMsg",
    outputs: [
      {
        internalType: "bytes",
        name: "msg_",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
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
        internalType: "struct ERC20PermitApprovalMsg[]",
        name: "_erc20PermitApprovalMsg",
        type: "tuple[]",
      },
    ],
    name: "buildPermitApprovalMsg",
    outputs: [
      {
        internalType: "bytes",
        name: "msg_",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "uint32",
                    name: "dstEid",
                    type: "uint32",
                  },
                  {
                    internalType: "bytes32",
                    name: "to",
                    type: "bytes32",
                  },
                  {
                    internalType: "uint256",
                    name: "amountLD",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "minAmountLD",
                    type: "uint256",
                  },
                  {
                    internalType: "bytes",
                    name: "extraOptions",
                    type: "bytes",
                  },
                  {
                    internalType: "bytes",
                    name: "composeMsg",
                    type: "bytes",
                  },
                  {
                    internalType: "bytes",
                    name: "oftCmd",
                    type: "bytes",
                  },
                ],
                internalType: "struct SendParam",
                name: "sendParam",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "nativeFee",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "lzTokenFee",
                    type: "uint256",
                  },
                ],
                internalType: "struct MessagingFee",
                name: "fee",
                type: "tuple",
              },
              {
                internalType: "bytes",
                name: "extraOptions",
                type: "bytes",
              },
              {
                internalType: "address",
                name: "refundAddress",
                type: "address",
              },
            ],
            internalType: "struct LZSendParam",
            name: "lzSendParam",
            type: "tuple",
          },
          {
            internalType: "bytes",
            name: "composeMsg",
            type: "bytes",
          },
        ],
        internalType: "struct RemoteTransferMsg",
        name: "_remoteTransferMsg",
        type: "tuple",
      },
    ],
    name: "buildRemoteTransferMsg",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITapiocaOmnichainEngine",
        name: "_toeToken",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_msg",
        type: "bytes",
      },
      {
        internalType: "uint16",
        name: "_msgType",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_msgIndex",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "_dstEid",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_extraOptions",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_tapComposedMsg",
        type: "bytes",
      },
    ],
    name: "buildToeComposeMsgAndOptions",
    outputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "options",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITapiocaOmnichainEngine",
        name: "_toeToken",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "dstEid",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "recipient",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "amountToSendLD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minAmountToCreditLD",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "msgType",
            type: "uint16",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "index",
                type: "uint8",
              },
              {
                internalType: "uint128",
                name: "gas",
                type: "uint128",
              },
              {
                internalType: "uint128",
                name: "value",
                type: "uint128",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
              {
                internalType: "bytes",
                name: "prevData",
                type: "bytes",
              },
              {
                internalType: "bytes",
                name: "prevOptionsData",
                type: "bytes",
              },
            ],
            internalType: "struct ComposeMsgData",
            name: "composeMsgData",
            type: "tuple",
          },
          {
            internalType: "uint128",
            name: "lzReceiveGas",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "lzReceiveValue",
            type: "uint128",
          },
        ],
        internalType: "struct PrepareLzCallData",
        name: "_prepareLzCallData",
        type: "tuple",
      },
    ],
    name: "prepareLzCall",
    outputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "composeMsg",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "composeOptions",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "dstEid",
                type: "uint32",
              },
              {
                internalType: "bytes32",
                name: "to",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "amountLD",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minAmountLD",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "extraOptions",
                type: "bytes",
              },
              {
                internalType: "bytes",
                name: "composeMsg",
                type: "bytes",
              },
              {
                internalType: "bytes",
                name: "oftCmd",
                type: "bytes",
              },
            ],
            internalType: "struct SendParam",
            name: "sendParam",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "nativeFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "lzTokenFee",
                type: "uint256",
              },
            ],
            internalType: "struct MessagingFee",
            name: "msgFee",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "uint32",
                    name: "dstEid",
                    type: "uint32",
                  },
                  {
                    internalType: "bytes32",
                    name: "to",
                    type: "bytes32",
                  },
                  {
                    internalType: "uint256",
                    name: "amountLD",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "minAmountLD",
                    type: "uint256",
                  },
                  {
                    internalType: "bytes",
                    name: "extraOptions",
                    type: "bytes",
                  },
                  {
                    internalType: "bytes",
                    name: "composeMsg",
                    type: "bytes",
                  },
                  {
                    internalType: "bytes",
                    name: "oftCmd",
                    type: "bytes",
                  },
                ],
                internalType: "struct SendParam",
                name: "sendParam",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "nativeFee",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "lzTokenFee",
                    type: "uint256",
                  },
                ],
                internalType: "struct MessagingFee",
                name: "fee",
                type: "tuple",
              },
              {
                internalType: "bytes",
                name: "extraOptions",
                type: "bytes",
              },
              {
                internalType: "address",
                name: "refundAddress",
                type: "address",
              },
            ],
            internalType: "struct LZSendParam",
            name: "lzSendParam",
            type: "tuple",
          },
          {
            internalType: "bytes",
            name: "oftMsgOptions",
            type: "bytes",
          },
        ],
        internalType: "struct PrepareLzCallReturn",
        name: "prepareLzCallReturn_",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_amountSD",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "_decimalConversionRate",
        type: "uint256",
      },
    ],
    name: "toLD",
    outputs: [
      {
        internalType: "uint256",
        name: "amountLD",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_decimalConversionRate",
        type: "uint256",
      },
    ],
    name: "toSD",
    outputs: [
      {
        internalType: "uint64",
        name: "amountSD",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506120fc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80638855127511610081578063e6fef25b1161005b578063e6fef25b1461018b578063f32380711461019e578063ff4882c3146101ca57600080fd5b806388551275146101415780639016932114610162578063a37137251461018357600080fd5b80634ed47127116100b25780634ed47127146100f857806370e6b08114610118578063845d5fc11461013857600080fd5b806319a66e77146100ce57806319fd16c7146100ef575b600080fd5b6100d76102bc81565b60405161ffff90911681526020015b60405180910390f35b6100d76101f581565b61010b610106366004611419565b6101dd565b6040516100e69190611645565b61012b610126366004611720565b610688565b6040516100e6919061181f565b6100d76101f481565b61015461014f366004611832565b6106b1565b6040519081526020016100e6565b61017561017036600461186b565b6106d0565b6040516100e6929190611938565b6100d7600181565b61012b61019936600461198d565b61079e565b6101b16101ac366004611b46565b6107a9565b60405167ffffffffffffffff90911681526020016100e6565b61012b6101d8366004611b68565b6107b5565b6101e5611004565b61022e6040518060e00160405280600063ffffffff1681526020016000801916815260200160008152602001600081526020016060815260200160608152602001606081525090565b60608061024e604051806040016040528060008152602001600081525090565b6102566110a2565b60606040518060e00160405280896000015163ffffffff1681526020018960200151815260200189604001518152602001896060015181526020016040518060400160405280600281526020017f307800000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600281526020017f307800000000000000000000000000000000000000000000000000000000000081525081526020016040518060400160405280600281526020017f3078000000000000000000000000000000000000000000000000000000000000815250815250955060008860a00151606001515111156103ef576103b6610398604080517e03000000000000000000000000000000000000000000000000000000000000602082015281516002818303018152602290910190915290565b60a08a01518051602082015160409092015160ff909116919061081a565b94506103ea898960a00151606001518a608001518b60a001516000015160ff168a600001518a8e60a00151608001516106d0565b955093505b60a080890151015151156104a95760008860a0015160a00151511161049b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f5f707265706172654c7a43616c6c3a20696e76616c696420707265764f70746960448201527f6f6e73446174610000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060a08088015101516104e6565b50604080517e0300000000000000000000000000000000000000000000000000000000000060208201528151600281830301815260229091019091525b60008860e001516fffffffffffffffffffffffffffffffff161180610521575060008860c001516fffffffffffffffffffffffffffffffff16115b1561053c57610539818960c001518a60e0015161089d565b90505b8451156105675760a08801518051602082015160409092015161056492849260ff169161081a565b90505b6040517f2e45088500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a1690632e450885906105c090899085906000908a90600401611c6f565b6040805180830381865afa1580156105dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106009190611ccd565b9250808660800181905250838660a0018190525060405180608001604052808781526020018481526020018281526020013373ffffffffffffffffffffffffffffffffffffffff1681525091506040518060c0016040528085815260200186815260200187815260200184815260200183815260200182815250965050505050505092915050565b60608160405160200161069b9190611cff565b6040516020818303038152906040529050919050565b60006106c78267ffffffffffffffff8516611dcc565b90505b92915050565b6060806106dc876108e5565b6106e68684610960565b6106f288888886610a0d565b6040517fbc70b35400000000000000000000000000000000000000000000000000000000815290925073ffffffffffffffffffffffffffffffffffffffff8a169063bc70b3549061074b9088908b908990600401611de3565b600060405180830381865afa158015610768573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107909190810190611e0c565b905097509795505050505050565b60606106ca82610a42565b60006106c78284611e7a565b805160609060005b8181101561081357826107e88583815181106107db576107db611eb5565b6020026020010151610a55565b6040516020016107f9929190611ee4565b60408051601f1981840301815291905292506001016107bd565b5050919050565b606084600361082a826000610b0f565b61ffff16146108775761083e816000610b0f565b6040517f3a51740d00000000000000000000000000000000000000000000000000000000815261ffff9091166004820152602401610492565b6000610884868686610b8f565b905061089287600383610c9b565b979650505050505050565b60608360036108ad826000610b0f565b61ffff16146108c15761083e816000610b0f565b60006108cd8585610d06565b90506108db86600183610c9b565b9695505050505050565b61ffff8116600114806108fd575061ffff81166101f4145b8061090d575061ffff81166101f5145b8061091d575061ffff81166102bc145b156109255750565b6040517fa7ac386300000000000000000000000000000000000000000000000000000000815261ffff82166004820152602401610492565b50565b8051158015610971575061ffff8216155b1561097a575050565b8060005b8151156109a05761098e82610db8565b905061099982610dd1565b915061097e565b60006109ad826001611f13565b8451909150156109cd578061ffff168561ffff16036109cd575050505050565b6040517f5a958af900000000000000000000000000000000000000000000000000000000815261ffff808716600483015282166024820152604401610492565b6060818486518588604051602001610a29959493929190611f35565b6040516020818303038152906040529050949350505050565b60608160405160200161069b9190611fae565b8051602080830151604080850151606080870151608088015160a089015160c08a015160e08b0151965199851b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116998b019990995296841b881660348a015293831b9096166048880152605c870152607c86019490945260f81b7fff0000000000000000000000000000000000000000000000000000000000000016609c850152609d84019190915260bd8301529060dd0161069b565b6000610b1c826002612007565b83511015610b86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f746f55696e7431365f6f75744f66426f756e64730000000000000000000000006044820152606401610492565b50016002015190565b60606fffffffffffffffffffffffffffffffff821615610c25576040517fffff00000000000000000000000000000000000000000000000000000000000060f086901b1660208201527fffffffffffffffffffffffffffffffff00000000000000000000000000000000608085811b8216602284015284901b166032820152604201604051602081830303815290604052610c93565b6040517fffff00000000000000000000000000000000000000000000000000000000000060f086901b1660208201527fffffffffffffffffffffffffffffffff00000000000000000000000000000000608085901b1660228201526032016040516020818303038152906040525b949350505050565b6060836003610cab826000610b0f565b61ffff1614610cbf5761083e816000610b0f565b846001610ccc8551610e10565b610cd7906001611f13565b8686604051602001610ced95949392919061201a565b6040516020818303038152906040529150509392505050565b60606fffffffffffffffffffffffffffffffff821615610d6f57604080517fffffffffffffffffffffffffffffffff00000000000000000000000000000000608086811b8216602084015285901b166030820152016040516020818303038152906040526106c7565b6040517fffffffffffffffffffffffffffffffff00000000000000000000000000000000608085901b166020820152603001604051602081830303815290604052905092915050565b60006106ca610dca8360046002610ea8565b6000610b0f565b60606000610de4610dca84600280610ea8565b90506000610df3826006611f13565b61ffff169050610c938482838751610e0b91906120b3565b610ea8565b600061ffff821115610ea4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f36206269747300000000000000000000000000000000000000000000000000006064820152608401610492565b5090565b606081610eb681601f612007565b1015610f1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f770000000000000000000000000000000000006044820152606401610492565b610f288284612007565b84511015610f92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e64730000000000000000000000000000006044820152606401610492565b606082158015610fb15760405191506000825260208201604052610ffb565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610fea578051835260209283019201610fd2565b5050858452601f01601f1916604052505b50949350505050565b6040518060c0016040528060608152602001606081526020016110666040518060e00160405280600063ffffffff1681526020016000801916815260200160008152602001600081526020016060815260200160608152602001606081525090565b8152602001611088604051806040016040528060008152602001600081525090565b81526020016110956110a2565b8152602001606081525090565b60408051610160810190915260006080820181815260a0830182905260c0830182905260e083019190915260606101008301819052610120830181905261014083015281908152602001611109604051806040016040528060008152602001600081525090565b815260606020820152600060409091015290565b73ffffffffffffffffffffffffffffffffffffffff8116811461095d57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff811182821017156111915761119161113f565b60405290565b604051610100810167ffffffffffffffff811182821017156111915761119161113f565b60405160e0810167ffffffffffffffff811182821017156111915761119161113f565b6040805190810167ffffffffffffffff811182821017156111915761119161113f565b6040516060810167ffffffffffffffff811182821017156111915761119161113f565b6040516080810167ffffffffffffffff811182821017156111915761119161113f565b604051601f8201601f1916810167ffffffffffffffff811182821017156112705761127061113f565b604052919050565b803563ffffffff8116811461128c57600080fd5b919050565b803561ffff8116811461128c57600080fd5b803560ff8116811461128c57600080fd5b80356fffffffffffffffffffffffffffffffff8116811461128c57600080fd5b600067ffffffffffffffff8211156112ee576112ee61113f565b50601f01601f191660200190565b600082601f83011261130d57600080fd5b813561132061131b826112d4565b611247565b81815284602083860101111561133557600080fd5b816020850160208301376000918101602001919091529392505050565b600060c0828403121561136457600080fd5b61136c61116e565b9050611377826112a3565b8152611385602083016112b4565b6020820152611396604083016112b4565b6040820152606082013567ffffffffffffffff808211156113b657600080fd5b6113c2858386016112fc565b606084015260808401359150808211156113db57600080fd5b6113e7858386016112fc565b608084015260a084013591508082111561140057600080fd5b5061140d848285016112fc565b60a08301525092915050565b6000806040838503121561142c57600080fd5b82356114378161111d565b9150602083013567ffffffffffffffff8082111561145457600080fd5b90840190610100828703121561146957600080fd5b611471611197565b61147a83611278565b81526020830135602082015260408301356040820152606083013560608201526114a660808401611291565b608082015260a0830135828111156114bd57600080fd5b6114c988828601611352565b60a0830152506114db60c084016112b4565b60c08201526114ec60e084016112b4565b60e08201528093505050509250929050565b60005b83811015611519578181015183820152602001611501565b50506000910152565b6000815180845261153a8160208601602086016114fe565b601f01601f19169290920160200192915050565b63ffffffff81511682526020810151602083015260408101516040830152606081015160608301526000608082015160e0608085015261159160e0850182611522565b905060a083015184820360a08601526115aa8282611522565b91505060c083015184820360c08601526115c48282611522565b95945050505050565b6000815160a084526115e260a085018261154e565b90506020830151611600602086018280518252602090810151910152565b50604083015184820360608601526116188282611522565b91505073ffffffffffffffffffffffffffffffffffffffff60608401511660808501528091505092915050565b602081526000825160e06020840152611662610100840182611522565b90506020840151601f19808584030160408601526116808383611522565b9250604086015191508085840301606086015261169d838361154e565b606087015180516080880152602081015160a0880152909350915060808601519150808584030160c08601526116d383836115cd565b925060a08601519150808584030160e0860152506115c48282611522565b600067ffffffffffffffff82111561170b5761170b61113f565b5060051b60200190565b803561128c8161111d565b6000602080838503121561173357600080fd5b823567ffffffffffffffff81111561174a57600080fd5b8301601f8101851361175b57600080fd5b803561176961131b826116f1565b81815260e0918202830184019184820191908884111561178857600080fd5b938501935b838510156118135780858a0312156117a55760008081fd5b6117ad6111bb565b85356117b88161111d565b8152858701356117c78161111d565b81880152604086810135908201526060808701359082015260806117ec8188016112a3565b9082015260a0868101359082015260c080870135908201528352938401939185019161178d565b50979650505050505050565b6020815260006106c76020830184611522565b6000806040838503121561184557600080fd5b823567ffffffffffffffff8116811461185d57600080fd5b946020939093013593505050565b600080600080600080600060e0888a03121561188657600080fd5b87356118918161111d565b9650602088013567ffffffffffffffff808211156118ae57600080fd5b6118ba8b838c016112fc565b97506118c860408b01611291565b96506118d660608b01611291565b95506118e460808b01611278565b945060a08a01359150808211156118fa57600080fd5b6119068b838c016112fc565b935060c08a013591508082111561191c57600080fd5b506119298a828b016112fc565b91505092959891949750929550565b60408152600061194b6040830185611522565b82810360208401526115c48185611522565b60006040828403121561196f57600080fd5b6119776111de565b9050813581526020820135602082015292915050565b600060208083850312156119a057600080fd5b823567ffffffffffffffff808211156119b857600080fd5b90840190606082870312156119cc57600080fd5b6119d4611201565b82356119df8161111d565b815282840135828111156119f257600080fd5b830160a08189031215611a0457600080fd5b611a0c611224565b813584811115611a1b57600080fd5b820160e0818b031215611a2d57600080fd5b611a356111bb565b611a3e82611278565b815287820135888201526040820135604082015260608201356060820152608082013586811115611a6e57600080fd5b611a7a8c8285016112fc565b60808301525060a082013586811115611a9257600080fd5b611a9e8c8285016112fc565b60a08301525060c082013586811115611ab657600080fd5b611ac28c8285016112fc565b60c083015250825250611ad78983880161195d565b86820152606082013584811115611aed57600080fd5b611af98a8285016112fc565b604083015250611b0b60808301611715565b6060820152808684015250506040830135935081841115611b2b57600080fd5b611b37878585016112fc565b60408201529695505050505050565b60008060408385031215611b5957600080fd5b50508035926020909101359150565b60006020808385031215611b7b57600080fd5b823567ffffffffffffffff811115611b9257600080fd5b8301601f81018513611ba357600080fd5b8035611bb161131b826116f1565b81815260089190911b82018301908381019087831115611bd057600080fd5b928401925b82841015610892576101008489031215611bef5760008081fd5b611bf7611197565b8435611c028161111d565b8152611c0f858701611715565b868201526040611c20818701611715565b90820152606085810135908201526080808601359082015260a0611c458187016112a3565b9082015260c0858101359082015260e0808601359082015282526101009093019290840190611bd5565b60a081526000611c8260a083018761154e565b8281036020840152611c948187611522565b905084151560408401528281036060840152611cb08185611522565b838103608090940193909352505060008152602001949350505050565b600060408284031215611cdf57600080fd5b611ce76111de565b82518152602083015160208201528091505092915050565b602080825282518282018190526000919060409081850190868401855b82811015611d90578151805173ffffffffffffffffffffffffffffffffffffffff908116865287820151168786015285810151868601526060808201519086015260808082015160ff169086015260a0808201519086015260c0908101519085015260e09093019290850190600101611d1c565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820281158282048414176106ca576106ca611d9d565b63ffffffff8416815261ffff831660208201526060604082015260006115c46060830184611522565b600060208284031215611e1e57600080fd5b815167ffffffffffffffff811115611e3557600080fd5b8201601f81018413611e4657600080fd5b8051611e5461131b826112d4565b818152856020838501011115611e6957600080fd5b6115c48260208301602086016114fe565b600082611eb0577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008351611ef68184602088016114fe565b835190830190611f0a8183602088016114fe565b01949350505050565b61ffff818116838216019080821115611f2e57611f2e611d9d565b5092915050565b60008651611f47818460208b016114fe565b80830190507fffff000000000000000000000000000000000000000000000000000000000000808860f01b168252808760f01b166002830152808660f01b166004830152508351611f9f8160068401602088016114fe565b01600601979650505050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff82511660208201526000602083015160606040840152611fea60808401826115cd565b90506040840151601f198483030160608501526115c48282611522565b808201808211156106ca576106ca611d9d565b6000865161202c818460208b016114fe565b80830190507fff00000000000000000000000000000000000000000000000000000000000000808860f81b1682527fffff0000000000000000000000000000000000000000000000000000000000008760f01b166001830152808660f81b1660038301525083516120a48160048401602088016114fe565b01600401979650505050505050565b818103818111156106ca576106ca611d9d56fea2646970667358221220a378a323dfed8180e9df49361f62f6188a5900fdd112db73675ce351af1c72ae64736f6c63430008160033";

type TapiocaOmnichainEngineHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TapiocaOmnichainEngineHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TapiocaOmnichainEngineHelper__factory extends ContractFactory {
  constructor(...args: TapiocaOmnichainEngineHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TapiocaOmnichainEngineHelper";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TapiocaOmnichainEngineHelper> {
    return super.deploy(
      overrides || {}
    ) as Promise<TapiocaOmnichainEngineHelper>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TapiocaOmnichainEngineHelper {
    return super.attach(address) as TapiocaOmnichainEngineHelper;
  }
  override connect(signer: Signer): TapiocaOmnichainEngineHelper__factory {
    return super.connect(signer) as TapiocaOmnichainEngineHelper__factory;
  }
  static readonly contractName: "TapiocaOmnichainEngineHelper";

  public readonly contractName: "TapiocaOmnichainEngineHelper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TapiocaOmnichainEngineHelperInterface {
    return new utils.Interface(_abi) as TapiocaOmnichainEngineHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TapiocaOmnichainEngineHelper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TapiocaOmnichainEngineHelper;
  }
}
