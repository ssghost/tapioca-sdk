/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MagnetarMarketModule,
  MagnetarMarketModuleInterface,
} from "../../../Magnetar/modules/MagnetarMarketModule";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "extractFromSender",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "deposit",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "withdraw",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "withdrawData",
        type: "bytes",
      },
    ],
    name: "depositAddCollateralAndBorrow",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarket",
        name: "singularity",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "deposit_",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "extractFromSender",
        type: "bool",
      },
    ],
    name: "depositAndAddAsset",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "deposit",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "extractFromSender",
        type: "bool",
      },
    ],
    name: "depositAndRepay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMarket",
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "deposit",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "withdraw",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "extractFromSender",
        type: "bool",
      },
    ],
    name: "depositRepayAndRemoveCollateral",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        internalType: "contract IMarket",
        name: "bingBang",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "deposit",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "extractFromSender",
        type: "bool",
      },
    ],
    name: "mintAndLend",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fraction",
        type: "uint256",
      },
    ],
    name: "removeAsset",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "contract IMarket",
        name: "bingBang",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "removeShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateralShare",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdraw",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "withdrawData",
        type: "bytes",
      },
    ],
    name: "removeAssetAndRepay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IYieldBoxBase",
        name: "yieldBox",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "dstChainId",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "receiver",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "share",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "adapterParams",
        type: "bytes",
      },
      {
        internalType: "address payable",
        name: "refundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657612dba908161001c8239f35b600080fdfe6080604052600436101561001b575b361561001957600080fd5b005b6000803560e01c8063411628d9146115dc578063664653ac1461106c578063815c12ea14610a755780639cc6ef14146109df578063a22cb465146108ad578063cc5e316314610862578063dedd6b80146104bb578063e9212b72146101a5578063e985e9c5146101515763f4d9375314610095575061000e565b606036600319011261014e576001600160a01b0360206101036100b6611ba4565b6100be611bba565b6100c781611cd0565b60405163f4d9375360e01b81526001600160a01b0390911660048201819052602482015260448035908201529384928391879183906064820190565b0393165af1801561014357610116575080f35b602090813d811161013c575b61012c8183611c3d565b810103126101375780f35b600080fd5b503d610122565b6040513d84823e3d90fd5b80fd5b503461014e57604036600319011261014e5761016b611ba4565b6040610175611bba565b926001600160a01b03809316815280602052209116600052602052602060ff604060002054166040519015158152f35b5061010036600319011261014e576101bb611ba4565b6101c3611bba565b90608435906101d0611bf5565b6101d8611c04565b9060e43580151581036101375786926101f087611cd0565b60405163de40657760e01b81526020936001600160a01b038781169491908684600481895afa80156104b057610238948991610483575b501697606435908b60443591611df4565b801561047c5730905b6040516377607a1760e11b808252928582600481885afa91821561043f57879261044a575b5060405191638eb22cdd60e01b8352600483015288602483015286604483015285826064818b5afa91821561043f57879261040d575b50843b156104095760405163cce19f8160e01b81526001600160a01b038b811660048301529190911660248201526044810191909152858160648183885af19081156103fe5786916103e6575b50506102f3578380f35b829060046040518094819382525afa9182156103db5783926103a2575b5050604080516311a5cc7760e31b815260048101929092523060248301526001600160a01b03909516604482015260648101939093526000608484015291929183919082908160a481015b03925af1801561014357610374575b8080838180808380f35b6103959060403d60401161039b575b61038d8183611c3d565b810190611dde565b5061036a565b503d610383565b81959493508092503d83116103d4575b6103bc8183611c3d565b8101031261013757915190919084908161035b610310565b503d6103b2565b6040513d85823e3d90fd5b6103ef90611c13565b6103fa5784386102e9565b8480fd5b6040513d88823e3d90fd5b8680fd5b965090508486813d8111610438575b6104268183611c3d565b8101031261013757899551903861029c565b503d61041c565b6040513d89823e3d90fd5b965090508486813d8111610475575b6104638183611c3d565b81010312610137578995519038610266565b503d610459565b8690610241565b6104a39150883d8a116104a9575b61049b8183611c3d565b810190611d65565b38610227565b503d610491565b6040513d8a823e3d90fd5b5060a036600319011261014e576104d0611ba4565b6104d8611bba565b9060443560643580151581036101375784916104f2611be6565b946104fc81611cd0565b60405163226f120560e11b81526020966001600160a01b038781169492918983600481895afa9283156104b0578893610830575b5060405163de40657760e01b81528a816004818a5afa80156107745783918a91610813575b50169360405191630cf35bdd60e41b8352846004840152608083602481895afa928315610808578a936107d4575b5060405198638eb22cdd60e01b8a528560048b01528260248b01528a60448b01528c8a6064818a5afa998a156107c9578d9b9a610798575b50610651575b50505050506105d39061061796612a25565b604051630cb0f5b760e31b81523060048201526001600160a01b03909116602482015260006044820152606481019290925290928391908290879082906084820190565b03925af180156103db57610629578280f35b813d831161064a575b61063c8183611c3d565b810103126101375738808280f35b503d610632565b90816106a693929a94959a1561078a575b1561077f57610672818333612b92565b60405163095ea7b360e01b81526001600160a01b0387166004820152602481019190915293849283918e9183906044820190565b0393165af1801561077457610732575b5060408051634d4d7cbd60e11b81526004810196909652306024870181905260448701526000606487015260848601859052858060a481015b03818b855af19081156104b0576106179688966105d393610714575b819883946105c1565b61072c9060403d60401161039b5761038d8183611c3d565b5061070b565b948786813d831161076d575b6107488183611c3d565b8101031261076957846040916107606106ef98611dd1565b509650506106b6565b8880fd5b503d61073e565b6040513d8b823e3d90fd5b610672818389612b92565b61079388611cd0565b610662565b8b819c929b503d83116107c2575b6107b08183611c3d565b81010312610137578b995198386105bb565b503d6107a6565b6040513d8d823e3d90fd5b6107f691935060803d8111610801575b6107ee8183611c3d565b810190611d98565b505090509138610583565b503d6107e4565b6040513d8c823e3d90fd5b61082a91508c8d3d106104a95761049b8183611c3d565b38610555565b975091508887813d811161085b575b6108498183611c3d565b81010312610137578996519138610530565b503d61083f565b5060c036600319011261014e576108aa61087a611ba4565b610882611bba565b61088a611be6565b90610893611bf5565b9261089d82611cd0565b6064359160443591611df4565b80f35b503461014e57604036600319011261014e576108c7611ba4565b60243590811515809203610137576001600160a01b031690811561099a5730821461094a577f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3191606091338552846020526040852082600052602052604060002060ff1981541660ff83161790556040519133835260208301526040820152a180f35b60405162461bcd60e51b815260206004820152602260248201527f4d61676e6574617256323a2063616e277420617070726f7665206d61676e657460448201526130b960f11b6064820152608490fd5b60405162461bcd60e51b815260206004820152601c60248201527f4d61676e6574617256323a206f70657261746f72206e6f7420736574000000006044820152606490fd5b5061014036600319011261014e576004356001600160a01b038082168203610a7157610a09611bba565b9060643561ffff811681036103fa5760e43567ffffffffffffffff8111610a6d57610a38903690600401611cb2565b90610104359283168303610a6d576108aa94610a5385611cd0565b610124359460c4359260a435926084359260443591612931565b8580fd5b8280fd5b5061010036600319011261014e57610a8b611ba4565b90610a94611bba565b91610a9d611bd0565b92610aa6611c04565b67ffffffffffffffff60e43511610e6f5736602360e435011215610e6f5767ffffffffffffffff60e4356004013511610e6f5736602460e4356004013560e435010111610e6f57610af685611cd0565b60405163de40657760e01b8152916020836004816001600160a01b0388165afa928315610e7357859361104b575b5060405163226f120560e11b81526020816004816001600160a01b0386165afa9081156103fe578691611019575b5060405163442c159960e01b815281600482015260643560248201528660448201526020816064816001600160a01b0389165afa90811561043f578791610fe7575b5060405163f4d9375360e01b81526001600160a01b03898116600483015230602483015260648035604484015260209183919082908c908c165af180156104b057610fbc575b5060405163cd0211eb60e01b81523060048201526001600160a01b0389811660248301526000604483015260848035606484015260209183919082908c9089165af19081156104b0578891610f8a575b50818110610e84575b50505081600014610e7e5730955b6001600160a01b0382163b15610a6d5760405163cce19f8160e01b81526001600160a01b039182166004820152968116602488015260a4356044880181905296918691839160649183918591165af18015610e7357908591610e5b575b5050610ca8578280f35b610cbe3660e43560040135602460e43501611c7b565b93845115610e0c5784518501906080866020840193031261013757610ce560208701611dd1565b5060408601519561ffff871687036101375760608101519060808101519067ffffffffffffffff821161013757019683603f8901121561013757602088015197610d2e89611c5f565b94610d3c6040519687611c3d565b89865260408a83010111610137576001600160a01b0398610d64916040602088019101612105565b3415610e0357602034965b6004604051809b81936377607a1760e11b8352165afa978815610df757600098610dc3575b509596610db596908615610dbc5733955b6001600160a01b03309116612590565b8038808280f35b3095610da5565b6020813d602011610def575b81610ddc60209383611c3d565b8101031261076957519750610db5610d94565b3d9150610dcf565b6040513d6000823e3d90fd5b60204796610d6f565b60405162461bcd60e51b815260206004820152602160248201527f4d61676e6574617256323a2077697468647261774461746120697320656d70746044820152607960f81b6064820152608490fd5b610e6490611c13565b610e6f578338610c9e565b8380fd5b6040513d87823e3d90fd5b85610c41565b8103908111610f765760405190638eb22cdd60e01b825282600483015260248201528660448201526020816064816001600160a01b0389165afa90811561043f578791610f44575b506001600160a01b0385163b156104095760405191630208d92960e11b83523060048401526001600160a01b0389166024840152604483015260648201528581608481836001600160a01b0389165af180156103fe57908691610f30575b80610c33565b610f3990611c13565b6103fa578438610f2a565b90506020813d602011610f6e575b81610f5f60209383611c3d565b81010312610137575138610ecc565b3d9150610f52565b634e487b7160e01b87526011600452602487fd5b90506020813d602011610fb4575b81610fa560209383611c3d565b81010312610137575138610c2a565b3d9150610f98565b602090813d8311610fe0575b610fd28183611c3d565b810103126101375738610bda565b503d610fc8565b90506020813d602011611011575b8161100260209383611c3d565b81010312610137575138610b94565b3d9150610ff5565b90506020813d602011611043575b8161103460209383611c3d565b81010312610137575138610b52565b3d9150611027565b61106591935060203d6020116104a95761049b8183611c3d565b9138610b24565b5060e036600319011261014e57611081611ba4565b611089611bba565b611091611bd0565b9161109a611bf5565b846110a3611c04565b916110ad86611cd0565b6040516377607a1760e11b8152926020846004816001600160a01b038a165afa9384156103db5783946115a5575b5060405163de40657760e01b8152936020856004816001600160a01b038a165afa948515611515578495611584575b50604051630cf35bdd60e41b815260048101829052916080836024816001600160a01b038a165afa928315610e73578593611560575b5060405193638eb22cdd60e01b855282600486015260643560248601528560448601526020856064816001600160a01b038b165afa9485156103fe578695611529575b506113ff575b50505060643561136a575b5050604080516314890dcb60e21b81526001600160a01b038681166004830181905260248301526084356044830181905295919291839160649183918b91165af180156103fe5761134c575b5060405163226f120560e11b8152926020846004816001600160a01b0387165afa9384156103fe578694611318575b5060405193638eb22cdd60e01b8552600485015260248401528460448401526020836064816001600160a01b0385165afa928315610e735785936112e0575b50906112b8936112736001600160a01b0360209594166001600160a01b038416612a25565b604051630cb0f5b760e31b81526001600160a01b0391821660048201819052602482015260006044820152606481019390935291938492839187919083906084820190565b0393165af18015610143576112cb575080f35b602090813d831161013c5761012c8183611c3d565b9250906020833d602011611310575b816112fc60209383611c3d565b8101031261013757915191906112b861124e565b3d91506112ef565b9093506020813d602011611344575b8161133460209383611c3d565b810103126101375751923861120f565b3d9150611327565b6113649060403d60401161039b5761038d8183611c3d565b506111e0565b61137d6001600160a01b03841686612a25565b6001600160a01b0385163b156113fb576040516374d2492960e11b81523060048201526001600160a01b0387166024820152600060448201526064803590820152608481019190915281818060a481010381836001600160a01b038a165af180156101435715611194576113f090611c13565b6103fa578438611194565b5080fd5b1561152057611413335b8360643591612b92565b60405163095ea7b360e01b81526001600160a01b03868116600483015260643560248301529092602091849160449183918991165af19182156115155783926114d1575b5060408051634d4d7cbd60e11b815260048101929092523060248301819052604483015260006064830152608482019290925290818060a481015b0381866001600160a01b0389165af180156103db576114b3575b8080611189565b6114cb9060403d60401161039b5761038d8183611c3d565b506114ac565b91506020823d60201161150d575b816114ec60209383611c3d565b81010312610e6f578260409161150461149294611dd1565b50915091611457565b3d91506114df565b6040513d86823e3d90fd5b61141388611409565b955093506020853d602011611558575b8161154660209383611c3d565b81010312610137578994519338611183565b3d9150611539565b61157991935060803d8111610801576107ee8183611c3d565b505090509138611140565b61159e91955060203d6020116104a95761049b8183611c3d565b933861110a565b925092506020823d6020116115d4575b816115c260209383611c3d565b810103126101375786915192386110db565b3d91506115b5565b5061010036600319011261014e576115f2611ba4565b906115fb611bba565b91611604611be6565b9261160d611bf5565b90611616611c04565b9060e43567ffffffffffffffff8111610a6d57611637903690600401611cb2565b9161164182611cd0565b60405163de40657760e01b8152936020856004816001600160a01b038a165afa94851561043f578795611b83575b506040516377607a1760e11b81526020816004816001600160a01b038b165afa9081156104b0578891611b4d575b50604051630cf35bdd60e41b8152600481018290529860808a6024816001600160a01b038b165afa998a1561077457899a611b29575b5060405199638eb22cdd60e01b8b528260048c015260443560248c01528960448c015260208b6064816001600160a01b038c165afa9a8b15610808578a9b611aef575b50836119a7575b5050506117336001600160a01b03861687612a25565b156119a157305b6001600160a01b0386163b15610409576040516374d2492960e11b81526001600160a01b03918216600482015290831660248201526000604480830191909152356064820152608481019790975285878060a481010381836001600160a01b038a165af19687156103fe5760409761198e575b508015611982576117f6309788935b81516314890dcb60e21b81526001600160a01b03918216600482015294166024850152606480356044860181905294928391829190820190565b03818a6001600160a01b038b165af1801561043f57611964575b50611819578480f35b815115610e0c578151820191608081602085019403126101375761183f60208201611dd1565b50604081015161ffff811681036101375760608201519160808101519067ffffffffffffffff821161013757019784603f8a011215610137576020890151986118878a611c5f565b956118956040519788611c3d565b8a875260408b83010111610137576001600160a01b03996118bd916040602089019101612105565b341561195b57602034975b6004604051809c819363226f120560e11b8352165afa988915610df757600099611923575b50969761190b978715611914576001600160a01b0333975b1661214d565b80388080808480f35b6001600160a01b033097611905565b6020813d602011611953575b8161193c60209383611c3d565b8101031261194f5751985061190b6118ed565b8980fd5b3d915061192f565b602047976118c8565b61197c9060403d60401161039b5761038d8183611c3d565b50611810565b6117f6829788936117bc565b61199a90969196611c13565b94386117ad565b8161173a565b611a08602091836001600160a01b039415611ae1575b15611ad8576119d1335b8260443591612b92565b60405163095ea7b360e01b81526001600160a01b03858c161660048201526044803560248301529094859384928f92918491820190565b0393165af1801561077457908a91611a94575b5060408051634d4d7cbd60e11b8152600481019390935230602484018190526044840152600060648401526084830191909152818060a481015b03818b6001600160a01b038b165af180156104b057611a76575b808061171d565b611a8e9060403d60401161039b5761038d8183611c3d565b50611a6f565b90506020813d602011611ad0575b81611aaf60209383611c3d565b810103126107695789611a5592611ac7604093611dd1565b50925090611a1b565b3d9150611aa2565b6119d1886119c7565b611aea89611cd0565b6119bd565b909192939a506020813d602011611b21575b81611b0e60209383611c3d565b8101031261194f57519992919083611716565b3d9150611b01565b611b42919a5060803d8111610801576107ee8183611c3d565b5050905098386116d3565b90506020813d602011611b7b575b81611b6860209383611c3d565b81010312611b7757513861169d565b8780fd5b3d9150611b5b565b611b9d91955060203d6020116104a95761049b8183611c3d565b933861166f565b600435906001600160a01b038216820361013757565b602435906001600160a01b038216820361013757565b604435906001600160a01b038216820361013757565b60843590811515820361013757565b60a43590811515820361013757565b60c43590811515820361013757565b67ffffffffffffffff8111611c2757604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117611c2757604052565b67ffffffffffffffff8111611c2757601f01601f191660200190565b929192611c8782611c5f565b91611c956040519384611c3d565b829481845281830111610137578281602093846000960137010152565b9080601f8301121561013757816020611ccd93359101611c7b565b90565b6001600160a01b0316338114908115611d3b575b5015611cec57565b60405162461bcd60e51b815260206004820152602160248201527f4d61676e6574617256323a206f70657261746f72206e6f7420617070726f76656044820152601960fa1b6064820152608490fd5b90506000526000602052604060002033600052602052600160ff6040600020541615151438611ce4565b9081602091031261013757516001600160a01b03811681036101375790565b51906001600160a01b038216820361013757565b919082608091031261013757815160058110156101375791611dbc60208201611d84565b916060611dcb60408401611d84565b92015190565b5190811515820361013757565b9190826040910312610137576020825192015190565b939594956001600160a01b03928386169160409485519763226f120560e11b89526020986004948a8287818a5afa9182156120fa576000926120cb575b50885163de40657760e01b81528b8188818b5afa90811561206b579085916000916120ae575b508a51630cf35bdd60e41b8152888101859052911694608082602481895afa9182156120a3579a8d9e9f88829e9f9d60009561207f575b50611f3b575b50505050505090611ea491612a25565b15611f3257600030915b611ef087519889968795869463cd0211eb60e01b865285016060919493929460808201956001600160a01b038092168352166020820152600060408201520152565b03925af1908115611f285750611f04575050565b813d8311611f21575b611f178183611c3d565b8101031261013757565b503d611f0d565b513d6000823e3d90fd5b60008391611eae565b96600085969798938b8e9f9694849c9d9e9f8987611f949b99871461207657611f65925033612b92565b519788968795869363095ea7b360e01b85528401602090939291936001600160a01b0360408201951681520152565b0393165af1801561206b57908a9291612030575b508151634d4d7cbd60e11b815287810193845230602085018190526040850152606084019190915260006080840152918290819060a0015b03816000875af1801561202557918a979695949391611ea493612009575b819293818b81611e94565b61201f908a3d8c1161039b5761038d8183611c3d565b50611ffe565b88513d6000823e3d90fd5b91508b82813d8311612064575b6120478183611c3d565b8101031261013757611fe09261205d8b93611dd1565b5092611fa8565b503d61203d565b8a513d6000823e3d90fd5b611f6592612b92565b61209891955060803d8111610801576107ee8183611c3d565b505090509338611e8e565b8b513d6000823e3d90fd5b6120c591508d803d106104a95761049b8183611c3d565b38611e57565b90918b82813d83116120f3575b6120e28183611c3d565b8101031261014e5750519038611e31565b503d6120d8565b89513d6000823e3d90fd5b60005b8381106121185750506000910152565b8181015183820152602001612108565b9060209161214181518092818552858086019101612105565b601f01601f1916010190565b969261ffff9098929194989695961694851561251b576001600160a01b0380981691604098895195630cf35bdd60e41b875260049483868901526024976080818a81855afa908115612510579084916000916124ee575b508d516301ffc9a760e01b815263843c6ae360e01b89820152911699602095909186818c818f5afa90816124ba575b506121e957505050505050505050505050505050565b8d51627eeac760e11b81526001600160a01b038316818a01908152602081018390528790829081906040010381875afa90811561247f578f9060009261248a575b50519063442c159960e01b8252828a8301528b820152600060448201528681606481875afa90811561247f57908e9160009161244f575b5010612418578d516311a5cc7760e31b81528089019182526001600160a01b039092166020820152306040820152606081018d905260006080820181905291928e928492839190829060a00103925af180156123e9576123fc575b5034156123f457925b8a51633b58a71760e21b8152838187818c5afa9081156123e9576000916123b4575b50156123ab57915b8a51936060850185811067ffffffffffffffff821117612397579083918d521684528301600081528a8401928352873b1561013757816123799460009b8d519e8f9c8d9b8c9a63695ef6bf60e01b8c5230908c01528a01526044890152606488015260a06084880152511660a4860152511660c484015251606060e4840152610104830190612128565b03925af1908115611f28575061238c5750565b61239590611c13565b565b88604188634e487b7160e01b600052526000fd5b506060916122ef565b908482813d83116123e2575b6123ca8183611c3d565b8101031261014e57506123dc90611dd1565b386122e7565b503d6123c0565b8c513d6000823e3d90fd5b5030926122c5565b612412908c8d3d1061039b5761038d8183611c3d565b506122bc565b8d5162461bcd60e51b81528089018790526012818c01527153474c3a206e6f7420617661696c61626c6560701b6044820152606490fd5b91508782813d8311612478575b6124668183611c3d565b8101031261014e57508d905138612261565b503d61245c565b8f513d6000823e3d90fd5b9190508782813d83116124b3575b6124a28183611c3d565b8101031261014e5750518e3861222a565b503d612498565b8781813d83116124e7575b6124cf8183611c3d565b81010312610137576124e090611dd1565b50386121d3565b503d6124c5565b612506915060803d8111610801576107ee8183611c3d565b50509050386121a4565b8d513d6000823e3d90fd5b50929496905060a4935060009150604095865197889687956311a5cc7760e31b875260048701526001600160a01b03938480921660248801521660448601526064850152826084850152165af18015610df7576125755750565b61258c9060403d811161039b5761038d8183611c3d565b5050565b95969261ffff9098929498169485156128d857506001600160a01b0380961696604097885194630cf35bdd60e41b865260049387858801526024966080818981875afa9081156123e957908b916000916128b6575b508c516301ffc9a760e01b815263843c6ae360e01b88820152911698602094909185818b818e5afa9081612882575b50612629575050505050505050505050505050565b8c51627eeac760e11b81526001600160a01b038416888201908152602081018490528690829081906040010381855afa90811561284a57600091612855575b508d519063442c159960e01b825283898301528a820152600060448201528581606481855afa801561284a5791868f94928f9694612817575b505090600060a492855196879586946311a5cc7760e31b86528d860152168d8401523060448401528160648401528160848401525af180156120a3576127fb575b5034156127f357915b8951633b58a71760e21b8152828186818b5afa9081156120a3576000916127be575b50156127b557905b8951926060840184811067ffffffffffffffff8211176127a157908a918c5216835282019760008952898301918252863b156101375760009881612379948c519d8e9b8c9a8b9963695ef6bf60e01b8b5230908b015289015260448801528b606488015260a06084880152511660a4860152511660c484015251606060e4840152610104830190612128565b87604187634e487b7160e01b600052526000fd5b50606090612715565b908382813d83116127ec575b6127d48183611c3d565b8101031261014e57506127e690611dd1565b3861270d565b503d6127ca565b5030916126eb565b612811908b3d8d1161039b5761038d8183611c3d565b506126e2565b919550809294503d8311612843575b6128308183611c3d565b81010312610137578c918c9386386126a1565b503d612826565b8e513d6000823e3d90fd5b908682813d831161287b575b61286b8183611c3d565b8101031261014e57505138612668565b503d612861565b8681813d83116128af575b6128978183611c3d565b81010312610137576128a890611dd1565b5038612614565b503d61288d565b6128ce915060803d8111610801576107ee8183611c3d565b50509050386125e5565b97915094604080975060a49550600093505197889687956311a5cc7760e31b875260048701526001600160a01b03938480921660248801521660448601528360648601526084850152165af18015610df7576125755750565b9793989261ffff9097919597169586156129ca57506001600160a01b0380981691604098895195630cf35bdd60e41b875260049483868901526024976080818a81855afa908115612510579084916000916124ee57508d516301ffc9a760e01b815263843c6ae360e01b89820152911699602095909186818c818f5afa90816124ba57506121e957505050505050505050505050505050565b905060a4955060009350604080989295979993505198899788966311a5cc7760e31b885260048801526001600160a01b039485809216602489015216604487015260648601526084850152165af18015610df7576125755750565b6040805163e985e9c560e01b8082523060048301526001600160a01b0393841660248301819052909594919360209392168385604481845afa8015612b87576000958691612b52575b5015612aec575b82519687523060048801526001600160a01b039091166024870152939493829085908180604481015b03915afa908115612ae35750612ab357505050565b82813d8311612adc575b612ac78183611c3d565b8101031261014e5750612ad990611dd1565b50565b503d612abd565b513d84823e3d90fd5b803b156103fa57825163a22cb46560e01b8152600481018390526001602482015296858860448183865af1978815612b4857612a9e9798612b31575b50969550612a75565b95612b3f8694939297611c13565b95909192612b28565b84513d88823e3d90fd5b90508481813d8311612b80575b612b698183611c3d565b81010312610a6d57612b7a90611dd1565b38612a6e565b503d612b5f565b83513d6000823e3d90fd5b604080516323b872dd60e01b60208083019182526001600160a01b03948516602484015230604484015260648084019790975295825291939192909116612bda608483611c3d565b8351908482019282841067ffffffffffffffff851117611c2757612c599386528683527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656487840152600080958192519082855af13d15612ce3573d91612c3f83611c5f565b92612c4c88519485611c3d565b83523d868985013e612ce7565b90815180612c69575b5050505050565b8285918101031261014e575082612c809101611dd1565b15612c8d57808080612c62565b60849250519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152fd5b6060915b91929015612d495750815115612cfb575090565b3b15612d045790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b825190915015612d5c5750805190602001fd5b60405162461bcd60e51b815260206004820152908190612d80906024830190612128565b0390fdfea2646970667358221220c69ed040f831371a3b11a28b829fafb09ee3c7e218c53416c875c48f20900d3664736f6c63430008120033";

type MagnetarMarketModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MagnetarMarketModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MagnetarMarketModule__factory extends ContractFactory {
  constructor(...args: MagnetarMarketModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MagnetarMarketModule";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MagnetarMarketModule> {
    return super.deploy(overrides || {}) as Promise<MagnetarMarketModule>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MagnetarMarketModule {
    return super.attach(address) as MagnetarMarketModule;
  }
  override connect(signer: Signer): MagnetarMarketModule__factory {
    return super.connect(signer) as MagnetarMarketModule__factory;
  }
  static readonly contractName: "MagnetarMarketModule";

  public readonly contractName: "MagnetarMarketModule";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MagnetarMarketModuleInterface {
    return new utils.Interface(_abi) as MagnetarMarketModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MagnetarMarketModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MagnetarMarketModule;
  }
}
