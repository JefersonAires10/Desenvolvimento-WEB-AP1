import { useState, useEffect } from "react"

const Populacao = () => {

    // Variáveis de estado para armazenar o nome e a população do país com maior e menor população
    const [maiorPopulacao, setMaiorPopulacao] = useState({})
    const [menorPopulacao, setMenorPopulacao] = useState({})

    useEffect(
        () => {
            fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            .then(
                (response) => {
                    return response.json()
                }
            )
            .then(
                (data) => {
                    // Variáveis de controle. A partir delas é possível saber onde
                    // os países com maior e menor população estão no array data
                    let maiorPopulacao = data[0].population
                    let indiceMaiorPopulacao = 0
                    let menorPopulacao = data[0].population
                    let indiceMenorPopulacao = 0
                    for (let i = 0; i < data.length; i++) { // Aqui é percorrido o array data
                        if (data[i].population > maiorPopulacao) {
                            maiorPopulacao = data[i].population // Aqui é atualizado o valor da maior população
                            indiceMaiorPopulacao = i
                        }
                        if (data[i].population < menorPopulacao) {
                            menorPopulacao = data[i].population // Aqui é atualizado o valor da menor população
                            indiceMenorPopulacao = i
                        }
                    }

                    // Aqui é setado um objeto com o nome e a população do país com maior e menor população
                    setMaiorPopulacao({nome: data[indiceMaiorPopulacao].capital[0], populacao: maiorPopulacao})
                    setMenorPopulacao({nome: data[indiceMenorPopulacao].capital[0], populacao: menorPopulacao})

                }
            )
            .catch(error => console.log(error))

        }
        , 
        [maiorPopulacao, menorPopulacao]
    )

    return (
        <div>
            <center>
                <h1>Questão 03</h1>
                <h1>Maior e Menor Populações</h1>
                <h2>Maior População: {maiorPopulacao.nome}, com {maiorPopulacao.populacao} habitantes</h2> 
                <h2>Menor População: {menorPopulacao.nome}, com {menorPopulacao.populacao} habitantes</h2>
            </center>
        </div>
    )

}

export default Populacao