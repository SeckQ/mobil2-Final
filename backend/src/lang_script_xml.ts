import {OpenAI} from "langchain";
import {RetrievalQAChain} from "langchain/chains";
import {} from "langchain/document_loaders/fs/text"
import {OpenAIEmbeddings} from "langchain/embeddings/openai";
import {MemoryVectorStore} from "langchain/vectorstores/memory";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import * as dotenv from 'dotenv';
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { HtmlToTextTransformer } from "@langchain/community/document_transformers/html_to_text";
import { TextLoader } from "langchain/document_loaders/fs/text";





dotenv.config()
export const process_doc = async (filename: string | undefined, question: string) => {
    const apiKey = process.env.OPENAI_API_KEY;
    const model = new OpenAI({
        modelName: 'gpt-3.5-turbo-0613',
        temperature: 0.1,
        openAIApiKey: apiKey
    });
    // const loader = new PDFLoader(`/Universidad/DispositivosMoviles/mobil2-Final/backend/uploads/${filename}`, {
    //     splitPages: false
    // })
    const loader = new TextLoader("/Universidad/DispositivosMoviles/mobil2-Final/backend/uploads/${filename}");

    const doc = await loader.load()
    const vectorStore = await MemoryVectorStore.fromDocuments(doc, new OpenAIEmbeddings())
    const vectorStoreRetriever = vectorStore.asRetriever()
    const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
    return await chain.call({
        query: question,
    })
}
