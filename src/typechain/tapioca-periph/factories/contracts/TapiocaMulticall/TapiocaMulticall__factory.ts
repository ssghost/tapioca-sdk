/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TapiocaMulticall,
  TapiocaMulticallInterface,
} from "../../../contracts/TapiocaMulticall/TapiocaMulticall";

const _abi = [
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
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct TapiocaMulticall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct TapiocaMulticall.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct TapiocaMulticall.CallValue[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "multicallValue",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct TapiocaMulticall.Result[]",
        name: "returnData",
        type: "tuple[]",
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
    name: "renounceOwnership",
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
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610d598061007e6000396000f3fe60806040526004361061005a5760003560e01c80638da5cb5b116100435780638da5cb5b1461009f578063e8bbf5d7146100d4578063f2fde38b146100e757600080fd5b80636e5a9cbb1461005f578063715018a614610088575b600080fd5b61007261006d366004610798565b610107565b60405161007f9190610848565b60405180910390f35b34801561009457600080fd5b5061009d610310565b005b3480156100ab57600080fd5b5060005460405173ffffffffffffffffffffffffffffffffffffffff909116815260200161007f565b6100726100e2366004610798565b610324565b3480156100f357600080fd5b5061009d610102366004610907565b61051c565b60606101116105d3565b6000828067ffffffffffffffff81111561012d5761012d610929565b60405190808252806020026020018201604052801561017357816020015b60408051808201909152600081526060602082015281526020019060019003908161014b5790505b50604080516080810182526000808252602082018190529181018290526060808201529194505b828110156102985760008582815181106101b6576101b6610958565b602002602001015190508787838181106101d2576101d2610958565b90506020028101906101e49190610987565b6101ed90610ac0565b92506000836040015190508086019550836000015173ffffffffffffffffffffffffffffffffffffffff1681856060015160405161022b9190610b4d565b60006040518083038185875af1925050503d8060008114610268576040519150601f19603f3d011682016040523d82523d6000602084013e61026d565b606091505b506020840152151580835261028e5761028e84600001518360200151610654565b505060010161019a565b50823414610307576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4d756c746963616c6c333a2076616c7565206d69736d6174636800000000000060448201526064015b60405180910390fd5b50505092915050565b6103186105d3565b61032260006106d7565b565b606061032e6105d3565b818067ffffffffffffffff81111561034857610348610929565b60405190808252806020026020018201604052801561038e57816020015b6040805180820190915260008152606060208201528152602001906001900390816103665790505b506040805160608082018352600080835260208301819052928201529193505b828110156103075760008482815181106103ca576103ca610958565b602002602001015190508686838181106103e6576103e6610958565b90506020028101906103f89190610b5f565b61040190610b93565b805190935073ffffffffffffffffffffffffffffffffffffffff163b610483576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d756c746963616c6c3a206e6f20636f6e74726163740000000000000000000060448201526064016102fe565b826000015173ffffffffffffffffffffffffffffffffffffffff1683604001516040516104b09190610b4d565b6000604051808303816000865af19150503d80600081146104ed576040519150601f19603f3d011682016040523d82523d6000602084013e6104f2565b606091505b50602083015215158082526105135761051383600001518260200151610654565b506001016103ae565b6105246105d3565b73ffffffffffffffffffffffffffffffffffffffff81166105c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016102fe565b6105d0816106d7565b50565b60005473ffffffffffffffffffffffffffffffffffffffff163314610322576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102fe565b600481018051839061066f9084016024908101908501610c16565b8360405160200161068293929190610c8d565b6040516020818303038152906040528060200190518101906106a49190610c16565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fe9190610d10565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008083601f84011261075e57600080fd5b50813567ffffffffffffffff81111561077657600080fd5b6020830191508360208260051b850101111561079157600080fd5b9250929050565b600080602083850312156107ab57600080fd5b823567ffffffffffffffff8111156107c257600080fd5b6107ce8582860161074c565b90969095509350505050565b60005b838110156107f55781810151838201526020016107dd565b50506000910152565b600081518084526108168160208601602086016107da565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060208083018184528085518083526040925060408601915060408160051b87010184880160005b838110156108d0578883037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc001855281518051151584528701518784018790526108bd878501826107fe565b9588019593505090860190600101610871565b509098975050505050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461090257600080fd5b919050565b60006020828403121561091957600080fd5b610922826108de565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff818336030181126109bb57600080fd5b9190910192915050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610a0c57610a0c610929565b604052919050565b8035801515811461090257600080fd5b600067ffffffffffffffff821115610a3e57610a3e610929565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112610a7b57600080fd5b8135610a8e610a8982610a24565b6109c5565b818152846020838601011115610aa357600080fd5b816020850160208301376000918101602001919091529392505050565b600060808236031215610ad257600080fd5b6040516080810167ffffffffffffffff8282108183111715610af657610af6610929565b81604052610b03856108de565b8352610b1160208601610a14565b6020840152604085013560408401526060850135915080821115610b3457600080fd5b50610b4136828601610a6a565b60608301525092915050565b600082516109bb8184602087016107da565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa18336030181126109bb57600080fd5b600060608236031215610ba557600080fd5b6040516060810167ffffffffffffffff8282108183111715610bc957610bc9610929565b81604052610bd6856108de565b8352610be460208601610a14565b60208401526040850135915080821115610bfd57600080fd5b50610c0a36828601610a6a565b60408301525092915050565b600060208284031215610c2857600080fd5b815167ffffffffffffffff811115610c3f57600080fd5b8201601f81018413610c5057600080fd5b8051610c5e610a8982610a24565b818152856020838501011115610c7357600080fd5b610c848260208301602086016107da565b95945050505050565b73ffffffffffffffffffffffffffffffffffffffff84168152608060208201526000610cbc60808301856107fe565b828103806040850152600e82527f2052657475726e20646174613a20000000000000000000000000000000000000602083015260408101606085015250610d0660408201856107fe565b9695505050505050565b60208152600061092260208301846107fe56fea26469706673582212207c2fffbabd264f8d4ce16a29f58dbce8f3108062808d487b43bd401455e2ce4964736f6c63430008160033";

type TapiocaMulticallConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TapiocaMulticallConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TapiocaMulticall__factory extends ContractFactory {
  constructor(...args: TapiocaMulticallConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TapiocaMulticall";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TapiocaMulticall> {
    return super.deploy(overrides || {}) as Promise<TapiocaMulticall>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TapiocaMulticall {
    return super.attach(address) as TapiocaMulticall;
  }
  override connect(signer: Signer): TapiocaMulticall__factory {
    return super.connect(signer) as TapiocaMulticall__factory;
  }
  static readonly contractName: "TapiocaMulticall";

  public readonly contractName: "TapiocaMulticall";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TapiocaMulticallInterface {
    return new utils.Interface(_abi) as TapiocaMulticallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TapiocaMulticall {
    return new Contract(address, _abi, signerOrProvider) as TapiocaMulticall;
  }
}