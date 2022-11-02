

let products = [
    {id:0,
        title: "Gibson Strato",
        price: 1000,
        category: "guitars",
        img:"https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113900755_fen_ins_frt_1_rr.jpg"

    },
    {id:1,
        title: "Gibson Electro Acoustic",
        price: 1500,
        category: "guitars",
        img:"https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10002/0970713506_gtr_frt_001_rr.jpg"
        
    },
    {id:2,
        title: "Fender Bass",
        price: 1000,
        category:"basses",
        img:"https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0193930755_fen_ins_frt_1_rr.jpg"
        
    },
    {id:3,
        title: "Ibanez Bass",
        price: 800,
        category:"basses",
        img:"https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10012/0190152807_fen_ins_frt_1_rr.jpg"
    },
    {id:4,
        title: "Parquer Acousic Drum",
        price: 800,
        category:"drums",
        img:"https://m.media-amazon.com/images/I/712PhLFrqvL._AC_UL320_.jpg"
        
    },
    {id:5,
        title: "Medeli ElectroDrum",
        price: 1500,
        category:"drums"
        
    },
]

export const getProducts = (categoria) =>
    new Promise((res, rej)=>{
        const response = categoria ? products.filter((p)=>p.category === categoria) : products
        
        setTimeout( () =>{
            res(response)
        }, 2000)
    })

export const getItem = (productId) =>
    new Promise((res,rej)=>{
        const response = products.find(i => i.id === Number(productId))
       setTimeout( () => {
            res(response)
       }, 2000)

    })