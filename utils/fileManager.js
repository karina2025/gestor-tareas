// utils/fileManager.js
import fs from 'fs'; // Cambiar a import
import path from 'path';
// Para __dirname con ES Modules, necesitas un helper
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const archivoPath = path.join(__dirname, '../data', 'tareas.json');

const guardarDB = (data) => {
    try {
        fs.writeFileSync(archivoPath, JSON.stringify(data), { encoding: 'utf8' });
    } catch (error) {
        console.error("Error al guardar en la base de datos:", error);
    }
};

const leerDB = () => {
    if (!fs.existsSync(archivoPath)) {
        return null;
    }
    try {
        const info = fs.readFileSync(archivoPath, { encoding: 'utf8' });
        return JSON.parse(info);
    } catch (error) {
        console.error("Error al leer la base de datos, inicializando vacía:", error);
        return null;
    }
};

export {
    guardarDB,
    leerDB
}; // Exportar las funciones individualmente