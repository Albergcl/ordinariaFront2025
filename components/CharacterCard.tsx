import { FunctionalComponent } from "preact";


type Props = {
    character: {
        name: string,
        image: string
    }
}

const CharacterCard: FunctionalComponent<Props> = (props) => {
    const { name, image } = props.character;
    
    return (
        <div>
            <img src={image} alt={name} />
            <div>{name}</div>
        </div>
    )
}

export default CharacterCard;