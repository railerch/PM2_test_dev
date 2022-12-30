# HABILITAR LA EJECUCION DE SCRIPTS EN WINDOWS

* Abrir *powerShell* y ejecutar el siguiente comando para ver el estatus del scope de las politicas de ejecución:
```
> Get-ExecutionPolicy -list
```

* Habilitar la ejecución de scripts remotos firmados en LocalMachine
```
> Set-ExecutionPolicy RemoteSigned -Force
```

* En el editor de politicas del equipo (ctrl+R => gpedit.msc) ir a:
> Configuración de equipo/plantillas administrativas/Componentes de windows/Windows powerShell/Activar ejecución de scripts

* Hacer clic en *Habilitar* y luego en Directiva de ejecución seleccionar: *Permitir solo scripts firmados*

* Actualizar las politicas del equipo con el comando:
```
> gpupdate /force
```

# COMANDOS BASICOS PM2

* **pm2 l | ls | list** - Lista los procesos activos
* **pm2 start ruta/archivo.js** - Inicia un archivo y lo agrega a la lista de procesos iniciados 
* **pm2 start ruta/archivo.js --watch** - Ejecuta un archivo y lo mantiene bajo observación por si hay cambios
* **pm2 start archivo.js --name** - Ejecuta un archivo y le asigna un nombre personalizado
* **pm2 restart name | id | pid | all** - Reinicia uno o todos los procesos segun el parametro indicado
* **pm2 stop name | id | pid | all** - Detiene uno o todos los procesos segun el parametro indicado
* **pm2 delete name | id | pid | all** - Elimina uno o todos los procesos segun el parametro indicado
* **pm2 kill** - Detiene por completo el daemon PM2
* **pm2 monit** - Muestra por consola el monitor de procesos en tiempo real de PM2 (esc para salir)
* **pm2 log** - Muestra el log de PM2
* **pm2 startup** -  Activa el inicio automatico de PM2 y los procesos que tenia cargados al reiniciar el servidor (No funciona en windows)
* **pm2 unstartup** -  Desctiva el inicio automatico de PM2 eliminando el script de autoejecición creado con _startup_
* **pm2 ecosystem** - Crea un archivo de configuración llamado _ecosystem.config.js_ (ideal para windows) en el que se especifican los procesos que se quieren iniciar al ejecutarlo

Configuración basica para _ecosystem.config.js_
```
apps[{
    name: "nombre-del-proyecto",
    script: "index.js",
    watch: false|true,
    env:{
        NODE_ENV: "development"
    }
    env_production:{
        NODE_ENV: "production"
    }
}]
```