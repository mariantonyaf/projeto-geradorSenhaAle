function getChartTypes(){
    const uppercase = document.querySelector('#include_uppercase').checked
    const lowercase = document.querySelector('#include_lowercase').checked
    const number = document.querySelector('#include_number').checked
    const specialCharacter = document.querySelector('#include_special_character').checked

    const chartTypes = []

    if(uppercase){
        chartTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }

    if(lowercase){
        chartTypes.push('abcdefghijklmnopqrstuvwxyz')
    }

    if(number){
        chartTypes.push('0123456789')
    }

    if(specialCharacter){
        chartTypes.push('!@#$%&*_-')
    }

    return chartTypes
}

function getPasswordSize(){
    const size = document.querySelector('#size').value
    if(isNaN(size) || size < 4 || size > 128){
        alert('Tamanho inválido! Digite um número entre 4 e 128.')
    }

    return size
}

function randomCharType(chartTypes){
    const radomIndex = Math.floor(Math.random() * chartTypes.length)
    

    return chartTypes[radomIndex][Math.floor(Math.random() * chartTypes[radomIndex].length)]
}

function generatePassword(size, chartTypes){
    let passwordGenerate = ''

    while(passwordGenerate.length < size){
        passwordGenerate += randomCharType(chartTypes)
    }

    return passwordGenerate
}

document.querySelector('#generate').addEventListener('click', function(){
    console.log(generatePassword(getPasswordSize(), getChartTypes()))
})