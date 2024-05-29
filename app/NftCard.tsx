import Image, { StaticImageData } from "next/image";
import NftInfo from "./NftInfo";

export default function NftCard({tokenId, name, url}:NftCardParams){
    return( 
        <div className="container h-fit w-full border-1 bg-[#141414] rounded-lg mb-16">
            <Image className='object-fill w-full h-80 rounded-lg mb-0.5' alt={tokenId} src={url} width={200} height={200}/>
            <NftInfo name={name} tokenId={tokenId}/>
        </div>
    )
}

interface NftCardParams{
    tokenId:string,
    name:string,
    url:string | StaticImageData
}