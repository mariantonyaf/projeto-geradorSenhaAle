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
        message("TAMANHO INVÁLIDO! Digite um número entre 4 e 128.", "warning")
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

function message(text, status = 'success'){
    Toastify({
        text: text,
        duration: 3000,
        style: {
          background: status === 'success' ? '#84cc16' : "#dc2626",
          boxShadow:"none"
        }
      }).showToast();
}

document.querySelector('#generate').addEventListener('click', function(){
    const size = getPasswordSize()
    const charTypes = getChartTypes()

    if(!size){
        return
    }

    if(!charTypes.length){
        message('Selecione pelo menos um caracter!', "warning")
        return
    }

    const passwordGenerated = generatePassword(size, charTypes)

    document.querySelector('#password_container').classList.add('show')
    document.querySelector('#password').textContent = passwordGenerated
})

document.querySelector('#copy').addEventListener('click', function(){
    navigator.clipboard.writeText(document.querySelector('#password').textContent)
    message('Senha copiada com sucesso!', 'success')
})