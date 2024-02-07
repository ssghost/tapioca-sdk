// API
import { extendEnvironment } from 'hardhat/config';
import API from './api/index';

// Ethers
import './ethers';

// Types
import * as typechain from './typechain';

import * as dotenv from 'dotenv';
import fs from 'fs';
import { EChainID } from './api/config';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv {
            ALCHEMY_API_KEY: string;
            ENV: string;
            NETWORK: string; // For forking
        }
    }
}

/**
 * Load the env vars from the .env/<network>.env file
 */
export const loadEnv = (deleteTasks = true) => {
    const networkArg = process.argv.findIndex((c) => c === '--network');
    let networkName = 'localhost';

    if (networkArg !== -1) {
        networkName = process.argv[networkArg + 1]; // Get the network name
    } else if (process.env.NETWORK) {
        networkName = process.env.NETWORK;
        console.log(`[+] Using ${networkName} network fork on localhost.`);
    } else {
        console.log('[!] No network specified, using localhost as default.');
    }

    // dotenv loading can not load `export` env vars for some reasons
    const path = `.env/${networkName}.env`;

    if (fs.existsSync(path)) {
        dotenv.config({ path });
    } else {
        throw new Error(
            '[-] env vars not loaded, please specify a network with --network <network> and create its file in .env/<network>.env',
        );
    }

    extendEnvironment((hre) => {
        hre.SDK.eChainId = String(hre.network.config.chainId) as EChainID;
    });

    if (deleteTasks) {
        extendEnvironment((hre) => {
            // remove hardhat core tasks
            delete hre.tasks['gas-reporter:merge'];
            delete hre.tasks['export-artifacts'];
            delete hre.tasks['size-contracts'];
            delete hre.tasks['init-foundry'];
            delete hre.tasks.coverage;
            delete hre.tasks.sourcify;
            delete hre.tasks.accounts;
            delete hre.tasks.flatten;
            delete hre.tasks.deploy;
            delete hre.tasks.export;
            delete hre.tasks.check;
            delete hre.tasks.node;
            delete hre.tasks.run;
        });
    }
};
export const SDK = { API, typechain };
export { API, typechain };
export default SDK;
