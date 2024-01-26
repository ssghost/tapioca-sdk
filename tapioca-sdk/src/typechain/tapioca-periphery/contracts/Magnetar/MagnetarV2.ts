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
  PayableOverrides,
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

export declare namespace MagnetarV2Storage {
  export type CallStruct = {
    id: PromiseOrValue<BigNumberish>;
    target: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>;
    allowFailure: PromiseOrValue<boolean>;
    call: PromiseOrValue<BytesLike>;
  };

  export type CallStructOutput = [
    number,
    string,
    BigNumber,
    boolean,
    string
  ] & {
    id: number;
    target: string;
    value: BigNumber;
    allowFailure: boolean;
    call: string;
  };
}

export interface MagnetarV2Interface extends utils.Interface {
  functions: {
    "MAGNETAR_ACTION_MARKET()": FunctionFragment;
    "MAGNETAR_ACTION_MARKET_MODULE()": FunctionFragment;
    "MAGNETAR_ACTION_PERMIT()": FunctionFragment;
    "MAGNETAR_ACTION_TAP_TOKEN()": FunctionFragment;
    "MAGNETAR_ACTION_TOFT()": FunctionFragment;
    "MAGNETAR_ACTION_YIELDBOX_MODULE()": FunctionFragment;
    "burst((uint8,address,uint256,bool,bytes)[])": FunctionFragment;
    "cluster()": FunctionFragment;
    "helper()": FunctionFragment;
    "modules(uint8)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rescueEth(uint256,address)": FunctionFragment;
    "setCluster(address)": FunctionFragment;
    "setHelper(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAGNETAR_ACTION_MARKET"
      | "MAGNETAR_ACTION_MARKET()"
      | "MAGNETAR_ACTION_MARKET_MODULE"
      | "MAGNETAR_ACTION_MARKET_MODULE()"
      | "MAGNETAR_ACTION_PERMIT"
      | "MAGNETAR_ACTION_PERMIT()"
      | "MAGNETAR_ACTION_TAP_TOKEN"
      | "MAGNETAR_ACTION_TAP_TOKEN()"
      | "MAGNETAR_ACTION_TOFT"
      | "MAGNETAR_ACTION_TOFT()"
      | "MAGNETAR_ACTION_YIELDBOX_MODULE"
      | "MAGNETAR_ACTION_YIELDBOX_MODULE()"
      | "burst"
      | "burst((uint8,address,uint256,bool,bytes)[])"
      | "cluster"
      | "cluster()"
      | "helper"
      | "helper()"
      | "modules"
      | "modules(uint8)"
      | "onERC721Received"
      | "onERC721Received(address,address,uint256,bytes)"
      | "owner"
      | "owner()"
      | "renounceOwnership"
      | "renounceOwnership()"
      | "rescueEth"
      | "rescueEth(uint256,address)"
      | "setCluster"
      | "setCluster(address)"
      | "setHelper"
      | "setHelper(address)"
      | "transferOwnership"
      | "transferOwnership(address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_MARKET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_MARKET()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_MARKET_MODULE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_MARKET_MODULE()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_PERMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_PERMIT()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_TAP_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_TAP_TOKEN()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_TOFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_TOFT()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_YIELDBOX_MODULE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAGNETAR_ACTION_YIELDBOX_MODULE()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "burst",
    values: [MagnetarV2Storage.CallStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "burst((uint8,address,uint256,bool,bytes)[])",
    values: [MagnetarV2Storage.CallStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "cluster", values?: undefined): string;
  encodeFunctionData(functionFragment: "cluster()", values?: undefined): string;
  encodeFunctionData(functionFragment: "helper", values?: undefined): string;
  encodeFunctionData(functionFragment: "helper()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "modules",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "modules(uint8)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received(address,address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rescueEth",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "rescueEth(uint256,address)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
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
    functionFragment: "setHelper",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setHelper(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address)",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_MARKET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_MARKET()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_MARKET_MODULE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_MARKET_MODULE()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_PERMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_PERMIT()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_TAP_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_TAP_TOKEN()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_TOFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_TOFT()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_YIELDBOX_MODULE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAGNETAR_ACTION_YIELDBOX_MODULE()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burst", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "burst((uint8,address,uint256,bool,bytes)[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cluster", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cluster()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "helper", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "helper()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "modules", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "modules(uint8)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rescueEth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rescueEth(uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setCluster", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCluster(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setHelper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setHelper(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership(address)",
    data: BytesLike
  ): Result;

  events: {
    "ClusterSet(address,address)": EventFragment;
    "HelperUpdate(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClusterSet"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ClusterSet(address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "HelperUpdate"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "HelperUpdate(address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
}

export interface ClusterSetEventObject {
  oldCluster: string;
  newCluster: string;
}
export type ClusterSetEvent = TypedEvent<
  [string, string],
  ClusterSetEventObject
>;

export type ClusterSetEventFilter = TypedEventFilter<ClusterSetEvent>;

export interface HelperUpdateEventObject {
  old: string;
  newHelper: string;
}
export type HelperUpdateEvent = TypedEvent<
  [string, string],
  HelperUpdateEventObject
>;

export type HelperUpdateEventFilter = TypedEventFilter<HelperUpdateEvent>;

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

export interface MagnetarV2 extends BaseContract {
  contractName: "MagnetarV2";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MagnetarV2Interface;

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
    MAGNETAR_ACTION_MARKET(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_MARKET()"(overrides?: CallOverrides): Promise<[number]>;

    MAGNETAR_ACTION_MARKET_MODULE(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_MARKET_MODULE()"(
      overrides?: CallOverrides
    ): Promise<[number]>;

    MAGNETAR_ACTION_PERMIT(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_PERMIT()"(overrides?: CallOverrides): Promise<[number]>;

    MAGNETAR_ACTION_TAP_TOKEN(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_TAP_TOKEN()"(overrides?: CallOverrides): Promise<[number]>;

    MAGNETAR_ACTION_TOFT(overrides?: CallOverrides): Promise<[number]>;

    "MAGNETAR_ACTION_TOFT()"(overrides?: CallOverrides): Promise<[number]>;

    MAGNETAR_ACTION_YIELDBOX_MODULE(
      overrides?: CallOverrides
    ): Promise<[number]>;

    "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
      overrides?: CallOverrides
    ): Promise<[number]>;

    burst(
      calls: MagnetarV2Storage.CallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "burst((uint8,address,uint256,bool,bytes)[])"(
      calls: MagnetarV2Storage.CallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cluster(overrides?: CallOverrides): Promise<[string]>;

    "cluster()"(overrides?: CallOverrides): Promise<[string]>;

    helper(overrides?: CallOverrides): Promise<[string]>;

    "helper()"(overrides?: CallOverrides): Promise<[string]>;

    modules(
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { moduleAddress: string }>;

    "modules(uint8)"(
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { moduleAddress: string }>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rescueEth(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "rescueEth(uint256,address)"(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCluster(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setCluster(address)"(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setHelper(
      _helper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setHelper(address)"(
      _helper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  MAGNETAR_ACTION_MARKET(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_MARKET()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_MARKET_MODULE(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_MARKET_MODULE()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_PERMIT(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_PERMIT()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_TAP_TOKEN(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_TAP_TOKEN()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_TOFT(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_TOFT()"(overrides?: CallOverrides): Promise<number>;

  MAGNETAR_ACTION_YIELDBOX_MODULE(overrides?: CallOverrides): Promise<number>;

  "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
    overrides?: CallOverrides
  ): Promise<number>;

  burst(
    calls: MagnetarV2Storage.CallStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "burst((uint8,address,uint256,bool,bytes)[])"(
    calls: MagnetarV2Storage.CallStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cluster(overrides?: CallOverrides): Promise<string>;

  "cluster()"(overrides?: CallOverrides): Promise<string>;

  helper(overrides?: CallOverrides): Promise<string>;

  "helper()"(overrides?: CallOverrides): Promise<string>;

  modules(
    moduleId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "modules(uint8)"(
    moduleId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "onERC721Received(address,address,uint256,bytes)"(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rescueEth(
    amount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "rescueEth(uint256,address)"(
    amount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCluster(
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setCluster(address)"(
    _cluster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setHelper(
    _helper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setHelper(address)"(
    _helper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MAGNETAR_ACTION_MARKET(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_MARKET()"(overrides?: CallOverrides): Promise<number>;

    MAGNETAR_ACTION_MARKET_MODULE(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_MARKET_MODULE()"(
      overrides?: CallOverrides
    ): Promise<number>;

    MAGNETAR_ACTION_PERMIT(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_PERMIT()"(overrides?: CallOverrides): Promise<number>;

    MAGNETAR_ACTION_TAP_TOKEN(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_TAP_TOKEN()"(overrides?: CallOverrides): Promise<number>;

    MAGNETAR_ACTION_TOFT(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_TOFT()"(overrides?: CallOverrides): Promise<number>;

    MAGNETAR_ACTION_YIELDBOX_MODULE(overrides?: CallOverrides): Promise<number>;

    "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
      overrides?: CallOverrides
    ): Promise<number>;

    burst(
      calls: MagnetarV2Storage.CallStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    "burst((uint8,address,uint256,bool,bytes)[])"(
      calls: MagnetarV2Storage.CallStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    cluster(overrides?: CallOverrides): Promise<string>;

    "cluster()"(overrides?: CallOverrides): Promise<string>;

    helper(overrides?: CallOverrides): Promise<string>;

    "helper()"(overrides?: CallOverrides): Promise<string>;

    modules(
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "modules(uint8)"(
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    rescueEth(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "rescueEth(uint256,address)"(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setCluster(
      _cluster: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCluster(address)"(
      _cluster: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setHelper(
      _helper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setHelper(address)"(
      _helper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ClusterSet(address,address)"(
      oldCluster?: PromiseOrValue<string> | null,
      newCluster?: PromiseOrValue<string> | null
    ): ClusterSetEventFilter;
    ClusterSet(
      oldCluster?: PromiseOrValue<string> | null,
      newCluster?: PromiseOrValue<string> | null
    ): ClusterSetEventFilter;

    "HelperUpdate(address,address)"(
      old?: PromiseOrValue<string> | null,
      newHelper?: PromiseOrValue<string> | null
    ): HelperUpdateEventFilter;
    HelperUpdate(
      old?: PromiseOrValue<string> | null,
      newHelper?: PromiseOrValue<string> | null
    ): HelperUpdateEventFilter;

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
    MAGNETAR_ACTION_MARKET(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_MARKET()"(overrides?: CallOverrides): Promise<BigNumber>;

    MAGNETAR_ACTION_MARKET_MODULE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "MAGNETAR_ACTION_MARKET_MODULE()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MAGNETAR_ACTION_PERMIT(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_PERMIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    MAGNETAR_ACTION_TAP_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_TAP_TOKEN()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MAGNETAR_ACTION_TOFT(overrides?: CallOverrides): Promise<BigNumber>;

    "MAGNETAR_ACTION_TOFT()"(overrides?: CallOverrides): Promise<BigNumber>;

    MAGNETAR_ACTION_YIELDBOX_MODULE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burst(
      calls: MagnetarV2Storage.CallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "burst((uint8,address,uint256,bool,bytes)[])"(
      calls: MagnetarV2Storage.CallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cluster(overrides?: CallOverrides): Promise<BigNumber>;

    "cluster()"(overrides?: CallOverrides): Promise<BigNumber>;

    helper(overrides?: CallOverrides): Promise<BigNumber>;

    "helper()"(overrides?: CallOverrides): Promise<BigNumber>;

    modules(
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "modules(uint8)"(
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rescueEth(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "rescueEth(uint256,address)"(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCluster(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setCluster(address)"(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setHelper(
      _helper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setHelper(address)"(
      _helper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAGNETAR_ACTION_MARKET(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_MARKET()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_MARKET_MODULE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_MARKET_MODULE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_PERMIT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_PERMIT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_TAP_TOKEN(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_TAP_TOKEN()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_TOFT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_TOFT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAGNETAR_ACTION_YIELDBOX_MODULE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "MAGNETAR_ACTION_YIELDBOX_MODULE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burst(
      calls: MagnetarV2Storage.CallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "burst((uint8,address,uint256,bool,bytes)[])"(
      calls: MagnetarV2Storage.CallStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cluster(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "cluster()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    helper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "helper()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    modules(
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "modules(uint8)"(
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rescueEth(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "rescueEth(uint256,address)"(
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCluster(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setCluster(address)"(
      _cluster: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setHelper(
      _helper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setHelper(address)"(
      _helper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}