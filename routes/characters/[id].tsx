import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import CharacterContainer from "../../components/CharacterContainer.tsx";

type Character = {
    id: string,
    name: string,
    house: string,
    image: string,
    alive: boolean
}

type Data = {
    character: Character
}

export const handler: Handlers = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
        const {id} = ctx.params;
        const url = `https://hp-api.onrender.com/api/character/${id}`;

        try {
            const response = await Axios.get<Character>(url);
            return ctx.render({character: response.data});
        }catch(_e){
            return new Response("Error de API");
        }
    }
}

const Page = (props:PageProps<Data>) => {
    <CharacterContainer character = {props.data.character} />
}

export default Page;