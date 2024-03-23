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

export interface ClusterInterface extends utils.Interface {
  functions: {
    "batchUpdateContracts(uint32,address[],bool)": FunctionFragment;
    "hasRole(address,bytes32,address)": FunctionFragment;
    "isWhitelisted(uint32,address)": FunctionFragment;
    "lzChainId()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setRoleForContract(address,bytes32,address,bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateContract(uint32,address,bool)": FunctionFragment;
    "updateLzChain(uint32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "batchUpdateContracts"
      | "batchUpdateContracts(uint32,address[],bool)"
      | "hasRole"
      | "hasRole(address,bytes32,address)"
      | "isWhitelisted"
      | "isWhitelisted(uint32,address)"
      | "lzChainId"
      | "lzChainId()"
      | "owner"
      | "owner()"
      | "renounceOwnership"
      | "renounceOwnership()"
      | "setRoleForContract"
      | "setRoleForContract(address,bytes32,address,bool)"
      | "transferOwnership"
      | "transferOwnership(address)"
      | "updateContract"
      | "updateContract(uint32,address,bool)"
      | "updateLzChain"
      | "updateLzChain(uint32)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "batchUpdateContracts",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "batchUpdateContracts(uint32,address[],bool)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole(address,bytes32,address)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted(uint32,address)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "lzChainId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lzChainId()",
    values?: undefined
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
    functionFragment: "setRoleForContract",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoleForContract(address,bytes32,address,bool)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateContract",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateContract(uint32,address,bool)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLzChain",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLzChain(uint32)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchUpdateContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchUpdateContracts(uint32,address[],bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasRole(address,bytes32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted(uint32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lzChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lzChainId()",
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
  decodeFunctionResult(
    functionFragment: "setRoleForContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoleForContract(address,bytes32,address,bool)",
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
  decodeFunctionResult(
    functionFragment: "updateContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateContract(uint32,address,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLzChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLzChain(uint32)",
    data: BytesLike
  ): Result;

  events: {
    "ContractUpdated(address,uint32,bool,bool)": EventFragment;
    "LzChainUpdate(uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RoleSet(address,bytes32,address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ContractUpdated(address,uint32,bool,bool)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LzChainUpdate"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LzChainUpdate(uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleSet"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RoleSet(address,bytes32,address,bool)"
  ): EventFragment;
}

export interface ContractUpdatedEventObject {
  _contract: string;
  _lzChainId: number;
  _oldStatus: boolean;
  _newStatus: boolean;
}
export type ContractUpdatedEvent = TypedEvent<
  [string, number, boolean, boolean],
  ContractUpdatedEventObject
>;

export type ContractUpdatedEventFilter = TypedEventFilter<ContractUpdatedEvent>;

export interface LzChainUpdateEventObject {
  _oldChain: BigNumber;
  _newChain: BigNumber;
}
export type LzChainUpdateEvent = TypedEvent<
  [BigNumber, BigNumber],
  LzChainUpdateEventObject
>;

export type LzChainUpdateEventFilter = TypedEventFilter<LzChainUpdateEvent>;

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

export interface RoleSetEventObject {
  _contract: string;
  _role: string;
  _target: string;
  _hasRole: boolean;
}
export type RoleSetEvent = TypedEvent<
  [string, string, string, boolean],
  RoleSetEventObject
>;

export type RoleSetEventFilter = TypedEventFilter<RoleSetEvent>;

export interface Cluster extends BaseContract {
  contractName: "Cluster";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ClusterInterface;

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
    batchUpdateContracts(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addresses: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "batchUpdateContracts(uint32,address[],bool)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addresses: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      _contract: PromiseOrValue<string>,
      role: PromiseOrValue<BytesLike>,
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { hasRole: boolean }>;

    "hasRole(address,bytes32,address)"(
      _contract: PromiseOrValue<string>,
      role: PromiseOrValue<BytesLike>,
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { hasRole: boolean }>;

    isWhitelisted(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isWhitelisted(uint32,address)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lzChainId(overrides?: CallOverrides): Promise<[number]>;

    "lzChainId()"(overrides?: CallOverrides): Promise<[number]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRoleForContract(
      _contract: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      _target: PromiseOrValue<string>,
      _hasRole: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setRoleForContract(address,bytes32,address,bool)"(
      _contract: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      _target: PromiseOrValue<string>,
      _hasRole: PromiseOrValue<boolean>,
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

    updateContract(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "updateContract(uint32,address,bool)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateLzChain(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "updateLzChain(uint32)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  batchUpdateContracts(
    _lzChainId: PromiseOrValue<BigNumberish>,
    _addresses: PromiseOrValue<string>[],
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "batchUpdateContracts(uint32,address[],bool)"(
    _lzChainId: PromiseOrValue<BigNumberish>,
    _addresses: PromiseOrValue<string>[],
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    _contract: PromiseOrValue<string>,
    role: PromiseOrValue<BytesLike>,
    target: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasRole(address,bytes32,address)"(
    _contract: PromiseOrValue<string>,
    role: PromiseOrValue<BytesLike>,
    target: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isWhitelisted(
    _lzChainId: PromiseOrValue<BigNumberish>,
    _addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isWhitelisted(uint32,address)"(
    _lzChainId: PromiseOrValue<BigNumberish>,
    _addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lzChainId(overrides?: CallOverrides): Promise<number>;

  "lzChainId()"(overrides?: CallOverrides): Promise<number>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRoleForContract(
    _contract: PromiseOrValue<string>,
    _role: PromiseOrValue<BytesLike>,
    _target: PromiseOrValue<string>,
    _hasRole: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setRoleForContract(address,bytes32,address,bool)"(
    _contract: PromiseOrValue<string>,
    _role: PromiseOrValue<BytesLike>,
    _target: PromiseOrValue<string>,
    _hasRole: PromiseOrValue<boolean>,
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

  updateContract(
    _lzChainId: PromiseOrValue<BigNumberish>,
    _addr: PromiseOrValue<string>,
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "updateContract(uint32,address,bool)"(
    _lzChainId: PromiseOrValue<BigNumberish>,
    _addr: PromiseOrValue<string>,
    _status: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateLzChain(
    _lzChainId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "updateLzChain(uint32)"(
    _lzChainId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    batchUpdateContracts(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addresses: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "batchUpdateContracts(uint32,address[],bool)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addresses: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      _contract: PromiseOrValue<string>,
      role: PromiseOrValue<BytesLike>,
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasRole(address,bytes32,address)"(
      _contract: PromiseOrValue<string>,
      role: PromiseOrValue<BytesLike>,
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isWhitelisted(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isWhitelisted(uint32,address)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lzChainId(overrides?: CallOverrides): Promise<number>;

    "lzChainId()"(overrides?: CallOverrides): Promise<number>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setRoleForContract(
      _contract: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      _target: PromiseOrValue<string>,
      _hasRole: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRoleForContract(address,bytes32,address,bool)"(
      _contract: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      _target: PromiseOrValue<string>,
      _hasRole: PromiseOrValue<boolean>,
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

    updateContract(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateContract(uint32,address,bool)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateLzChain(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateLzChain(uint32)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ContractUpdated(address,uint32,bool,bool)"(
      _contract?: PromiseOrValue<string> | null,
      _lzChainId?: PromiseOrValue<BigNumberish> | null,
      _oldStatus?: PromiseOrValue<boolean> | null,
      _newStatus?: null
    ): ContractUpdatedEventFilter;
    ContractUpdated(
      _contract?: PromiseOrValue<string> | null,
      _lzChainId?: PromiseOrValue<BigNumberish> | null,
      _oldStatus?: PromiseOrValue<boolean> | null,
      _newStatus?: null
    ): ContractUpdatedEventFilter;

    "LzChainUpdate(uint256,uint256)"(
      _oldChain?: PromiseOrValue<BigNumberish> | null,
      _newChain?: PromiseOrValue<BigNumberish> | null
    ): LzChainUpdateEventFilter;
    LzChainUpdate(
      _oldChain?: PromiseOrValue<BigNumberish> | null,
      _newChain?: PromiseOrValue<BigNumberish> | null
    ): LzChainUpdateEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "RoleSet(address,bytes32,address,bool)"(
      _contract?: PromiseOrValue<string> | null,
      _role?: PromiseOrValue<BytesLike> | null,
      _target?: PromiseOrValue<string> | null,
      _hasRole?: null
    ): RoleSetEventFilter;
    RoleSet(
      _contract?: PromiseOrValue<string> | null,
      _role?: PromiseOrValue<BytesLike> | null,
      _target?: PromiseOrValue<string> | null,
      _hasRole?: null
    ): RoleSetEventFilter;
  };

  estimateGas: {
    batchUpdateContracts(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addresses: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "batchUpdateContracts(uint32,address[],bool)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addresses: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasRole(
      _contract: PromiseOrValue<string>,
      role: PromiseOrValue<BytesLike>,
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasRole(address,bytes32,address)"(
      _contract: PromiseOrValue<string>,
      role: PromiseOrValue<BytesLike>,
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isWhitelisted(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isWhitelisted(uint32,address)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lzChainId(overrides?: CallOverrides): Promise<BigNumber>;

    "lzChainId()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRoleForContract(
      _contract: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      _target: PromiseOrValue<string>,
      _hasRole: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setRoleForContract(address,bytes32,address,bool)"(
      _contract: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      _target: PromiseOrValue<string>,
      _hasRole: PromiseOrValue<boolean>,
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

    updateContract(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "updateContract(uint32,address,bool)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateLzChain(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "updateLzChain(uint32)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    batchUpdateContracts(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addresses: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "batchUpdateContracts(uint32,address[],bool)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addresses: PromiseOrValue<string>[],
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      _contract: PromiseOrValue<string>,
      role: PromiseOrValue<BytesLike>,
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasRole(address,bytes32,address)"(
      _contract: PromiseOrValue<string>,
      role: PromiseOrValue<BytesLike>,
      target: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWhitelisted(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isWhitelisted(uint32,address)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lzChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lzChainId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRoleForContract(
      _contract: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      _target: PromiseOrValue<string>,
      _hasRole: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setRoleForContract(address,bytes32,address,bool)"(
      _contract: PromiseOrValue<string>,
      _role: PromiseOrValue<BytesLike>,
      _target: PromiseOrValue<string>,
      _hasRole: PromiseOrValue<boolean>,
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

    updateContract(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "updateContract(uint32,address,bool)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      _addr: PromiseOrValue<string>,
      _status: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateLzChain(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "updateLzChain(uint32)"(
      _lzChainId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
