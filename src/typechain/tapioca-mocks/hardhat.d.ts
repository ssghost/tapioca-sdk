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
      name: "CurvePoolMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CurvePoolMock__factory>;
    getContractFactory(
      name: "ERC20Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Mock__factory>;
    getContractFactory(
      name: "FlashBorrowerMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlashBorrowerMock__factory>;
    getContractFactory(
      name: "FlashMaliciousBorrowerMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlashMaliciousBorrowerMock__factory>;
    getContractFactory(
      name: "LZEndpointMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LZEndpointMock__factory>;
    getContractFactory(
      name: "MockSwapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockSwapper__factory>;
    getContractFactory(
      name: "MultisigMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MultisigMock__factory>;
    getContractFactory(
      name: "OracleMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleMock__factory>;
    getContractFactory(
      name: "TapiocaDeployerMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TapiocaDeployerMock__factory>;
    getContractFactory(
      name: "UniswapV2ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2ERC20__factory>;
    getContractFactory(
      name: "UniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Factory__factory>;
    getContractFactory(
      name: "UniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Pair__factory>;
    getContractFactory(
      name: "UniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Router02__factory>;
    getContractFactory(
      name: "VulnMultiSwapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VulnMultiSwapper__factory>;

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
      name: "CurvePoolMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CurvePoolMock>;
    getContractAt(
      name: "ERC20Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Mock>;
    getContractAt(
      name: "FlashBorrowerMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FlashBorrowerMock>;
    getContractAt(
      name: "FlashMaliciousBorrowerMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FlashMaliciousBorrowerMock>;
    getContractAt(
      name: "LZEndpointMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LZEndpointMock>;
    getContractAt(
      name: "MockSwapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockSwapper>;
    getContractAt(
      name: "MultisigMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MultisigMock>;
    getContractAt(
      name: "OracleMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleMock>;
    getContractAt(
      name: "TapiocaDeployerMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TapiocaDeployerMock>;
    getContractAt(
      name: "UniswapV2ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2ERC20>;
    getContractAt(
      name: "UniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Factory>;
    getContractAt(
      name: "UniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Pair>;
    getContractAt(
      name: "UniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Router02>;
    getContractAt(
      name: "VulnMultiSwapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VulnMultiSwapper>;

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
