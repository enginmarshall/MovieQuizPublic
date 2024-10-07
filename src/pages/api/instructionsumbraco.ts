import { Instructions } from "../../models";
import type { NextApiRequest, NextApiResponse } from "next";
import { convertUmbracoDtoMovie } from "@/utilities/converter";


export const getInstructions = async () => {
  try {
    let instructions: Instructions = {} as Instructions;

    const apiUrl = `${process.env.NEXT_PUBLIC_UMBRACO_BASE_API_URL}content?take=500&fetch=children:${process.env.NEXT_PUBLIC_UMBRACO_INSTRUCTIONS_NODE_ID}`;
    let response = await fetch(apiUrl);
    let data = await response.json();
    let dtoInstructions = data.items;
    instructions = dtoInstructions.length > 0 ? dtoInstructions[0] : '';

    return instructions;
  }
  catch (error) {
    console.log("🚀 ~ getInstructions ~ error:", error)
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const instructions = await getInstructions();
    res.status(200).json(instructions);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
