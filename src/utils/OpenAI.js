import OpenAI from "openai";
import { key } from "./Constant";

const openai = new OpenAI({
  apiKey: key, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai;
