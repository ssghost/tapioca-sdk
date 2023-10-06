/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface AccessControlledOffchainAggregatorInterface
  extends utils.Interface {
  functions: {
    "maxAnswer()": FunctionFragment;
    "minAnswer()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "maxAnswer"
      | "maxAnswer()"
      | "minAnswer"
      | "minAnswer()"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "maxAnswer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxAnswer()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "minAnswer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minAnswer()",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "maxAnswer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxAnswer()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minAnswer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minAnswer()",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AccessControlledOffchainAggregator extends BaseContract {
  contractName: "AccessControlledOffchainAggregator";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccessControlledOffchainAggregatorInterface;

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
    maxAnswer(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxAnswer()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    minAnswer(overrides?: CallOverrides): Promise<[BigNumber]>;

    "minAnswer()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  maxAnswer(overrides?: CallOverrides): Promise<BigNumber>;

  "maxAnswer()"(overrides?: CallOverrides): Promise<BigNumber>;

  minAnswer(overrides?: CallOverrides): Promise<BigNumber>;

  "minAnswer()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    maxAnswer(overrides?: CallOverrides): Promise<BigNumber>;

    "maxAnswer()"(overrides?: CallOverrides): Promise<BigNumber>;

    minAnswer(overrides?: CallOverrides): Promise<BigNumber>;

    "minAnswer()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    maxAnswer(overrides?: CallOverrides): Promise<BigNumber>;

    "maxAnswer()"(overrides?: CallOverrides): Promise<BigNumber>;

    minAnswer(overrides?: CallOverrides): Promise<BigNumber>;

    "minAnswer()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    maxAnswer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxAnswer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minAnswer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minAnswer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}