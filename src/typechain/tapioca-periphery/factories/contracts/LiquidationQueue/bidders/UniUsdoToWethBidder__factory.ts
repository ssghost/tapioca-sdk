/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  UniUsdoToWethBidder,
  UniUsdoToWethBidderInterface,
} from "../../../../contracts/LiquidationQueue/bidders/UniUsdoToWethBidder";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISwapper",
        name: "uniV2Swapper_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_wethAssetId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "UniV2SwapperUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getInputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getOutputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
  {
    inputs: [],
    name: "pendingOwner",
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
  {
    inputs: [
      {
        internalType: "contract ISwapper",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setUniswapSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISingularity",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "univ2Swapper",
    outputs: [
      {
        internalType: "contract ISwapper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080346100ab57601f6116e238819003918201601f19168301916001600160401b038311848410176100b05780849260409485528339810103126100ab5780516001600160a01b03811691908290036100ab576020015160008054336001600160a01b03199182168117835560405194927f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a3600254161760025560035561161b90816100c78239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608080604052600436101561001357600080fd5b600090813560e01c90816306fdde031461113857508063078dfbe71461103f5780634e71e0c814610fa55780635dd82b3614610b9857806385267a0114610b6f5780638da5cb5b14610b48578063b691d78c146103f6578063b6aebf3614610380578063e30c3978146103575763fef744fa1461008f57600080fd5b346103545761009d366111c6565b5050604051636c3d8b8f60e01b8152602094936001600160a01b0391908216908681600481855afa90811561030e57839188918891610319575b506004604051809481936386c8e21d60e01b8352165afa90811561030e5790879187916102dd575b509161010e6004938714611314565b60405163de40657760e01b815292839182905afa908115610276578291879187916102b0575b506064600354956040519586938492638eb22cdd60e01b845289600485015260248401528a6044840152165afa918215610276578592610281575b50600254169160405193633d9545e960e11b85526004850152602484015283604484015283606484015260016084840152600160a484015261014092838160c481865afa93841561027657918693916101ef95938794610247575b50506060848401510152604051808095819463071e388d60e51b8352600483016114d4565b03915afa91821561023b5791610209575b50604051908152f35b90508181813d8311610234575b61022081836112dd565b8101031261022f575138610200565b600080fd5b503d610216565b604051903d90823e3d90fd5b610267929450803d1061026f575b61025f81836112dd565b81019061137e565b9138806101ca565b503d610255565b6040513d87823e3d90fd5b9091508581813d83116102a9575b61029981836112dd565b8101031261022f5751903861016f565b503d61028f565b6102d09150823d84116102d6575b6102c881836112dd565b810190611352565b38610134565b503d6102be565b82819392503d8311610307575b6102f481836112dd565b8101031261022f5751869061010e6100ff565b503d6102ea565b6040513d88823e3d90fd5b92505081813d831161034d575b61033081836112dd565b8101031261034957866103438492611300565b386100d7565b8580fd5b503d610326565b80fd5b50346103545780600319360112610354576001546040516001600160a01b039091168152602090f35b5034610354576020366003190112610354576004356001600160a01b03818116918290036103f2576103b681845416331461122b565b816002549182167f1226a5d51aea8884fdf5761c8e63e98532d3eedcc0a3d56ebe98e3080fcf96dd8580a36001600160a01b0319161760025580f35b8280fd5b503461035457610405366111c6565b604051636c3d8b8f60e01b808252919591949293926001600160a01b039092169190602081600481865afa9081156109ca578891610b0e575b50604051631192124760e11b81526001600160a01b039190911690602081600481855afa90811561093b578991610ac9575b5060249160209161048b906001600160a01b031615156114f4565b6040519283809263473ec51560e11b82528760048301525afa9081156109ca578891610a8f575b5015610a575760405163de40657760e01b815293602085600481865afa9485156109ca578895610a36575b5060405163c23ea21f60e01b815295602087600481875afa96871561093b578997610a14575b5060209060046040518096819382525afa9283156109ca5788936109d5575b506040516386c8e21d60e01b815292602090849060049082906001600160a01b03165afa9283156109ca578893610992575b50610560838314611314565b6001600160a01b038616330361096357879680610946575b5050600254604051638eb22cdd60e01b81526004810183905260248101859052604481018990526001600160a01b03918216929091602090839060649082908a165afa91821561093b578992610907575b506001600160a01b0386163b1561090357604051630208d92960e11b81523060048201526024810193909352604483015260648201528681608481836001600160a01b0389165af180156108f8576108c9575b50600354604051630cf35bdd60e41b8082526004820184905291938892916080816024816001600160a01b038b165afa90811561089b5784916108a6575b50604051928352600483018690526080836024816001600160a01b038b165afa90811561089b576020938592610862575b506040516106c29161069c826112c2565b60028252604036878401376106b082611568565b6001600160a01b03909116905261158b565b6001600160a01b039182169052604051638eb22cdd60e01b815260048101869052602481019290925260448201849052909586916064918391165afa91821561081d57819261082a575b61073d945060018060a01b03600254169260405180968192633d9545e960e11b83526101409788956004850161159b565b0381855afa91821561081d57604095610778956101c49584956107fe575b5050865163efa84c6d60e01b815297889687956004870190611468565b6101448501526001600160a01b03166101648401526101a06101848401526101a483018290525af19081156107f35782916107b9575b602082604051908152f35b90506040813d6040116107eb575b816107d4604093836112dd565b810103126107e7576020915051386107ae565b5080fd5b3d91506107c7565b6040513d84823e3d90fd5b610815929550803d1061026f5761025f81836112dd565b92388061075b565b50604051903d90823e3d90fd5b9150506020833d60201161085a575b81610846602093836112dd565b8101031261022f578561073d93519161070c565b3d9150610839565b6106c29192506108899060803d608011610894575b61088181836112dd565b81019061152f565b50509050919061068b565b503d610877565b6040513d86823e3d90fd5b6108bf915060803d6080116108945761088181836112dd565b505090503861065a565b9095906001600160401b0381116108e457604052943861061c565b634e487b7160e01b82526041600452602482fd5b6040513d89823e3d90fd5b8880fd5b9091506020813d602011610933575b81610923602093836112dd565b81010312610903575190386105c9565b3d9150610916565b6040513d8b823e3d90fd5b81929750906020918101031261095f5735943880610578565b8680fd5b60405162461bcd60e51b81526020600482015260076024820152666f6e6c79204c5160c81b6044820152606490fd5b9092506020813d6020116109c2575b816109ae602093836112dd565b810103126109be57519138610554565b8780fd5b3d91506109a1565b6040513d8a823e3d90fd5b92506020833d602011610a0c575b816109f0602093836112dd565b810103126109be576020610a05600494611300565b9350610522565b3d91506109e3565b6020919750610a2f90823d84116102d6576102c881836112dd565b9690610503565b610a5091955060203d6020116102d6576102c881836112dd565b93386104dd565b60405162461bcd60e51b815260206004820152601060248201526f13585c9ad95d081b9bdd081d985b1a5960821b6044820152606490fd5b90506020813d602011610ac1575b81610aaa602093836112dd565b810103126109be57610abb90611371565b386104b2565b3d9150610a9d565b90506020813d602011610b06575b81610ae4602093836112dd565b810103126109035760249161048b610afd602093611300565b92505091610470565b3d9150610ad7565b90506020813d602011610b40575b81610b29602093836112dd565b810103126109be57610b3a90611300565b3861043e565b3d9150610b1c565b5034610354578060031936011261035457546040516001600160a01b039091168152602090f35b50346103545780600319360112610354576002546040516001600160a01b039091168152602090f35b503461035457610ba7366111c6565b5050604051636c3d8b8f60e01b8082526020959492936001600160a01b0393909290841691908781600481865afa9081156108f857859189918991610f6e575b50600460405180948193631192124760e11b8352165afa80156108f85785908890610f36575b610c1a92501615156114f4565b6040519081528681600481855afa90811561030e5784929188918891610efd575b506004604051809581936386c8e21d60e01b8352165afa91821561030e579087918793610eca575b50610c72836004949514611314565b60405163de40657760e01b815292839182905afa908115610276579083918691610ead575b50169160035493604051630cf35bdd60e41b9081815284600482015260809182826024818a5afa91821561093b578992610e8a575b5060405190815287600482015282816024818a5afa92831561093b579185918b9594938b94610e61575b5050604051610d2691610d08826112c2565b600282526040368884013783610d1d83611568565b9116905261158b565b91169052606460405180968193638eb22cdd60e01b835287600484015260248301528960448301525afa928315610276578593610e2c575b5090610d8991600254169260405180938192633d9545e960e11b83526101409788956004850161159b565b0381855afa92831561089b5791610dc1939186938693610e0d575b50506040518080958194630b7ecdc960e31b8352600483016114d4565b03915afa91821561023b578092610ddd575b5050604051908152f35b9091508282813d8311610e06575b610df581836112dd565b810103126103545750513880610dd3565b503d610deb565b610e24929350803d1061026f5761025f81836112dd565b903880610da4565b9092508581813d8311610e5a575b610e4481836112dd565b81010312610e56575191610d89610d5e565b8480fd5b503d610e3a565b610d269294509081610e7e92903d106108945761088181836112dd565b50509050929038610cf6565b610ea2919250833d85116108945761088181836112dd565b505090509038610ccc565b610ec49150873d89116102d6576102c881836112dd565b38610c97565b8281939294503d8311610ef6575b610ee281836112dd565b810103126103495751908690610c72610c63565b503d610ed8565b9293505081813d8311610f2f575b610f1581836112dd565b81010312610349579086610f298593611300565b38610c3b565b503d610f0b565b50508781813d8311610f67575b610f4d81836112dd565b8101031261095f5784610f62610c1a92611300565b610c0d565b503d610f43565b92505081813d8311610f9e575b610f8581836112dd565b8101031261095f5787610f988692611300565b38610be7565b503d610f7b565b50346103545780600319360112610354576001546001600160a01b039081811633819003610ffb578084549384166000805160206115c68339815191528680a36001600160a01b03199283161783551660015580f35b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b5034610354576060366003190112610354576001600160a01b03600435818116908190036103f257602435801515810361113457604435908115158203610e565761108e84865416331461122b565b1561111c57811590811591611114575b50156110d7578083549283166000805160206115c68339815191528580a36001600160a01b031991821617825560018054909116905580f35b60405162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152606490fd5b90503861109e565b50600180546001600160a01b03191690911790555080f35b8380fd5b9050346107e757816003193601126107e75761115381611276565b60198152602091785553444f202d3e20574554482028556e69737761702056322960381b838301526040519283918183528351918281850152815b8381106111af57505060408094508284010152601f80199101168101030190f35b80860182015187820160400152869450810161118e565b608060031982011261022f576004356001600160a01b038116810361022f579160243591604435916001600160401b03916064359083821161022f578060238301121561022f57816004013593841161022f576024848301011161022f576024019190565b1561123257565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b604081019081106001600160401b0382111761129157604052565b634e487b7160e01b600052604160045260246000fd5b608081019081106001600160401b0382111761129157604052565b606081019081106001600160401b0382111761129157604052565b601f909101601f19168101906001600160401b0382119082101761129157604052565b51906001600160a01b038216820361022f57565b1561131b57565b60405162461bcd60e51b815260206004820152600f60248201526e1d1bdad95b881b9bdd081d985b1a59608a1b6044820152606490fd5b9081602091031261022f57516001600160a01b038116810361022f5790565b5190811515820361022f57565b80910390610140821261022f576040805192606084016001600160401b03811185821017611291578083526080821261022f576113ba816112a7565b6113c384611300565b8152602084015160808601526113da838501611300565b60a0860152606084015160c086015284526080607f1982011261022f5781908151611404816112a7565b6080850151815260a0850151602082015260c08501518382015260e08501516060820152602086015260ff19011261022f5761145d61012082519361144885611276565b6114556101008201611371565b855201611371565b602083015282015290565b60206040610120926060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b6114e18161018093611468565b6000610160806101408401528201520190565b156114fb57565b60405162461bcd60e51b815260206004820152600c60248201526b1554d113c81b9bdd081cd95d60a21b6044820152606490fd5b919082608091031261022f578151600581101561022f579161155360208201611300565b91606061156260408401611300565b92015190565b8051156115755760200190565b634e487b7160e01b600052603260045260246000fd5b8051600110156115755760400190565b60a091949360019360c083019683526020830152600060408301526060820152826080820152015256fe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a2646970667358221220d81219b351627576ddc3976e4b1312d18eac13ddac09a8ba43c451a3b7b8be0564736f6c63430008120033";

type UniUsdoToWethBidderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniUsdoToWethBidderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniUsdoToWethBidder__factory extends ContractFactory {
  constructor(...args: UniUsdoToWethBidderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UniUsdoToWethBidder";
  }

  override deploy(
    uniV2Swapper_: PromiseOrValue<string>,
    _wethAssetId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniUsdoToWethBidder> {
    return super.deploy(
      uniV2Swapper_,
      _wethAssetId,
      overrides || {}
    ) as Promise<UniUsdoToWethBidder>;
  }
  override getDeployTransaction(
    uniV2Swapper_: PromiseOrValue<string>,
    _wethAssetId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      uniV2Swapper_,
      _wethAssetId,
      overrides || {}
    );
  }
  override attach(address: string): UniUsdoToWethBidder {
    return super.attach(address) as UniUsdoToWethBidder;
  }
  override connect(signer: Signer): UniUsdoToWethBidder__factory {
    return super.connect(signer) as UniUsdoToWethBidder__factory;
  }
  static readonly contractName: "UniUsdoToWethBidder";

  public readonly contractName: "UniUsdoToWethBidder";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniUsdoToWethBidderInterface {
    return new utils.Interface(_abi) as UniUsdoToWethBidderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniUsdoToWethBidder {
    return new Contract(address, _abi, signerOrProvider) as UniUsdoToWethBidder;
  }
}
