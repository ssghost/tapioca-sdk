/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  USDOFlashloanHelper,
  USDOFlashloanHelperInterface,
} from "../../usd0/USDOFlashloanHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IUSDO",
        name: "_usdo",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
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
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "FlashMintFeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "MaxFlashMintUpdated",
    type: "event",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "flashFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC3156FlashBorrower",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "flashLoan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "flashMintFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "maxFlashLoan",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxFlashMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    name: "setFlashMintFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    name: "setMaxFlashMintable",
    outputs: [],
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
    name: "usdo",
    outputs: [
      {
        internalType: "contract IUSDO",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0346100ed57601f61109338819003918201601f19168301916001600160401b038311848410176100f25780849260409485528339810103126100ed5780516001600160a01b039182821682036100ed57602001519182168092036100ed576000805460405193916001600160a01b0319918216919033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360ff196005541660055533161717600055608052600a60025569152d02c7e14af6800000600355610f8a9081610109823960805181818161039e01528181610726015281816107f60152610ab90152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001257600080fd5b60003560e01c8063078dfbe7146100f7578063095ea7b3146100f257806316d995a9146100ed5780631d2a0e3d146100e85780634c6bb35d146100e35780634e71e0c8146100de5780635cffe9de146100d9578063613255ab146100d45780638da5cb5b146100cf578063940a1dc0146100ca5780639d3f4d1a146100c5578063d9d98ce4146100c0578063dd62ed3e146100bb5763e30c3978146100b657600080fd5b610637565b6105d4565b6105a9565b61058b565b61056d565b610544565b610516565b61048a565b6103cd565b610388565b6102df565b61027d565b610248565b61011c565b6001600160a01b0381160361010d57565b600080fd5b8015150361010d57565b3461010d57606036600319011261010d57600435610139816100fc565b6024359061014682610112565b6044359061015382610112565b60018060a01b0360009361016b828654163314610660565b156102325781169182159081159161022a575b50156101ed5782546101da92906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600180546001600160a01b031916905580f35b60405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152606490fd5b90503861017e565b91501660018060a01b0319600154161760015580f35b3461010d57604036600319011261010d57610272600435610268816100fc565b6024359033610e5c565b602060405160018152f35b3461010d57602036600319011261010d576004356102a660018060a01b03600054163314610660565b60035460408051918252602082018390527f7d04cf410385806a9ac3566ac4cca4e5eaba6cc242abbf98f4f44e4ac6f3e8ff91a1600355005b3461010d57602036600319011261010d5760043561030860018060a01b03600054163314610660565b620f424081101561034c5760025460408051918252602082018390527fb3a985697c0361591fe9933703eb14ce1d74444a2d349080b6dec8da77a4082b91a1600255005b60405162461bcd60e51b81526020600482015260096024820152685553444f3a2062696760b81b6044820152606490fd5b600091031261010d57565b3461010d57600036600319011261010d576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b3461010d57600080600319360112610487576001546001600160a01b039081163381900361044357806101da928454167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b80fd5b3461010d57608036600319011261010d576004356104a7816100fc565b6024356104b3816100fc565b6064359067ffffffffffffffff9081831161010d573660238401121561010d57826004013591821161010d57366024838501011161010d5761051293602461050094019160443591610a9a565b60405190151581529081906020820190565b0390f35b3461010d57602036600319011261010d576105326004356100fc565b602061053c610712565b604051908152f35b3461010d57600036600319011261010d576000546040516001600160a01b039091168152602090f35b3461010d57600036600319011261010d576020600254604051908152f35b3461010d57600036600319011261010d576020600354604051908152f35b3461010d57604036600319011261010d57602061053c6004356105cb816100fc565b602435906107ec565b3461010d57604036600319011261010d57602061062e6004356105f6816100fc565b60243590610603826100fc565b60018060a01b03166000526004835260406000209060018060a01b0316600052602052604060002090565b54604051908152f35b3461010d57600036600319011261010d576001546040516001600160a01b039091168152602090f35b1561066757565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b67ffffffffffffffff81116106bf57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff8211176106bf57604052565b9081602091031261010d575190565b6040513d6000823e3d90fd5b6040516318160ddd60e01b808252602091907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316908383600481855afa9283156107c8576000936107cd575b5060035480931160001461077b575050905090565b8391925060046040518094819382525afa9182156107c85760009261079f57505090565b6107be9250803d106107c1575b6107b681836106d5565b8101906106f7565b90565b503d6107ac565b610706565b6107e5919350843d86116107c1576107b681836106d5565b9138610766565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116911603610851576002549081810291818304149015171561083b57620f4240900490565b634e487b7160e01b600052601160045260246000fd5b60405162461bcd60e51b8152602060048201526024808201527f5553444f466c6173686c6f616e48656c7065723a20746f6b656e206e6f742076604482015263185b1a5960e21b6064820152608490fd5b9081602091031261010d57516107be81610112565b156108be57565b60405162461bcd60e51b815260206004820152601b60248201527f5553444f466c6173686c6f616e48656c7065723a2070617573656400000000006044820152606490fd5b1561090a57565b60405162461bcd60e51b815260206004820152602760248201527f5553444f466c6173686c6f616e48656c7065723a207265706179206e6f7420616044820152661c1c1c9bdd995960ca1b6064820152608490fd5b1561096657565b60405162461bcd60e51b815260206004820152601f60248201527f5553444f466c6173686c6f616e48656c7065723a207265656e7472616e6379006044820152606490fd5b156109b257565b60405162461bcd60e51b815260206004820152602360248201527f5553444f466c6173686c6f616e48656c7065723a20616d6f756e7420746f6f2060448201526262696760e81b6064820152608490fd5b94919286949160c0979460018060a01b0380921688521660208701526040860152606085015260a060808501528160a0850152848401376000828201840152601f01601f1916010190565b15610a5557565b60405162461bcd60e51b815260206004820152601b60248201527f5553444f466c6173686c6f616e48656c7065723a206661696c656400000000006044820152606490fd5b60408051635c975abb60e01b8152602096919592936001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811693928981600481885afa80156107c857610afd91600091610d82575b50156108b7565b851694338603610d2f575b610b23610b1e610b1a60055460ff1690565b1590565b61095f565b610b35600160ff196005541617600555565b610b4887610b41610712565b10156109ab565b610b5287836107ec565b94843b1561010d5788516340c10f1960e01b81526001600160a01b038816600482015260248101899052600081604481838a5af180156107c857610d1c575b50843b1561010d57885163028f6c4560e31b81526004810187905293600085602481838a5af19182156107c857610be8958c93610d03575b508a516323e30c8b60e01b815295869283928a8d893360048801610a03565b038160008a5af19081156107c8576000809493610c347f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd960449584978f8692610ce6575b505014610a4e565b8a51998a93632770a7eb60e21b8552600485015260248401525af11561010d5760448401948590526323b872dd60e01b85526001600160a01b039283166048850152918216606884015260888301528390839060649082906000905af180156107c857610cb3575b505050610cae60ff1960055416600555565b600190565b82604491610cd594913d10610cde575b610ccd82856106d5565b0101906108a2565b50388080610c9c565b3d9150610cc3565b610cfc9250803d106107c1576107b681836106d5565b388f610c2c565b80610d10610d16926106ab565b8061037d565b38610bc9565b80610d10610d29926106ab565b38610b91565b610d7287610d6a33610d538a60018060a01b03166000526004602052604060002090565b9060018060a01b0316600052602052604060002090565b541015610903565b610d7d873388610daf565b610b08565b610da291508b3d8d11610da8575b610d9a81836106d5565b8101906108a2565b38610af6565b503d610d90565b6001600160a01b038082166000908152600460209081526040808320938616835292905220909190549260018401610de8575b50505050565b808410610e0357610dfa930391610e5c565b38808080610de2565b60405162461bcd60e51b815260206004820152602b60248201527f5553444f466c6173686c6f616e48656c7065723a20696e73756666696369656e60448201526a7420616c6c6f77616e636560a81b6064820152608490fd5b906001600160a01b0380831615610ef457811615610e9657610d53610e939260018060a01b03166000526004602052604060002090565b55565b60405162461bcd60e51b815260206004820152603060248201527f5553444f466c6173686c6f616e48656c7065723a20617070726f766520746f2060448201526f746865207a65726f206164647265737360801b6064820152608490fd5b60405162461bcd60e51b815260206004820152603260248201527f5553444f466c6173686c6f616e48656c7065723a20617070726f76652066726f6044820152716d20746865207a65726f206164647265737360701b6064820152608490fdfea26469706673582212206ab66fb5145120a1f67e33766f42291e47d0e0e732f6c9dcaca0e7510ca37aad64736f6c63430008120033";

type USDOFlashloanHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: USDOFlashloanHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class USDOFlashloanHelper__factory extends ContractFactory {
  constructor(...args: USDOFlashloanHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "USDOFlashloanHelper";
  }

  override deploy(
    _usdo: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<USDOFlashloanHelper> {
    return super.deploy(
      _usdo,
      _owner,
      overrides || {}
    ) as Promise<USDOFlashloanHelper>;
  }
  override getDeployTransaction(
    _usdo: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_usdo, _owner, overrides || {});
  }
  override attach(address: string): USDOFlashloanHelper {
    return super.attach(address) as USDOFlashloanHelper;
  }
  override connect(signer: Signer): USDOFlashloanHelper__factory {
    return super.connect(signer) as USDOFlashloanHelper__factory;
  }
  static readonly contractName: "USDOFlashloanHelper";

  public readonly contractName: "USDOFlashloanHelper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): USDOFlashloanHelperInterface {
    return new utils.Interface(_abi) as USDOFlashloanHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): USDOFlashloanHelper {
    return new Contract(address, _abi, signerOrProvider) as USDOFlashloanHelper;
  }
}