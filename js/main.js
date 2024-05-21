// function Paciente(surName, name, requiredDate) {
//     this.apellidos = surName;
//     this.nombres = name;
//     this.fecha = requiredDate;
//   }
  
//   function RegistroPaciente() {
//     const pacientes = []; // Array para almacenar los pacientes
  
//     const unPaciente = new Paciente("Fernández", "Julieta", "12/09/2023 10:00hs");
//     pacientes.push(unPaciente); // Agregar el primer paciente al array
  
//     let apellidos = prompt("Ingrese el apellido del paciente");
//     let nombres = prompt("Ingrese el nombre del paciente");
//     let fecha = prompt("Ingrese la fecha del turno del paciente");
  
//     const unPacienteDos = new Paciente(apellidos, nombres, fecha);
//     pacientes.push(unPacienteDos); // Agregar el segundo paciente al array
  
//     console.table(pacientes); // Mostrar el array de pacientes en formato de tabl
  
//     const filtro = prompt("Ingrese el apellido para filtrar los pacientes:");
  
//     const pacientesFiltrados = filtrarPacientes(pacientes, filtro);
//     console.table(pacientesFiltrados); // Mostrar los pacientes filtrados en formato de tabla
//     const pacienteRegistrado = pacientes.find(paciente => paciente.apellidos.toLowerCase() === apellidos.toLowerCase());
    
//     function filtrarPacientes(pacientes, filtro) {
  
//     if (pacientes.filter(paciente => paciente.apellidos.toLowerCase().includes(filtro.toLowerCase()))
//     ) {
//         return alert("Gracias por registrarte")
//     }
//     }
    
    
//     if (pacienteRegistrado) {
//      alert("Este paciente ya está registrado.");
//       return; // Salir de la función si el paciente ya está registrado
//     } 
//   }
  
// RegistroPaciente()


// Definir una función para registrar usuarios
function registrarUsuario() {
  // Pedir al usuario que ingrese su nombre
  let nombre = prompt("Ingrese su nombre:");

  // Verificar si el usuario canceló la operación
  if (nombre === null) {
    return null; // Salir de la función si el usuario canceló
  }

  // Crear un objeto usuario con el nombre proporcionado
  let usuario = {
    nombre: nombre
  };

  // Devolver el objeto usuario
  return usuario;
}

// Array para almacenar los usuarios registrados
let usuarios = [];

// Función para filtrar usuarios existentes
function filtrarUsuarios(nombre) {
  // Filtrar los usuarios cuyo nombre coincida con el proporcionado
  let usuariosFiltrados = usuarios.filter(function(usuario) {
    return usuario.nombre.toLowerCase() === nombre.toLowerCase();
  });

  // Devolver los usuarios filtrados
  return usuariosFiltrados;
}

// Función principal del programa
function main() {
  // Bucle para permitir que el usuario registre múltiples usuarios
  while (true) {
    // Registrar un usuario
    let nuevoUsuario = registrarUsuario();

    // Verificar si el usuario canceló la operación
    if (nuevoUsuario === null) {
      break; // Salir del bucle si el usuario canceló
    }

    // Agregar el nuevo usuario al array de usuarios
    usuarios.push(nuevoUsuario);
  }

  // Pedir al usuario que ingrese un nombre para filtrar
  let nombreFiltro = prompt("Ingrese un nombre para filtrar usuarios:");

  // Filtrar los usuarios por el nombre proporcionado
  let usuariosFiltrados = filtrarUsuarios(nombreFiltro);

  // Mostrar los usuarios filtrados en la consola
  console.log("Usuarios filtrados:", usuariosFiltrados);
}

// Llamar a la función principal del programa
main();




