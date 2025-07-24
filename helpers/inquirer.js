// helpers/inquirer.js
import inquirer from 'inquirer';
import 'colors'; // Asegúrate de que colors esté instalado (npm install colors)

const preguntasMenu = [
    {
        type: 'list', // Esto es crucial: le dice a Inquirer que es una lista
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [ // Aquí van todas las opciones del menú
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas` // Opción específica para completadas
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`  // Opción específica para pendientes
            },
            {
                value: '5',
                name: `${'5.'.green} Completar/Descompletar tarea(s)` // Adaptado a tu main.js
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0', // Cambia el valor a '0' para salir
                name: `${'0.'.green} Salir`
            },
        ]
    }
];

// ... (El resto de funciones: inquirerMenu, pausa, leerInput, etc.) ...
// Asegúrate que tu inquirerMenu use el prompt de esta manera:
// const { opcion } = await inquirer.prompt(preguntasMenu);

const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.white);
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntasMenu);
    return opcion;
};

const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
};

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'descripcion',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    const { descripcion } = await inquirer.prompt(question);
    return descripcion;
};

const listadoTareasBorrar = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`
        };
    });

    choices.unshift({ // Añade la opción de "Cancelar" al principio
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ];

    const { id } = await inquirer.prompt(preguntas);
    return id;
};

// ¡Asegúrate de que esta función 'confirmar' esté definida aquí!
const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];
    const { ok } = await inquirer.prompt(question);
    return ok;
};

const mostrarListadoChecklist = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.descripcion}`,
            checked: (tarea.completadoEn) ? true : false
        };
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ];

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
};


export {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar, // <--- Aquí debe estar, y la función definida arriba
    mostrarListadoChecklist
};