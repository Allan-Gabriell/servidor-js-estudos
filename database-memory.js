//Aqui eu estou criando um banco de dados em memória

import { randomUUID } from "node:crypto" // vai me gerar os IDs
//UUID - Universal Unique ID

export class dataBaseMemory { //o Export é para eu poder fazer uma importação
    #videos = new Map() //Aqui é uma chave privada que só vai ser visível por ddentro dessa classe
    // = [] assim eu crio um array

    //se agora os vídeos tem ID eu tenho que criar uma forma de relacionamento - tal ID é de tal video
    //Set - não aceita itens duplicados, Map - tem uma api mais legal

    list(video){ //função para a listagem dos vídeos
        this.#videos.values(video) //o values faz com que retorne só os vídeos e não os IDs por que eles são as chaves
    }

    create(video) { // ele vai receber o vídeo e vai salvar
        const videoID = randomUUID() //sempre vai me retornar um id unico para cada vídeo

        this.#videos.set(videoID, video) //push para colocar dentro do array
        // o metodo set é da função Map e tem a mesma funça do push com algumas particularidades
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}
