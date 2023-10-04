/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  MarketLiquidationReceiverMock,
  MarketLiquidationReceiverMockInterface,
} from "../MarketLiquidationReceiverMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "asset",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountToReceive",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onCollateralReceiver",
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
] as const;

const _bytecode =
  "0x60803461007457601f6102ff38819003918201601f19168301916001600160401b038311848410176100795780849260209460405283398101031261007457516001600160a01b0381169081900361007457600080546001600160a01b03191691909117905560405161026f90816100908239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604081815260048036101561001557600080fd5b600092833560e01c91826231167d1461006e5750506338d52e0f1461003957600080fd5b3461006a578160031936011261006a5773ffffffffffffffffffffffffffffffffffffffff60209254169051908152f35b5080fd5b915092346101f05760a03660031901126101f05773ffffffffffffffffffffffffffffffffffffffff82358181160361006a576024918235828116036101f05767ffffffffffffffff91608435838111610235573660238201121561023557808601358481116102315736910185011161006a578154166020968781019063a9059cbb60e01b82523386820152606435604482015260448152608081018181108682111761021f57885251839283929083905af1913d15610217573d81811161020557865191601f8201601f19908116603f01168301908111838210176101f357875281523d828883013e5b826101b0575b5050156101705750505160018152f35b606493601c9293519362461bcd60e51b85528401528201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152fd5b80519250821591908783156101cc575b50505090503880610160565b91938180945001031261006a578501519081151582036101f05750803880876101c0565b80fd5b634e487b7160e01b8452604187528584fd5b634e487b7160e01b8352604186528483fd5b50606061015a565b634e487b7160e01b8552604188528685fd5b8380fd5b8280fdfea2646970667358221220af72334af1efc51526264c167630bebaf2a3f08d324b0acee930a178be86ca6164736f6c63430008120033";

type MarketLiquidationReceiverMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketLiquidationReceiverMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarketLiquidationReceiverMock__factory extends ContractFactory {
  constructor(...args: MarketLiquidationReceiverMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MarketLiquidationReceiverMock";
  }

  override deploy(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MarketLiquidationReceiverMock> {
    return super.deploy(
      _token,
      overrides || {}
    ) as Promise<MarketLiquidationReceiverMock>;
  }
  override getDeployTransaction(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  override attach(address: string): MarketLiquidationReceiverMock {
    return super.attach(address) as MarketLiquidationReceiverMock;
  }
  override connect(signer: Signer): MarketLiquidationReceiverMock__factory {
    return super.connect(signer) as MarketLiquidationReceiverMock__factory;
  }
  static readonly contractName: "MarketLiquidationReceiverMock";

  public readonly contractName: "MarketLiquidationReceiverMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketLiquidationReceiverMockInterface {
    return new utils.Interface(_abi) as MarketLiquidationReceiverMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketLiquidationReceiverMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MarketLiquidationReceiverMock;
  }
}
