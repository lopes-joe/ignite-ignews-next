import { NextApiRequest, NextApiResponse } from "next"

export default function Brands(request : NextApiRequest, response : NextApiResponse){
    
    const brooksBrother = {
        name: 'Brooks Brother',
        since: 1936,
        country: 'England',
        style: 'Preppy' 
    }
    
    return response.json(brooksBrother)
}