import chalk from 'chalk';
import fs from 'fs';

function tratarErro(erro) {
    throw new Error(chalk.bgRed(erro.code, "Não há arquivo ou caminho errado"));
}

const getFile = (path) => {
    const encoding = 'utf-8';
    fs.readFile(path, encoding, (err, texto) => {
        if (err){
            tratarErro(err);
        }
        console.log(chalk.bgBlue(texto));
    });
}

getFile('./data/exemplo.md')
