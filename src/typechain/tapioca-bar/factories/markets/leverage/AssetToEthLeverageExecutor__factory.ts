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
  "0x60a0346100f057601f61144438819003918201601f19168301916001600160401b038311848410176100f5578084926060946040528339810103126100f0578051906001600160a01b039081831683036100f0576020810151908282168092036100f057604001519182168092036100f05760008054604051946001600160a01b03199491851693919233907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a3608052836003541617600355826002541617600255339133161717600055611338908161010c82396080518181816102c80152818161049a0152610b520152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60406080815260049081361015610020575b5050361561001e57600080fd5b005b600091823560e01c908163078dfbe714610cc65781630fb5d60d14610a1a5781632b3297f9146109f1578163437be622146109a55781634e71e0c8146108f25781638da5cb5b146108ca5781639c82f2a41461087e578163c990ad1c14610320578163dbd01de1146102f7578163de406577146102b3578163e2211658146100d8575063e30c39780361001157346100d457816003193601126100d45760015490516001600160a01b039091168152602090f35b5080fd5b8383346100d45760603660031901126100d4576100f3610dd4565b6001600160a01b0393602435858116949291908590036102ae578351958487018781106001600160401b038211176102995785526002875260209561060f60f31b87890152816003541691865194631fd177af60e11b86521683850152602484015260443560448401526000606484015260006084840152600060a484015261014092838160c481855afa93841561028f5790879392918695610260575b50506101ad8651948593630b7ecdc960e31b8552840190611155565b61016061014483015281806101c661016482018b610e6a565b03915afa91821561025557809261021e575b50509061020b61021a926101fd83519687928784015284808401526060830190610e6a565b03601f198101865285610f39565b51928284938452830190610e6a565b0390f35b9091508382813d831161024e575b6102368183610f39565b8101031261024b57505161020b61021a6101d8565b80fd5b503d61022c565b8351903d90823e3d90fd5b610280929550803d10610288575b6102788183610f39565b810190611061565b928880610191565b503d61026e565b86513d87823e3d90fd5b604183634e487b7160e01b6000525260246000fd5b600080fd5b5050346100d457816003193601126100d457517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346100d457816003193601126100d45760025490516001600160a01b039091168152602090f35b9190503461087a5761034e919261033636610dea565b6103469a9499929693959a6111c1565b810190610f5a565b8751633c2f4f4360e11b815260209a6001600160a01b039a8b1696918c8188818b5afa90811561087057908c95949392918b91610827575b5085610393911615610fde565b8460035416600060a48d519e8f94631fd177af60e11b86521693848b82015282602482015285604482015282606482015282608482015201526101409c8d8160c481855afa9d8e156107fd5760009e610808575b5050816106f6575b50505088906104419a61041f600086600354169285519e8f958694859363efa84c6d60e01b85528d850190611155565b88610144840152306101648401526101a06101848401526101a4830190610e6a565b03925af19889156106eb576000996106cb575b50881061067557833b156105f5578651630c46aac760e31b8152308482015230602482015288604482015286816064818c895af1801561066b57908791610657575b50507f00000000000000000000000000000000000000000000000000000000000000001692865163095ea7b360e01b9081815285858201528760248201528a816044818b875af1801561064d57918a918c9361060a575b5089519081526001600160a01b038716868201908152602081019290925292839182908a9082906040015b03925af18015610600579188969593918895936105b7575b508451634d4d7cbd60e11b81529182019081523060208201526001600160a01b039093166040840152606083019590955260006080830152849182908590829060a00103925af1908115610255575061058b575b5051908152f35b6105aa90823d84116105b0575b6105a28183610f39565b81019061104b565b50610584565b503d610598565b8092949697508a80929496503d83116105f9575b6105d58183610f39565b810103126105f55791858794926105ee8a98979561103e565b5090610530565b8580fd5b503d6105cb565b87513d88823e3d90fd5b8092508391933d8311610646575b6106228183610f39565b8101031261064257610518928b9261063a8c9361103e565b5090936104ed565b8780fd5b503d610618565b89513d8a823e3d90fd5b61066090610ef5565b6105f5578538610496565b88513d89823e3d90fd5b865162461bcd60e51b81528084018a9052602a60248201527f4173736574546f4574684c657665726167654578656375746f723a206e6f74206044820152690cadcdeeaced0408aa8960b31b6064820152608490fd5b6106e3919950883d8a116105b0576105a28183610f39565b509738610454565b88513d6000823e3d90fd5b8d8c519063095ea7b360e01b928383528a83015260006024830152816044816000875af180156107fd578f9391928e938b926107bd575b506000906107608a600354169551978896879586948552840160209093929193604081019460018060a01b031681520152565b03925af180156107b257610776575b80806103ef565b908b82813d83116107ab575b61078c8183610f39565b810103126102ae576104419a6107a28b9361103e565b509a509061076f565b503d610782565b8a513d6000823e3d90fd5b935093905082813d83116107f6575b6107d68183610f39565b810103126102ae57888f936000908f946107ef9061103e565b509061072d565b503d6107cc565b8d513d6000823e3d90fd5b61081f929e50803d10610288576102788183610f39565b9b38806103e7565b809293949596508e8092503d8311610869575b6108448183610f39565b8101031261086557906103938c61085e8197969594610fca565b9150610386565b8980fd5b503d61083a565b8b513d8c823e3d90fd5b8280fd5b8390346100d45760203660031901126100d457356001600160a01b038181169182900361087a576108b3908354163314610eaa565b600380546001600160a01b03191691909117905580f35b5050346100d457816003193601126100d457905490516001600160a01b039091168152602090f35b9190503461087a578260031936011261087a576001546001600160a01b039290918383169190338390036109625750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b8390346100d45760203660031901126100d457356001600160a01b038181169182900361087a576109da908354163314610eaa565b600280546001600160a01b03191691909117905580f35b5050346100d457816003193601126100d45760035490516001600160a01b039091168152602090f35b9190503461087a57610a30919261033636610dea565b8751633c2f4f4360e11b815290996020996001600160a01b03939290918416908b818881855afa80156108705785908b90610c8e575b610a7292501615610fde565b803b15610c8a5789516339f4769360e01b8152308782019081526020810189905290918a9183919082908490829060400103925af18015610c8057610c6d575b50826003541690838a5191631fd177af60e11b8352600088840152169687602483015260448201526000606482015260006084820152600060a482015261014090818160c481865afa918215610c62576000610b369d9e938d959361041f938392610c45575b5050855163efa84c6d60e01b81529e8f95869485938d850190611155565b03925af19889156106eb57600099610c25575b508810610bd3577f00000000000000000000000000000000000000000000000000000000000000001692865163095ea7b360e01b9081815285858201528760248201528a816044818b875af1801561064d57918a918c9361060a575089519081526001600160a01b038716868201908152602081019290925292839182908a908290604001610518565b865162461bcd60e51b81528084018a9052602660248201527f4173736574546f4574684c657665726167654578656375746f723a206e6f74206044820152650cadcdeeaced60d31b6064820152608490fd5b610c3d919950883d8a116105b0576105a28183610f39565b509738610b49565b610c5b9250803d10610288576102788183610f39565b3880610b18565b8b513d6000823e3d90fd5b610c7990989198610ef5565b9638610ab2565b8a513d8b823e3d90fd5b8880fd5b50508b81813d8311610cbf575b610ca58183610f39565b810103126108655784610cba610a7292610fca565b610a66565b503d610c9b565b9190503461087a57606036600319011261087a57610ce2610dd4565b91602435918215158303610dd0576044359283151584036105f55760018060a01b03948591610d15838954163314610eaa565b15610db7571692831590811591610daf575b5015610d745750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b031991821617825560018054909116905580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b905038610d27565b93505050501660018060a01b0319600154161760015580f35b8480fd5b600435906001600160a01b03821682036102ae57565b9060c06003198301126102ae57600435916001600160a01b0360243581811681036102ae579260443582811681036102ae57926064359260843590811681036102ae579160a4356001600160401b03928382116102ae57806023830112156102ae5781600401359384116102ae57602484830101116102ae576024019190565b919082519283825260005b848110610e96575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610e75565b15610eb157565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6001600160401b038111610f0857604052565b634e487b7160e01b600052604160045260246000fd5b608081019081106001600160401b03821117610f0857604052565b90601f801991011681019081106001600160401b03821117610f0857604052565b91906040838203126102ae578235926020808201356001600160401b03928382116102ae57019183601f840112156102ae578235908111610f085760405193610fac601f8301601f1916840186610f39565b8185528282850101116102ae57808260009401838601378301015290565b51906001600160a01b03821682036102ae57565b15610fe557565b60405162461bcd60e51b815260206004820152602b60248201527f4173736574546f4574684c657665726167654578656375746f723a20746f6b6560448201526a1b881b9bdd081d985b1a5960aa1b6064820152608490fd5b519081151582036102ae57565b91908260409103126102ae576020825192015190565b80910361014081126102ae5760408051926001600160401b03926060850184811186821017610f0857808452608082126102ae5761109e81610f1e565b6110a783610fca565b8152602083015160808701526110be848401610fca565b60a0870152606083015160c087015285526080607f198201126102ae57829081516110e881610f1e565b6080840151815260a0840151602082015260c08401518382015260e08401516060820152602087015260ff1901126102ae5781519283830190811184821017610f085761114a91610120918452611142610100820161103e565b85520161103e565b602083015282015290565b60206040610120926060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b6003546001600160a01b039081169081156112b1576020906002541691604460405180948193633a304d8b60e21b83526000600484015260248301525afa9081156112a55760009161126c575b501561121657565b60405162461bcd60e51b815260206004820152602860248201527f4c657665726167654578656375746f723a2073776170706572206e6f742061756044820152671d1a1bdc9a5e995960c21b6064820152608490fd5b906020823d821161129d575b8161128560209383610f39565b8101031261024b57506112979061103e565b3861120e565b3d9150611278565b6040513d6000823e3d90fd5b60405162461bcd60e51b815260206004820152602360248201527f4c657665726167654578656375746f723a2073776170706572206e6f742076616044820152621b1a5960ea1b6064820152608490fdfea264697066735822122005b3deaf8251b138da93506b6fca502caf40ffbdc78d90401d1960805286c8fa64736f6c63430008120033";

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
