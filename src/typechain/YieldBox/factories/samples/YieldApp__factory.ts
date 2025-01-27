/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { YieldApp, YieldAppInterface } from "../../samples/YieldApp";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract YieldBox",
        name: "_yieldBox",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
  "0x608060405234801561001057600080fd5b5060405161013d38038061013d83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b60ab806100926000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063de40657714602d575b600080fd5b600054604c9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f3fea2646970667358221220f5191bd5006eca4ba534a3e4b23e6706d9a05939d56a2045d27e19c8b5f4511264736f6c63430008160033";

type YieldAppConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YieldAppConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YieldApp__factory extends ContractFactory {
  constructor(...args: YieldAppConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "YieldApp";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<YieldApp> {
    return super.deploy(_yieldBox, overrides || {}) as Promise<YieldApp>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yieldBox, overrides || {});
  }
  override attach(address: string): YieldApp {
    return super.attach(address) as YieldApp;
  }
  override connect(signer: Signer): YieldApp__factory {
    return super.connect(signer) as YieldApp__factory;
  }
  static readonly contractName: "YieldApp";

  public readonly contractName: "YieldApp";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldAppInterface {
    return new utils.Interface(_abi) as YieldAppInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldApp {
    return new Contract(address, _abi, signerOrProvider) as YieldApp;
  }
}
