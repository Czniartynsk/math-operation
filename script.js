const numberOne = Number(prompt("Digite o primeiro número"))
const numberTwo = Number(prompt("Digite o segundo número"))

function mathOperation(numberOne, numberTwo){

}

let operator = '+'
switch (operator) {
  case '+':
    let sum = numberOne+numberTwo
    alert(`A soma dos dois números é: ${sum.toFixed(2)}`)
  case '-':
    alert(`A subtração dos dois números é: ${(numberOne - numberTwo).toFixed(2)}`)
    case '*':
    alert(`A multiplicação dos dois números é: ${(numberOne * numberTwo).toFixed(2)}`)
    case '/':
    alert(`A divisão dos dois números é: ${(numberOne / numberTwo).toFixed(2)}`)
  case '%':
    alert(`O resto da divisão dos dois números é: ${(numberOne % numberTwo).toFixed(2)}`)
    let parOuImpar = ''
    alert(`verifica o sum ${sum}`)
    if (sum % 2 == 0) {
      parOuImpar = 'par'
    } else {
      parOuImpar = 'impar'
    }
    alert(`A soma dos dois número é ${parOuImpar}`)
    if (numberOne == numberTwo) {
      alert(`O primeiro número é igual ao segundo número`)
    }
      alert(`O primeiro número é diferente do segundo número`)
}
