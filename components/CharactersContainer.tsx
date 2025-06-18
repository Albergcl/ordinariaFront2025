import { FunctionalComponent } from "preact/src/index.d.ts";
import CharacterCard from "./CharacterCard.tsx";

type Character = {
    name: string,
    id: string,
    image: string
}

type Props = {
    characters: Character[]
}

const CharactersContainer: FunctionalComponent<Props> = (props) => {
    const characters = props.characters;
    console.log(characters)

    return (<>
        <form method="GET">
            <input type="text" name="name" placeholder="Nombre a buscar" />
            <button type="submit">Buscar</button>
        </form>
        <div>
            {characters.map((ch) => <a href={`/characters/${ch.id}`}><CharacterCard key={ch.id} character={ch} /></a>)}
        </div>
        </>
    )
}

export default CharactersContainer;