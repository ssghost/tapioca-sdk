/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ZeroXSwapper,
  ZeroXSwapperInterface,
} from "../../../contracts/Swapper/ZeroXSwapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_zeroXProxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidProxy",
    type: "error",
  },
  {
    inputs: [],
    name: "MinSwapFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "sellToken",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "buyToken",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "swapTarget",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "swapCallData",
            type: "bytes",
          },
        ],
        internalType: "struct SZeroXSwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "zeroXProxy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610c17380380610c1783398101604081905261002f9161007b565b6001600160a01b0381166100565760405163d92e233d60e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b03929092169190911790556100ab565b60006020828403121561008d57600080fd5b81516001600160a01b03811681146100a457600080fd5b9392505050565b610b5d806100ba6000396000f3fe6080604052600436106100295760003560e01c80637a08c5671461002e578063d9c4ff8714610085575b600080fd5b34801561003a57600080fd5b5060005461005b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b610098610093366004610943565b6100a6565b60405190815260200161007c565b6000805473ffffffffffffffffffffffffffffffffffffffff166100d060608601604087016109bb565b73ffffffffffffffffffffffffffffffffffffffff161461011d576040517fb9e5cf7c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61014e33308561013060208901896109bb565b73ffffffffffffffffffffffffffffffffffffffff16929190610361565b61018c61016160608601604087016109bb565b8461016f60208801886109bb565b73ffffffffffffffffffffffffffffffffffffffff169190610443565b600061019e60608601604087016109bb565b73ffffffffffffffffffffffffffffffffffffffff166101c160608701876109df565b6040516101cf929190610a4b565b6000604051808303816000865af19150503d806000811461020c576040519150601f19603f3d011682016040523d82523d6000602084013e610211565b606091505b505090508061024c576040517f81ceff3000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61025c60408601602087016109bb565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa1580156102c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ec9190610a5b565b915082821015610327576040517e20cf2400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610359338361033c6040890160208a016109bb565b73ffffffffffffffffffffffffffffffffffffffff1691906105cf565b509392505050565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261043d9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610625565b50505050565b8015806104e357506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156104bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e19190610a5b565b155b610574576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105ca9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016103bb565b505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105ca9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016103bb565b6000610687826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166107349092919063ffffffff16565b90508051600014806106a85750808060200190518101906106a89190610a74565b6105ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161056b565b6060610743848460008561074b565b949350505050565b6060824710156107dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161056b565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516108069190610aba565b60006040518083038185875af1925050503d8060008114610843576040519150601f19603f3d011682016040523d82523d6000602084013e610848565b606091505b509150915061085987838387610864565b979650505050505050565b606083156108fa5782516000036108f35773ffffffffffffffffffffffffffffffffffffffff85163b6108f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161056b565b5081610743565b610743838381511561090f5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056b9190610ad6565b60008060006060848603121561095857600080fd5b833567ffffffffffffffff81111561096f57600080fd5b84016080818703121561098157600080fd5b95602085013595506040909401359392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146109b857600080fd5b50565b6000602082840312156109cd57600080fd5b81356109d881610996565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610a1457600080fd5b83018035915067ffffffffffffffff821115610a2f57600080fd5b602001915036819003821315610a4457600080fd5b9250929050565b8183823760009101908152919050565b600060208284031215610a6d57600080fd5b5051919050565b600060208284031215610a8657600080fd5b815180151581146109d857600080fd5b60005b83811015610ab1578181015183820152602001610a99565b50506000910152565b60008251610acc818460208701610a96565b9190910192915050565b6020815260008251806020840152610af5816040850160208701610a96565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220d54d0bd528894aed2aa60b074a6c1c2588ce9e9dc7e1e82341558f788a6b182364736f6c63430008160033";

type ZeroXSwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZeroXSwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZeroXSwapper__factory extends ContractFactory {
  constructor(...args: ZeroXSwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ZeroXSwapper";
  }

  override deploy(
    _zeroXProxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZeroXSwapper> {
    return super.deploy(_zeroXProxy, overrides || {}) as Promise<ZeroXSwapper>;
  }
  override getDeployTransaction(
    _zeroXProxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_zeroXProxy, overrides || {});
  }
  override attach(address: string): ZeroXSwapper {
    return super.attach(address) as ZeroXSwapper;
  }
  override connect(signer: Signer): ZeroXSwapper__factory {
    return super.connect(signer) as ZeroXSwapper__factory;
  }
  static readonly contractName: "ZeroXSwapper";

  public readonly contractName: "ZeroXSwapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZeroXSwapperInterface {
    return new utils.Interface(_abi) as ZeroXSwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZeroXSwapper {
    return new Contract(address, _abi, signerOrProvider) as ZeroXSwapper;
  }
}