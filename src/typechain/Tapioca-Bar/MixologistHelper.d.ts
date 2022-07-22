/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MixologistHelperInterface extends ethers.utils.Interface {
  functions: {
    "getAmountForAssetFraction(address,uint256)": FunctionFragment;
    "getCollateralSharesForBorrowPart(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAmountForAssetFraction",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateralSharesForBorrowPart",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAmountForAssetFraction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateralSharesForBorrowPart",
    data: BytesLike
  ): Result;

  events: {};
}

export class MixologistHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MixologistHelperInterface;

  functions: {
    getAmountForAssetFraction(
      mixologist: string,
      fraction: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getAmountForAssetFraction(address,uint256)"(
      mixologist: string,
      fraction: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCollateralSharesForBorrowPart(
      mixologist: string,
      borrowPart: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getCollateralSharesForBorrowPart(address,uint256)"(
      mixologist: string,
      borrowPart: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  getAmountForAssetFraction(
    mixologist: string,
    fraction: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getAmountForAssetFraction(address,uint256)"(
    mixologist: string,
    fraction: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCollateralSharesForBorrowPart(
    mixologist: string,
    borrowPart: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getCollateralSharesForBorrowPart(address,uint256)"(
    mixologist: string,
    borrowPart: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getAmountForAssetFraction(
      mixologist: string,
      fraction: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAmountForAssetFraction(address,uint256)"(
      mixologist: string,
      fraction: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCollateralSharesForBorrowPart(
      mixologist: string,
      borrowPart: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCollateralSharesForBorrowPart(address,uint256)"(
      mixologist: string,
      borrowPart: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getAmountForAssetFraction(
      mixologist: string,
      fraction: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAmountForAssetFraction(address,uint256)"(
      mixologist: string,
      fraction: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCollateralSharesForBorrowPart(
      mixologist: string,
      borrowPart: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCollateralSharesForBorrowPart(address,uint256)"(
      mixologist: string,
      borrowPart: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAmountForAssetFraction(
      mixologist: string,
      fraction: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAmountForAssetFraction(address,uint256)"(
      mixologist: string,
      fraction: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCollateralSharesForBorrowPart(
      mixologist: string,
      borrowPart: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCollateralSharesForBorrowPart(address,uint256)"(
      mixologist: string,
      borrowPart: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
