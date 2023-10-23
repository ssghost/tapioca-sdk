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
  "0x60a0346200010957601f62001b0638819003918201601f19168301916001600160401b038311848410176200010e578084926040948552833981010312620001095780516001600160a01b039182821691829003620001095760200151918083168084036200010957620000c29060005460018060a01b03199333858316176000553391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a360018055620000ba84151562000124565b151562000124565b600254161760025560805260405161199490816200017282396080518181816102f2015281816104f60152818161087b0152818161093701528181610aa10152610cde0152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b156200012c57565b60405162461bcd60e51b815260206004820152601a60248201527f537761707065723a2061646472657373206e6f742076616c69640000000000006044820152606490fdfe608080604052600436101561001357600080fd5b600090813560e01c9081631a16321014610ffe57508063218751b214610fd55780633fa2ef5e14610f415780635bf66e4814610c4d578063715018a614610c055780637b2a8bd214610af75780638da5cb5b14610ad0578063de40657714610a8b578063e3c711a014610a5b578063efa84c6d1461014d5763f2fde38b1461009a57600080fd5b3461014a57602036600319011261014a576100b3611026565b6100bb611104565b6001600160a01b039081169081156100f6576000548260018060a01b03198216176000551660008051602061193f833981519152600080a380f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b80fd5b5036600319016101a08112610a57576101401361014a57610164356001600160a01b038116900361014a57610184356001600160401b038111610a575736602382011215610a57578060040135826101a4826110e9565b926101b260405194856110b0565b82845260208401923660248284010111610a535780602460209301853784010152600260015414610a0e576002600155829180518101916020828185019403126107335751906001600160401b03821161073357019080603f8301121561070157602082015161022181611236565b9261022f60405194856110b0565b8184526040602085019260051b8201019283116108e057604001905b8282106109fe5750506002546001600160a01b031691905061026c8161124d565b516040519063c661065760e01b82526004820152602081602481865afa9081156106bb5785916109df575b5060206102a383611270565b5160246040518096819363c661065760e01b835260048301525afa9283156106bb5785936109be575b50849060843580158015816109b3575b15610827575061031692505b60a43591602435907f00000000000000000000000000000000000000000000000000000000000000006116f0565b9061032a6103238261124d565b5191611270565b5160025460405163c661065760e01b81526001600160801b038416600482015293916001600160a01b0390911690602085602481855afa94851561081c5788956107fb575b5060405163c661065760e01b81526001600160801b038216600482015293602085602481865afa9485156107f05789956107bf575b50604051635e0d443f60e01b8152602081806103cb8887600f0b87600f0b60048501611280565b0381875afa9081156107b4578a9161077e575b50610144351161073f576040516370a0823160e01b8152306004820152958993906020886024816001600160a01b038b165afa9788156106bb578598610705575b5061042b918691611550565b6002546001600160a01b031690813b1561070157836084926040519687958694630f7c084960e21b8652600f0b6004860152600f0b602485015260448401526101443560648401525af180156106f6576106c6575b506040516370a0823160e01b81523060048201529190602090839060249082906001600160a01b03165afa9182156106bb578592610687575b5080821115610654576104cb916116cd565b9182156106105761012435801515810361060b57156105bc57506040839161051d8460018060a01b037f0000000000000000000000000000000000000000000000000000000000000000168093611550565b8151634d4d7cbd60e11b8152606480356004830152306024830152610164356001600160a01b0316604483015281018590526084810184905292839160a49183915af19081156105b15760409391610582575b505b6001805582519182526020820152f35b6105a29150833d85116105aa575b61059a81836110b0565b8101906112bb565b905038610570565b503d610590565b6040513d85823e3d90fd5b90604093506106069084519063a9059cbb60e01b60208301526105f8826105ea8761016435602484016112d1565b03601f1981018452836110b0565b6001600160a01b0316611304565b610572565b600080fd5b60405162461bcd60e51b815260206004820152601c60248201527b04375727665537761707065723a20616d6f756e744f757420697320360241b6044820152606490fd5b60405162461bcd60e51b815260206004820152600b60248201526a1cddd85c0819985a5b195960aa1b6044820152606490fd5b9091506020813d6020116106b3575b816106a3602093836110b0565b8101031261060b575190386104b9565b3d9150610696565b6040513d87823e3d90fd5b9094906001600160401b0381116106e257604052936020610480565b634e487b7160e01b82526041600452602482fd5b6040513d88823e3d90fd5b8380fd5b9097506020813d602011610737575b81610721602093836110b0565b8101031261073357519661042b61041f565b8480fd5b3d9150610714565b60405162461bcd60e51b81526020600482015260176024820152761a5b9cdd59999a58da595b9d0b585b5bdd5b9d0b5bdd5d604a1b6044820152606490fd5b90506020813d6020116107ac575b81610799602093836110b0565b810103126107a85751386103de565b8980fd5b3d915061078c565b6040513d8c823e3d90fd5b6107e291955060203d6020116107e9575b6107da81836110b0565b81019061129c565b93386103a4565b503d6107d0565b6040513d8b823e3d90fd5b61081591955060203d6020116107e9576107da81836110b0565b933861036f565b6040513d8a823e3d90fd5b906024359182610900575b50505060643580610848575b50610316916102e8565b60c4356108f65760405163442c159960e01b8152600481019190915260e4356024820152604481018790526020816064817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa80156108eb576108bc575b50610316915b9161083e565b602090813d83116108e4575b6108d281836110b0565b810103126108e057386108b0565b8580fd5b503d6108c8565b6040513d89823e3d90fd5b50610316916108b6565b9293509091156109ac575060405163442c159960e01b8152600481019190915260a4356024820152604481018690526020816064817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156106f657869161097a575b505b90388080610832565b90506020813d6020116109a4575b81610995602093836110b0565b810103126108e057513861096f565b3d9150610988565b9050610971565b5060c43515156102dc565b6109d891935060203d6020116107e9576107da81836110b0565b91386102cc565b6109f8915060203d6020116107e9576107da81836110b0565b38610297565b815181526020918201910161024b565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fd5b8280fd5b5080fd5b503461014a57610a6a3661105a565b505060405162461bcd60e51b8152905080610a87600482016111fe565b0390fd5b503461014a578060031936011261014a576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b503461014a578060031936011261014a57546040516001600160a01b039091168152602090f35b503461014a5760c036600319011261014a57610c0190610b1561103c565b610b1d61104b565b610b256111ba565b50610b2e6111ba565b92610b3761115c565b9160443583526064356020840152610b4d61115c565b91808352604083015260043560208301526024356060830152610b6e611191565b93151584521515602084015283526020830152604082015260405191829182919091610120602060406101408401956060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b0390f35b503461014a578060031936011261014a57610c1e611104565b80546001600160a01b03198116825581906001600160a01b031660008051602061193f8339815191528280a380f35b503461014a57610c5c3661105a565b81939291016020938481830312610701578035906001600160401b03821161073357019080601f83011215610701578135610c9681611236565b92610ca460405194856110b0565b818452868085019260051b8201019283116108e0579086808095949301915b838310610f31575060608601359560808101359350879250907f0000000000000000000000000000000000000000000000000000000000000000908201358415801581610f24575b15610db2575050505050610d5a9350905b6002546001600160a01b031690610d356103238261124d565b5160405195869485938493635e0d443f60e01b8552600f0b90600f0b60048501611280565b03915afa918215610da6578092610d76575b5050604051908152f35b9091508282813d8311610d9f575b610d8e81836110b0565b8101031261014a5750513880610d6c565b503d610d84565b604051903d90823e3d90fd5b81929394969591610e7c575b50505085610dd3575b5050610d5a9350610d1c565b9293919260c0820135610e6e5760405163442c159960e01b8152600481019690965260e09190910135602486015260448501869052849060649082906001600160a01b03165afa8015610e635790859291610e36575b610d5a93505b3880610dc7565b919092813d8311610e5c575b610e4c81836110b0565b81010312610a5357818491610e29565b503d610e42565b6040513d86823e3d90fd5b50509190610d5a9350610e2f565b929694955092939092909115610f1957505060405163442c159960e01b8152600481019190915260a082013560248201526044810186905286816064816001600160a01b0388165afa9081156106f6579087949392918791610ee4575b505b92388080610dbe565b85819394959692503d8311610f12575b610efe81836110b0565b810103126108e05790869392915138610ed9565b503d610ef4565b909493929150610edb565b5060c08401351515610d0b565b8235815291810191859101610cc3565b503461014a5760c036600319011261014a57610f5b611026565b906024356001600160a01b038181169291839003610a5757610c0193610f7f61103c565b92610f8861104b565b90610f916111ba565b50610f9a6111ba565b95610fa361115c565b9460443586526064356020870152610fb961115c565b9416845260408401528060208401526060830152610b6e611191565b503461014a578060031936011261014a576002546040516001600160a01b039091168152602090f35b823461014a578060031936011261014a575062461bcd60e51b815280610a87600482016111fe565b600435906001600160a01b038216820361060b57565b60843590811515820361060b57565b60a43590811515820361060b57565b6003198101610160811261060b576101401361060b576004916001600160401b0391610144359083821161060b578060238301121561060b578185013593841161060b576024848301011161060b576024019190565b601f909101601f19168101906001600160401b038211908210176110d357604052565b634e487b7160e01b600052604160045260246000fd5b6001600160401b0381116110d357601f01601f191660200190565b6000546001600160a01b0316330361111857565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b60405190608082016001600160401b038111838210176110d35760405260006060838281528260208201528260408201520152565b60408051919082016001600160401b038111838210176110d35760405260006020838281520152565b60405190606082016001600160401b038111838210176110d357604052816111e061115c565b81526111ea61115c565b602082015260406111f9611191565b910152565b60609060208152601d60208201527f4375727665537761707065723a206e6f7420696d706c656d656e74656400000060408201520190565b6001600160401b0381116110d35760051b60200190565b80511561125a5760200190565b634e487b7160e01b600052603260045260246000fd5b80516001101561125a5760400190565b6040919493926060820195600f0b8252600f0b60208201520152565b9081602091031261060b57516001600160a01b038116810361060b5790565b919082604091031261060b576020825192015190565b6001600160a01b039091168152602081019190915260400190565b9081602091031261060b5751801515810361060b5790565b60408051908101916001600160a01b03166001600160401b038311828410176110d357611373926040526000806020958685527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656487860152868151910182855af161136d6113ef565b9161141f565b8051908161138057505050565b82806113909383010191016112ec565b156113985750565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b3d1561141a573d90611400826110e9565b9161140e60405193846110b0565b82523d6000602084013e565b606090565b919290156114815750815115611433575090565b3b1561143c5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156114945750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b8285106114da575050604492506000838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506114b7565b156114fa57565b60405162461bcd60e51b815260206004820152602860248201527f42617365537761707065723a3a73616665417070726f76653a20617070726f76604482015267194819985a5b195960c21b6064820152608490fd5b929190833b156116915760405163095ea7b360e01b60208083018281526001600160a01b0385166024850152600060448086018290528552919591949293919291608081016001600160401b0381118282101761167d578695936115d9878080966116199d9e99966115ff966040525190828b5af16115cd6113ef565b8161164d575b506114f3565b6115f16040519384928b8401978852602484016112d1565b03601f1981018352826110b0565b51925af19061160c6113ef565b8261161b575b50506114f3565b565b8091925051918215928315611635575b5050503880611612565b61164593508201810191016112ec565b38808061162b565b8051801592508c908315611665575b505050386115d3565b61167593508201810191016112ec565b388b8161165c565b634e487b7160e01b87526041600452602487fd5b60405162461bcd60e51b815260206004820152601460248201527314ddd85c1c195c8e881b9bc818dbdb9d1c9858dd60621b6044820152606490fd5b919082039182116116da57565b634e487b7160e01b600052601160045260246000fd5b94939190929461010435801515810361060b576118c057505050821561188457604080516370a0823160e01b808252306004830152919490926001600160a01b031691602091908285602481875afa9485156118795760009561184a575b5086516323b872dd60e01b8482015233602482015230604482015260648082019390935291825260a082016001600160401b038111838210176110d357839261179991895285611304565b602487518095819382523060048301525afa91821561183f57600092611810575b50828211156117d257506117cf9293506116cd565b90565b60649085519062461bcd60e51b82526004820152601860248201527714ddd85c1c195c8e881d1c985b9cd9995c8819985a5b195960421b6044820152fd5b90918282813d8311611838575b61182781836110b0565b8101031261014a57505190386117ba565b503d61181d565b85513d6000823e3d90fd5b90948382813d8311611872575b61186181836110b0565b8101031261014a575051933861174e565b503d611857565b87513d6000823e3d90fd5b60405162461bcd60e51b81526020600482015260146024820152730537761707065723a20616d6f756e7420697320360641b6044820152606490fd5b6040935090600060a49285979496975196879586946311a5cc7760e31b865260048601523060248601523060448601526064850152608484015260018060a01b03165af190811561193257600091611916575090565b61192e915060403d81116105aa5761059a81836110b0565b5090565b6040513d6000823e3d90fdfe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a2646970667358221220618c98d9604f5a06a99dfe02eb96b7412a69a17c0735df620ecbf13731625c8964736f6c63430008120033";

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
