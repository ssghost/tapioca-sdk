/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ContractThatCannotBeDeployed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContractThatCannotBeDeployed__factory>;
    getContractFactory(
      name: "ContractThatReverts",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContractThatReverts__factory>;
    getContractFactory(
      name: "TapiocaDeployerMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TapiocaDeployerMock__factory>;

    getContractAt(
      name: "ContractThatCannotBeDeployed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContractThatCannotBeDeployed>;
    getContractAt(
      name: "ContractThatReverts",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContractThatReverts>;
    getContractAt(
      name: "TapiocaDeployerMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TapiocaDeployerMock>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
