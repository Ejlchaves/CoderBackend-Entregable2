const Container = require('./logicaPrograma')
const productos = new Container('./productos.json')

async function ejecutar() {
    const objetoA = {
        title: 'Samsung S20',
        price: 140000,
        thumbnail: 'https://www.muycomputer.com/wp-content/uploads/2020/02/Galaxy-S20-1000x600.jpg'
    }
    const objetoB = {
        title: 'Xiaomi Redmi Note 11',
        price: 100000,
        thumbnail: 'https://www.mylshop.com.ar/wp-content/uploads/2022/03/xiaomi_redmi_note_11_pro_5g_gris_grafito_01_l.jpg',
    }
    const objetoC = {
        title: 'LG Smartv 4K 60',
        price: 250000,
        thumbnail: 'https://www.naldo.com.ar/medias/Method-504890-1-515Wx515H?context=bWFzdGVyfGltYWdlc3wyNjM4OTd8aW1hZ2UvanBlZ3xpbWFnZXMvaDRmL2g1Yy85NjQwMjA4MDA3MTk4LmpwZ3w4NGU3ZjI3NWQ4MTRkMWZmYzQ4YjAwZGYyZTY4MmZjMjQyNDk5N2QyN2VjNzM4MTZiODhkOTZhMDQ5MmVmZTM4'
    }

await productos.deleteAll()
await productos.save(objetoA).then(resp => console.log(resp)) ;
await productos.save(objetoB).then(resp => console.log(resp)) ;
await productos.save(objetoC).then(resp => console.log(resp)) ;
await productos.getAll().then(resp => console.log(resp)) ;
await productos.getById(3).then(resp => console.log(resp)) ;
await productos.deleteById(2);

}

ejecutar()