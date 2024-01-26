/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CurveSwapper,
  CurveSwapperInterface,
} from "../../../contracts/Swapper/CurveSwapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICurvePool",
        name: "_curvePool",
        type: "address",
      },
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
    name: "AddressNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountZero",
    type: "error",
  },
  {
    inputs: [],
    name: "Failed",
    type: "error",
  },
  {
    inputs: [],
    name: "NoContract",
    type: "error",
  },
  {
    inputs: [],
    name: "NotValid",
    type: "error",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenOutId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawFromYb",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "depositToYb",
        type: "bool",
      },
    ],
    name: "buildSwapData",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
    ],
    name: "buildSwapData",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "curvePool",
    outputs: [
      {
        internalType: "contract ICurvePool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDefaultDexOptions",
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
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getInputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "dexOptions",
        type: "bytes",
      },
    ],
    name: "getOutputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct ISwapper.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60a06040523480156200001157600080fd5b50604051620022f5380380620022f5833981016040819052620000349162000126565b6200003f33620000bd565b60018055816001600160a01b0381166200006c5760405163d23f952160e01b815260040160405180910390fd5b816001600160a01b038116620000955760405163d23f952160e01b815260040160405180910390fd5b5050600280546001600160a01b0319166001600160a01b039384161790551660805262000165565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146200012357600080fd5b50565b600080604083850312156200013a57600080fd5b825162000147816200010d565b60208401519092506200015a816200010d565b809150509250929050565b608051612151620001a46000396000818161028b0152818161038b015281816106c3015281816106f4015281816107f1015261087901526121516000f3fe6080604052600436106100bc5760003560e01c80638da5cb5b11610074578063e3c711a01161004e578063e3c711a0146102ad578063efa84c6d146102cd578063f2fde38b146102f557600080fd5b80638da5cb5b1461022e578063cf144a4e14610259578063de4065771461027957600080fd5b80635bf66e48116100a55780635bf66e481461013e578063715018a61461016c5780637b2a8bd21461018357600080fd5b80631a163210146100c1578063218751b2146100ec575b600080fd5b3480156100cd57600080fd5b506100d6610315565b6040516100e39190611bf6565b60405180910390f35b3480156100f857600080fd5b506002546101199073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e3565b34801561014a57600080fd5b5061015e610159366004611c29565b610365565b6040519081526020016100e3565b34801561017857600080fd5b5061018161049e565b005b34801561018f57600080fd5b506101a361019e366004611cbd565b6104b2565b604080518251805173ffffffffffffffffffffffffffffffffffffffff90811683526020808301518185015282850151909116838501526060918201518284015280850151805160808501528082015160a08501528085015160c08501529091015160e0830152929091015180511515610100830152909101511515610120820152610140016100e3565b34801561023a57600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff16610119565b34801561026557600080fd5b506101a3610274366004611d3d565b6104d6565b34801561028557600080fd5b506101197f000000000000000000000000000000000000000000000000000000000000000081565b3480156102b957600080fd5b5061015e6102c8366004611c29565b6104fb565b6102e06102db366004611de3565b610546565b604080519283526020830191909152016100e3565b34801561030157600080fd5b50610181610310366004611eaa565b610925565b60405162461bcd60e51b815260206004820152601d60248201527f4375727665537761707065723a206e6f7420696d706c656d656e74656400000060448201526060906064015b60405180910390fd5b60008061037483850185611eeb565b905060006103af60808701602088013560608901357f00000000000000000000000000000000000000000000000000000000000000006109c2565b50600254835191925073ffffffffffffffffffffffffffffffffffffffff1690635e0d443f9084906000906103e6576103e6611f76565b60200260200101518460018151811061040157610401611f76565b60209081029190910101516040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152600f92830b6004820152910b602482015260448101849052606401602060405180830381865afa158015610470573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104949190611fa5565b9695505050505050565b6104a6610b67565b6104b06000610bce565b565b6104ba611b1f565b6104cb600080898989898989610c43565b979650505050505050565b6104de611b1f565b6104f085856000808787600080610c43565b90505b949350505050565b60405162461bcd60e51b815260206004820152601d60248201527f4375727665537761707065723a206e6f7420696d706c656d656e746564000000604482015260009060640161035c565b600080610551610ce1565b6000838060200190518101906105679190611fbe565b600254815191925060009173ffffffffffffffffffffffffffffffffffffffff9091169063c661065790849084906105a1576105a1611f76565b60200260200101516040518263ffffffff1660e01b81526004016105c791815260200190565b602060405180830381865afa1580156105e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106089190612044565b600254835191925060009173ffffffffffffffffffffffffffffffffffffffff9091169063c6610657908590600190811061064557610645611f76565b60200260200101516040518263ffffffff1660e01b815260040161066b91815260200190565b602060405180830381865afa158015610688573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ac9190612044565b905060006106e760808b0160208c013560608d01357f00000000000000000000000000000000000000000000000000000000000000006109c2565b50905061072a8a610100017f0000000000000000000000000000000000000000000000000000000000000000858d60000160200135858f60800160200135610d3a565b905061076c8460008151811061074257610742611f76565b60200260200101518560018151811061075d5761075d611f76565b6020026020010151838c611030565b9550600086116107be5760405162461bcd60e51b815260206004820152601c60248201527f4375727665537761707065723a20616d6f756e744f7574206973203000000000604482015260640161035c565b6107d06101408b016101208c01612061565b156108ee5761081673ffffffffffffffffffffffffffffffffffffffff83167f0000000000000000000000000000000000000000000000000000000000000000886114d2565b6040517f9a9af97a00000000000000000000000000000000000000000000000000000000815260608b0135600482015230602482015273ffffffffffffffffffffffffffffffffffffffff898116604483015260648201889052600060848301527f00000000000000000000000000000000000000000000000000000000000000001690639a9af97a9060a40160408051808303816000875af11580156108c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e5919061207e565b955061090f9050565b61090f73ffffffffffffffffffffffffffffffffffffffff831689886117de565b5050505061091c60018055565b94509492505050565b61092d610b67565b73ffffffffffffffffffffffffffffffffffffffff81166109b65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161035c565b6109bf81610bce565b50565b60008085351515806109d8575060008660400135115b156109eb5750508335604085013561091c565b8415610aa2578535156109ff578535610a9f565b6040517f442c159900000000000000000000000000000000000000000000000000000000815260048101869052602087013560248201526000604482015273ffffffffffffffffffffffffffffffffffffffff84169063442c159990606401602060405180830381865afa158015610a7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9f9190611fa5565b91505b831561091c57604086013515610abc578560400135610b5c565b6040517f442c159900000000000000000000000000000000000000000000000000000000815260048101859052606087013560248201526000604482015273ffffffffffffffffffffffffffffffffffffffff84169063442c159990606401602060405180830381865afa158015610b38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5c9190611fa5565b905094509492505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104b05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161035c565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610c4b611b1f565b610c766040518060800160405280600081526020016000815260200160008152602001600081525090565b9485526020808601949094526040805160808101825273ffffffffffffffffffffffffffffffffffffffff9a8b16815298909916888a015287840196909652606087019490945286518088018852901515815292151583820152938352928201929092529182015290565b600260015403610d335760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161035c565b6002600155565b6000610d496020880188612061565b15610e06576040517f8d2e63b80000000000000000000000000000000000000000000000000000000081526004810185905230602482018190526044820152606481018490526084810183905273ffffffffffffffffffffffffffffffffffffffff871690638d2e63b89060a40160408051808303816000875af1158015610dd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df9919061207e565b9093509150829050610494565b82600003610e40576040517fcbca5aa200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff851615610ff0576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8716906370a0823190602401602060405180830381865afa158015610ec9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eed9190611fa5565b9050610f1173ffffffffffffffffffffffffffffffffffffffff8716333087611899565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8816906370a0823190602401602060405180830381865afa158015610f7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa29190611fa5565b9050818111610fdd576040517f625a40e600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fe782826120a2565b92505050610494565b823414611029576040517ff1640ae100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5081610494565b6002546040517fc66106570000000000000000000000000000000000000000000000000000000081526fffffffffffffffffffffffffffffffff86166004820152600091829173ffffffffffffffffffffffffffffffffffffffff9091169063c661065790602401602060405180830381865afa1580156110b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d99190612044565b6002546040517fc66106570000000000000000000000000000000000000000000000000000000081526fffffffffffffffffffffffffffffffff8816600482015291925060009173ffffffffffffffffffffffffffffffffffffffff9091169063c661065790602401602060405180830381865afa15801561115f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111839190612044565b6002546040517f5e0d443f000000000000000000000000000000000000000000000000000000008152600f8a810b600483015289900b60248201526044810188905291925060009173ffffffffffffffffffffffffffffffffffffffff90911690635e0d443f90606401602060405180830381865afa15801561120a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122e9190611fa5565b9050848110156112805760405162461bcd60e51b815260206004820152601760248201527f696e73756666696369656e742d616d6f756e742d6f7574000000000000000000604482015260640161035c565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156112ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113119190611fa5565b60025490915061133b9073ffffffffffffffffffffffffffffffffffffffff8681169116896114d2565b6002546040517f3df02124000000000000000000000000000000000000000000000000000000008152600f8b810b60048301528a900b6024820152604481018990526064810188905273ffffffffffffffffffffffffffffffffffffffff90911690633df0212490608401600060405180830381600087803b1580156113c057600080fd5b505af11580156113d4573d6000803e3d6000fd5b50506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000925073ffffffffffffffffffffffffffffffffffffffff861691506370a0823190602401602060405180830381865afa158015611445573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114699190611fa5565b90508181116114ba5760405162461bcd60e51b815260206004820152600b60248201527f73776170206661696c6564000000000000000000000000000000000000000000604482015260640161035c565b6114c482826120a2565b9a9950505050505050505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b116115395760405162461bcd60e51b815260206004820152601860248201527f53616665417070726f76653a206e6f20636f6e74726163740000000000000000604482015260640161035c565b60405173ffffffffffffffffffffffffffffffffffffffff83811660248301526000604483018190529160609186169060640160408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052516115cf91906120e2565b6000604051808303816000865af19150503d806000811461160c576040519150601f19603f3d011682016040523d82523d6000602084013e611611565b606091505b50909250905081801561163c57508051158061163c57508080602001905181019061163c91906120fe565b6116885760405162461bcd60e51b815260206004820152601b60248201527f53616665417070726f76653a20617070726f7665206661696c65640000000000604482015260640161035c565b82156117d75760405173ffffffffffffffffffffffffffffffffffffffff85811660248301526044820185905286169060640160408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790525161171e91906120e2565b6000604051808303816000865af19150503d806000811461175b576040519150601f19603f3d011682016040523d82523d6000602084013e611760565b606091505b50909250905081801561178b57508051158061178b57508080602001905181019061178b91906120fe565b6117d75760405162461bcd60e51b815260206004820152601b60248201527f53616665417070726f76653a20617070726f7665206661696c65640000000000604482015260640161035c565b5050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526118949084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526118fd565b505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526118f79085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611830565b50505050565b600061195f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166119f29092919063ffffffff16565b905080516000148061198057508080602001905181019061198091906120fe565b6118945760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161035c565b60606104f38484600085856000808673ffffffffffffffffffffffffffffffffffffffff168587604051611a2691906120e2565b60006040518083038185875af1925050503d8060008114611a63576040519150601f19603f3d011682016040523d82523d6000602084013e611a68565b606091505b50915091506104cb8783838760608315611af0578251600003611ae95773ffffffffffffffffffffffffffffffffffffffff85163b611ae95760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161035c565b50816104f3565b6104f38383815115611b055781518083602001fd5b8060405162461bcd60e51b815260040161035c9190611bf6565b6040805160e081019091526000606082018181526080830182905260a0830182905260c083019190915281908152602001611b7b6040518060800160405280600081526020016000815260200160008152602001600081525090565b8152602001611ba160405180604001604052806000151581526020016000151581525090565b905290565b60005b83811015611bc1578181015183820152602001611ba9565b50506000910152565b60008151808452611be2816020860160208601611ba6565b601f01601f19169290920160200192915050565b602081526000611c096020830184611bca565b9392505050565b60006101408284031215611c2357600080fd5b50919050565b60008060006101608486031215611c3f57600080fd5b611c498585611c10565b925061014084013567ffffffffffffffff80821115611c6757600080fd5b818601915086601f830112611c7b57600080fd5b813581811115611c8a57600080fd5b876020828501011115611c9c57600080fd5b6020830194508093505050509250925092565b80151581146109bf57600080fd5b60008060008060008060c08789031215611cd657600080fd5b863595506020870135945060408701359350606087013592506080870135611cfd81611caf565b915060a0870135611d0d81611caf565b809150509295509295509295565b73ffffffffffffffffffffffffffffffffffffffff811681146109bf57600080fd5b60008060008060808587031215611d5357600080fd5b8435611d5e81611d1b565b93506020850135611d6e81611d1b565b93969395505050506040820135916060013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611ddb57611ddb611d83565b604052919050565b6000806000806101a08587031215611dfa57600080fd5b611e048686611c10565b93506101408501359250610160850135611e1d81611d1b565b915061018085013567ffffffffffffffff80821115611e3b57600080fd5b818701915087601f830112611e4f57600080fd5b813581811115611e6157611e61611d83565b611e746020601f19601f84011601611db2565b9150808252886020828501011115611e8b57600080fd5b8060208401602084013760009082016020015294979396509194505050565b600060208284031215611ebc57600080fd5b8135611c0981611d1b565b600067ffffffffffffffff821115611ee157611ee1611d83565b5060051b60200190565b60006020808385031215611efe57600080fd5b823567ffffffffffffffff811115611f1557600080fd5b8301601f81018513611f2657600080fd5b8035611f39611f3482611ec7565b611db2565b81815260059190911b82018301908381019087831115611f5857600080fd5b928401925b828410156104cb57833582529284019290840190611f5d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611fb757600080fd5b5051919050565b60006020808385031215611fd157600080fd5b825167ffffffffffffffff811115611fe857600080fd5b8301601f81018513611ff957600080fd5b8051612007611f3482611ec7565b81815260059190911b8201830190838101908783111561202657600080fd5b928401925b828410156104cb5783518252928401929084019061202b565b60006020828403121561205657600080fd5b8151611c0981611d1b565b60006020828403121561207357600080fd5b8135611c0981611caf565b6000806040838503121561209157600080fd5b505080516020909101519092909150565b818103818111156120dc577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b600082516120f4818460208701611ba6565b9190910192915050565b60006020828403121561211057600080fd5b8151611c0981611caf56fea2646970667358221220e2e30f4ea167acafa4cf4d03531d3d73cda8602f486231c2d7b57d3010ed118864736f6c63430008160033";

type CurveSwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveSwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveSwapper__factory extends ContractFactory {
  constructor(...args: CurveSwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CurveSwapper";
  }

  override deploy(
    _curvePool: PromiseOrValue<string>,
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurveSwapper> {
    return super.deploy(
      _curvePool,
      _yieldBox,
      overrides || {}
    ) as Promise<CurveSwapper>;
  }
  override getDeployTransaction(
    _curvePool: PromiseOrValue<string>,
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_curvePool, _yieldBox, overrides || {});
  }
  override attach(address: string): CurveSwapper {
    return super.attach(address) as CurveSwapper;
  }
  override connect(signer: Signer): CurveSwapper__factory {
    return super.connect(signer) as CurveSwapper__factory;
  }
  static readonly contractName: "CurveSwapper";

  public readonly contractName: "CurveSwapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveSwapperInterface {
    return new utils.Interface(_abi) as CurveSwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveSwapper {
    return new Contract(address, _abi, signerOrProvider) as CurveSwapper;
  }
}