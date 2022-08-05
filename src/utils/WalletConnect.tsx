import {ethers} from 'ethers';
import {  useEffect, useState } from 'react';
import {ChainNetwork, CHAINLIST, WalletState} from './ChainUtils';

export const useWalletState = (window: any): WalletState => {
    const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
    const [userAddress, setUserAddress] = useState<string>();
    const [network, setNetwork] = useState<ChainNetwork>();
    const [chainId, setChainId] = useState<number>();
    const [testnet, setTestnet] = useState<boolean>();
    const [wsInitialized, setWsInitialized] = useState<boolean>(false);
    const [windowPlugin, setWindowPlugin] = useState<any>();

    useEffect(() => {
        if(typeof window.ethereum !== 'undefined') {
            setWindowPlugin(window.ethereum);
        }
    }, [window]);

    useEffect(() => {
        connectWallet(windowPlugin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowPlugin]);

    const connectWallet = async (windowPlugin: any) => {
        if(!windowPlugin) {
            return;
        }
        await windowPlugin.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(windowPlugin);
        const chainId = await provider.getSigner().getChainId();
        const networkInfo = CHAINLIST[chainId];
        if(!networkInfo) {
            throw new Error(`Unknown chainId: ${chainId}`);
        }
        const userAddress = await provider.getSigner().getAddress();
        console.log("networkInfo", networkInfo);
        setProvider(provider);
        setNetwork(networkInfo.network!);
        setChainId(chainId);
        setTestnet(networkInfo.testnet);
        setUserAddress(userAddress);
        setWsInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    };

    return {
        provider, userAddress, network, chainId, testnet, wsInitialized,
    };
};
