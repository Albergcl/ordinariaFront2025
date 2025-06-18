import { FunctionalComponent } from "preact";


type Props = {
    name: string,
    house: string,
    image: string,
    alive: boolean
}

const Character: FunctionalComponent<Props> = (props) => {
    let status: string = ""
    if(props.alive === true){
        status = "vivo"
    }else{
        status = "muerto"
    }
    
    return (
        <div>
            <img src={props.image} alt={props.name} />
            <div>{props.name}</div>
            <div>
                <div>Casa: {props.house}</div>
                <div>{status}</div>
            </div>
        </div>
    )
}

export default Character;