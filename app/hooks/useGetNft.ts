import { Alchemy, Network} from "alchemy-sdk";
import { pudgyPenguinContract } from "../utils/constants";

const config = {
    apiKey: process.env.API,
    network: Network.ETH_MAINNET
    }

export default async function useGetNft( inputAddress:string, setNftList:(list: any[])=>void):Promise<void>{
    const alchemy = new Alchemy(config)

    try{
        let nfts = await alchemy.nft.getNftsForOwner(inputAddress, {contractAddresses: [pudgyPenguinContract]});
        setNftList(nfts.ownedNfts)
        console.log(process.env.API)
    } catch(e){
        console.log(e)
    }
}
