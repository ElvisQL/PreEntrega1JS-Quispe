
function MostrarMenu(opcion){
    opcion = Number(prompt("Por favor ingrese una opcion:\n 1)Ingresar alumnos\n2)Ver porcentaje de desaprobados y aprobados\n3) Ver Promedio de notas\n4)Salir"))
    return opcion
}

function IngresarAlumno(alumno, notas){
    while (seguir_notas) {

    }
    let nota = prompt("Asignele una nota al alumno")
}


function SeguirIngresando(){
    let seguir = prompt("Desea seguir ingresando alumnos? s/n")
    return seguir === "s"
}

function MostrarDesaprobadosyAprobados(cantidad, apro, des){
    let porcentaje_aprobados = (apro * 100)/cantidad
    let porcentaje_desaprobados = (des*100)/cantidad
    alert("El porcentaje de aprobados fue de " + porcentaje_aprobados + "% mientras que el de desaprobados fue de " + porcentaje_desaprobados + "%") 
}


function MostrarPromedioGeneral(cantidad, notas){
    let promedio = notas / cantidad
    alert("El promedio general fue de " + promedio)
}

let seguir = true
let opcion
let cantidad = 0
let notas = 0
let desaprobados = 0
let aprobados = 0
let nombre_examen = prompt("Por favor ingrese el nombre del Examen")
alert("Bienvenidos a la estadistica del " + nombre_examen)

while (seguir){
    opcion = MostrarMenu(opcion)
    let seguir_notas = true
    if(opcion === 4){
        seguir = false
    }
    else if (opcion === 1){ 
        while (seguir_notas){
            cantidad += 1
            let nota = Number(prompt("Por favor ingrese una nota al alumno "+ cantidad))
            notas += nota
            if (nota < 4) {
                desaprobados += 1
                seguir_notas = SeguirIngresando()
            }
            else {
                aprobados += 1
                seguir_notas = SeguirIngresando()
            }
        }
    }
    else if (opcion === 2 && cantidad!==0){
        MostrarDesaprobadosyAprobados(cantidad,aprobados, desaprobados)
    }
    else if (opcion === 3 && cantidad!==0){
        MostrarPromedioGeneral(cantidad, notas)
    }
    else {
        if (isNaN(opcion)) {
            alert("Opcion no valida vuelva a intentarlo")
        }
        else if(cantidad==0)(
            alert("Alumnos no registrados por favor primero registre al menos un alumno")
        )
    }
}