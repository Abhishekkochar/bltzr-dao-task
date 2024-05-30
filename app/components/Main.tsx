/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import NftCards from "./NftCards";
import useGetNft from "../hooks/useGetNft";
import { defaultAddress } from "../utils/constants";

export default function Main(){
    const [inputAddress, setInputAddress] = useState(defaultAddress)
    const [nftList, setNftList] = useState<{}>([]);

    function handleChange(e:any){
        setInputAddress(e.target.value)
    }

 return(
    <div className="container justify-items-center min-h-screen m-16 border-5 p-2">
        <main className="container flex min-h-full min-w-full justify-center p-10 space-x-2">
            <input className="shadow appearance-none rounded w-1/2 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter address: 0x.." onChange={handleChange}/>
            <button className='rounded-lg px-3 py-1 bg-white text-gray-800 font-bold text-lg' onClick={() => useGetNft(inputAddress, setNftList)}>Fetch</button>
        </main>
        <NftCards nftList={nftList}/> 
    </div>
 )
}