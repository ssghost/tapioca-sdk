/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AssetToSGLPLeverageExecutor,
  AssetToSGLPLeverageExecutorInterface,
} from "../../../markets/leverage/AssetToSGLPLeverageExecutor";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
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
      {
        internalType: "contract IGmxRewardRouterV2",
        name: "_glpRewardRouter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "GlpNotValid",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "NotEnough",
    type: "error",
  },
  {
    inputs: [],
    name: "SenderNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapperNotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapperNotValid",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenNotValid",
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
        name: "to",
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
        name: "to",
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
  "0x6101006040523480156200001257600080fd5b5060405162001a8f38038062001a8f833981016040819052620000359162000159565b600080546001600160a01b0319163390811782556040518792879287929091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160a01b03928316608052600380549284166001600160a01b031993841617905560028054918416918316919091179055600080549091163317905582811660a052811660e081905260408051633e9b6c6f60e21b8152905163fa6db1bc916004808201926020929091908290030181865afa15801562000102573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001289190620001d9565b6001600160a01b031660c05250620002009350505050565b6001600160a01b03811681146200015657600080fd5b50565b600080600080600060a086880312156200017257600080fd5b85516200017f8162000140565b6020870151909550620001928162000140565b6040870151909450620001a58162000140565b6060870151909350620001b88162000140565b6080870151909250620001cb8162000140565b809150509295509295909350565b600060208284031215620001ec57600080fd5b8151620001f98162000140565b9392505050565b60805160a05160c05160e05161181662000279600039600081816109d90152610cfe0152600081816109810152610ca5015260008181610176015281816104c3015281816104ef015281816107cf01528181610819015261084c01526000818161025201528181610bbe0152610c1f01526118166000f3fe6080604052600436106100d25760003560e01c80638da5cb5b1161007f578063dbd01de111610059578063dbd01de114610220578063de40657714610240578063e221165814610274578063e30c3978146102a157600080fd5b80638da5cb5b146101cd5780639c82f2a4146101ed578063c990ad1c1461020d57600080fd5b80633e413bee116100b05780633e413bee14610164578063437be622146101985780634e71e0c8146101b857600080fd5b8063078dfbe7146100d75780630fb5d60d146100f95780632b3297f91461012c575b600080fd5b3480156100e357600080fd5b506100f76100f236600461117c565b6102c1565b005b34801561010557600080fd5b506101196101143660046111c7565b61040b565b6040519081526020015b60405180910390f35b34801561013857600080fd5b5060035461014c906001600160a01b031681565b6040516001600160a01b039091168152602001610123565b34801561017057600080fd5b5061014c7f000000000000000000000000000000000000000000000000000000000000000081565b3480156101a457600080fd5b506100f76101b3366004611285565b610563565b3480156101c457600080fd5b506100f76105df565b3480156101d957600080fd5b5060005461014c906001600160a01b031681565b3480156101f957600080fd5b506100f7610208366004611285565b61069c565b61011961021b3660046111c7565b610718565b34801561022c57600080fd5b5060025461014c906001600160a01b031681565b34801561024c57600080fd5b5061014c7f000000000000000000000000000000000000000000000000000000000000000081565b34801561028057600080fd5b5061029461028f3660046112a9565b610881565b604051610123919061133a565b3480156102ad57600080fd5b5060015461014c906001600160a01b031681565b6000546001600160a01b031633146103205760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b81156103eb576001600160a01b03831615158061033a5750805b6103865760405162461bcd60e51b815260206004820152601560248201527f4f776e61626c653a207a65726f206164647265737300000000000000000000006044820152606401610317565b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0385166001600160a01b031991821617909155600180549091169055505050565b600180546001600160a01b0319166001600160a01b038516179055505050565b600254604051631ccfd32160e31b8152600060048201819052336024830152916001600160a01b03169063e67e990890604401602060405180830381865afa15801561045b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047f919061134d565b61049c576040516303482c7160e21b815260040160405180910390fd5b6104a46108b1565b600080806104b485870187611436565b92509250925060006104e8898c7f000000000000000000000000000000000000000000000000000000000000000087610970565b90506105197f00000000000000000000000000000000000000000000000000000000000000008b8386866000610a74565b945082851015610547576040516328e217f560e01b81526001600160a01b038b166004820152602401610317565b6105548c8b308b89610baf565b50505050979650505050505050565b6000546001600160a01b031633146105bd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610317565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031633811461063a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152606401610317565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b6000546001600160a01b031633146106f65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610317565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600254604051631ccfd32160e31b8152600060048201819052336024830152916001600160a01b03169063e67e990890604401602060405180830381865afa158015610768573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078c919061134d565b6107a9576040516303482c7160e21b815260040160405180910390fd5b6107b16108b1565b600080806107c185870187611486565b92509250925060006107f88b7f00000000000000000000000000000000000000000000000000000000000000008b87876000610a74565b905083811015610846576040516328e217f560e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166004820152602401610317565b610872817f0000000000000000000000000000000000000000000000000000000000000000848d610c94565b94506105548c8b308b89610baf565b60606108a984848460405180604001604052806002815260200161060f60f31b815250610d99565b949350505050565b6003546001600160a01b03166108da57604051631da137b560e01b815260040160405180910390fd5b600254600354604051631ccfd32160e31b8152600060048201526001600160a01b03918216602482015291169063e67e990890604401602060405180830381865afa15801561092d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610951919061134d565b61096e5760405163086a95e160e21b815260040160405180910390fd5b565b60006109a66001600160a01b0385167f000000000000000000000000000000000000000000000000000000000000000087610ecd565b6040516303cea95560e21b81526001600160a01b03848116600483015260248201879052604482018490523060648301527f00000000000000000000000000000000000000000000000000000000000000001690630f3aa554906084016020604051808303816000875af1158015610a22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4691906114d6565b9050818110156108a9576040516328e217f560e01b81526001600160a01b0384166004820152602401610317565b60035460405163678a252760e11b81526001600160a01b03888116600483015287811660248301526044820187905260006064830181905292839291169063cf144a4e9060840161014060405180830381865afa158015610ad9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afd9190611598565b90506001600160a01b03881615610b2857600354610b28906001600160a01b038a8116911688610ecd565b60035460405163efa84c6d60e01b81526001600160a01b039091169063efa84c6d908590610b609085908a9030908b9060040161164e565b604080518083038185885af1158015610b7d573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610ba291906116f7565b5098975050505050505050565b610be36001600160a01b0385167f000000000000000000000000000000000000000000000000000000000000000083610ecd565b604051634d4d7cbd60e11b8152600481018690526001600160a01b038481166024830152838116604483015260648201839052600060848301527f00000000000000000000000000000000000000000000000000000000000000001690639a9af97a9060a40160408051808303816000875af1158015610c67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8b91906116f7565b50505050505050565b6000610cca6001600160a01b0385167f000000000000000000000000000000000000000000000000000000000000000087610ecd565b60405163364e231160e01b81526001600160a01b0385811660048301526024820187905260006044830152606482018590527f0000000000000000000000000000000000000000000000000000000000000000169063364e2311906084016020604051808303816000875af1158015610d47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6b91906114d6565b9050828110156108a9576040516328e217f560e01b81526001600160a01b0383166004820152602401610317565b60035460405163678a252760e11b81526001600160a01b038681166004830152858116602483015260448201859052600060648301819052606093909291169063cf144a4e9060840161014060405180830381865afa158015610e00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e249190611598565b600354604051630b7ecdc960e31b81529192506000916001600160a01b0390911690635bf66e4890610e5c908590889060040161171b565b602060405180830381865afa158015610e79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9d91906114d6565b90508084604051602001610eb29291906117ab565b60405160208183030381529060405292505050949350505050565b6000836001600160a01b03163b11610f275760405162461bcd60e51b815260206004820152601860248201527f53616665417070726f76653a206e6f20636f6e747261637400000000000000006044820152606401610317565b6040516001600160a01b0383811660248301526000604483018190529160609186169060640160408051601f198184030181529181526020820180516001600160e01b031663095ea7b360e01b17905251610f8291906117c4565b6000604051808303816000865af19150503d8060008114610fbf576040519150601f19603f3d011682016040523d82523d6000602084013e610fc4565b606091505b509092509050818015610fef575080511580610fef575080806020019051810190610fef919061134d565b61103b5760405162461bcd60e51b815260206004820152601b60248201527f53616665417070726f76653a20617070726f7665206661696c656400000000006044820152606401610317565b821561114f576040516001600160a01b0385811660248301526044820185905286169060640160408051601f198184030181529181526020820180516001600160e01b031663095ea7b360e01b1790525161109691906117c4565b6000604051808303816000865af19150503d80600081146110d3576040519150601f19603f3d011682016040523d82523d6000602084013e6110d8565b606091505b509092509050818015611103575080511580611103575080806020019051810190611103919061134d565b61114f5760405162461bcd60e51b815260206004820152601b60248201527f53616665417070726f76653a20617070726f7665206661696c656400000000006044820152606401610317565b5050505050565b6001600160a01b038116811461116b57600080fd5b50565b801515811461116b57600080fd5b60008060006060848603121561119157600080fd5b833561119c81611156565b925060208401356111ac8161116e565b915060408401356111bc8161116e565b809150509250925092565b600080600080600080600060c0888a0312156111e257600080fd5b8735965060208801356111f481611156565b9550604088013561120481611156565b945060608801359350608088013561121b81611156565b925060a088013567ffffffffffffffff8082111561123857600080fd5b818a0191508a601f83011261124c57600080fd5b81358181111561125b57600080fd5b8b602082850101111561126d57600080fd5b60208301945080935050505092959891949750929550565b60006020828403121561129757600080fd5b81356112a281611156565b9392505050565b6000806000606084860312156112be57600080fd5b83356112c981611156565b925060208401356112d981611156565b929592945050506040919091013590565b60005b838110156113055781810151838201526020016112ed565b50506000910152565b600081518084526113268160208601602086016112ea565b601f01601f19169290920160200192915050565b6020815260006112a2602083018461130e565b60006020828403121561135f57600080fd5b81516112a28161116e565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156113a3576113a361136a565b60405290565b600082601f8301126113ba57600080fd5b813567ffffffffffffffff808211156113d5576113d561136a565b604051601f8301601f19908116603f011681019082821181831017156113fd576113fd61136a565b8160405283815286602085880101111561141657600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561144b57600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561147057600080fd5b61147c868287016113a9565b9150509250925092565b60008060006060848603121561149b57600080fd5b83359250602084013567ffffffffffffffff8111156114b957600080fd5b6114c5868287016113a9565b925050604084013590509250925092565b6000602082840312156114e857600080fd5b5051919050565b60006080828403121561150157600080fd5b611509611380565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b60006040828403121561154557600080fd5b6040516040810181811067ffffffffffffffff821117156115685761156861136a565b8060405250809150825161157b8161116e565b8152602083015161158b8161116e565b6020919091015292915050565b60008183036101408112156115ac57600080fd5b6040516060810181811067ffffffffffffffff821117156115cf576115cf61136a565b60405260808212156115e057600080fd5b6115e8611380565b915083516115f581611156565b825260208481015190830152604084015161160f81611156565b60408301526060848101519083015281815261162e85608086016114ef565b6020820152611641856101008601611533565b6040820152949350505050565b845180516001600160a01b03908116835260208083015181850152604080840151909216828501526060928301518385015280880151805160808601528082015160a08601528083015160c08601529092015160e0840152860151805115156101008401520151151561012082015260006101a0856101408401526001600160a01b038516610160840152806101808401526116ec8184018561130e565b979650505050505050565b6000806040838503121561170a57600080fd5b505080516020909101519092909150565b825180516001600160a01b03908116835260208083015181850152604080840151909216828501526060928301518385015280860151805160808601528082015160a08601528083015160c08601529092015160e084015284015180511515610100840152015115156101208201526000610160806101408401526117a28184018561130e565b95945050505050565b8281526040602082015260006108a9604083018461130e565b600082516117d68184602087016112ea565b919091019291505056fea2646970667358221220e5b5cac113f57a693309852457a1693350105516bd38d5170c855cb888f434ce64736f6c63430008160033";

type AssetToSGLPLeverageExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetToSGLPLeverageExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetToSGLPLeverageExecutor__factory extends ContractFactory {
  constructor(...args: AssetToSGLPLeverageExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetToSGLPLeverageExecutor";
  }

  override deploy(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _usdc: PromiseOrValue<string>,
    _glpRewardRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetToSGLPLeverageExecutor> {
    return super.deploy(
      _yb,
      _swapper,
      _cluster,
      _usdc,
      _glpRewardRouter,
      overrides || {}
    ) as Promise<AssetToSGLPLeverageExecutor>;
  }
  override getDeployTransaction(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _usdc: PromiseOrValue<string>,
    _glpRewardRouter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yb,
      _swapper,
      _cluster,
      _usdc,
      _glpRewardRouter,
      overrides || {}
    );
  }
  override attach(address: string): AssetToSGLPLeverageExecutor {
    return super.attach(address) as AssetToSGLPLeverageExecutor;
  }
  override connect(signer: Signer): AssetToSGLPLeverageExecutor__factory {
    return super.connect(signer) as AssetToSGLPLeverageExecutor__factory;
  }
  static readonly contractName: "AssetToSGLPLeverageExecutor";

  public readonly contractName: "AssetToSGLPLeverageExecutor";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetToSGLPLeverageExecutorInterface {
    return new utils.Interface(_abi) as AssetToSGLPLeverageExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetToSGLPLeverageExecutor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetToSGLPLeverageExecutor;
  }
}