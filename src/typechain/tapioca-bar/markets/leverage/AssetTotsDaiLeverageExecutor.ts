/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface AssetTotsDaiLeverageExecutorInterface extends utils.Interface {
  functions: {
    "buildSwapDefaultData(address,address,uint256)": FunctionFragment;
    "claimOwnership()": FunctionFragment;
    "cluster()": FunctionFragment;
    "getAsset(uint256,address,address,uint256,address,bytes)": FunctionFragment;
    "getCollateral(uint256,address,address,uint256,address,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "setCluster(address)": FunctionFragment;
    "setSwapper(address)": FunctionFragment;
    "swapper()": FunctionFragment;
    "transferOwnership(address,bool,bool)": FunctionFragment;
    "yieldBox()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buildSwapDefaultData"
      | "buildSwapDefaultData(address,address,uint256)"
      | "claimOwnership"
      | "claimOwnership()"
      | "cluster"
      | "cluster()"
      | "getAsset"
      | "getAsset(uint256,address,address,uint256,address,bytes)"
      | "getCollateral"
      | "getCollateral(uint256,address,address,uint256,address,bytes)"
      | "owner"
      | "owner()"
      | "pendingOwner"
      | "pendingOwner()"
      | "setCluster"
      | "setCluster(address)"
      | "setSwapper"
      | "setSwapper(address)"
      | "swapper"
      | "swapper()"
      | "transferOwnership"
      | "transferOwnership(address,bool,bool)"
      | "yieldBox"
      | "yieldBox()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buildSwapDefaultData",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buildSwapDefaultData(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimOwnership()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cluster", values?: undefined): string;
  encodeFunctionData(functionFragment: "cluster()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAsset",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAsset(uint256,address,address,uint256,address,bytes)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateral",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateral(uint256,address,address,uint256,address,bytes)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingOwner()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCluster",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setCluster(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapper",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapper(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "swapper", values?: undefined): string;
  encodeFunctionData(functionFragment: "swapper()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address,bool,bool)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(functionFragment: "yieldBox", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "yieldBox()",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "buildSwapDefaultData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buildSwapDefaultData(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cluster", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cluster()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAsset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAsset(uint256,address,address,uint256,address,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateral(uint256,address,address,uint256,address,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setCluster", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCluster(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setSwapper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSwapper(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapper", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapper()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership(address,bool,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yieldBox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "yieldBox()", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface AssetTotsDaiLeverageExecutor extends BaseContract {
  contractName: "AssetTotsDaiLeverageExecutor";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AssetTotsDaiLeverageExecutorInterface;

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
    buildSwapDefaultData(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "buildSwapDefaultData(address,address,uint256)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    claimOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cluster(overrides?: CallOverrides): Promise<[string]>;

    "cluster()"(overrides?: CallOverrides): Promise<[string]>;

    getAsset(
      assetId: PromiseOrValue<BigNumberish>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "getAsset(uint256,address,address,uint256,address,bytes)"(
      assetId: PromiseOrValue<BigNumberish>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCollateral(
      collateralId: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "getCollateral(uint256,address,address,uint256,address,bytes)"(
      collateralId: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<[string]>;

    setCluster(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setCluster(address)"(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSwapper(
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setSwapper(address)"(
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapper(overrides?: CallOverrides): Promise<[string]>;

    "swapper()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    yieldBox(overrides?: CallOverrides): Promise<[string]>;

    "yieldBox()"(overrides?: CallOverrides): Promise<[string]>;
  };

  buildSwapDefaultData(
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    amountIn: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "buildSwapDefaultData(address,address,uint256)"(
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    amountIn: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  claimOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "claimOwnership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cluster(overrides?: CallOverrides): Promise<string>;

  "cluster()"(overrides?: CallOverrides): Promise<string>;

  getAsset(
    assetId: PromiseOrValue<BigNumberish>,
    collateralAddress: PromiseOrValue<string>,
    assetAddress: PromiseOrValue<string>,
    collateralAmountIn: PromiseOrValue<BigNumberish>,
    from: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "getAsset(uint256,address,address,uint256,address,bytes)"(
    assetId: PromiseOrValue<BigNumberish>,
    collateralAddress: PromiseOrValue<string>,
    assetAddress: PromiseOrValue<string>,
    collateralAmountIn: PromiseOrValue<BigNumberish>,
    from: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCollateral(
    collateralId: PromiseOrValue<BigNumberish>,
    assetAddress: PromiseOrValue<string>,
    collateralAddress: PromiseOrValue<string>,
    assetAmountIn: PromiseOrValue<BigNumberish>,
    from: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "getCollateral(uint256,address,address,uint256,address,bytes)"(
    collateralId: PromiseOrValue<BigNumberish>,
    assetAddress: PromiseOrValue<string>,
    collateralAddress: PromiseOrValue<string>,
    assetAmountIn: PromiseOrValue<BigNumberish>,
    from: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

  setCluster(
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setCluster(address)"(
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSwapper(
    _swapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setSwapper(address)"(
    _swapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapper(overrides?: CallOverrides): Promise<string>;

  "swapper()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    direct: PromiseOrValue<boolean>,
    renounce: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address,bool,bool)"(
    newOwner: PromiseOrValue<string>,
    direct: PromiseOrValue<boolean>,
    renounce: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  yieldBox(overrides?: CallOverrides): Promise<string>;

  "yieldBox()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    buildSwapDefaultData(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "buildSwapDefaultData(address,address,uint256)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    "claimOwnership()"(overrides?: CallOverrides): Promise<void>;

    cluster(overrides?: CallOverrides): Promise<string>;

    "cluster()"(overrides?: CallOverrides): Promise<string>;

    getAsset(
      assetId: PromiseOrValue<BigNumberish>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAsset(uint256,address,address,uint256,address,bytes)"(
      assetId: PromiseOrValue<BigNumberish>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCollateral(
      collateralId: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCollateral(uint256,address,address,uint256,address,bytes)"(
      collateralId: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

    setCluster(
      _cluster: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCluster(address)"(
      _cluster: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSwapper(
      _swapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setSwapper(address)"(
      _swapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapper(overrides?: CallOverrides): Promise<string>;

    "swapper()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address,bool,bool)"(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    yieldBox(overrides?: CallOverrides): Promise<string>;

    "yieldBox()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    buildSwapDefaultData(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "buildSwapDefaultData(address,address,uint256)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cluster(overrides?: CallOverrides): Promise<BigNumber>;

    "cluster()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAsset(
      assetId: PromiseOrValue<BigNumberish>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "getAsset(uint256,address,address,uint256,address,bytes)"(
      assetId: PromiseOrValue<BigNumberish>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCollateral(
      collateralId: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "getCollateral(uint256,address,address,uint256,address,bytes)"(
      collateralId: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    setCluster(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setCluster(address)"(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSwapper(
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setSwapper(address)"(
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapper(overrides?: CallOverrides): Promise<BigNumber>;

    "swapper()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address,bool,bool)"(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    yieldBox(overrides?: CallOverrides): Promise<BigNumber>;

    "yieldBox()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buildSwapDefaultData(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "buildSwapDefaultData(address,address,uint256)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "claimOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cluster(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "cluster()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAsset(
      assetId: PromiseOrValue<BigNumberish>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "getAsset(uint256,address,address,uint256,address,bytes)"(
      assetId: PromiseOrValue<BigNumberish>,
      collateralAddress: PromiseOrValue<string>,
      assetAddress: PromiseOrValue<string>,
      collateralAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCollateral(
      collateralId: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "getCollateral(uint256,address,address,uint256,address,bytes)"(
      collateralId: PromiseOrValue<BigNumberish>,
      assetAddress: PromiseOrValue<string>,
      collateralAddress: PromiseOrValue<string>,
      assetAmountIn: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCluster(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setCluster(address)"(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSwapper(
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setSwapper(address)"(
      _swapper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "swapper()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    yieldBox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "yieldBox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
