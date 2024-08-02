
//FUNDAMENTOS JS PARTE - 1
//CHALLEMGE#4

const bill = 275; //40 //430;
const percentualGorgeta = 15; //20

function requisitos (porcentagem, conta) {
    const gorgeta = (porcentagem / 100) * conta;
    const total = conta + gorgeta;

    if ((conta >= 50) && (conta <= 300)) {
      //console.log(`A conta foi de ${conta} e a gorgeta do garçom no valor de ${gorgeta} , ao todo voce pagará um valor de ${total}`)
      return (`A conta foi de ${conta} e a gorgeta do garçom no valor de ${gorgeta} , ao todo voce pagará um valor de ${total}`)
    } else if ((conta <= 50) || (conta >= 300)) {
      //console.log(`A sua gorgeta no valor de ${gorgeta} foi paga na base de 20% em cima do valor de ${conta}`)
      return (`A sua gorgeta no valor de ${gorgeta} foi paga na base de 20% em cima do valor de ${conta}`)
    }

}
 const result = requisitos(percentualGorgeta, bill);
 console.log(result)


//mesmo exercicio com codigo revisado para corrigir bug de porcentagem
const bill = 275; //40 //430;
const percentualGorgeta = 20; //20

function requisitos (porcentagem, conta) {
    const gorgeta = (porcentagem / 100) * conta;
    const total = conta + gorgeta;

    if (conta >= 50 && conta <= 300 && (porcentagem === 15)) {
      //console.log(`A conta foi de ${conta} e a gorgeta do garçom no valor de ${gorgeta} , ao todo voce pagará um valor de ${total}`)
      return (`A conta foi de ${conta} e a gorgeta do garçom no valor de ${gorgeta} , ao todo voce pagará um valor de ${total}`)
    } else if ((conta <= 50) && (porcentagem === 20)) {
      return ` sua gorgeta no valor de ${gorgeta} foi paga na base de 20% em cima do valor de ${conta}`
    } else if ((conta >= 300) && (porcentagem === 20)) {
      return ` sua gorgeta no valor de ${gorgeta} foi paga na base de 20% em cima do valor de ${conta}`
    } else {
      return `Coloque o valor da conta ou o percentual de gorgeta correto para disponibilizarmos o valor final da sua gorgeta!!!`
    }
     
}
 const result = requisitos(percentualGorgeta, bill);
 console.log(result)
