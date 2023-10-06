/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DelegatorTest,
  DelegatorTestInterface,
} from "../../research/DelegatorTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "testMsgValue",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "testMsgValueInternal",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100165761038e908161001c8239f35b600080fdfe6040608081526004908136101561001557600080fd5b600090813560e01c928363466e5435146100405750505063f38306421461003b57600080fd5b610118565b610049366100e4565b90835b60028110610058578480f35b83516379c1832160e11b6020820190815273ffffffffffffffffffffffffffffffffffffffff85166024808401919091528252869182919061009b6044826101e3565b5190305af46100a8610221565b90156100bd57506100b89061018c565b61004c565b826100e06100cb87936102a0565b925162461bcd60e51b81529283928301610274565b0390fd5b60209060031901126101135760043573ffffffffffffffffffffffffffffffffffffffff811681036101135790565b600080fd5b73ffffffffffffffffffffffffffffffffffffffff610136366100e4565b16803b1561011357604051809163ce5a818760e01b8252816004600094859334905af1801561018157610167575080f35b67ffffffffffffffff811161017c5760405280f35b6101b1565b6040513d84823e3d90fd5b600019811461019b5760010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040810190811067ffffffffffffffff82111761017c57604052565b90601f8019910116810190811067ffffffffffffffff82111761017c57604052565b67ffffffffffffffff811161017c57601f01601f191660200190565b3d1561024c573d9061023282610205565b9161024060405193846101e3565b82523d6000602084013e565b606090565b60005b8381106102645750506000910152565b8181015183820152602001610254565b604091602082526102948151809281602086015260208686019101610251565b601f01601f1916010190565b604481511061031e576004810151810190602081602484019303126101135760248101519067ffffffffffffffff82116101135701816043820112156101135760248101516102ee81610205565b926102fc60405194856101e3565b818452604482840101116101135761031b916044602085019101610251565b90565b5060405161032b816101c7565b600e81527f6e6f2072657475726e206461746100000000000000000000000000000000000060208201529056fea2646970667358221220dd6eb9ee271cdc1b52aaaced1e503d680185d2312642d9024b0597e23078a60c64736f6c63430008120033";

type DelegatorTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DelegatorTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DelegatorTest__factory extends ContractFactory {
  constructor(...args: DelegatorTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "DelegatorTest";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DelegatorTest> {
    return super.deploy(overrides || {}) as Promise<DelegatorTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DelegatorTest {
    return super.attach(address) as DelegatorTest;
  }
  override connect(signer: Signer): DelegatorTest__factory {
    return super.connect(signer) as DelegatorTest__factory;
  }
  static readonly contractName: "DelegatorTest";

  public readonly contractName: "DelegatorTest";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DelegatorTestInterface {
    return new utils.Interface(_abi) as DelegatorTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DelegatorTest {
    return new Contract(address, _abi, signerOrProvider) as DelegatorTest;
  }
}