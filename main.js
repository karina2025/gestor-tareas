// main.js
import { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } from './helpers/inquirer.js'; // Ajustado
import Tareas from './controllers/tareasController.js'; // Ajustado

async function main() {
    console.clear();
    let salir = false;
    const tareas = new Tareas(); // Instancia de tu controlador de tareas

    while (!salir) {
        const opcion = await inquirerMenu(); // Esto reemplaza tu `mostrarMenu()`

        switch (opcion) {
            case '1': // Crear tarea
                const desc = await leerInput('Descripción de la tarea:');
                if (desc) {
                    tareas.crearTarea(desc); // Llama al método del controlador
                }
                break;
            case '2': // Listar todas las tareas
                tareas.listarTodasLasTareas(); // Llama al método del controlador
                break;
            case '3': // Asumo que "editarTarea" podría ser "completar/descompletar" o una edición de descripción
                const ids = await mostrarListadoChecklist(tareas.listadoArr); // Obtener IDs a marcar
                tareas.toggleCompletadas(ids); // Función para marcar/descompletar
                break;
            case '4': // Eliminar tarea
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') { // Si el usuario no canceló
                    const ok = await confirmar('¿Está seguro de que desea eliminar esta tarea?'.red);
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('✅ Tarea eliminada exitosamente.'.green);
                    }
                }
                break;
            case '5': // Salir
                salir = true;
                console.log('👋 ¡Hasta pronto!');
                break;
        }
        if (!salir) { // Pausa solo si no vamos a salir
            await pausa();
        }
    }
}

main();