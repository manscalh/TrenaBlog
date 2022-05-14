import { IBlogPost } from "../../@types/IBlogPost";

export default function useIndex(){
    
    const posts: IBlogPost[] = [
        {
            id:'1',
            title:'Trabalhando com data no JavaScript',
            slug:'js-data',
            description:'Neste artigo veremos como manipular datas no JavaScript, utilizando a classe Date, como pegar a data atual e utilizar os métodos da classe.',
            picture:'https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/08/javascript-comandos-do-console.png'
        },
        {
            id:'2',
            title:'Tipagem no TypeScript',
            slug:'tipagem-no-typescript',
            description:'Neste artigo vamos aprender a trabalhar utilizando a tipagem do TypeScript com variáveis, constantes, arrays e objetos.',
            picture:'https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/09/TYPESCRIPT.png'
        }

    ];

    return{
        posts,
    };
}