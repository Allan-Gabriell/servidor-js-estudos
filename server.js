//import {createServer} from 'node:http' // estou criando um servidor que pode ser acessado do navegador 
//Estou importando do node essa função chamada createServer

//const server = createServer((request, response) => { //request = busca os dados da requisição que sendo feita para dentro da API
    //O response = é o objeto que vou usar para dar uma resposta para a requisição
  //  console.log('oi');
  //  response.write('Funcionou') //o método write permite que eu possa retornar um texto
  //  return response.end()
    //end points - rotas

//})

// server.listen(3333) // essa função retorna um método chamado listen
//localhost: 3333 - é uma porta

// Para usar essa sintax de importanção (import) que é recente, eu tenho que ir no terminal e digitar o comando npm init -y
// assim ele cria um package.json para a minha aplicação.
// lá no json tem esse comando  "type": "module", indica que eu vou usar esse novo método de import
// no terminal ctrl + C fecha o servidor para reinicializar

// agora vou fazer a mesma coisa só que com o fastify
// Para mim fazzer uso do fastify eu tenho que instalar no terminal com o comando 'npm install fastify'

import {fastify} from 'fastify'
import { dataBaseMemory } from './database-memory.js' //Aqui eu acabo de importar meu banco de dados em memória

const database = new dataBaseMemory //crio o banco de dados

const server = fastify()

//estou criando minha primeira rota do meu servidor
//Neste caso é a criação do que seria a rota raíz
server.get('/videos', (request, reply) => { //ou seja quando o user digitar localhost:3333/ e não informar nada ele executa essa função
    const videos = database.list()

    return videos
})

server.get('/', () => {
    return 'Bem vindo a rota dois'
})

server.get('/noticias', () => {
    return 'Em breve'
})

//CRUD - Create, Read, Update, Delete - são todas as operações basícas que podemos fazer numa entidade da nossa API
//GET - metódo que uso para buscar alguma informação,  mas existe outros que podemos usar como o POST(criação), PUT(alteração)
//DELETE(para apagar), PATCH(para alterar pequenas informações e não tudo)

//Route Parameter - parametro enviado na rota

//Request body - corpo para requisição - para que eu possa enviar os dados

//rota de criação
//localhost:3333/videos
server.post('/videos', (request, reply) => {
    const {title, descripiton, duration} = request.body

    console.log(body)

    database.create({
        title,
        descripiton,
        duration,
    })

    return reply.status(201).send() //esse metodo status eu posso mudar o status coderetornado na minha rota
    // status code - é uma forma de informa ao sistema que requisita essa rota qual o status dessa rota, se foi sucesso ou não
    // status code 201 - significa que algo foi criado
})

// rota de alteração

server.put('/video/:id', () => { // agora com esse trecho de código :id (route parameter) essa rota entende que tem que me enviar o id do vídeo
    return 'Id modificado'
})

// Rota para deletar

server.delete('/videos/:id', () => {
    return 'video deletado'
})




server.listen({
    port: 3333,
})