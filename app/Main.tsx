import { useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import NftCards from "./NftCards";

export default function Main(){
    const [inputAddress, setInputAddress] = useState('0xC79BAB87c2ead914A29e394Fbe28E1ef78b57115')
    const [nftList, setNftList] = useState([]);

    const config = {
    apiKey:"yOTm9m3zIlntwgzKXJfu07FBDOv1LAeo",
    network: Network.ETH_MAINNET
    }
    const alchemy = new Alchemy(config)

    async function fecthNft() {
        try{
            // Get all NFTs
            const nfts = await alchemy.nft.getNftsForOwner(inputAddress);
            setNftList(nfts.ownedNfts)
            // Print NFTs
            console.log(nfts.ownedNfts);
        } catch(e){
            console.log(e)
        }
    };

    function handleChange(e:any){
        setInputAddress(e.target.value)
    }
 return(
    <div className="container justify-items-center min-h-screen m-16 border-5 p-2">
        <main className="container flex min-h-full min-w-full justify-center p-10 space-x-2">
            <input className="shadow appearance-none rounded w-1/2 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter address: 0x.." onChange={handleChange}/>
            <button className='rounded-lg px-3 py-1 bg-white text-gray-800 font-bold text-lg' onClick={fecthNft}>Fetch</button>
        </main>
        <NftCards nftList={nftList}/>
    </div>
 )
}