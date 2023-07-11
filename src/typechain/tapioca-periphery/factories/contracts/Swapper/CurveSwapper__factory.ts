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
  "0x60a0346200010957601f62001a8838819003918201601f19168301916001600160401b038311848410176200010e578084926040948552833981010312620001095780516001600160a01b039182821691829003620001095760200151918083168084036200010957620000c29060005460018060a01b03199333858316176000553391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a360018055620000ba84151562000124565b151562000124565b600254161760025560805260405161191690816200017282396080518181816103140152818161052a015281816108b90152818161097201528181610b050152610d570152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b156200012c57565b60405162461bcd60e51b815260206004820152601a60248201527f537761707065723a2061646472657373206e6f742076616c69640000000000006044820152606490fdfe608080604052600436101561001357600080fd5b600090813560e01c9081631a1632101461107d57508063218751b2146110565780633fa2ef5e14610fc35780635bf66e4814610cc5578063715018a614610c5e5780637b2a8bd214610b4f5780638da5cb5b14610b29578063de40657714610ae5578063e3c711a014610a8e578063efa84c6d146101675763f2fde38b1461009a57600080fd5b34610164576020366003190112610164576100b36110d1565b6100bb6111af565b6001600160a01b0380911690811561011057600054826bffffffffffffffffffffffff60a01b821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a380f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b80fd5b50346101645736600319016101a08112610a8a5761014013610164576001600160a01b0361016435166101643503610164576101843567ffffffffffffffff8111610a8a5736602382011215610a8a578060040135826101c682611193565b926101d4604051948561115b565b82845260208401923660248284010111610a865780602460209301853784010152600260015414610a415760026001558291805181019160208281850194031261076657519067ffffffffffffffff821161076657019080603f83011215610734576020820151610244816112ac565b92610252604051948561115b565b8184526040602085019260051b82010192831161091657604001905b828210610a31575050506001600160a01b03600254169061028e816112c4565b516040519063c661065760e01b82526004820152602081602481865afa9081156106ed578591610a12575b5060206102c5836112e7565b5160246040518096819363c661065760e01b835260048301525afa9283156106ed5785936109f1575b50849060843580158015816109e6575b15610860575061033892505b60a43591602435907f0000000000000000000000000000000000000000000000000000000000000000611686565b9061034c610345826112c4565b51916112e7565b51916001600160a01b03600254166040519363c661065760e01b85526fffffffffffffffffffffffffffffffff84166004860152602085602481855afa948515610855578895610834575b5060405163c661065760e01b81526fffffffffffffffffffffffffffffffff8216600482015293602085602481865afa9485156108295789956107f8575b50604051635e0d443f60e01b8152600f82810b600483015283900b602482015260448101859052602081606481875afa9081156107ed578a916107b7575b506101443511610772576040516370a0823160e01b8152306004820152958993906020886024816001600160a01b038b165afa9788156106ed578598610738575b50610460918691611534565b6001600160a01b036002541690813b1561073457836084926040519687958694630f7c084960e21b8652600f0b6004860152600f0b602485015260448401526101443560648401525af18015610729576106f8575b509060206001600160a01b03926024604051809581936370a0823160e01b8352306004840152165afa9182156106ed5785926106b9575b5080821115610686576104fe91611663565b9182156106415761012435801515810361063c57156105ed575060408391610551846001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168093611534565b60a4825180948193634d4d7cbd60e11b835260643560048401523060248401526001600160a01b03610164351660448401528760648401528160848401525af19081156105e257604093916105b3575b505b6001805582519182526020820152f35b6105d39150833d85116105db575b6105cb818361115b565b810190611316565b9050386105a1565b503d6105c1565b6040513d85823e3d90fd5b6040805163a9059cbb60e01b60208201526001600160a01b03610164358116602483015260448083018790528252919550919261063792919061063160648461115b565b16611344565b6105a3565b600080fd5b60405162461bcd60e51b815260206004820152601c60248201527f4375727665537761707065723a20616d6f756e744f75742069732030000000006044820152606490fd5b60405162461bcd60e51b815260206004820152600b60248201526a1cddd85c0819985a5b195960aa1b6044820152606490fd5b9091506020813d6020116106e5575b816106d56020938361115b565b8101031261063c575190386104ec565b3d91506106c8565b6040513d87823e3d90fd5b67ffffffffffffffff8196929611610715576040529360206104b5565b634e487b7160e01b82526041600452602482fd5b6040513d88823e3d90fd5b8380fd5b9097506020813d60201161076a575b816107546020938361115b565b81010312610766575196610460610454565b8480fd5b3d9150610747565b60405162461bcd60e51b815260206004820152601760248201527f696e73756666696369656e742d616d6f756e742d6f75740000000000000000006044820152606490fd5b90506020813d6020116107e5575b816107d26020938361115b565b810103126107e1575138610413565b8980fd5b3d91506107c5565b6040513d8c823e3d90fd5b61081b91955060203d602011610822575b610813818361115b565b8101906112f7565b93386103d5565b503d610809565b6040513d8b823e3d90fd5b61084e91955060203d60201161082257610813818361115b565b9338610397565b6040513d8a823e3d90fd5b906024359182610936575b50505060643580610881575b506103389161030a565b60c43561092c576040519063442c159960e01b8252600482015260e43560248201528660448201526020816064816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa8015610921576108f2575b50610338915b91610877565b602090813d831161091a575b610908818361115b565b8101031261091657386108e6565b8580fd5b503d6108fe565b6040513d89823e3d90fd5b50610338916108ec565b9293509091156109df57506040519063442c159960e01b8252600482015260a43560248201528560448201526020816064816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa9081156107295786916109ad575b505b9038808061086b565b90506020813d6020116109d7575b816109c86020938361115b565b810103126109165751386109a2565b3d91506109bb565b90506109a4565b5060c43515156102fe565b610a0b91935060203d60201161082257610813818361115b565b91386102ee565b610a2b915060203d60201161082257610813818361115b565b386102b9565b815181526020918201910161026e565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b8280fd5b5080fd5b503461016457610a9d36611105565b505060405162461bcd60e51b815260206004820152601d60248201527f4375727665537761707065723a206e6f7420696d706c656d656e746564000000604482015260649150fd5b503461016457806003193601126101645760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346101645780600319360112610164576001600160a01b036020915416604051908152f35b50346101645760c036600319011261016457610c5a90610b6d6110e7565b610b756110f6565b610b7d611267565b50610b86611267565b92610b8f611207565b9160443583526064356020840152610ba5611207565b91808352604083015260043560208301526024356060830152610bc661123d565b9315158452151560208401528352602083015260408201526040519182918291909161012060206040610140840195606081516001600160a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b0390f35b5034610164578060031936011261016457610c776111af565b805473ffffffffffffffffffffffffffffffffffffffff198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b503461016457610cd436611105565b819392910160209384818303126107345780359067ffffffffffffffff821161076657019080601f83011215610734578135610d0f816112ac565b92610d1d604051948561115b565b818452868085019260051b820101928311610916579086808095949301915b838310610fb3575060608601359560808101359350879250907f0000000000000000000000000000000000000000000000000000000000000000908201358415801581610fa6575b15610e3d575050505050610de59350905b6001600160a01b036002541690610dae610345826112c4565b51604051635e0d443f60e01b8152600f92830b6004820152910b602482015260448101929092529092839190829081906064820190565b03915afa918215610e31578092610e01575b5050604051908152f35b9091508282813d8311610e2a575b610e19818361115b565b810103126101645750513880610df7565b503d610e0f565b604051903d90823e3d90fd5b81929394969591610f01575b50505085610e5e575b5050610de59350610d95565b9293919260c0820135610ef35760e0956001600160a01b03606492604051988995869463442c1599831b8652600486015201356024840152896044840152165afa8015610ee85790859291610ebb575b610de593505b3880610e52565b919092813d8311610ee1575b610ed1818361115b565b81010312610a8657818491610eae565b503d610ec7565b6040513d86823e3d90fd5b50509190610de59350610eb4565b929694955092939092909115610f9b5750506040519063442c159960e01b8252600482015260a0820135602482015285604482015286816064816001600160a01b0388165afa908115610729579087949392918791610f66575b505b92388080610e49565b85819394959692503d8311610f94575b610f80818361115b565b810103126109165790869392915138610f5b565b503d610f76565b909493929150610f5d565b5060c08401351515610d84565b8235815291810191859101610d3c565b50346101645760c036600319011261016457610fdd6110d1565b90602435906001600160a01b03808316809303610a8a57610c5a936110006110e7565b926110096110f6565b90611012611267565b5061101b611267565b95611024611207565b946044358652606435602087015261103a611207565b9416845260408401528060208401526060830152610bc661123d565b503461016457806003193601126101645760206001600160a01b0360025416604051908152f35b82346101645780600319360112610164575062461bcd60e51b815260206004820152601d60248201527f4375727665537761707065723a206e6f7420696d706c656d656e7465640000006044820152606490fd5b600435906001600160a01b038216820361063c57565b60843590811515820361063c57565b60a43590811515820361063c57565b6003198101610160811261063c576101401361063c576004916101443567ffffffffffffffff9283821161063c578060238301121561063c578185013593841161063c576024848301011161063c576024019190565b90601f8019910116810190811067ffffffffffffffff82111761117d57604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161117d57601f01601f191660200190565b6001600160a01b036000541633036111c357565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b604051906080820182811067ffffffffffffffff82111761117d5760405260006060838281528260208201528260408201520152565b604051906040820182811067ffffffffffffffff82111761117d5760405260006020838281520152565b604051906060820182811067ffffffffffffffff82111761117d576040528161128e611207565b8152611298611207565b602082015260406112a761123d565b910152565b67ffffffffffffffff811161117d5760051b60200190565b8051156112d15760200190565b634e487b7160e01b600052603260045260246000fd5b8051600110156112d15760400190565b9081602091031261063c57516001600160a01b038116810361063c5790565b919082604091031261063c576020825192015190565b9081602091031261063c5751801515810361063c5790565b6001600160a01b0316604051604081019181831067ffffffffffffffff84111761117d576113b4926040526000806020958685527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656487860152868151910182855af16113ae611430565b91611460565b805190816113c157505050565b82806113d193830101910161132c565b156113d95750565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b3d1561145b573d9061144182611193565b9161144f604051938461115b565b82523d6000602084013e565b606090565b919290156114c25750815115611474575090565b3b1561147d5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156114d55750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b82851061151b575050604492506000838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506114f8565b919091803b1561161e5760405163095ea7b360e01b602082019081526001600160a01b039490941660248201526044808201939093529182526000928392839061157f60648261115b565b51925af161158b611430565b816115ef575b501561159957565b60405162461bcd60e51b815260206004820152602860248201527f42617365537761707065723a3a73616665417070726f76653a20617070726f76604482015267194819985a5b195960c21b6064820152608490fd5b8051801592508215611604575b505038611591565b611617925060208091830101910161132c565b38806115fc565b60405162461bcd60e51b815260206004820152601460248201527f537761707065723a206e6f20636f6e74726163740000000000000000000000006044820152606490fd5b9190820391821161167057565b634e487b7160e01b600052601160045260246000fd5b94939190929461010435801515810361063c5761186157505050821561181c576001600160a01b0316916040928351916370a0823160e01b908184523060048501526020918285602481875afa948515611811576000956117e2575b508651916323b872dd60e01b8484015233602484015230604484015260648301526064825260a0820182811067ffffffffffffffff82111761117d57839261172c91895285611344565b602487518095819382523060048301525afa9182156117d7576000926117a8575b50828211156117655750611762929350611663565b90565b60649085519062461bcd60e51b82526004820152601860248201527f537761707065723a207472616e73666572206661696c656400000000000000006044820152fd5b90918282813d83116117d0575b6117bf818361115b565b81010312610164575051903861174d565b503d6117b5565b85513d6000823e3d90fd5b90948382813d831161180a575b6117f9818361115b565b8101031261016457505193386116e2565b503d6117ef565b87513d6000823e3d90fd5b60405162461bcd60e51b815260206004820152601460248201527f537761707065723a20616d6f756e7420697320300000000000000000000000006044820152606490fd5b604093509060006001600160a01b0360a49386989597985197889687956311a5cc7760e31b8752600487015230602487015230604487015260648601526084850152165af19081156118d4576000916118b8575090565b6118d0915060403d81116105db576105cb818361115b565b5090565b6040513d6000823e3d90fdfea2646970667358221220e3070d3d167975ea23348988304728e1614760f5d24ea81fe2c2b7932d1e23eb64736f6c63430008120033";

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
