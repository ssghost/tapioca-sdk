/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AssetToGLPLeverageExecutor,
  AssetToGLPLeverageExecutorInterface,
} from "../../../markets/leverage/AssetToGLPLeverageExecutor";

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
      {
        internalType: "contract IERC20",
        name: "_usdc",
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
    stateMutability: "nonpayable",
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
    name: "usdc",
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
        internalType: "contract YieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c03461011857601f61164f38819003918201601f19168301916001600160401b0383118484101761011d57808492608094604052833981010312610118578051906001600160a01b0390818316830361011857602081015182811680910361011857604082015191838316809303610118576060015192831683036101185760008054604051956001600160a01b03199491851693919233907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360805283600354161760035582600254161760025533913316171760005560a05261151b908161013482396080518181816102b9015281816104800152610a8c015260a051818181610356015281816109330152610a450152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6040608081526004908136101561001557600080fd5b600091823560e01c908163078dfbe714610bf75781630fb5d60d1461098b5781632b3297f9146109625781633e413bee1461091e578163437be622146108d25781634e71e0c81461081f5781638da5cb5b146107f75781639c82f2a4146107ab578163c990ad1c14610311578163dbd01de1146102e8578163de406577146102a4578163e2211658146100dd575063e30c3978146100b257600080fd5b346100d957816003193601126100d95760015490516001600160a01b039091168152602090f35b5080fd5b919050346102a05760603660031901126102a0576100f9610d05565b602435936001600160a01b0393909190848616860361029b578351958487018781106001600160401b038211176102865785526002875260209561060f60f31b878901526003541690855190631fd177af60e11b82528180610166610140978894604435918985016110b8565b0381855afa93841561027c579087939291869561024d575b505061019a8651948593630b7ecdc960e31b85528401906110ef565b61016061014483015281806101b361016482018b610d9b565b03915afa91821561024257809261020b575b5050906101f8610207926101ea83519687928784015284808401526060830190610d9b565b03601f198101865285610e6a565b51928284938452830190610d9b565b0390f35b9091508382813d831161023b575b6102238183610e6a565b810103126102385750516101f86102076101c5565b80fd5b503d610219565b8351903d90823e3d90fd5b61026d929550803d10610275575b6102658183610e6a565b810190610fc4565b92388061017e565b503d61025b565b86513d87823e3d90fd5b604183634e487b7160e01b6000525260246000fd5b600080fd5b8280fd5b5050346100d957816003193601126100d957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346100d957816003193601126100d95760025490516001600160a01b039091168152602090f35b919050346102a05761037d919261034361032a36610d1b565b61033b9b959b979297969496611384565b810190610ee1565b93929b918c60018060a09e949e1b0394857f000000000000000000000000000000000000000000000000000000000000000016809561115b565b9a8b10610766578851633c2f4f4360e11b815260209b87841694908d838981895afa92831561075c57908d918c94610719575b5083866103c99516956103c4871515610f43565b61115b565b998a106106d55788519563095ea7b360e01b9687815284878201528960248201528c816044818d875af180156106cb57928d928b8a8f948f97610680575b5095519586526001600160a01b039091168986019081526020810193909352849283919082906040015b03925af1801561062a5761064c575b50813b15610648578751630c46aac760e31b81523085820152306024820152896044820152878160648183875af1801561062a57908891610634575b50507f00000000000000000000000000000000000000000000000000000000000000001693875181815285858201528760248201528a816044818b875af1801561062a57918a918c936105e7575b5089519081526001600160a01b038716868201908152602081019290925292839182908a9082906040015b03925af180156105dd57918896959391889593610594575b508451634d4d7cbd60e11b81529182019081523060208201526001600160a01b039093166040840152606083019590955260006080830152849182908590829060a00103925af19081156102425750610568575b5051908152f35b61058790823d841161058d575b61057f8183610e6a565b810190610fae565b50610561565b503d610575565b8092949697508a80929496503d83116105d6575b6105b28183610e6a565b810103126105d25791858794926105cb8a989795610fa1565b509061050d565b8580fd5b503d6105a8565b87513d88823e3d90fd5b8092508391933d8311610623575b6105ff8183610e6a565b8101031261061f576104f5928b926106178c93610fa1565b5090936104ca565b8780fd5b503d6105f5565b89513d8a823e3d90fd5b61063d90610e26565b61064857863861047c565b8680fd5b8a81813d8311610679575b6106618183610e6a565b8101031261061f5761067290610fa1565b5038610440565b503d610657565b945050509290935081813d83116106c4575b61069c8183610e6a565b810103126106c057610431928d928b8a8f948f906106b990610fa1565b5096610407565b8980fd5b503d610692565b8b513d8c823e3d90fd5b885162461bcd60e51b81528086018c9052602a60248201526000805160206114c68339815191526044820152690656e6f75676820474c560b41b6064820152608490fd5b8f80929495508193503d8311610755575b6107348183610e6a565b81010312610751576103c9929161074b8e92610f2f565b936103b0565b8a80fd5b503d61072a565b8c513d8d823e3d90fd5b885162461bcd60e51b8152602081870152602b60248201526000805160206114c683398151915260448201526a656e6f756768205553444360a81b6064820152608490fd5b8390346100d95760203660031901126100d957356001600160a01b03818116918290036102a0576107e0908354163314610ddb565b600380546001600160a01b03191691909117905580f35b5050346100d957816003193601126100d957905490516001600160a01b039091168152602090f35b919050346102a057826003193601126102a0576001546001600160a01b0392909183831691903383900361088f5750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b8390346100d95760203660031901126100d957356001600160a01b03818116918290036102a057610907908354163314610ddb565b600280546001600160a01b03191691909117905580f35b5050346100d957816003193601126100d957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346100d957816003193601126100d95760035490516001600160a01b039091168152602090f35b919050346102a0576109b191926109a136610d1b565b61033b9a949a9992969399611384565b8951633c2f4f4360e11b815260209c929b6001600160a01b039893959294929391929189168e848a81845afa938415610bb1578f8d95610bbf575b50506109fb8a85161515610f43565b803b15610bbb578c516339f4769360e01b815230818b019081526020810184905290918d9183919082908490829060400103925af18015610bb157610b98575b509083610a6c928a7f000000000000000000000000000000000000000000000000000000000000000016809561115b565b918210610b5357610a809291848c9261115b565b978810610b0d578316927f00000000000000000000000000000000000000000000000000000000000000001692865163095ea7b360e01b9081815285858201528760248201528a816044818b875af1801561062a57918a918c936105e7575089519081526001600160a01b038716868201908152602081019290925292839182908a9082906040016104f5565b865162461bcd60e51b81528084018a9052602c60248201526000805160206114c683398151915260448201526b195b9bdd59da08105cdcd95d60a21b6064820152608490fd5b895162461bcd60e51b81528087018d9052602b60248201526000805160206114c683398151915260448201526a656e6f756768205544534360a81b6064820152608490fd5b610a6c92919b610ba88692610e26565b9b919250610a3b565b8d513d8e823e3d90fd5b8b80fd5b9080929550813d8311610bf0575b610bd78183610e6a565b81010312610bbb57610be890610f2f565b92388f6109ec565b503d610bcd565b919050346102a05760603660031901126102a057610c13610d05565b91602435918215158303610d01576044359283151584036105d25760018060a01b03948591610c46838954163314610ddb565b15610ce8571692831590811591610ce0575b5015610ca55750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b031991821617825560018054909116905580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b905038610c58565b93505050501660018060a01b0319600154161760015580f35b8480fd5b600435906001600160a01b038216820361029b57565b9060c060031983011261029b57600435916001600160a01b03602435818116810361029b5792604435828116810361029b579260643592608435908116810361029b579160a4356001600160401b039283821161029b578060238301121561029b57816004013593841161029b576024848301011161029b576024019190565b919082519283825260005b848110610dc7575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610da6565b15610de257565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6001600160401b038111610e3957604052565b634e487b7160e01b600052604160045260246000fd5b608081019081106001600160401b03821117610e3957604052565b90601f801991011681019081106001600160401b03821117610e3957604052565b81601f8201121561029b578035906001600160401b038211610e395760405192610ebf601f8401601f191660200185610e6a565b8284526020838301011161029b57816000926020809301838601378301015290565b60808183031261029b578035926001600160401b0391602081013583811161029b5784610f0f918301610e8b565b93604082013593606083013590811161029b57610f2c9201610e8b565b90565b51906001600160a01b038216820361029b57565b15610f4a57565b60405162461bcd60e51b815260206004820152602960248201527f4173736574546f474c504c657665726167654578656375746f723a20676c70206044820152681b9bdd081d985b1a5960ba1b6064820152608490fd5b5190811515820361029b57565b919082604091031261029b576020825192015190565b809103610140811261029b5760408051926001600160401b03926060850184811186821017610e39578084526080821261029b5761100181610e4f565b61100a83610f2f565b815260208301516080870152611021848401610f2f565b60a0870152606083015160c087015285526080607f1982011261029b578290815161104b81610e4f565b6080840151815260a0840151602082015260c08401518382015260e08401516060820152602087015260ff19011261029b5781519283830190811184821017610e39576110ad916101209184526110a56101008201610fa1565b855201610fa1565b602083015282015290565b6001600160a01b0391821681529116602082015260408101919091526000606082018190526080820181905260a082015260c00190565b60206040610120926060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b918095949293919360018060a01b0390816003541690604096875190631fd177af60e11b8252818061119661014098899487600485016110b8565b0381865afa94851561137957600095611356575b505082169788611245575b5050849596506111e790600395949554169161120885519687958694859463efa84c6d60e01b865260048601906110ef565b610144840152306101648401526101a06101848401526101a4830190610d9b565b039134905af191821561123b5760009261122157505090565b6112379250803d1061058d5761057f8183610e6a565b5090565b513d6000823e3d90fd5b86519863095ea7b360e01b92838b5260048b0152600060248b01526020998a816044816000865af1801561134b57908b939291611312575b50600354895194855285166001600160a01b031660048501526024840191909152829081600081604481015b03925af1978815611307578697989695966112ca575b8897509594956111b5565b9080929550813d8311611300575b6112e28183610e6a565b8101031261029b5785936112f86111e792610fa1565b5090386112bf565b503d6112d8565b86513d6000823e3d90fd5b9283813d8311611344575b6113278183610e6a565b8101031261029b576112a99361133d8c94610fa1565b509361127d565b503d61131d565b89513d6000823e3d90fd5b84929550908161137192903d10610275576102658183610e6a565b9390386111aa565b88513d6000823e3d90fd5b6003546001600160a01b03908116908115611474576020906002541691604460405180948193633a304d8b60e21b83526000600484015260248301525afa9081156114685760009161142f575b50156113d957565b60405162461bcd60e51b815260206004820152602860248201527f4c657665726167654578656375746f723a2073776170706572206e6f742061756044820152671d1a1bdc9a5e995960c21b6064820152608490fd5b906020823d8211611460575b8161144860209383610e6a565b81010312610238575061145a90610fa1565b386113d1565b3d915061143b565b6040513d6000823e3d90fd5b60405162461bcd60e51b815260206004820152602360248201527f4c657665726167654578656375746f723a2073776170706572206e6f742076616044820152621b1a5960ea1b6064820152608490fdfe4173736574546f474c504c657665726167654578656375746f723a206e6f7420a2646970667358221220a6796eed2625a1b3aa81462555eb3db1ed2f703427970cb32e60a6a195259f9164736f6c63430008120033";

type AssetToGLPLeverageExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetToGLPLeverageExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetToGLPLeverageExecutor__factory extends ContractFactory {
  constructor(...args: AssetToGLPLeverageExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetToGLPLeverageExecutor";
  }

  override deploy(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _usdc: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetToGLPLeverageExecutor> {
    return super.deploy(
      _yb,
      _swapper,
      _cluster,
      _usdc,
      overrides || {}
    ) as Promise<AssetToGLPLeverageExecutor>;
  }
  override getDeployTransaction(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _usdc: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yb,
      _swapper,
      _cluster,
      _usdc,
      overrides || {}
    );
  }
  override attach(address: string): AssetToGLPLeverageExecutor {
    return super.attach(address) as AssetToGLPLeverageExecutor;
  }
  override connect(signer: Signer): AssetToGLPLeverageExecutor__factory {
    return super.connect(signer) as AssetToGLPLeverageExecutor__factory;
  }
  static readonly contractName: "AssetToGLPLeverageExecutor";

  public readonly contractName: "AssetToGLPLeverageExecutor";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetToGLPLeverageExecutorInterface {
    return new utils.Interface(_abi) as AssetToGLPLeverageExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetToGLPLeverageExecutor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetToGLPLeverageExecutor;
  }
}
