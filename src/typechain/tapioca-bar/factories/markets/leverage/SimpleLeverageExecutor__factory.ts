/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SimpleLeverageExecutor,
  SimpleLeverageExecutorInterface,
} from "../../../markets/leverage/SimpleLeverageExecutor";

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
        internalType: "uint256",
        name: "collateralId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralShareIn",
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
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetShareIn",
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
] as const;

const _bytecode =
  "0x60a0346100e157601f610bd238819003918201601f19168301916001600160401b038311848410176100e6578084926060946040528339810103126100e1578051906001600160a01b039081831683036100e1576020810151908282168092036100e157604001519182168092036100e15760008054604051946001600160a01b03199491851693919233907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a3608052836003541617600355826002541617600255339133161717600055610ad590816100fd82396080518160df0152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6040608081526004908136101561001557600080fd5b600091823560e01c908163078dfbe714610514578382630e52e714146104da575081632b3297f9146104b1578163437be622146104655781634e71e0c8146103b25781638da5cb5b1461038a57838263927d1df114610186575081639c82f2a41461013657508063dbd01de11461010e578063de406577146100cb5763e30c3978146100a057600080fd5b346100c757816003193601126100c75760015490516001600160a01b039091168152602090f35b5080fd5b50346100c757816003193601126100c757517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50346100c757816003193601126100c75760025490516001600160a01b039091168152602090f35b8390346100c75760203660031901126100c757356001600160a01b03818116918290036101825761016b908354163314610699565b600380546001600160a01b03191691909117905580f35b8280fd5b92915034610386576101973661062a565b600354929893966001600160a01b03938416969590939092906044906020906101c18a15156106e4565b600254168b5192838092633a304d8b60e21b82528a8a8301528c60248301525afa90811561037c578691610330575b50906102509261020261020a9361079d565b8101906107fa565b929097895180938192633d9545e960e11b8352610140998a9589850160a091949360019360c0830196835260208301526000604083015260608201528260808201520152565b0381895afa94851561032657918795939185938a9896956102f1575b505061028c9087519a8b978896879563efa84c6d60e01b8752860161098a565b03925af19283156102e757602094936102b3575b506102ad90831015610a53565b51908152f35b6102ad9193506102d890833d85116102e0575b6102d0818361076e565b810190610974565b5092906102a0565b503d6102c6565b82513d86823e3d90fd5b61028c929550908161031792903d1061031f575b61030f818361076e565b81019061087f565b93903861026c565b503d610305565b88513d86823e3d90fd5b9190506020823d8211610374575b8161034b6020938361076e565b81010312610370576102509261020261036661020a94610790565b92935050926101f0565b8580fd5b3d915061033e565b8a513d88823e3d90fd5b5050fd5b5050346100c757816003193601126100c757905490516001600160a01b039091168152602090f35b919050346101825782600319360112610182576001546001600160a01b039290918383169190338390036104225750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b8390346100c75760203660031901126100c757356001600160a01b03818116918290036101825761049a908354163314610699565b600280546001600160a01b03191691909117905580f35b5050346100c757816003193601126100c75760035490516001600160a01b039091168152602090f35b92915034610386576104eb3661062a565b600354929893966001600160a01b039384169690939092906044906020906101c18a15156106e4565b905034610182576060366003190112610182576001600160a01b039181358381169291908390036106265760243580151581036103705760443590811515820361062257610566868854163314610699565b15610606578315908115916105fe575b50156105c35750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b031991821617825560018054909116905580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b905038610576565b5050600180546001600160a01b03191690921790915550819050f35b8680fd5b8480fd5b9060a0600319830112610694576004359160243591604435916064356001600160a01b0381168103610694579160843567ffffffffffffffff9283821161069457806023830112156106945781600401359384116106945760248483010111610694576024019190565b600080fd5b156106a057565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b156106eb57565b60405162461bcd60e51b815260206004820152602360248201527f4c657665726167654578656375746f723a2073776170706572206e6f742076616044820152621b1a5960ea1b6064820152608490fd5b6080810190811067ffffffffffffffff82111761075857604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761075857604052565b5190811515820361069457565b156107a457565b60405162461bcd60e51b815260206004820152602860248201527f4c657665726167654578656375746f723a2073776170706572206e6f742061756044820152671d1a1bdc9a5e995960c21b6064820152608490fd5b91906040838203126106945782359260208082013567ffffffffffffffff9283821161069457019183601f84011215610694578235908111610758576040519361084d601f8301601f191684018661076e565b81855282828501011161069457808260009401838601378301015290565b51906001600160a01b038216820361069457565b809103610140811261069457604080519267ffffffffffffffff9260608501848111868210176107585780845260808212610694576108bd8161073c565b6108c68361086b565b8152602083015160808701526108dd84840161086b565b60a0870152606083015160c087015285526080607f1982011261069457829081516109078161073c565b6080840151815260a0840151602082015260c08401518382015260e08401516060820152602087015260ff190112610694578151928383019081118482101761075857610969916101209184526109616101008201610790565b855201610790565b602083015282015290565b9190826040910312610694576020825192015190565b926060928251604060018060a01b0394858351168852602096838880950151858b0152878482015116848b015201516060890152606083820151805160808b01528481015160a08b01528381015160c08b0152015160e089015201518051151561010088015201511515610120860152610140850152166101608301526101a092836101808401528051809484015260005b848110610a3e575050506101c0916000838284010152601f8019910116010190565b8181018301518482016101c001528201610a1c565b15610a5a57565b60405162461bcd60e51b815260206004820152601c60248201527f4c657665726167654578656375746f723a206e6f7420656e6f756768000000006044820152606490fdfea26469706673582212209546898f07777feecfdd6a94fc2025f1ec3a838e35b31977e511d24b3b2c2b2e64736f6c63430008120033";

type SimpleLeverageExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleLeverageExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleLeverageExecutor__factory extends ContractFactory {
  constructor(...args: SimpleLeverageExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SimpleLeverageExecutor";
  }

  override deploy(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleLeverageExecutor> {
    return super.deploy(
      _yb,
      _swapper,
      _cluster,
      overrides || {}
    ) as Promise<SimpleLeverageExecutor>;
  }
  override getDeployTransaction(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yb, _swapper, _cluster, overrides || {});
  }
  override attach(address: string): SimpleLeverageExecutor {
    return super.attach(address) as SimpleLeverageExecutor;
  }
  override connect(signer: Signer): SimpleLeverageExecutor__factory {
    return super.connect(signer) as SimpleLeverageExecutor__factory;
  }
  static readonly contractName: "SimpleLeverageExecutor";

  public readonly contractName: "SimpleLeverageExecutor";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleLeverageExecutorInterface {
    return new utils.Interface(_abi) as SimpleLeverageExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleLeverageExecutor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleLeverageExecutor;
  }
}
