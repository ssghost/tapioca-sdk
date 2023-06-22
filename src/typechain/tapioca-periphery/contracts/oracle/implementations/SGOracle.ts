/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface SGOracleInterface extends utils.Interface {
  functions: {
    "SG_POOL()": FunctionFragment;
    "UNDERLYING()": FunctionFragment;
    "_name()": FunctionFragment;
    "_symbol()": FunctionFragment;
    "decimals()": FunctionFragment;
    "get(bytes)": FunctionFragment;
    "name(bytes)": FunctionFragment;
    "peek(bytes)": FunctionFragment;
    "peekSpot(bytes)": FunctionFragment;
    "symbol(bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "SG_POOL"
      | "SG_POOL()"
      | "UNDERLYING"
      | "UNDERLYING()"
      | "_name"
      | "_name()"
      | "_symbol"
      | "_symbol()"
      | "decimals"
      | "decimals()"
      | "get"
      | "get(bytes)"
      | "name"
      | "name(bytes)"
      | "peek"
      | "peek(bytes)"
      | "peekSpot"
      | "peekSpot(bytes)"
      | "symbol"
      | "symbol(bytes)"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "SG_POOL", values?: undefined): string;
  encodeFunctionData(functionFragment: "SG_POOL()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "UNDERLYING",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNDERLYING()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_name", values?: undefined): string;
  encodeFunctionData(functionFragment: "_name()", values?: undefined): string;
  encodeFunctionData(functionFragment: "_symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "_symbol()", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decimals()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "get(bytes)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "name",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "name(bytes)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "peek",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "peek(bytes)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "peekSpot",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "peekSpot(bytes)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "symbol",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "symbol(bytes)",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "SG_POOL", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SG_POOL()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "UNDERLYING", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UNDERLYING()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_name()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_symbol()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get(bytes)", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "name(bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "peek", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "peek(bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "peekSpot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "peekSpot(bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "symbol(bytes)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SGOracle extends BaseContract {
  contractName: "SGOracle";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SGOracleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    SG_POOL(overrides?: CallOverrides): Promise<[string]>;

    "SG_POOL()"(overrides?: CallOverrides): Promise<[string]>;

    UNDERLYING(overrides?: CallOverrides): Promise<[string]>;

    "UNDERLYING()"(overrides?: CallOverrides): Promise<[string]>;

    _name(overrides?: CallOverrides): Promise<[string]>;

    "_name()"(overrides?: CallOverrides): Promise<[string]>;

    _symbol(overrides?: CallOverrides): Promise<[string]>;

    "_symbol()"(overrides?: CallOverrides): Promise<[string]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    "decimals()"(overrides?: CallOverrides): Promise<[number]>;

    get(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "get(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "name(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    peek(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

    "peek(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

    peekSpot(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    "peekSpot(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rate: BigNumber }>;

    symbol(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "symbol(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  SG_POOL(overrides?: CallOverrides): Promise<string>;

  "SG_POOL()"(overrides?: CallOverrides): Promise<string>;

  UNDERLYING(overrides?: CallOverrides): Promise<string>;

  "UNDERLYING()"(overrides?: CallOverrides): Promise<string>;

  _name(overrides?: CallOverrides): Promise<string>;

  "_name()"(overrides?: CallOverrides): Promise<string>;

  _symbol(overrides?: CallOverrides): Promise<string>;

  "_symbol()"(overrides?: CallOverrides): Promise<string>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  get(
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "get(bytes)"(
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "name(bytes)"(
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  peek(
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

  "peek(bytes)"(
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

  peekSpot(
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "peekSpot(bytes)"(
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  symbol(
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "symbol(bytes)"(
    data: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    SG_POOL(overrides?: CallOverrides): Promise<string>;

    "SG_POOL()"(overrides?: CallOverrides): Promise<string>;

    UNDERLYING(overrides?: CallOverrides): Promise<string>;

    "UNDERLYING()"(overrides?: CallOverrides): Promise<string>;

    _name(overrides?: CallOverrides): Promise<string>;

    "_name()"(overrides?: CallOverrides): Promise<string>;

    _symbol(overrides?: CallOverrides): Promise<string>;

    "_symbol()"(overrides?: CallOverrides): Promise<string>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    get(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

    "get(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

    name(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "name(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    peek(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

    "peek(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { success: boolean; rate: BigNumber }>;

    peekSpot(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "peekSpot(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "symbol(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    SG_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    "SG_POOL()"(overrides?: CallOverrides): Promise<BigNumber>;

    UNDERLYING(overrides?: CallOverrides): Promise<BigNumber>;

    "UNDERLYING()"(overrides?: CallOverrides): Promise<BigNumber>;

    _name(overrides?: CallOverrides): Promise<BigNumber>;

    "_name()"(overrides?: CallOverrides): Promise<BigNumber>;

    _symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "_symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    get(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "get(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    name(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "name(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    peek(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "peek(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    peekSpot(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "peekSpot(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "symbol(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    SG_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SG_POOL()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNDERLYING(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "UNDERLYING()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "_name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "_symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "get(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "name(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    peek(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "peek(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    peekSpot(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "peekSpot(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "symbol(bytes)"(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
