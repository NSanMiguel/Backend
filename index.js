class Usuario {
    constructor (nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = [] 
    }

    getFullName() {
        return console.log( this.nombre  + ' ' +  this.apellido )
    }

    addMascota(mascota){
        let nuevaMascota = mascota        
        this.mascotas.push(nuevaMascota)
        return mascota
    }

    addBook(nombre,autor){
        let nuevoLibro = {nombre,autor}
        this.libros.push(nuevoLibro)
        return nombre,autor
    }
    
    getBookNames(){
        this.libros.forEach(element => {
            console.log(element.nombre)
        });
    }

    countMascotas(){
        return console.log('cantidad de mascotas ' + this.mascotas.length)
    }
        

}

let nuevoUsuario = new Usuario (nombre='Nicolas',apellido='San Miguel')

nuevoUsuario.getFullName()
nuevoUsuario.addBook('Martin Fierro','Jose Hernandez')
nuevoUsuario.addBook('La naranja mecanica','Anthony Burgess')
nuevoUsuario.addBook('Operacion Masacre','Rodolfo Walsh')
nuevoUsuario.addMascota('perro')
nuevoUsuario.addMascota('gato')
nuevoUsuario.addMascota('pez')
nuevoUsuario.getBookNames()
nuevoUsuario.countMascotas()
