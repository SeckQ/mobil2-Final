import {OpenAI} from "langchain";
import {RetrievalQAChain} from "langchain/chains";
import {PDFLoader} from "langchain/document_loaders/fs/pdf";
import {} from "langchain/document_loaders/fs/text"
import {OpenAIEmbeddings} from "langchain/embeddings/openai";
import {MemoryVectorStore} from "langchain/vectorstores/memory";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import * as dotenv from 'dotenv';
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { HtmlToTextTransformer } from "@langchain/community/document_transformers/html_to_text";




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
    const loader = new CheerioWebBaseLoader(
        "https://onedrive.live.com/?authkey=%21APMM80%2Dd99QkEZs&id=E7AB00B16CE7C39F%2151705&cid=E7AB00B16CE7C39F&parId=root&parQt=sharedby&o=OneUp"
    );
    const docs = await loader.load()
    const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");
    const transformer = new HtmlToTextTransformer();
    const sequence = splitter.pipe(transformer);
    const newDocuments = await sequence.invoke(docs);

    const output = await splitter.splitDocuments(doc);

    // output.forEach((chunk, index) => {
    //     console.log(`Chunk ${index + 1}:`);
    //     console.log(chunk);
    // });

    const vectorStore = await MemoryVectorStore.fromDocuments(output, new OpenAIEmbeddings())
    const vectorStoreRetriever = vectorStore.asRetriever()
    const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
    return await chain.call({
        query: question,
    })
}
