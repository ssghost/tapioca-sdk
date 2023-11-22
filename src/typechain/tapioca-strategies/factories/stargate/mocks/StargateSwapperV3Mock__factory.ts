/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  StargateSwapperV3Mock,
  StargateSwapperV3MockInterface,
} from "../../../stargate/mocks/StargateSwapperV3Mock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "PoolFee",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "queryAmountOut",
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
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061069c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638bce137e1461003b578063a62d372514610060575b600080fd5b61004e6100493660046104d7565b610077565b60405190815260200160405180910390f35b61004e61006e366004610551565b50929392505050565b600061008e6001600160a01b03871633308a610108565b604051637c928fe960e01b8152600481018890526001600160a01b03861690637c928fe990602401600060405180830381600087803b1580156100d057600080fd5b505af11580156100e4573d6000803e3d6000fd5b506100fd925050506001600160a01b0386163389610179565b509495945050505050565b6040516001600160a01b03808516602483015283166044820152606481018290526101739085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526101ae565b50505050565b6040516001600160a01b0383166024820152604481018290526101a990849063a9059cbb60e01b9060640161013c565b505050565b6000610203826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166102889092919063ffffffff16565b905080516000148061022457508080602001905181019061022491906105ca565b6101a95760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084015b60405180910390fd5b6060610297848460008561029f565b949350505050565b6060824710156103005760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161027f565b600080866001600160a01b0316858760405161031c9190610617565b60006040518083038185875af1925050503d8060008114610359576040519150601f19603f3d011682016040523d82523d6000602084013e61035e565b606091505b509150915061036f8783838761037a565b979650505050505050565b606083156103e95782516000036103e2576001600160a01b0385163b6103e25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161027f565b5081610297565b61029783838151156103fe5781518083602001fd5b8060405162461bcd60e51b815260040161027f9190610633565b80356001600160a01b038116811461042f57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261045b57600080fd5b813567ffffffffffffffff8082111561047657610476610434565b604051601f8301601f19908116603f0116810190828211818310171561049e5761049e610434565b816040528381528660208588010111156104b757600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060008060c087890312156104f057600080fd5b8635955061050060208801610418565b945061050e60408801610418565b9350606087013592506080870135915060a087013567ffffffffffffffff81111561053857600080fd5b61054489828a0161044a565b9150509295509295509295565b600080600080600060a0868803121561056957600080fd5b8535945061057960208701610418565b935061058760408701610418565b925061059560608701610418565b9150608086013567ffffffffffffffff8111156105b157600080fd5b6105bd8882890161044a565b9150509295509295909350565b6000602082840312156105dc57600080fd5b815180151581146105ec57600080fd5b9392505050565b60005b8381101561060e5781810151838201526020016105f6565b50506000910152565b600082516106298184602087016105f3565b9190910192915050565b60208152600082518060208401526106528160408501602087016105f3565b601f01601f1916919091016040019291505056fea264697066735822122025b9f97e946a8cc36764c44c6c5efc6aa3ff37a5f7f345b0e6daefa50ed504e364736f6c63430008120033";

type StargateSwapperV3MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StargateSwapperV3MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StargateSwapperV3Mock__factory extends ContractFactory {
  constructor(...args: StargateSwapperV3MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "StargateSwapperV3Mock";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StargateSwapperV3Mock> {
    return super.deploy(overrides || {}) as Promise<StargateSwapperV3Mock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StargateSwapperV3Mock {
    return super.attach(address) as StargateSwapperV3Mock;
  }
  override connect(signer: Signer): StargateSwapperV3Mock__factory {
    return super.connect(signer) as StargateSwapperV3Mock__factory;
  }
  static readonly contractName: "StargateSwapperV3Mock";

  public readonly contractName: "StargateSwapperV3Mock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StargateSwapperV3MockInterface {
    return new utils.Interface(_abi) as StargateSwapperV3MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StargateSwapperV3Mock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StargateSwapperV3Mock;
  }
}
