import { NextApiRequest,NextApiResponse } from "next";

export default async (req:NextApiRequest,res:NextApiResponse) => {

    const slug = req.query['slug']

    if (!slug || typeof slug !== 'string'){

        res.statusCode = 404
        res.send(JSON.stringify({message:'please provide a slug'}))
        return;
    } 
    // fetch pokemon api with slug as id
    // return pokemon data

    try {
            
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon-shape/${slug}`)
            const data = await pokemon.json()
            const r = data.pokemon_species 
            const k :any = []
            r.forEach((element: any) => {
             const  k =  element.name
             console.log(k)
             
            });
            k
            res.send(k)
            res.statusCode = 200
            return;
    } catch (error) {
        res.statusCode = 500
        res.send(JSON.stringify({message:'error fetching pokemon'}))
    }
}


