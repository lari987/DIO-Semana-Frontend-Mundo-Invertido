import app from "./app.js"
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToMundoInvertido(subscription){
    const db = getFirestore(app)
    const ddClubCollection = collection(db, 'D&D-club')
    const docRef = await addDoc(ddClubCollection, subscription)
    return docRef.id
}