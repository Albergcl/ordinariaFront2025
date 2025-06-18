import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import CharacterContainer from "../components/CharacterContainer.tsx";

type Character = {
  id: string,
  name: string,
  image: string
  house: string,
  alive: boolean
}

type Data = {
  characters: Array<Character>
}

type CharacterAPI = {
  results: Array<{
    id: string,
    name: string,
    image: string
    house: string,
    alive: boolean
  }>
}

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const webURL = new URL(req.url);
    let url = "https://hp-api.onrender.com/api/characters";

    try{
      const response = await Axios.get<CharacterAPI>(url);
      return ctx.render({characters: response.data.results})
    }catch(e){
      return new Response("Error de API");
    }
  }
}

export default (props: PageProps<Data>) => {
  const characters = props.data.characters;
  return (characters.map((ch) => {
    <CharacterContainer character={ch} />
  }))
}
