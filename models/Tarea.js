// models/Tarea.js
import { v4 as uuidv4 } from 'uuid'; // Cambiar a import

class Tarea {
    constructor(descripcion) {
        this.id = uuidv4();
        this.descripcion = descripcion;
        this.completadoEn = null;
    }
}

export default Tarea; // Cambiar a export default para la clase principal