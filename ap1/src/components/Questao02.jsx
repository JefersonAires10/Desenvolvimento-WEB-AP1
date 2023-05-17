import { useEffect, useState } from "react"

const PokemonFrontBack = () => {

    // minha flag para controlar o estado do botão
    const [flag, setFlag] = useState(true)
    // Variável de estado para controlar a imagem do pokemon
    const [pokemon, setPokemon] = useState("")

    useEffect(
        () => {
            // Sempre que o estado do botão mudar, a imagem do pokemon é alterada (Frente ou Costas)
            if (flag) {
                setPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
            } else {
                setPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png")
            }
        }
        , 
        [flag]
    )

    return (
        <div>
            <center>
                <h1>Questão 02</h1>
                <h1>Pokemon</h1>
                <img src={pokemon} alt="Pikachu" style={{width:"300px"}}/>
                <br/>
                {/*Sempre que o botão for clicado, o estado do botão é alterado*/}
                <button
                    style={{width:"300px", height:"50px", fontSize:"20px", cursor:"pointer" }}
                    onClick={() => setFlag(!flag)} // Alterando o estado do botão 
                >Virar Pokemon
                </button>
            </center>
        </div>
    )

}

export default PokemonFrontBack