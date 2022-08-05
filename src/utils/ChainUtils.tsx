import {ethers} from 'ethers';

export type ChainNetwork = "ETHEREUM" | "RINKEBY";
export const CHAIN_IDS: { [key in ChainNetwork]: number } = {
    ETHEREUM: 1,
    RINKEBY: 4,
};

export interface ChainProps {
    chainId: number;
    name: string;
    symbol: string;
    network: ChainNetwork;
    rpcUrl: string;
    explorerUrl: string;
    testnet: boolean;
}

export const CHAINLIST: {[chainId: number]: ChainProps} = {
    1: {
        chainId: 1,
        name: "Ethereum",
        symbol: "ETH",
        network: "ETHEREUM",
        rpcUrl: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
        explorerUrl: "https://etherscan.io",
        testnet: false,
    },
    4: {
        chainId: 4,
        name: "Rinkeby",
        symbol: "rETH",
        network: "RINKEBY",
        rpcUrl: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
        explorerUrl: "https://rinkeby.etherscan.io",
        testnet: true,
    },
};

export interface WalletState{
    provider?: ethers.providers.Web3Provider;
    userAddress?: string;
    network?: ChainNetwork;
    chainId?: number;
    testnet?: boolean;
    wsInitialized: boolean;
}