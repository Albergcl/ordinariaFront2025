import { FunctionalComponent } from "preact/src/index.d.ts";
import CharacterComponent from "./Character.tsx"

type Character = {
    id: string,
    name: string,
    house: string,
    image: string,
    alive: boolean
}

type Props = {
    character: Character
}

const CharacterContainer: FunctionalComponent<Props> = (props) => {
    const ch = props.character;

    return(
        <div>
            <h1>{ch.name}</h1>
            <CharacterComponent name={ch.name} house={ch.house} alive={ch.alive} image={ch.image} />
        </div>
    )
}

export default CharacterContainer;