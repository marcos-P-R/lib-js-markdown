import chalk from 'chalk';
import fs from 'fs';

function tratarErro(erro) {
    throw new Error(chalk.bgRed(erro.code, "Não há arquivo ou caminho errado"));
}

// Usando Promisses
// const getFile = (path) => {
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(path, encoding)
//     .then(texto => console.log(chalk.bgGreen(texto)))
//     .catch(err => tratarErro(err));
// }

const getFile = async (path) => {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(path, encoding);
        console.log(chalk.bgGreen(texto));
    } catch (error) {
        tratarErro(error);
    }
}

getFile('./data/exemplo.md')
