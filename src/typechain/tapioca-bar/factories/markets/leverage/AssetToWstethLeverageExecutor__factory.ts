/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AssetToWstethLeverageExecutor,
  AssetToWstethLeverageExecutorInterface,
} from "../../../markets/leverage/AssetToWstethLeverageExecutor";

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
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_balancerVault",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_balancerPoolId",
        type: "bytes32",
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
    inputs: [],
    name: "poolId",
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
    name: "vault",
    outputs: [
      {
        internalType: "contract IBalancerVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
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
  "0x60c0346200015557601f62001dd838819003918201601f19168301916001600160401b038311848410176200015a5780849260c09460405283398101031262000155578051906001600160a01b03908183168303620001555760208101519180831680930362000155576040820151918183168093036200015557620000886060820162000170565b60a0620000986080840162000170565b9201519460018060a01b031994856000541691604051983360007f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a36080528660035416176003558560025416176002553390853316171760005560a05216906004541617600455600555611c5290816200018682396080518181816102bf015281816106090152610d79015260a0518181816103b201528181610450015281816104b30152818161050b01528181610ba50152610d240152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620001555756fe6080604052600436101561001b575b361561001957600080fd5b005b6000803560e01c8063078dfbe7146110005780630fb5d60d14610c1b5780632b3297f914610bf25780633e0dc34e14610bd45780633fc8cef314610b8f578063437be62214610b425780634e71e0c814610a965780638da5cb5b14610a6f5780639c82f2a414610a1e578063c990ad1c14610317578063dbd01de1146102ee578063de406577146102a9578063e221165814610120578063e30c3978146100f75763fbfa77cf146100cc575061000e565b346100f457806003193601126100f4576004546040516001600160a01b039091168152602090f35b80fd5b50346100f457806003193601126100f4576001546040516001600160a01b039091168152602090f35b50346100f45760603660031901126100f45761013a611104565b906001600160a01b0390602435908282168203610257576101596113b8565b926003541660405192631fd177af60e11b845283806101846101409889946044359160048501611806565b0381845afa92831561029e576101b89495839461026f575b5050604051630b7ecdc960e31b8152938493600485019061183d565b610160610144840152602093849181806101d661016482018a61119a565b03915afa908115610263579061022f575b610217915061020960405194859285840152604080840152606083019061119a565b03601f198101845283611269565b61022b60405192828493845283019061119a565b0390f35b508181813d831161025c575b6102458183611269565b810103126102575761021790516101e7565b600080fd5b503d61023b565b604051903d90823e3d90fd5b61028f929450803d10610297575b6102878183611269565b810190611712565b91388061019c565b503d61027d565b6040513d84823e3d90fd5b50346100f457806003193601126100f4576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50346100f457806003193601126100f4576002546040516001600160a01b039091168152602090f35b506103213661111a565b600254604051633a304d8b60e21b8152600481018a9052336024820152969795969394929390602090829060449082906001600160a01b03165afa8015610a135789906109d4575b6103739150611297565b61037b611ac7565b82019560608388031261088e578235966020840135926001600160401b0384116109d0576103af89926103d79587016112ee565b927f0000000000000000000000000000000000000000000000000000000000000000906118a9565b94851061097457604051633c2f4f4360e11b8152946020866004816001600160a01b0389165afa958615610969578796610929575b506001600160a01b038616156108de5760018060a01b03600454166040519063095ea7b360e01b825260048201528760248201526020816044818b60018060a01b037f0000000000000000000000000000000000000000000000000000000000000000165af1801561089a576108a5575b506004805460405163095ea7b360e01b815291602091839182916104ae9187916001600160a01b0316908401611358565b03818b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165af1801561089a5761085d575b506102584201421161084957869493929161052f916040610258420192013590887f00000000000000000000000000000000000000000000000000000000000000006113e6565b60405163095ea7b360e01b81526001600160a01b03858116600483015260248201879052919691602090829060449082908a9087165af180156107b457610810575b506020604051809263095ea7b360e01b82528188816105948c8b60048401611358565b03926001600160a01b03165af1801561076c576107d7575b506001600160a01b0383163b156107d357604051630c46aac760e31b815230600482018190526024820152604481018690528481606481836001600160a01b0389165af190811561076c5785916107bf575b505060018060a01b037f0000000000000000000000000000000000000000000000000000000000000000169160405163095ea7b360e01b81528360048201528560248201526020816044818960018060a01b038a165af180156107b457610777575b506020604051809563095ea7b360e01b82528188816106838c8a60048401611358565b03926001600160a01b03165af193841561076c57869461071d575b5060408051634d4d7cbd60e11b8152959094869493859384926106c8929091309060048601611389565b03925af1801561071257602093506106e4575b50604051908152f35b6107059060403d60401161070b575b6106fd8183611269565b810190611373565b506106db565b503d6106f3565b6040513d85823e3d90fd5b92919093506020833d602011610764575b8161073b60209383611269565b81010312610760576106c894604094610754889561128a565b5091929394509461069e565b8480fd5b3d915061072e565b6040513d87823e3d90fd5b6020813d6020116107ac575b8161079060209383611269565b810103126107a8576107a19061128a565b5038610660565b8580fd5b3d9150610783565b6040513d88823e3d90fd5b6107c890611225565b6107d35783386105fe565b8380fd5b6020813d602011610808575b816107f060209383611269565b81010312610760576108019061128a565b50386105ac565b3d91506107e3565b6020813d602011610841575b8161082960209383611269565b810103126107a85761083a9061128a565b5038610571565b3d915061081c565b634e487b7160e01b87526011600452602487fd5b6020813d602011610892575b8161087660209383611269565b8101031261088e576108879061128a565b50386104e8565b8780fd5b3d9150610869565b6040513d8a823e3d90fd5b6020813d6020116108d6575b816108be60209383611269565b8101031261088e576108cf9061128a565b503861047d565b3d91506108b1565b60405162461bcd60e51b815260206004820152602f6024820152600080516020611bfd83398151915260448201526e1cdd115d1a081b9bdd081d985b1a59608a1b6064820152608490fd5b9095506020813d602011610961575b8161094560209383611269565b8101031261095d5761095690611344565b943861040c565b8680fd5b3d9150610938565b6040513d89823e3d90fd5b60405162461bcd60e51b815260206004820152602e60248201527f4173736574546f5773746574684c657665726167654578656375746f723a206e60448201526d0dee840cadcdeeaced040ae8aa8960931b6064820152608490fd5b8980fd5b506020813d602011610a0b575b816109ee60209383611269565b81010312610a0757610a026103739161128a565b610369565b8880fd5b3d91506109e1565b6040513d8b823e3d90fd5b50346100f45760203660031901126100f4576004356001600160a01b0381811691829003610a6b57610a549083541633146111da565b600380546001600160a01b03191691909117905580f35b8280fd5b50346100f457806003193601126100f457546040516001600160a01b039091168152602090f35b50346100f457806003193601126100f4576001546001600160a01b039081811633819003610afe578084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b50346100f45760203660031901126100f4576004356001600160a01b0381811691829003610a6b57610b789083541633146111da565b600280546001600160a01b03191691909117905580f35b50346100f457806003193601126100f4576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50346100f457806003193601126100f4576020600554604051908152f35b50346100f457806003193601126100f4576003546040516001600160a01b039091168152602090f35b50346100f457610c2a3661111a565b969460018060a09894959693981b0394856002541698604051809a633a304d8b60e21b825289600483015233602483015281604460209d8e935afa8015610a13578990610fca575b610c7c9150611297565b610c84611ac7565b8801976060818a031261088e57898101359860408201356001600160401b0381116109d0578891610cb69184016112ee565b9316803b15610a07576040516339f4769360e01b8152898180610cdd873060048401611358565b038183865af18015610fbf57908c9291610fa9575b50604051633c2f4f4360e11b81529190829060049082905afa908115610a13578991610f74575b5087811615610f29577f000000000000000000000000000000000000000000000000000000000000000092610258420192834211610f15578b9385938893610d6d9897610d679435926113e6565b916118a9565b958610610ec0578316927f0000000000000000000000000000000000000000000000000000000000000000169260405163095ea7b360e01b9081815285600482015286602482015288816044818a875af180156109695790899291610e89575b506040519283918252818881610de78c8b60048401611358565b03925af1801561076c57908694939291610e3f575b5091849391610e2695604094855197889586948593634d4d7cbd60e11b8552309060048601611389565b03925af190811561026357506106e45750604051908152f35b90919293508681813d8311610e82575b610e598183611269565b810103126107605792604092858793610e75610e26989761128a565b5092945050919394610dfc565b503d610e4f565b909181813d8311610eb9575b610e9f8183611269565b8101031261095d5790610eb2899261128a565b5038610dcd565b503d610e95565b60405162461bcd60e51b815260048101889052602760248201527f4173736574546f526574684c657665726167654578656375746f723a206e6f74604482015266040cadcdeeaced60cb1b6064820152608490fd5b634e487b7160e01b8b52601160045260248bfd5b60405162461bcd60e51b8152600481018c9052602f6024820152600080516020611bfd83398151915260448201526e1cdd115512081b9bdd081d985b1a59608a1b6064820152608490fd5b90508a81813d8311610fa2575b610f8b8183611269565b81010312610a0757610f9c90611344565b38610d19565b503d610f81565b99610fb7600493929b611225565b999091610cf2565b6040513d8c823e3d90fd5b508a81813d8311610ff9575b610fe08183611269565b81010312610a0757610ff4610c7c9161128a565b610c72565b503d610fd6565b50346100f45760603660031901126100f45761101a611104565b6024358015158103610a6b576044359081151582036107d35760018060a01b0392839161104b8387541633146111da565b156110ed5716908115908115916110e5575b50156110a8578083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160a01b031991821617825560018054909116905580f35b60405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152606490fd5b90503861105d565b9150501660018060a01b0319600154161760015580f35b600435906001600160a01b038216820361025757565b9060c060031983011261025757600435916001600160a01b036024358181168103610257579260443582811681036102575792606435926084359081168103610257579160a4356001600160401b039283821161025757806023830112156102575781600401359384116102575760248483010111610257576024019190565b919082519283825260005b8481106111c6575050826000602080949584010152601f8019910116010190565b6020818301810151848301820152016111a5565b156111e157565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6001600160401b03811161123857604052565b634e487b7160e01b600052604160045260246000fd5b608081019081106001600160401b0382111761123857604052565b90601f801991011681019081106001600160401b0382111761123857604052565b5190811515820361025757565b1561129e57565b60405162461bcd60e51b815260206004820152602260248201527f4c657665726167654578656375746f723a2073656e646572206e6f742076616c6044820152611a5960f21b6064820152608490fd5b81601f82011215610257578035906001600160401b0382116112385760405192611322601f8401601f191660200185611269565b8284526020838301011161025757816000926020809301838601378301015290565b51906001600160a01b038216820361025757565b6001600160a01b039091168152602081019190915260400190565b9190826040910312610257576020825192015190565b9081526001600160a01b0391821660208201529116604082015260608101919091526000608082015260a00190565b60405190604082018281106001600160401b03821117611238576040526002825261060f60f31b6020830152565b60405194959491926113f78361124e565b3083526000602084015230604084015260006060840152600554936040519460c086018681106001600160401b03821117611238576040908152908652600060208701526001600160a01b0384811691870191909152166060850152608084018190526114626113b8565b60a08501526001600160a01b038216611605575b505060018060a01b0360045416604051956352bbbe2960e01b875260e06004880152835160e4880152602084015160028110156115ef578780948193606061150860a060209a600097610104880152600180831b03604082015116610124880152600180831b0384820151166101448801526080810151610164880152015160c06101848701526101a486019061119a565b83516001600160a01b0390811660248701528a8501511515604487015260408501511660648601529201511515608484015260a4830189905260c483015203925af19283156115e3576000936115af575b50821061156257565b60405162461bcd60e51b81526020600482015260316024820152600080516020611bfd8339815191526044820152701cdd115512081cddd85c0819985a5b1959607a1b6064820152608490fd5b9092506020813d6020116115db575b816115cb60209383611269565b8101031261025757519138611559565b3d91506115be565b6040513d6000823e3d90fd5b634e487b7160e01b600052602160045260246000fd5b60018060a01b03600454166040519063095ea7b360e01b8252600482015260006024820152602081604481600060018060a01b0388165af180156115e3576116d0575b506020906116799260018060a01b0360045416600060405180968195829463095ea7b360e01b845260048401611358565b03926001600160a01b03165af180156115e357611697575b80611476565b6020813d6020116116c8575b816116b060209383611269565b81010312610257576116c19061128a565b5038611691565b3d91506116a3565b906020823d60201161170a575b816116ea60209383611269565b81010312610257576116799261170160209361128a565b50925090611648565b3d91506116dd565b80910361014081126102575760408051926001600160401b0392606085018481118682101761123857808452608082126102575761174f8161124e565b61175883611344565b81526020830151608087015261176f848401611344565b60a0870152606083015160c087015285526080607f1982011261025757829081516117998161124e565b6080840151815260a0840151602082015260c08401518382015260e08401516060820152602087015260ff1901126102575781519283830190811184821017611238576117fb916101209184526117f3610100820161128a565b85520161128a565b602083015282015290565b6001600160a01b0391821681529116602082015260408101919091526000606082018190526080820181905260a082015260c00190565b60206040610120926060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b918095949293919360018060a01b0390816003541690604096875190631fd177af60e11b825281806118e46101409889948760048501611806565b0381865afa948515611abc57600095611a99575b505082169788611993575b505084959650600061193791600396959654169261195886519788968795869463efa84c6d60e01b8652600486019061183d565b610144840152306101648401526101a06101848401526101a483019061119a565b03925af19182156119895760009261196f57505090565b6119859250803d1061070b576106fd8183611269565b5090565b513d6000823e3d90fd5b86519863095ea7b360e01b92838b5260048b0152600060248b01526020998a816044816000865af18015611a8e57908b939291611a55575b506119ec9360008660035416918b5196879586948593845260048401611358565b03925af1978815611a4a57869798969596611a0d575b889750959495611903565b90809550813d8311611a43575b611a248183611269565b8101031261025757600061193791611a3c889661128a565b5091611a02565b503d611a1a565b86513d6000823e3d90fd5b9283813d8311611a87575b611a6a8183611269565b81010312610257576119ec93611a808c9461128a565b50936119cb565b503d611a60565b89513d6000823e3d90fd5b849295509081611ab492903d10610297576102878183611269565b9390386118f8565b88513d6000823e3d90fd5b6003546001600160a01b03908116908115611bab576020906002541691604460405180948193633a304d8b60e21b83526000600484015260248301525afa9081156115e357600091611b72575b5015611b1c57565b60405162461bcd60e51b815260206004820152602860248201527f4c657665726167654578656375746f723a2073776170706572206e6f742061756044820152671d1a1bdc9a5e995960c21b6064820152608490fd5b906020823d8211611ba3575b81611b8b60209383611269565b810103126100f45750611b9d9061128a565b38611b14565b3d9150611b7e565b60405162461bcd60e51b815260206004820152602360248201527f4c657665726167654578656375746f723a2073776170706572206e6f742076616044820152621b1a5960ea1b6064820152608490fdfe4173736574546f5773746574684c657665726167654578656375746f723a2077a26469706673582212208bb15a32ae91cfb5a3add75c4fd6e54873de3876fb3f132d35fa19906c2fa94764736f6c63430008120033";

type AssetToWstethLeverageExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetToWstethLeverageExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetToWstethLeverageExecutor__factory extends ContractFactory {
  constructor(...args: AssetToWstethLeverageExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AssetToWstethLeverageExecutor";
  }

  override deploy(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _balancerVault: PromiseOrValue<string>,
    _balancerPoolId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetToWstethLeverageExecutor> {
    return super.deploy(
      _yb,
      _swapper,
      _cluster,
      _weth,
      _balancerVault,
      _balancerPoolId,
      overrides || {}
    ) as Promise<AssetToWstethLeverageExecutor>;
  }
  override getDeployTransaction(
    _yb: PromiseOrValue<string>,
    _swapper: PromiseOrValue<string>,
    _cluster: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    _balancerVault: PromiseOrValue<string>,
    _balancerPoolId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yb,
      _swapper,
      _cluster,
      _weth,
      _balancerVault,
      _balancerPoolId,
      overrides || {}
    );
  }
  override attach(address: string): AssetToWstethLeverageExecutor {
    return super.attach(address) as AssetToWstethLeverageExecutor;
  }
  override connect(signer: Signer): AssetToWstethLeverageExecutor__factory {
    return super.connect(signer) as AssetToWstethLeverageExecutor__factory;
  }
  static readonly contractName: "AssetToWstethLeverageExecutor";

  public readonly contractName: "AssetToWstethLeverageExecutor";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetToWstethLeverageExecutorInterface {
    return new utils.Interface(_abi) as AssetToWstethLeverageExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetToWstethLeverageExecutor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetToWstethLeverageExecutor;
  }
}
