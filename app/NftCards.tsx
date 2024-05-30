import NftCard from "./NftCard";
import NoPreview from "../public/loading.gif"

export default function NftCards({nftList}:any){
    return(
        <div className='grid grid-cols-4 gap-4 min-w-min max-w-full min-h-full'>
            {nftList.map((item:ItemParams)=>(<NftCard key={item.tokenUri} tokenId={item.tokenId} url={item.image.cachedUrl ?? NoPreview} name={item.name}/>))}  
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