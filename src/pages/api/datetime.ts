import { NextApiRequest, NextApiResponse } from "next";

export default function datetime(req: NextApiRequest, res: NextApiResponse){

    const data = new Date().toLocaleString();

    return res.status(200).json({data:{
        data
    }});

}