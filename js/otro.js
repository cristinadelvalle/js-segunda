


const usuarios = [
  { nombre: "Camila", apellido: "Balcarce", edad: 18, profesion: "Estudiante" },
  { nombre: "César", apellido: "Del Rio", edad: 34, profesion: "Contador" },
  { nombre: "Roberto", apellido: "Saavedra", edad: 60, profesion: "Abogadop" },
  { nombre: "Juan", apellido: "Ramallo", edad: 22, profesion: "Estudiante universitario" },
  { nombre: "Manuel", apellido: "Carlos", edad: 45, profesion: "Desempleado" },
  { nombre: "Juan", apellido: "Mamaní", edad: 33, profesion: "Profesor" },
  { nombre: "Bautista", apellido: "klisma", edad: 56, profesion: "Chef" },
  { nombre: "Armando", apellido: "Romero", edad: 56, profesion: "Ingeniero" },
  { nombre: "Rubén", apellido: "Sing", edad: 27, profesion: "Contador" },
  { nombre: "Norma", apellido: "Peralta", ledad: 70, profesion: "Jubilada" }
]
const filtrarUsuario = usuarios.filter(usuario => usuario.nombre === "Juan")
  .filter(usuario => usuario.apellido === "Ramallo")
  .filter(usuario => usuario.profesion === "Estudiante universitario")
console.table(filtrarUsuario);


// let nuevoNombre = prompt("Ingrese un nombre").toUpperCase()
// let nuevoApellido = prompt("Ingrese un apellido").toUpperCase()
// let nuevaEdad = prompt("Ingrese su edad").toUpperCase()
// let nuevaProfesion = prompt("Ingrese su profesion")

function Usuario(nombre, apellido, edad, profesion) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.profesion = profesion
    }
  
    function RegistroPaciente() {
      const registrarNuevoUsuario = [];
  
      const unUsuario = new Usuario("Juan", "Ramallo", 22, "Estudiante universitario");
      registrarNuevoUsuario.push(unUsuario); 
  
      let nombre = prompt("Ingrese su nombre ");
      let apellido = prompt("Ingrese su apellido ");
      let edad = prompt("Ingrese edad");
      let profesion = prompt("Ingresse su profesion")
  
      const otroUsuario = new Usuario(nombre, apellido, edad, profesion);
      registrarNuevoUsuario.push(otroUsuario);
  
      console.table(registrarNuevoUsuario); 
  
    }

RegistroPaciente()

























