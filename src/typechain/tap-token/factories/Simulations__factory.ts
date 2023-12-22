/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Simulations, SimulationsInterface } from "../Simulations";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "am",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "m",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "p",
        type: "uint256",
      },
    ],
    name: "computeAM",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cumulative",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "am",
        type: "uint256",
      },
    ],
    name: "computeCumulative",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "test",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576102b9908161001c8239f35b600080fdfe608060405260048036101561001357600080fd5b6000803560e01c80636dc70f45146101f6578063dfa3e23a146101ab5763f8a8fd6d1461003f57600080fd5b346101a857806003193601126101a85780918182905b600a90818310156101a457858002868104871487151715610191576064908101809111610191578587600383111561017857505080600181811c81810180911161016557915b83831061013a57505050866100af91610276565b90600184019081851161012757906100ca836100cf93610233565b610256565b95918290811161010a57506100e391610233565b9060001981146100f7576001019093610055565b634e487b7160e01b845260118352602484fd5b81101561011f5761011a91610276565b6100e3565b5050826100e3565b634e487b7160e01b875260118652602487fd5b90919250610157839994959699936101528184610256565b610233565b9398959493821c919061009b565b634e487b7160e01b895260118852602489fd5b9091610188575b6100af91610276565b6001915061017f565b634e487b7160e01b865260118552602486fd5b8480f35b80fd5b50346101a8576020906101bd36610214565b91819081116101d957506101d19250610233565b604051908152f35b8210156101ef576101ea9250610276565b6101d1565b50506101d1565b50346101a85760206101d16100ca61020d36610214565b9291610233565b606090600319011261022e57600435906024359060443590565b600080fd5b9190820180921161024057565b634e487b7160e01b600052601160045260246000fd5b8115610260570490565b634e487b7160e01b600052601260045260246000fd5b919082039182116102405756fea264697066735822122042a2b1b0d4cbaa70d840c5d18e06bc303d64262ace8f3fe385a409c7e9bfdf6c64736f6c63430008130033";

type SimulationsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimulationsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Simulations__factory extends ContractFactory {
  constructor(...args: SimulationsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Simulations";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Simulations> {
    return super.deploy(overrides || {}) as Promise<Simulations>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Simulations {
    return super.attach(address) as Simulations;
  }
  override connect(signer: Signer): Simulations__factory {
    return super.connect(signer) as Simulations__factory;
  }
  static readonly contractName: "Simulations";

  public readonly contractName: "Simulations";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimulationsInterface {
    return new utils.Interface(_abi) as SimulationsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Simulations {
    return new Contract(address, _abi, signerOrProvider) as Simulations;
  }
}
