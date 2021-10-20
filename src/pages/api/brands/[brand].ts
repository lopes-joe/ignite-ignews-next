import { NextApiRequest, NextApiResponse } from "next"

export default function Brands(request : NextApiRequest, response : NextApiResponse){
    const brand = request.query    
    return response.json(brand.brand + ' is my favorite brand')
}