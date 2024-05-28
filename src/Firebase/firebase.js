import { initializeApp } from "firebase/app"
import {getFirestore, getDocs, collection, query, where, doc, getDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA9chjo_hDDKWJ2A00Hgxx-lghUC7U4UPw",
    authDomain: "coderhouse-react-ultragame.firebaseapp.com",
    projectId: "coderhouse-react-ultragame",
    storageBucket: "coderhouse-react-ultragame.appspot.com",
    messagingSenderId: "85638625120",
    appId: "1:85638625120:web:ab0503a8d74d8f2b2d5005"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export function getProducts() {
    return getDocs(collection(db,"products")).then(response => {
        const prodlist = []
        response.forEach((prod) => prodlist.push({id: prod.id, ...prod.data()}))
        prodlist.sort((a, b) => a.orden - b.orden)
        return prodlist
    })
}

export function getProductByCategory(categoria) {
    const q = query(collection(db,"products"), where("categoria", "==", categoria))
    return getDocs(q).then(response => {
        const filterprodlist = []
        response.forEach(prod => filterprodlist.push({id: prod.id, ...prod.data()}))
        filterprodlist.sort((a, b) => a.orden - b.orden)
        return filterprodlist
    })
}

export function getProductById(id) {
    const productRef = doc(db, "products", id)
    return getDoc(productRef).then(productData => {
        return { id: productData.id, ...productData.data() }
    })
}