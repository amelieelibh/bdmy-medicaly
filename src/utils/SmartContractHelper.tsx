import {  useEffect, useState } from "react";
import {toast} from "react-toastify";
import {ethers} from 'ethers';
import { ChainNetwork, WalletState } from "./ChainUtils";
import {MedicsBook} from "../models/typechains/MedicsBook";
import MedicsBookJson from "../models/typechains/MedicsBook.json";

const MEDICS_BOOK_SC_ADDRESS = {
    "ETHEREUM": "0x0",
    "RINKEBY": "0xCbC6d5aDa54B059cB2A8Aa40f0d8d4C4034a5012",
};

const MEDICINE_SUPPLY_SC_ADDRESS = {
    "ETHEREUM": "0x0",
    "RINKEBY": "0x159c75cF20941826aEF7E58bAAAF1ae5e666eCB4",
};

export const useMedicsBook = (walletState: WalletState) => {
    const [medicsBookAddress, setMedicsBookAddress] = useState<string>();
    const [medicsBookContract, setMedicsBookContract] = useState<MedicsBook>();
    const [loadingMedicsBook, setLoadingMedicsBook] = useState<boolean>(false);

    useEffect((init = loadContract) => {
        init();
    } , [walletState]);

    const loadContract = async () => {
        if(!walletState.provider || !walletState.network || !walletState.userAddress) {
            return;
        }
        setLoadingMedicsBook(true);
        const scAddress = MEDICS_BOOK_SC_ADDRESS[walletState.network];
        try{
            const contract = new ethers.Contract(scAddress, MedicsBookJson.abi, walletState.provider)
                .connect(walletState.userAddress) as MedicsBook;
            setMedicsBookContract(contract);
            setLoadingMedicsBook(false);
            setMedicsBookAddress(scAddress);
        }catch(e: any){
            toast.error(`Error loading medics book contract: ${e.message} - ${scAddress}`);
        }finally{
            setLoadingMedicsBook(false);
        }
    }

    return{
        medicsBookAddress, medicsBookContract, loadingMedicsBook,
    }
};

export const useMedicineSupply = (walletState: WalletState) => {
    const [medicineSupplyAddress, setMedicineSupplyAddress] = useState<string>();
    const [medicineSupplyContract, setMedicineSupplyContract] = useState<ethers.Contract>();
    const [loadingMedicineSupply, setLoadingMedicineSupply] = useState<boolean>(false);

    useEffect(() => {
        loadContract(walletState.provider, walletState.network, walletState.userAddress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [walletState.provider, walletState.network, walletState.userAddress]);

    const loadContract = async (provider?: ethers.providers.Web3Provider, network?: ChainNetwork, userAddress?: string) => {
        if(!provider || !network || !userAddress) {
            return;
        }
        setLoadingMedicineSupply(true);
        const scAddress = MEDICINE_SUPPLY_SC_ADDRESS[network];
        try{
            const contract = new ethers.Contract(scAddress, MedicsBookJson.abi, provider)
                .connect(userAddress) as ethers.Contract;
            setMedicineSupplyContract(contract);
            setLoadingMedicineSupply(false);
            setMedicineSupplyAddress(scAddress);
        }catch(e: any){
            toast.error(`Error loading medicine supply contract: ${e.message} - ${scAddress}`);
        }finally{
            setLoadingMedicineSupply(false);
        }
    };

    return{
        medicineSupplyAddress, medicineSupplyContract, loadingMedicineSupply,
    }
}