const { useEffect, useState } = require("react")

function Questao01X() {

    // Variável que armazena as medias dos alunos vindas do componente Questao01Y
    const [medias, setMedias] = useState([])

    // Função que recebe as medias dos alunos do componente Questao01Y
    function mensagemParaY(medias) {
        setMedias(medias)
    }

    // Alterei as notas dos alunos para que a média de um deles seja menor ou igual a 5.0   
    const alunos = [
        {nome: "Sicrano", notas: {ap1: 5.0, ap2: 5.0}},
        {nome: "Beltrano", notas: {ap1: 4.7, ap2: 3.5}},
        {nome: "Fulano", notas: {ap1: 3.3, ap2: 5.2}},

    ]

    return (
        <div>
            <center>
                <h1>Questão 01</h1> 
                <Questao01Y alunos={alunos} funcaoDePassagem={mensagemParaY}/> {/*Passando os alunos e a função mensagemParaY para o componente Questao01Y*/}
                <h2>Alunos com média menor ou igual a 5.0</h2> 
                {medias.map( // Aqui é realizado um map para mostrar os alunos com média menor ou igual a 5.0   
                    (media) => {
                        return media.media <= 5 ? <p>{media.nome}: {media.media}</p> : null
                    }
                )}
            </center>
        </div>
    )
}

const Questao01Y = ({alunos, funcaoDePassagem}) => { // Recebendo os alunos e a função mensagemParaY do componente Questao01X

    // Variável que armazena as medias dos alunos para passar para o componente Questao01X
    const [medias, setMedias] = useState([])

    useEffect(() => {
        // Objeto com o nome e a média do aluno
        // e esse objeto é adicionado ao array de medias
        const medias = alunos.map(
            (aluno) => {
                const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2
                return {nome: aluno.nome, media}
            }
        )
        setMedias(medias)
    }
    , 
    [alunos])

    // Função que passa as medias dos alunos para o componente Questao01X
    function mensagemParaX(medias) {
        funcaoDePassagem(medias)
    }

    return (
        <div>
            {mensagemParaX(medias)}
        </div>
    )

}

export default Questao01X