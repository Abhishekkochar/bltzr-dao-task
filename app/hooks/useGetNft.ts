import { Alchemy, Network} from "alchemy-sdk";
import { apiKey, pudgyPenguinContract } from "../utils/constants";

const config = {
    apiKey: apiKey,
    network: Network.ETH_MAINNET
    }

export default async function useGetNft( inputAddress:string, setNftList:(list: any[])=>void):Promise<void>{
    const alchemy = new Alchemy(config)

    try{
        let nfts = await alchemy.nft.getNftsForOwner(inputAddress, {contractAddresses: [pudgyPenguinContract]});
        setNftList(nfts.ownedNfts)
    } catch(e){
        console.log(e)
    }
}
