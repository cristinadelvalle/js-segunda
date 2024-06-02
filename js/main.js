


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

  let nombre = prompt("Ingrese su nombre ").toUpperCase();
  let apellido = prompt("Ingrese su apellido ").toUpperCase();
  let edad = parseInt(prompt("Ingrese edad"));
  let profesion = prompt("Ingrese su profesion").toUpperCase()

  const otroUsuario = new Usuario(nombre, apellido, edad, profesion);
  registrarNuevoUsuario.push(otroUsuario);

  console.table(registrarNuevoUsuario);


  let filtrarUnUsuario = prompt("Desea filtrar un ususario?")
  if (filtrarUnUsuario === "si"){
    const filtrarUsuario = usuarios.filter(usuario => usuario.nombre === "Juan")
      .filter(usuario => usuario.apellido === "Ramallo")
      .filter(usuario => usuario.profesion === "Estudiante universitario")
    console.table(filtrarUsuario);
  }else{
    return
  }

}

RegistroPaciente()






function GuardarUusarios() {
  const usuariosRegistrados = document.querySelector(".lista-usuarios")
  usuariosRegistrados.forEach(usuario => usuario.nombre == usuario)
  const lista = document.createElement("ul")
  lista.innerHTML=`<ul>${usuarios.nombre}
                  <li class="usuario">${usuarios.apellido} </li>
                  <li class="usuario">${usuarios.edad} </li>
                  <li class="usuario">${usuarios.profesion} </li>
  
                   </ul>` 
// localStorage.setItem("usuarios",  JSON.stringify(usuarios) )
}


GuardarUusarios()





// TERCERA PREENTREGA
































