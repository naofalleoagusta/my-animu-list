import type { NextApiRequest, NextApiResponse } from "next";

import generateQueryParam from "../../helpers/generateQueryParam";

import { API_BASE_URL } from "../../config";
import { AnimesInputSchema } from "../../schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const parsedReq = AnimesInputSchema.parse(req.query);
    const resData = await fetch(
      `${API_BASE_URL}${generateQueryParam(parsedReq)}`
    );
    const data = await resData.json();
    return res.status(200).json({ animes: data });
  } catch (error) {
    return res.status(400).send({ error });
  }
}
