interface Params {
title:string
}

export const Title = ({title}:Params) => {
    return (
        <h1 className=" text-zinc-800 text-xl font-[Lobster,sans-serif] md:text-4xl text-center ">{title}</h1>
    )

}