import Image, { StaticImageData } from "next/image";
import NftInfo from "./NftInfo";

export default function NftCard({tokenId, name, url}:NftCardParams){
    return( 
        <div className="container transition delay-120 p-1 h-fit w-full border-1 bg-[#141414] rounded-lg mb-16 hover:-translate-y-1 hover:scale-102 duration-300 hover:bg-gray-700">
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