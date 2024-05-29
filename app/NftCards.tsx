import NftCard from "./NftCard";
import loading from "../public/loading.gif"
import { StaticImageData } from "next/image";

export default function NftCards({nftList}:any){
    return(
        <div className='grid grid-cols-4 gap-4 min-w-min max-w-full min-h-full'>
            {nftList.map((item:ItemParams)=>(<NftCard key={item.tokenUri} tokenId={item.tokenId} url={item.image.cachedUrl ?? loading} name={item.name}/>))}  
        </div>
    )
}

interface ItemParams{
    tokenUri:string,
    tokenId:string,
    image:ImageParam,
    name:string
}
interface ImageParam{
    cachedUrl: string | undefined 
}