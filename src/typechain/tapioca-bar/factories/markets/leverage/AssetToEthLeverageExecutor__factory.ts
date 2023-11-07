/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AssetToEthLeverageExecutor,
  AssetToEthLeverageExecutorInterface,
} from "../../../markets/leverage/AssetToEthLeverageExecutor";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract YieldBox",
        name: "_yb",
        type: "address",
      },
      {
        internalType: "contract ISwapper",
        name: "_swapper",
        type: "address",
      },
      {
        internalType: "contract ICluster",
        name: "_cluster",
        type: "address",
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
    ],
    name: "buildSwapDefaultData",
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
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cluster",
    outputs: [
      {
        internalType: "contract ICluster",
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
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "collateralAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralAmountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getAsset",
    outputs: [
      {
        internalType: "uint256",
        name: "assetAmountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "collateralId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "assetAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateralAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetAmountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "collateralAmountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
        internalType: "contract ICluster",
        name: "_cluster",
        type: "address",
      },
    ],
    name: "setCluster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISwapper",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapper",
    outputs: [
      {
        internalType: "contract ISwapper",
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
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract YieldBox",
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
  "0x60a0346100f057601f6116a738819003918201601f19168301916001600160401b038311848410176100f5578084926060946040528339810103126100f0578051906001600160a01b039081831683036100f0576020810151908282168092036100f057604001519182168092036100f05760008054604051946001600160a01b03199491851693919233907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360805283600354161760035582600254161760025533913316171760005561159b908161010c82396080518181816102ce0152818161051b0152610c470152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001b575b361561001957600080fd5b005b6000803560e01c8063078dfbe714610ecf5780630fb5d60d14610acb5780632b3297f914610aa2578063437be62214610a555780634e71e0c8146109a95780638da5cb5b146109825780639c82f2a414610931578063c990ad1c14610326578063dbd01de1146102fd578063de406577146102b8578063e2211658146100d65763e30c3978146100ab575061000e565b346100d357806003193601126100d3576001546040516001600160a01b039091168152602090f35b80fd5b50346100d35760603660031901126100d3576100f0610fd3565b6001600160a01b039160243583811692908390036102b35760405193604085018581106001600160401b0382111761029d576040526002855260209361060f60f31b8587015281600354169160405193631fd177af60e11b8552166004840152602483015260443560448301526000606483015260006084830152600060a483015261014091828160c481855afa928315610292579184939186936101b19693610263575b5050604051630b7ecdc960e31b815294859260048401906113c4565b61016061014483015281806101ca61016482018a611069565b03915afa908115610257578091610225575b5061020d91506101ff604051948592858401526040808401526060830190611069565b03601f198101845283611122565b610221604051928284938452830190611069565b0390f35b90508282813d8311610250575b61023c8183611122565b810103126100d3575061020d9051386101dc565b503d610232565b604051903d90823e3d90fd5b610283929350803d1061028b575b61027b8183611122565b8101906112d0565b903880610195565b503d610271565b6040513d86823e3d90fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b50346100d357806003193601126100d3576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50346100d357806003193601126100d3576002546040516001600160a01b039091168152602090f35b50604461033236610fe9565b600254604051633a304d8b60e21b8152600481018b9052336024820152949893979596949360209185919082906001600160a01b03165afa9283156108e55789936108f0575b5061038561039593611150565b61038d611430565b8101906111a7565b604051633c2f4f4360e11b8152919290916020816004816001600160a01b038a165afa80156108e55789906108a6575b6103d991506001600160a01b03161561122b565b600354604051631fd177af60e11b81526001600160a01b038381166004830152600060248301819052604483018b9052606483018190526084830181905260a4830152909891166101408960c481845afa98891561076457600099610883575b506001600160a01b038316610770575b5050506040906104a396610481600060018060a01b03600354169285519a8b958694859363efa84c6d60e01b855260048501906113c4565b88610144840152306101648401526101a06101848401526101a4830190611069565b03925af194851561076457600095610742575b5084106106ea5784926001600160a01b0383163b156106e657604051630c46aac760e31b815230600482018190526024820152604481018690528481606481896001600160a01b0389165af190811561067e5785916106d2575b505060018060a01b037f0000000000000000000000000000000000000000000000000000000000000000169160405163095ea7b360e01b8082528460048301528660248301526020826044818a60018060a01b038b165af180156106c757610689575b6040519081526001600160a01b03858116600483015260248201899052909560209250869160449183918a91165af193841561067e57869461062f575b5060408051634d4d7cbd60e11b8152959094869493859384926105da9290913090600486016112a1565b03925af1801561062457602093506105f6575b50604051908152f35b6106179060403d60401161061d575b61060f8183611122565b81019061128b565b506105ed565b503d610605565b6040513d85823e3d90fd5b92919093506020833d602011610676575b8161064d60209383611122565b81010312610672576105da946040946106668895611143565b509192939450946105b0565b8480fd5b3d9150610640565b6040513d87823e3d90fd5b6020823d6020116106bf575b816106a260209383611122565b810103126106bb576106b5602092611143565b50610573565b8680fd5b3d9150610695565b6040513d89823e3d90fd5b6106db906110f4565b6106e6578338610510565b8380fd5b60405162461bcd60e51b815260206004820152602a60248201527f4173736574546f4574684c657665726167654578656375746f723a206e6f74206044820152690cadcdeeaced0408aa8960b31b6064820152608490fd5b61075c91955060403d60401161061d5761060f8183611122565b5093386104b6565b6040513d6000823e3d90fd5b6040519063095ea7b360e01b8252600482015260006024820152602081604481600060018060a01b0388165af1801561076457610841575b5060035460405163095ea7b360e01b81526001600160a01b039091166004820152602481019190915290602090829081600081604481015b03926001600160a01b03165af18015610764576107ff575b8080610449565b906020823d602011610839575b8161081960209383611122565b810103126102b3576104a396610830604093611143565b509650906107f8565b3d915061080c565b906020823d60201161087b575b8161085b60209383611122565b810103126102b3576107e092610872602093611143565b509250906107a8565b3d915061084e565b61089f9199506101403d6101401161028b5761027b8183611122565b9738610439565b506020813d6020116108dd575b816108c060209383611122565b810103126108d9576108d46103d991611217565b6103c5565b8880fd5b3d91506108b3565b6040513d8b823e3d90fd5b92506020833d602011610929575b8161090b60209383611122565b810103126108d95761038561092261039594611143565b9350610378565b3d91506108fe565b50346100d35760203660031901126100d3576004356001600160a01b038181169182900361097e576109679083541633146110a9565b600380546001600160a01b03191691909117905580f35b8280fd5b50346100d357806003193601126100d357546040516001600160a01b039091168152602090f35b50346100d357806003193601126100d3576001546001600160a01b039081811633819003610a11578084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b50346100d35760203660031901126100d3576004356001600160a01b038181169182900361097e57610a8b9083541633146110a9565b600280546001600160a01b03191691909117905580f35b50346100d357806003193601126100d3576003546040516001600160a01b039091168152602090f35b50346100d357610ada36610fe9565b9694909360018060a0989495981b0394856002541698604051809a633a304d8b60e21b825289600483015233602483015281604460209d8e935afa9081156108e557908895949392918a91610e86575b5090610385610b399392611150565b96909216604051633c2f4f4360e11b81528a81600481855afa80156108e55785908a90610e4e575b610b6d9250161561122b565b803b15610e4a576040516339f4769360e01b8152306004820152602481018a90529088908290604490829084905af18015610e3f57610e2c575b508260035416958360405192631fd177af60e11b84526000600485015216968760248401528960448401526000606484015260006084840152600060a4840152610140808460c481855afa9a8b1561076457610c2b9b60409561048193600092610e0f575b5050855163efa84c6d60e01b81529c8d958694859360048501906113c4565b03925af196871561076457600097610ded575b508610610d99577f0000000000000000000000000000000000000000000000000000000000000000169260405163095ea7b360e01b9081815285600482015286602482015288816044818a875af180156106c75790899291610d62575b506040519081526001600160a01b038616600482015260248101889052918290604490829089905af1801561067e57908694939291610d18575b5091849391610cff95604094855197889586948593634d4d7cbd60e11b85523090600486016112a1565b03925af190811561025757506105f65750604051908152f35b90919293508681813d8311610d5b575b610d328183611122565b810103126106725792604092858793610d4e610cff9897611143565b5092945050919394610cd5565b503d610d28565b909181813d8311610d92575b610d788183611122565b810103126106bb5790610d8b8992611143565b5038610c9b565b503d610d6e565b60405162461bcd60e51b815260048101889052602660248201527f4173736574546f4574684c657665726167654578656375746f723a206e6f74206044820152650cadcdeeaced60d31b6064820152608490fd5b610e0791975060403d60401161061d5761060f8183611122565b509538610c3e565b610e259250803d1061028b5761027b8183611122565b3880610c0c565b610e38909791976110f4565b9538610ba7565b6040513d8a823e3d90fd5b8780fd5b50508a81813d8311610e7f575b610e658183611122565b810103126108d95784610e7a610b6d92611217565b610b61565b503d610e5b565b809293949596508c8092503d8311610ec8575b610ea38183611122565b810103126108d95791610b3991610385610ebf8a979695611143565b91929350610b2a565b503d610e99565b50346100d35760603660031901126100d357610ee9610fd3565b602435801515810361097e576044359081151582036106e65760018060a01b03928391610f1a8387541633146110a9565b15610fbc571690811590811591610fb4575b5015610f77578083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b031991821617825560018054909116905580f35b60405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152606490fd5b905038610f2c565b9150501660018060a01b0319600154161760015580f35b600435906001600160a01b03821682036102b357565b9060c06003198301126102b357600435916001600160a01b0360243581811681036102b3579260443582811681036102b357926064359260843590811681036102b3579160a4356001600160401b03928382116102b357806023830112156102b35781600401359384116102b357602484830101116102b3576024019190565b919082519283825260005b848110611095575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201611074565b156110b057565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6001600160401b03811161029d57604052565b608081019081106001600160401b0382111761029d57604052565b90601f801991011681019081106001600160401b0382111761029d57604052565b519081151582036102b357565b1561115757565b60405162461bcd60e51b815260206004820152602260248201527f4c657665726167654578656375746f723a2073656e646572206e6f742076616c6044820152611a5960f21b6064820152608490fd5b91906040838203126102b3578235926020808201356001600160401b03928382116102b357019183601f840112156102b357823590811161029d57604051936111f9601f8301601f1916840186611122565b8185528282850101116102b357808260009401838601378301015290565b51906001600160a01b03821682036102b357565b1561123257565b60405162461bcd60e51b815260206004820152602b60248201527f4173736574546f4574684c657665726167654578656375746f723a20746f6b6560448201526a1b881b9bdd081d985b1a5960aa1b6064820152608490fd5b91908260409103126102b3576020825192015190565b9081526001600160a01b0391821660208201529116604082015260608101919091526000608082015260a00190565b80910361014081126102b35760408051926001600160401b0392606085018481118682101761029d57808452608082126102b35761130d81611107565b61131683611217565b81526020830151608087015261132d848401611217565b60a0870152606083015160c087015285526080607f198201126102b3578290815161135781611107565b6080840151815260a0840151602082015260c08401518382015260e08401516060820152602087015260ff1901126102b3578151928383019081118482101761029d576113b9916101209184526113b16101008201611143565b855201611143565b602083015282015290565b60206040610120926060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b6003546001600160a01b03908116908115611514576020906002541691604460405180948193633a304d8b60e21b83526000600484015260248301525afa908115610764576000916114db575b501561148557565b60405162461bcd60e51b815260206004820152602860248201527f4c657665726167654578656375746f723a2073776170706572206e6f742061756044820152671d1a1bdc9a5e995960c21b6064820152608490fd5b906020823d821161150c575b816114f460209383611122565b810103126100d3575061150690611143565b3861147d565b3d91506114e7565b60405162461bcd60e51b815260206004820152602360248201527f4c657665726167654578656375746f723a2073776170706572206e6f742076616044820152621b1a5960ea1b6064820152608490fdfea26469706673582212203d5a024ca968fae5926b36930a0f46d707f7e4a390c5da362b8305d2f72a187464736f6c63430008120033";

type AssetToEthLeverageExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetToEthLeverageExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetToEthLeverageExecutor__factory extends ContractFactory {
  constructor(...args: AssetToEthLeverageExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetToEthLeverageExecutor";
  }

  override deploy(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetToEthLeverageExecutor> {
    return super.deploy(
      _yb,
      _swapper,
      _cluster,
      overrides || {}
    ) as Promise<AssetToEthLeverageExecutor>;
  }
  override getDeployTransaction(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yb, _swapper, _cluster, overrides || {});
  }
  override attach(address: string): AssetToEthLeverageExecutor {
    return super.attach(address) as AssetToEthLeverageExecutor;
  }
  override connect(signer: Signer): AssetToEthLeverageExecutor__factory {
    return super.connect(signer) as AssetToEthLeverageExecutor__factory;
  }
  static readonly contractName: "AssetToEthLeverageExecutor";

  public readonly contractName: "AssetToEthLeverageExecutor";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetToEthLeverageExecutorInterface {
    return new utils.Interface(_abi) as AssetToEthLeverageExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetToEthLeverageExecutor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetToEthLeverageExecutor;
  }
}
