export default function NftInfo({name, tokenId}:NftInfoParams){
    return (
        <section className='flex font-serif justify-evenly bg-[#1F1F1F] rounded-lg p-1'>
            <span className="truncate hover:text-clip"> {name || "No name available"} </span>
            <span className="truncate"> {"ID: "}{tokenId}</span>
        </section>
    )
}

interface NftInfoParams{
    name:string,
    tokenId:string
}