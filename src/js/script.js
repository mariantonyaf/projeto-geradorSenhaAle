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

    return size
}

function randomCharType(chartTypes){
    const radomIndex = Math.floor(Math.random() * chartTypes.length)
    

    return chartTypes[radomIndex][Math.floor(Math.random() * chartTypes[radomIndex].length)]
}

document.querySelector('#generate').addEventListener('click', function(){
    //console.log(randomCharType(getChartTypes()))
    console.log(getPasswordSize())
})