import {db} from "./config.js"
import {addDoc, collection, getDocs, query, where, getDoc, doc, writeBatch, increment} from "firebase/firestore"

const productsRef= collection(db, "items")

export const getProducts = async(category)=>{
    const products=[]

    const q = category
    ?query(productsRef,where("category", "==", category))
    :productsRef

    const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc)=>{
            products.push({...doc.data(), id:doc.id})
        })
        return products
}



export const getItem =async (productId)=>{
    const document = doc(db, "items", productId)
    const docSnap = await getDoc(document)

    if(docSnap.exists){
        return {id:docSnap.id, ...docSnap.data()}
    }
    return null

}



export const updateManyProducts = async(items)=>{
    const batch = writeBatch(db);
    
    items.forEach(({id, qty}) => {
        const docRef = doc(db, "items", id)
        batch.update(docRef, {stock: increment(-qty)})
    });
    batch.commit()
}







//Esta funcion es para cargar los productos de una a Firestore. Solo la usé una vez.
    // export const cargarData= ()=>{
    //     products.forEach(async(product)=>{
    //         await addDoc(productsRef, product)
    //     })
    // }




//Esta funcion la usaba cuando tenía los products de manera local, al pasar a usar Firebase, no la uso mas
// export const getProducts = (categoria) =>
//     new Promise((res, rej)=>{
//         const response = categoria ? products.filter((p)=>p.category === categoria) : products
        
//         setTimeout( () =>{
//             res(response)
//         }, 2000)
//     })


//Lo mismo. Esta era la funcion para productos locales. Con firebase, ya no la uso
// export const getItem = (productId) =>
//     new Promise((res,rej)=>{
//         const response = products.find(i => i.id === Number(productId))
//        setTimeout( () => {
//             res(response)
//        }, 2000)

//     })



    // let products = [
    //     {id:0,
    //         title: "Gibson Strato",
    //         price: 1000,
    //         category: "guitars",
    //         img:"https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113900755_fen_ins_frt_1_rr.jpg"
    
    //     },
    //     {id:1,
    //         title: "Gibson Electro Acoustic",
    //         price: 1500,
    //         category: "guitars",
    //         img:"https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10002/0970713506_gtr_frt_001_rr.jpg"
            
    //     },
    //     {id:2,
    //         title: "Fender Bass",
    //         price: 1000,
    //         category:"basses",
    //         img:"https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0193930755_fen_ins_frt_1_rr.jpg"
            
    //     },
    //     {id:3,
    //         title: "Ibanez Bass",
    //         price: 800,
    //         category:"basses",
    //         img:"https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10012/0190152807_fen_ins_frt_1_rr.jpg"
    //     },
    //     {id:4,
    //         title: "Parquer Acousic Drum",
    //         price: 800,
    //         category:"drums",
    //         img:"https://m.media-amazon.com/images/I/712PhLFrqvL._AC_UL320_.jpg"
            
    //     },
    //     {id:5,
    //         title: "Medeli ElectroDrum",
    //         price: 1500,
    //         category:"drums"
            
    //     },
    // ]