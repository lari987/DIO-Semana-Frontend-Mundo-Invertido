import { subscribeToMundoInvertido } from './firebase/D&D-club.js'

const textName = document.getElementById('textName')
const textEmail = document.getElementById('textEmail')
const textLevel = document.getElementById('textLevel')
const textCharacter = document.getElementById('textCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name:textName.value, 
        email:textEmail.value, 
        level:textLevel.value,
        character:textCharacter.value
    }
    const subscriptionId = await subscribeToMundoInvertido(subscription)  
    console.log(`Inscrito com sucesso: ${subscriptionId}`)  
    
    textName.value = ""
    textEmail.value = ""
    textLevel.value = ""
    textCharacter.value = ""
})