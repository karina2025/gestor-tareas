# Gestor de Tareas CLI - Don Brian quiere resultados

Este es un sistema de gestión de tareas basado en la línea de comandos (CLI), refactorizado y potenciado para cumplir con las exigencias de Don Brian. El proyecto original en memoria ha sido transformado para incorporar persistencia de datos, modularización, integración con la librería Lodash y mejoras en la experiencia de usuario.

## Características Principales

* **Persistencia de Datos:** Todas las tareas se guardan en un archivo `tareas.json`, asegurando que la información no se pierda entre ejecuciones del programa.
* **Modularización:** El código está organizado en una estructura de carpetas clara (`controllers`, `models`, `utils`, `helpers`) siguiendo buenas prácticas de desarrollo.
* **Integración con Lodash:** Se utiliza la potente librería Lodash para optimizar la manipulación de datos, incluyendo:
    * Generación de IDs únicos (`uuid` para IDs robustos).
    * Ordenamiento de tareas (`_.orderBy`).
    * Validaciones de entrada (`_.isEmpty`).
    * Búsqueda y filtrado eficiente.
* **Interfaz CLI Interactiva:** Desarrollada con Inquirer.js para una interacción intuitiva en la consola.
* **Validaciones y UX:** Mensajes claros, confirmaciones y manejo de entradas para una mejor experiencia de usuario.

## Tecnologías Utilizadas

* **Node.js**: Entorno de ejecución JavaScript.
* **Inquirer.js**: Para construir interfaces de línea de comandos interactivas.
* **Lodash**: Librería de utilidades JavaScript.
* **Chalk**: Para dar color a la salida de la consola.
* **UUID**: Para la generación de identificadores únicos universales.
* **fs (File System)**: Módulo nativo de Node.js para interactuar con el sistema de archivos.

## Cómo Instalar y Ejecutar el Proyecto

Sigue estos pasos para poner en marcha el gestor de tareas en tu máquina local:

1.  **Clonar el Repositorio**
    Si este proyecto ya está en un repositorio de GitHub, clónalo usando:
    ```bash
    git clone [https://github.com/karina2025/gestor-tareas]
    cd gestor-tareas
    ```

2.  **Instalar Dependencias:**
    Una vez dentro de la carpeta raíz del proyecto en tu terminal, instala todas las dependencias necesarias:
    ```bash
    npm install
    ```

3.  **Ejecutar la Aplicación:**
    Inicia el gestor de tareas ejecutando el archivo principal:
    ```bash
    node main.js
    ```

    La aplicación se iniciará en tu terminal, mostrándote un menú interactivo.

## Uso del Gestor de Tareas

Al ejecutar `node main.js`, verás un menú con las siguientes opciones:

1.  **Crear tarea:** Te pedirá la descripción de una nueva tarea.
2.  **Listar tareas:** Mostrará todas las tareas registradas, indicando su estado (completada o pendiente).
3.  **Listar tareas completadas:** Filtra y muestra solo las tareas marcadas como completadas.
4.  **Listar tareas pendientes:** Filtra y muestra solo las tareas que aún no han sido completadas.
5.  **Completar/Descompletar tarea(s):** Permite seleccionar una o varias tareas para cambiar su estado a completado o pendiente.
6.  **Borrar tarea:** Te permitirá seleccionar una tarea de la lista para eliminarla permanentemente.
7.  **Salir:** Finaliza la aplicación.

## estudiante 

* Karina Argenis Sanabria Casas

