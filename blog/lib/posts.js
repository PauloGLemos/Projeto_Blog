import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark  from 'remark';
import html from 'remark-html';

const caminhoDoDiretorio = path.join(process.cwd(), 'posts');

export function pegarPostPorData() {
    const nomeDosArquivos = fs.readdirSync(caminhoDoDiretorio);

    const dadosDosPost = nomeDosArquivos.map ( arquivo => {

        const id = arquivo.replace(/\.md$/m, '');

        const caminhoDeCadaPost = path.join(caminhoDoDiretorio, arquivo)

        const conteudoDoArquivo = fs.readFileSync(caminhoDeCadaPost, 'utf-8')

        const formatadorMatter = matter(conteudoDoArquivo)

        return {
            id, ...formatadorMatter.data
        }
    })

        return dadosDosPost.sort( (a, b) => {
            if (a.date < b.date) {
                return l
                } else {
                    return -1
                }
        } )
}

export function pegarTodosOsIds() {
    const nomeDosArquivos = fs.readdirSync(caminhoDoDiretorio)
    return nomeDosArquivos.map( arquivo => {
        return {
            params: {
                id: arquivo.replace(/\.md$/m, '')
            }
        }
    })
}

export async function pegarDadosDoPost(id) {
     
    const caminhoDoArquivo = path.join(caminhoDoDiretorio, `${id}.md`)

    const conteudoDoArquivo = fs.readFileSync(caminhoDeCadaPost, 'utf-8')

    const formatadorMatter = matter(conteudoDoArquivo)

    const conteudoProcessado = await remark()
    .use(html)
    .process(formatadorMatter.content)

    const conteudoHtml = conteudoProcessado.toString();

    return {
        id,
        conteudoHtml, 
        ...formatadorMatter.data 
    }
}
