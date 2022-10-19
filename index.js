const fs=require('fs')

async function crearTxt(texto){   
    try{
        await fs.promises.writeFile('./productos.txt', JSON.stringify(texto), 'utf-8')
        console.log('Guardado')
    }
    catch(err){
        console.log('No se puede editar el archivo' + err)
    }
}

class Contenedor {
    static index = 0
    constructor(){
        this.objetos = []
    }

    save(objeto){
        Contenedor.index ++
        objeto.id = Contenedor.index
        this.objetos.push(objeto)
        crearTxt(this.objetos)
    }

    getById(id){
        const producto = this.objetos.find(prod => prod.id === id)
        console.log(producto)
    }
    async getAll(){
        try{
            const productos = await fs.promises.readFile('./productos.txt','utf-8')
            console.log(productos)
        }catch(err){
            console.log('No se pudo leer el archivo ' + err)
        }
    }
    async deleteAll(){
            try{
                await fs.promises.unlink('./productos.txt')
                console.log('Archivo eliminado')
            }catch(err){
                console.log('No se puede eliminar el archivo' + err)
            }
        }
}


nuevoObjeto = new Contenedor()
nuevoObjeto.save({producto:'smart-TV', precio: 300})
nuevoObjeto.save({producto:'Netbook', precio: 500})
nuevoObjeto.save({producto:'Celular', precio: 200})
nuevoObjeto.getById(2)
nuevoObjeto.getById(3)
nuevoObjeto.getAll()
//nuevoObjeto.deleteAll()
