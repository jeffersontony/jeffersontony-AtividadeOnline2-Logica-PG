// Empresa Savinis
// Cadastro de Participantes para o evento

// Validação da Data do Evento

var Atual_data = [15/08/2021]
var Evento_data = [17/08/2021]

if (Evento_data > Atual_data) {
    console.log("Evento permitido!")
} else {
    console.log("Data inválida!")
}

// Validação Idade

let idade = 25;

if(idade >= 18) {
    console.log("Cadastro do evento Permitido!")
}else {
    console.log("Idade não permitida!")
}

// Validação de Inscristos

let listaDeInscristo = 100;

if(listaDeInscristo <= 100) {
    console.log("Cadastro Permitido!")
}else {
     console.log("Cadastro não permitido, excedeu o limite!")
}

// Lista de Participantes e Palestrantes

const listaParticipantes = ["Thomas", "Jefferson", "Lucas", "Juliana", "Pedro"]
const listaPalestrantes = ["Tony", "Simone", "Rose", "João", "Robson"]

if(listaParticipantes.length <= 90){
    console.log("Cadastro Permitido!")
}else {
    console.log("Cadastro não permitido, excedeu o limite!")

}
if(listaPalestrantes.length <= 10){
    console.log("Cadastro Permitido!")
}else{
    console.log("Cadastro não permitido, excedeu o limite!")
}
