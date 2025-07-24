// controllers/tareasController.js
import Tarea from '../models/Tarea.js'; // Cambiar a import
import { guardarDB, leerDB } from '../utils/fileManager.js'; // Cambiar a import
import _ from 'lodash'; // Cambiar a import

class Tareas {
    _listado = {};

    constructor() {
        this._listado = {};
        this.cargarTareasDesdeDB();
    }

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    cargarTareasDesdeDB() {
        const tareasDB = leerDB();
        if (tareasDB) {
            tareasDB.forEach(tarea => {
                this._listado[tarea.id] = tarea;
            });
        }
    }

    crearTarea(descripcion = '') {
        if (_.isEmpty(descripcion)) {
            console.log('❌ La descripción de la tarea no puede estar vacía.'.red);
            return null;
        }
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;
        this.guardarTareas();
        console.log('✔ Tarea creada exitosamente.'.green);
        return tarea;
    }

    listarTodasLasTareas() {
        if (_.isEmpty(this.listadoArr)) {
            console.log('\nNo hay tareas registradas.'.yellow);
            return;
        }
        const tareasOrdenadas = _.orderBy(this.listadoArr, ['completadoEn', 'descripcion'], ['asc', 'asc']);

        console.log('\nLista de Tareas:');
        tareasOrdenadas.forEach((tarea, i) => {
            const idx = `${i + 1}.`.green;
            const estado = (tarea.completadoEn)
                            ? 'Completada'.green + ` en: ${tarea.completadoEn.yellow}`
                            : 'Pendiente'.red;
            console.log(`${idx} ${tarea.descripcion} :: ${estado}`);
        });
    }

    listarTareasPorEstado(completadas = true) {
        const tareasFiltradas = this.listadoArr.filter(tarea => {
            if (completadas) {
                return tarea.completadoEn !== null;
            } else {
                return tarea.completadoEn === null;
            }
        });

        if (_.isEmpty(tareasFiltradas)) {
            console.log('\nNo hay tareas en este estado.'.yellow);
            return;
        }

        console.log(`\nLista de Tareas ${completadas ? 'Completadas' : 'Pendientes'}:`);
        tareasFiltradas.forEach((tarea, i) => {
            const idx = `${i + 1}.`.green;
            const estado = (tarea.completadoEn)
                            ? `Completada en: ${tarea.completadoEn.green}`
                            : 'Pendiente'.red;
            console.log(`${idx} ${tarea.descripcion} :: ${estado}`);
        });
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
            this.guardarTareas();
            return true;
        }
        return false;
    }

    toggleCompletadas(ids = []) {
        // Marcar las seleccionadas como completadas (si no lo están)
        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        // Marcar las NO seleccionadas como pendientes (si estaban completadas)
        this.listadoArr.forEach(tarea => {
            if (!_.includes(ids, tarea.id) && tarea.completadoEn) {
                tarea.completadoEn = null;
            }
        });
        this.guardarTareas();
        console.log('✅ Estado de tareas actualizado.'.green);
    }

    guardarTareas() {
        guardarDB(this.listadoArr);
    }
}

export default Tareas; // Exportar la clase principal
