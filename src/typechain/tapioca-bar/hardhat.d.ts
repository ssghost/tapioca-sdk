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
      name: "BBBorrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BBBorrow__factory>;
    getContractFactory(
      name: "BBCollateral",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BBCollateral__factory>;
    getContractFactory(
      name: "BBCommon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BBCommon__factory>;
    getContractFactory(
      name: "BBLendingCommon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BBLendingCommon__factory>;
    getContractFactory(
      name: "BBLeverage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BBLeverage__factory>;
    getContractFactory(
      name: "BBLiquidation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BBLiquidation__factory>;
    getContractFactory(
      name: "BBStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BBStorage__factory>;
    getContractFactory(
      name: "BigBang",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BigBang__factory>;
    getContractFactory(
      name: "AssetToEthLeverageExecutor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetToEthLeverageExecutor__factory>;
    getContractFactory(
      name: "AssetToGLPLeverageExecutor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetToGLPLeverageExecutor__factory>;
    getContractFactory(
      name: "AssetToGmxEthUsdcLpLeverageExecutor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetToGmxEthUsdcLpLeverageExecutor__factory>;
    getContractFactory(
      name: "AssetToRethLeverageExecutor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetToRethLeverageExecutor__factory>;
    getContractFactory(
      name: "AssetTotsDaiLeverageExecutor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetTotsDaiLeverageExecutor__factory>;
    getContractFactory(
      name: "AssetToWstethLeverageExecutor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AssetToWstethLeverageExecutor__factory>;
    getContractFactory(
      name: "BaseLeverageExecutor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseLeverageExecutor__factory>;
    getContractFactory(
      name: "SimpleLeverageExecutor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleLeverageExecutor__factory>;
    getContractFactory(
      name: "Market",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Market__factory>;
    getContractFactory(
      name: "MarketERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketERC20__factory>;
    getContractFactory(
      name: "MarketLiquidatorReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketLiquidatorReceiver__factory>;
    getContractFactory(
      name: "SGLBorrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLBorrow__factory>;
    getContractFactory(
      name: "SGLCollateral",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLCollateral__factory>;
    getContractFactory(
      name: "SGLCommon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLCommon__factory>;
    getContractFactory(
      name: "SGLLendingCommon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLLendingCommon__factory>;
    getContractFactory(
      name: "SGLLeverage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLLeverage__factory>;
    getContractFactory(
      name: "SGLLiquidation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLLiquidation__factory>;
    getContractFactory(
      name: "SGLStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SGLStorage__factory>;
    getContractFactory(
      name: "Singularity",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Singularity__factory>;
    getContractFactory(
      name: "Penrose",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Penrose__factory>;
    getContractFactory(
      name: "Test",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Test__factory>;
    getContractFactory(
      name: "BaseUSDO",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseUSDO__factory>;
    getContractFactory(
      name: "BaseUSDOStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseUSDOStorage__factory>;
    getContractFactory(
      name: "USDOCommon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDOCommon__factory>;
    getContractFactory(
      name: "USDOGenericModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDOGenericModule__factory>;
    getContractFactory(
      name: "USDOLeverageDestinationModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDOLeverageDestinationModule__factory>;
    getContractFactory(
      name: "USDOLeverageModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDOLeverageModule__factory>;
    getContractFactory(
      name: "USDOMarketDestinationModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDOMarketDestinationModule__factory>;
    getContractFactory(
      name: "USDOMarketModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDOMarketModule__factory>;
    getContractFactory(
      name: "USDOOptionsDestinationModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDOOptionsDestinationModule__factory>;
    getContractFactory(
      name: "USDOOptionsModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDOOptionsModule__factory>;
    getContractFactory(
      name: "USDO",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDO__factory>;
    getContractFactory(
      name: "USDOFlashloanHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDOFlashloanHelper__factory>;

    getContractAt(
      name: "BBBorrow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BBBorrow>;
    getContractAt(
      name: "BBCollateral",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BBCollateral>;
    getContractAt(
      name: "BBCommon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BBCommon>;
    getContractAt(
      name: "BBLendingCommon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BBLendingCommon>;
    getContractAt(
      name: "BBLeverage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BBLeverage>;
    getContractAt(
      name: "BBLiquidation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BBLiquidation>;
    getContractAt(
      name: "BBStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BBStorage>;
    getContractAt(
      name: "BigBang",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BigBang>;
    getContractAt(
      name: "AssetToEthLeverageExecutor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetToEthLeverageExecutor>;
    getContractAt(
      name: "AssetToGLPLeverageExecutor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetToGLPLeverageExecutor>;
    getContractAt(
      name: "AssetToGmxEthUsdcLpLeverageExecutor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetToGmxEthUsdcLpLeverageExecutor>;
    getContractAt(
      name: "AssetToRethLeverageExecutor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetToRethLeverageExecutor>;
    getContractAt(
      name: "AssetTotsDaiLeverageExecutor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetTotsDaiLeverageExecutor>;
    getContractAt(
      name: "AssetToWstethLeverageExecutor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AssetToWstethLeverageExecutor>;
    getContractAt(
      name: "BaseLeverageExecutor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseLeverageExecutor>;
    getContractAt(
      name: "SimpleLeverageExecutor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleLeverageExecutor>;
    getContractAt(
      name: "Market",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Market>;
    getContractAt(
      name: "MarketERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketERC20>;
    getContractAt(
      name: "MarketLiquidatorReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketLiquidatorReceiver>;
    getContractAt(
      name: "SGLBorrow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLBorrow>;
    getContractAt(
      name: "SGLCollateral",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLCollateral>;
    getContractAt(
      name: "SGLCommon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLCommon>;
    getContractAt(
      name: "SGLLendingCommon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLLendingCommon>;
    getContractAt(
      name: "SGLLeverage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLLeverage>;
    getContractAt(
      name: "SGLLiquidation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLLiquidation>;
    getContractAt(
      name: "SGLStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SGLStorage>;
    getContractAt(
      name: "Singularity",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Singularity>;
    getContractAt(
      name: "Penrose",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Penrose>;
    getContractAt(
      name: "Test",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Test>;
    getContractAt(
      name: "BaseUSDO",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseUSDO>;
    getContractAt(
      name: "BaseUSDOStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseUSDOStorage>;
    getContractAt(
      name: "USDOCommon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDOCommon>;
    getContractAt(
      name: "USDOGenericModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDOGenericModule>;
    getContractAt(
      name: "USDOLeverageDestinationModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDOLeverageDestinationModule>;
    getContractAt(
      name: "USDOLeverageModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDOLeverageModule>;
    getContractAt(
      name: "USDOMarketDestinationModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDOMarketDestinationModule>;
    getContractAt(
      name: "USDOMarketModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDOMarketModule>;
    getContractAt(
      name: "USDOOptionsDestinationModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDOOptionsDestinationModule>;
    getContractAt(
      name: "USDOOptionsModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDOOptionsModule>;
    getContractAt(
      name: "USDO",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDO>;
    getContractAt(
      name: "USDOFlashloanHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.USDOFlashloanHelper>;

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
