import { IBlogPost } from "../../data/@types/IBlogPost";
import PostBody from "../../ui/components/PostBody/PostBody";

export default function MeuPost() {
    return (
        <PostBody
            post={{
                id: '2',
                title: 'Tipagem no TypeScript',
                slug: '',
                description: '',
                picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/09/TYPESCRIPT.png',
                content: (
                    <>
                        <p>
                            Um dos principais recursos que o TypeScript traz é a utilização da tipagem estática para o JavaScript, que trabalha com tipagem dinâmica. Desta forma o desenvolvedor tem a responsabilidade de declarar qual o tipo da variável que será utilizada. Entre os tipos disponíveis, nós temos:
                        </p>
                        <ul>
                            <li>number</li>
                            <li>string</li>
                            <li>boolean</li>
                            <li>undefined</li>
                            <li>null</li>
                            <li>symbols</li>
                            <li>any</li>
                        </ul>

                        <h1>Tipagem no TypeScript: Variáveis.</h1>
                        <p>Primeiramente, para declarar variáveis utilizando o TypeScript, podemos utilizar a seguinte sintaxe:</p>
                    </>
                )
            }}
        ></PostBody>
    )
}

