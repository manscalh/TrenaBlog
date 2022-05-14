import { IBlogPost } from "../../data/@types/IBlogPost";
import PostBody from "../../ui/components/PostBody/PostBody";

export default function MeuPost() {
    return (
        <PostBody
            post={{
                id: '1',
                title: 'Trabalhando com data no JavaScript',
                slug: 'js-data',
                description: '',
                picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/08/javascript-comandos-do-console.png',
                content: (
                    <>
                        <p>
                            O JavaScript possui a classe chamada Date que nos permite trabalhar com data e hora. Podemos manipular datas acessando diretamente pelos atributos da classe ou pelos métodos disponibilizados pela própria classe.
                        </p>
                        <p>
                            Para instanciar uma nova data basta executar o código abaixo onde o resultado vai conter a data completa com o dia, mês, ano e hora, no padrão americano.
                        </p>
                    </>
                )
            }}
        ></PostBody>
    )
}