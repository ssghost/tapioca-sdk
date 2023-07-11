/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Multicall3,
  Multicall3Interface,
} from "../../../contracts/Multicall/Multicall3";

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
        internalType: "struct Multicall3.Call[]",
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
        internalType: "struct Multicall3.Result[]",
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
        internalType: "struct Multicall3.CallValue[]",
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
        internalType: "struct Multicall3.Result[]",
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
  "0x6080806040523461005b5760008054336001600160a01b0319821681178355916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a361098090816100618239f35b600080fdfe604060808152600436101561001357600080fd5b600090813560e01c9182636e5a9cbb1461006d5750508063715018a6146100685780638da5cb5b14610063578063e8bbf5d71461005e5763f2fde38b1461005957600080fd5b6103a2565b6102da565b6102b3565b610248565b61007636610137565b829161008182610573565b9361008a61077a565b50805b8381106100b2576100ae86886100a4883414610821565b51918291826101d1565b0390f35b6100bc818761060f565b516101246101206100d66100d185898961079d565b6107bf565b9261011a86808d870151809c019b60606100f789516001600160a01b031690565b980151978851916020809a01915af161010e610754565b95830195865215158252565b51151590565b1590565b610131575060010161008d565b51610881565b9060206003198301126101845760043567ffffffffffffffff9283821161018457806023830112156101845781600401359384116101845760248460051b83010111610184576024019190565b600080fd5b60005b83811061019c5750506000910152565b818101518382015260200161018c565b906020916101c581518092818552858086019101610189565b601f01601f1916010190565b602080820190808352835180925260409283810182858560051b8401019601946000925b858410610206575050505050505090565b909192939495968580610237600193603f1986820301885286838d51805115158452015191818582015201906101ac565b9901940194019295949391906101f5565b34610184576000806003193601126102b057610262610433565b805473ffffffffffffffffffffffffffffffffffffffff198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b346101845760003660031901126101845760206001600160a01b0360005416604051908152f35b6102e336610137565b6102ec81610573565b906102f56105dc565b50600092835b82811061031057604051806100ae86826101d1565b61031a818561060f565b5161038161012061033461032f858888610628565b6106b0565b9261035161034985516001600160a01b031690565b3b1515610708565b61011a8980604061036988516001600160a01b031690565b97015196875190826020809a01915af161010e610754565b61013157506001016102fb565b35906001600160a01b038216820361018457565b34610184576020366003190112610184576004356001600160a01b038116808203610184576103cf610433565b156103df576103dd9061048b565b005b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b6001600160a01b0360005416330361044757565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b600054906001600160a01b0380911691826bffffffffffffffffffffffff60a01b821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3565b634e487b7160e01b600052604160045260246000fd5b604051906060820182811067ffffffffffffffff82111761051057604052565b6104da565b604051906080820182811067ffffffffffffffff82111761051057604052565b6040519190601f01601f1916820167ffffffffffffffff81118382101761051057604052565b67ffffffffffffffff81116105105760051b60200190565b906105856105808361055b565b610535565b8281528092610596601f199161055b565b016000805b8281106105a85750505050565b604090815182810181811067ffffffffffffffff82111761051057602093528381528260608183015282870101520161059b565b6105e46104f0565b90600082526000602083015260606040830152565b634e487b7160e01b600052603260045260246000fd5b80518210156106235760209160051b010190565b6105f9565b91908110156106235760051b81013590605e1981360301821215610184570190565b3590811515820361018457565b67ffffffffffffffff811161051057601f01601f191660200190565b81601f820112156101845780359061068d61058083610657565b928284526020838301011161018457816000926020809301838601378301015290565b606081360312610184576106c26104f0565b906106cc8161038e565b82526106da6020820161064a565b602083015260408101359067ffffffffffffffff82116101845761070091369101610673565b604082015290565b1561070f57565b60405162461bcd60e51b815260206004820152601660248201527f4d756c746963616c6c3a206e6f20636f6e7472616374000000000000000000006044820152606490fd5b3d15610775573d9061076861058083610657565b9182523d6000602084013e565b606090565b610782610515565b90600082526000602083015260006040830152606080830152565b91908110156106235760051b81013590607e1981360301821215610184570190565b608081360312610184576107d1610515565b906107db8161038e565b82526107e96020820161064a565b60208301526040810135604083015260608101359067ffffffffffffffff82116101845761081991369101610673565b606082015290565b1561082857565b60405162461bcd60e51b815260206004820152601a60248201527f4d756c746963616c6c333a2076616c7565206d69736d617463680000000000006044820152606490fd5b90602061087e9281815201906101ac565b90565b6044815110610914576004810151810190602081602484019303126101845760248101519067ffffffffffffffff821161018457019080604383011215610184576024820151916108d461058084610657565b918383526044848301011161018457610910926108f8916044602085019101610189565b60405162461bcd60e51b81529182916004830161086d565b0390fd5b60405162461bcd60e51b815260206004820152600e60248201526d2932b0b9b7b7103ab735b737bbb760911b6044820152606490fdfea264697066735822122064de495823a643018e7bae8f548da6cd2f44b303ebc9d19567f2cfdf0402ff9a64736f6c63430008120033";

type Multicall3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Multicall3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Multicall3__factory extends ContractFactory {
  constructor(...args: Multicall3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Multicall3";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Multicall3> {
    return super.deploy(overrides || {}) as Promise<Multicall3>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Multicall3 {
    return super.attach(address) as Multicall3;
  }
  override connect(signer: Signer): Multicall3__factory {
    return super.connect(signer) as Multicall3__factory;
  }
  static readonly contractName: "Multicall3";

  public readonly contractName: "Multicall3";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Multicall3Interface {
    return new utils.Interface(_abi) as Multicall3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall3 {
    return new Contract(address, _abi, signerOrProvider) as Multicall3;
  }
}
