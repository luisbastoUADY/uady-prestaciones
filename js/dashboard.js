function inicializarModuloCFDI() {
    const formBusquedaCFDI = document.getElementById('formBusquedaCFDI');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const tablaCFDI = document.getElementById('tablaCFDI');
    const filasCFDI = tablaCFDI.querySelectorAll('tbody tr');
    
    // Manejar el envío del formulario de búsqueda
    if (formBusquedaCFDI) {
        formBusquedaCFDI.addEventListener('submit', function(e) {
            e.preventDefault();
            buscarCFDI();
        });
    }
    
    // Manejar el botón limpiar
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function() {
            limpiarBusquedaCFDI();
        });
    }
    
    // Manejar la descarga de archivos
    const botonesDescarga = document.querySelectorAll('.btn-download');
    botonesDescarga.forEach(boton => {
        boton.addEventListener('click', function() {
            const archivo = this.getAttribute('data-file');
            const tipo = this.classList.contains('pdf') ? 'PDF' : 'XML';
            descargarArchivo(archivo, tipo);
        });
    });
    
    // Función para buscar CFDI
    function buscarCFDI() {
        const anio = document.getElementById('anio-cfdi').value;
        const quincena = document.getElementById('quincena').value;
        const fechaInicio = document.getElementById('fechaInicio').value;
        const fechaFin = document.getElementById('fechaFin').value;
        
        // Mostrar mensaje de búsqueda (simulado)
        alert(`Búsqueda realizada con los siguientes criterios:\nAño: ${anio || 'No especificado'}\nQuincena: ${quincena || 'No especificada'}\nFecha inicio: ${fechaInicio || 'No especificada'}\nFecha fin: ${fechaFin || 'No especificada'}`);
        
        // En un sistema real, aquí se haría una petición al servidor
        // Por ahora, solo simulamos que se muestran todos los resultados
        mostrarResultadosCFDI(filasCFDI);
    }
    
    // Función para limpiar la búsqueda
    function limpiarBusquedaCFDI() {
        document.getElementById('formBusquedaCFDI').reset();
        mostrarResultadosCFDI(filasCFDI);
    }
    
    // Función para mostrar resultados
    function mostrarResultadosCFDI(filas) {
        const tbody = tablaCFDI.querySelector('tbody');
        tbody.innerHTML = '';
        
        if (filas.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" class="no-results">No se encontraron resultados</td></tr>';
        } else {
            filas.forEach(fila => {
                tbody.appendChild(fila.cloneNode(true));
            });
            
            // Reasignar eventos a los nuevos botones de descarga
            const nuevosBotones = tbody.querySelectorAll('.btn-download');
            nuevosBotones.forEach(boton => {
                boton.addEventListener('click', function() {
                    const archivo = this.getAttribute('data-file');
                    const tipo = this.classList.contains('pdf') ? 'PDF' : 'XML';
                    descargarArchivo(archivo, tipo);
                });
            });
        }
    }

    // Función para simular la descarga de archivos
    function descargarArchivo(nombreArchivo, tipo) {
        alert(`Descargando archivo ${tipo}: ${nombreArchivo}\n\nEn un sistema real, se descargaría el archivo.`);
        // En un sistema real, aquí iría la lógica para descargar el archivo
    }
}

function inicializarModuloFAR() {
    const formBusquedaFAR = document.getElementById('formBusquedaFAR');
    const tablaFAR = document.getElementById('tablaFAR');
    const filasFAR = tablaFAR.querySelectorAll('tbody tr');

    // Manejar el envío del formulario de búsqueda
    if (formBusquedaFAR) {
        formBusquedaFAR.addEventListener('submit', function(e) {
            e.preventDefault();
            buscarFAR();
        });
    }
    
    // Manejar la descarga de archivos
    const botonesDescarga = document.querySelectorAll('.btn-download');
    botonesDescarga.forEach(boton => {
        boton.addEventListener('click', function() {
            const archivo = this.getAttribute('data-file');
            const tipo = this.classList.contains('pdf') ? 'PDF' : 'XML';
            descargarArchivo(archivo, tipo);
        });
    });
    
    // Función para buscar FAR
    function buscarFAR() {
        const anio = document.getElementById('anio-far').value;
        
        // Mostrar mensaje de búsqueda (simulado)
        alert(`Búsqueda realizada con los siguientes criterios:\nAño: ${anio || 'No especificado'}`);
        
        // En un sistema real, aquí se haría una petición al servidor
        // Por ahora, solo simulamos que se muestran todos los resultados
        mostrarResultadosFAR(filasFAR);
    }
    
    // Función para mostrar resultados
    function mostrarResultadosFAR(filas) {
        const tbody = tablaFAR.querySelector('tbody');
        tbody.innerHTML = '';
        
        if (filas.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" class="no-results">No se encontraron resultados</td></tr>';
        } else {
            filas.forEach(fila => {
                tbody.appendChild(fila.cloneNode(true));
            });
            
            // Reasignar eventos a los nuevos botones de descarga
            const nuevosBotones = tbody.querySelectorAll('.btn-download');
            nuevosBotones.forEach(boton => {
                boton.addEventListener('click', function() {
                    const archivo = this.getAttribute('data-file');
                    const tipo = this.classList.contains('pdf') ? 'PDF' : 'XML';
                    descargarArchivo(archivo, tipo);
                });
            });
        }
    }

    // Función para simular la descarga de archivos
    function descargarArchivo(nombreArchivo, tipo) {
        alert(`Descargando archivo ${tipo}: ${nombreArchivo}\n\nEn un sistema real, se descargaría el archivo.`);
        // En un sistema real, aquí iría la lógica para descargar el archivo
    }
}

function inicializarModuloFondoVivienda() {
    const formBusquedaFondoVivienda = document.getElementById('formBusquedaFondoVivienda');
    const tablaFondoVivienda = document.getElementById('tablaFondoVivienda');
    const filasFondoVivienda = tablaFondoVivienda.querySelectorAll('tbody tr');

    // Manejar el envío del formulario de búsqueda
    if (formBusquedaFondoVivienda) {
        formBusquedaFondoVivienda.addEventListener('submit', function(e) {
            e.preventDefault();
            buscarFondoVivienda();
        });
    }
    
    // Manejar la descarga de archivos
    const botonesDescarga = document.querySelectorAll('.btn-download');
    botonesDescarga.forEach(boton => {
        boton.addEventListener('click', function() {
            const archivo = this.getAttribute('data-file');
            const tipo = this.classList.contains('pdf') ? 'PDF' : 'XML';
            descargarArchivo(archivo, tipo);
        });
    });

    // Función para buscar Fondo de Vivienda
    function buscarFondoVivienda() {
        const anio = document.getElementById('anio-vivienda').value;
        
        // Mostrar mensaje de búsqueda (simulado)
        alert(`Búsqueda realizada con los siguientes criterios:\nAño: ${anio || 'No especificado'}`);
        
        // En un sistema real, aquí se haría una petición al servidor
        // Por ahora, solo simulamos que se muestran todos los resultados
        mostrarResultadosFondoVivienda(filasFondoVivienda);
    }
    
    // Función para mostrar resultados
    function mostrarResultadosFondoVivienda(filas) {
        const tbody = tablaFondoVivienda.querySelector('tbody');
        tbody.innerHTML = '';
        
        if (filas.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" class="no-results">No se encontraron resultados</td></tr>';
        } else {
            filas.forEach(fila => {
                tbody.appendChild(fila.cloneNode(true));
            });
            
            // Reasignar eventos a los nuevos botones de descarga
            const nuevosBotones = tbody.querySelectorAll('.btn-download');
            nuevosBotones.forEach(boton => {
                boton.addEventListener('click', function() {
                    const archivo = this.getAttribute('data-file');
                    const tipo = this.classList.contains('pdf') ? 'PDF' : 'XML';
                    descargarArchivo(archivo, tipo);
                });
            });
        }
    }

    // Función para simular la descarga de archivos
    function descargarArchivo(nombreArchivo, tipo) {
        alert(`Descargando archivo ${tipo}: ${nombreArchivo}\n\nEn un sistema real, se descargaría el archivo.`);
        // En un sistema real, aquí iría la lógica para descargar el archivo
    }
}

function inicializarModuloFondoAhorro() {
    const formBusquedaFondoAhorro = document.getElementById('formBusquedaFondoAhorro');
    const tablaFondoAhorro = document.getElementById('tablaFondoAhorro');
    const filasFondoAhorro = tablaFondoAhorro.querySelectorAll('tbody tr');

    // Manejar el envío del formulario de búsqueda
    if (formBusquedaFondoAhorro) {
        formBusquedaFondoAhorro.addEventListener('submit', function(e) {
            e.preventDefault();
            buscarFondoAhorro();
        });
    }
    
    // Manejar la descarga de archivos
    const botonesDescarga = document.querySelectorAll('.btn-download');
    botonesDescarga.forEach(boton => {
        boton.addEventListener('click', function() {
            const archivo = this.getAttribute('data-file');
            const tipo = this.classList.contains('pdf') ? 'PDF' : 'XML';
            descargarArchivo(archivo, tipo);
        });
    });
    
    // Función para buscar Fondo de Ahorro
    function buscarFondoAhorro() {
        const anio = document.getElementById('anio-fondoAhorro').value;
        
        // Mostrar mensaje de búsqueda (simulado)
        alert(`Búsqueda realizada con los siguientes criterios:\nAño: ${anio || 'No especificado'}`);
        
        // En un sistema real, aquí se haría una petición al servidor
        // Por ahora, solo simulamos que se muestran todos los resultados
        mostrarResultadosFondoAhorro(filasFondoAhorro);
    }
    
    // Función para mostrar resultados
    function mostrarResultadosFondoAhorro(filas) {
        const tbody = tablaFondoAhorro.querySelector('tbody');
        tbody.innerHTML = '';
        
        if (filas.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" class="no-results">No se encontraron resultados</td></tr>';
        } else {
            filas.forEach(fila => {
                tbody.appendChild(fila.cloneNode(true));
            });
            
            // Reasignar eventos a los nuevos botones de descarga
            const nuevosBotones = tbody.querySelectorAll('.btn-download');
            nuevosBotones.forEach(boton => {
                boton.addEventListener('click', function() {
                    const archivo = this.getAttribute('data-file');
                    const tipo = this.classList.contains('pdf') ? 'PDF' : 'XML';
                    descargarArchivo(archivo, tipo);
                });
            });
        }
    }

    // Función para simular la descarga de archivos
    function descargarArchivo(nombreArchivo, tipo) {
        alert(`Descargando archivo ${tipo}: ${nombreArchivo}\n\nEn un sistema real, se descargaría el archivo.`);
        // En un sistema real, aquí iría la lógica para descargar el archivo
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM para funcionalidad responsiva
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Inicializar módulo CFDI
    inicializarModuloCFDI();
    // Inicializar módulo FAR        
    inicializarModuloFAR();
    // Inicializar módulo Fondo de Ahorro
    inicializarModuloFondoAhorro();
    // Inicializar módulo Fondo de Vivienda
    inicializarModuloFondoVivienda();

    // Función para abrir/cerrar el menú en móviles
    function toggleMenu() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }
    
    // Evento para el botón de menú
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // Cerrar menú al hacer clic en el overlay
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }
    
    // Cerrar menú al hacer clic en un enlace (en móviles)
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });
    
    // Navegación entre secciones
    const sections = document.querySelectorAll('.section');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // Ocultar todas las secciones
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Mostrar la sección seleccionada
            document.getElementById(targetSection).classList.add('active');
        });
    });
    
    // Cerrar sesión
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
                window.location.href = '../index.html';
            }
        });
    }
    
    // Modal para nueva solicitud
    const modal = document.getElementById('modalNuevaSolicitud');
    const closeBtn = document.querySelector('.close');
    const nuevoBtns = document.querySelectorAll('.btn-nuevo');
    
    nuevoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const sectionId = this.closest('.section').id;
            mostrarFormularioNuevo(sectionId);
            modal.style.display = 'block';
            // Cerrar menú móvil si está abierto
            if (sidebar.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Función para mostrar el formulario correspondiente según la sección
function mostrarFormularioNuevo(sectionId) {
    const modalBody = document.getElementById('modalBody');
    let formularioHTML = '';
    
    switch(sectionId) {
        case 'exenciones':
            formularioHTML = `
                <h2>Nueva Solicitud de Exención</h2>
                <form class="modal-form">
                    <div class="form-group">
                        <label for="beneficiario">Seleccione beneficiario:</label>
                        <select id="beneficiario">
                            <option value="trabajador">Trabajador (Juan Pérez)</option>
                            <option value="dependiente1">María Pérez (Dependiente)</option>
                            <option value="dependiente2">Carlos Pérez (Dependiente)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Horas trabajadas a la quincena: 80 horas</label>
                    </div>
                    <div class="form-group">
                        <label>Porcentaje de exención: 50%</label>
                    </div>
                    <div class="form-group">
                        <label for="nivelEducativo">Nivel educativo:</label>
                        <select id="nivelEducativo">
                            <option value="bachillerato">Bachillerato</option>
                            <option value="licenciatura">Licenciatura</option>
                            <option value="maestria">Maestría</option>
                            <option value="doctorado">Doctorado</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="asignatura">Asignatura:</label>
                        <select id="asignatura">
                            <option value="matematicas">Matemáticas</option>
                            <option value="espanol">Español</option>
                            <option value="ciencias">Ciencias</option>
                        </select>
                    </div>
                    <button type="button" class="btn-submit" onclick="alert('Solicitud de exención enviada. Proceso en revisión.')">Aceptar</button>
                    <button type="button" class="btn-cancel" onclick="document.getElementById('modalNuevaSolicitud').style.display='none'">Cancelar</button>
                </form>
            `;
            break;
            
        case 'vigencia':
            formularioHTML = `
                <h2>Nueva Solicitud de Vigencia de Servicio Médico</h2>
                <form class="modal-form">
                    <div class="form-group">
                        <label for="beneficiario">Seleccione beneficiario:</label>
                        <select id="beneficiario">
                            <option value="trabajador">Trabajador (Juan Pérez)</option>
                            <option value="dependiente1">María Pérez (Dependiente)</option>
                            <option value="dependiente2">Carlos Pérez (Dependiente)</option>
                        </select>
                    </div>
                    <div class="file-upload">
                        <label for="constancia">Constancia de estudios (PDF):</label>
                        <input type="file" id="constancia" accept=".pdf">
                    </div>
                    <button type="button" class="btn-submit" onclick="alert('Actualización de vigencia de SM en revisión.')">Aceptar</button>
                    <button type="button" class="btn-cancel" onclick="document.getElementById('modalNuevaSolicitud').style.display='none'">Cancelar</button>
                </form>
            `;
            break;
            
        case 'becas':
            formularioHTML = `
                <h2>Nueva Solicitud de Beca</h2>
                <form class="modal-form">
                    <div class="form-group">
                        <label for="beneficiario">Seleccione beneficiario:</label>
                        <select id="beneficiario">
                            <option value="trabajador">Trabajador (Juan Pérez)</option>
                            <option value="dependiente1">María Pérez (Dependiente)</option>
                            <option value="dependiente2">Carlos Pérez (Dependiente)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="estadoCivil">Estado Civil:</label>
                        <select id="estadoCivil">
                            <option value="soltero">Soltero</option>
                            <option value="casado">Casado</option>
                            <option value="divorciado">Divorciado</option>
                            <option value="viudo">Viudo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="telefono">Teléfono:</label>
                        <input type="tel" id="telefono">
                    </div>
                    <div class="form-group">
                        <label for="email">Correo electrónico:</label>
                        <input type="email" id="email">
                    </div>
                    <div class="form-group">
                        <label for="escuela">Nombre de la escuela:</label>
                        <input type="text" id="escuela">
                    </div>
                    <div class="form-group">
                        <label for="estudios">Nombre completo de los estudios:</label>
                        <input type="text" id="estudios">
                    </div>
                    <div class="form-group">
                        <label for="grado">Grado escolar:</label>
                        <input type="text" id="grado">
                    </div>
                    <div class="form-group">
                        <label><input type="checkbox" id="nuevoIngreso"> Es de nuevo ingreso</label>
                    </div>
                    <div class="form-group">
                        <label for="promedio">Promedio del grado anterior:</label>
                        <input type="number" id="promedio" step="0.1" min="0" max="10">
                    </div>
                    <div class="form-group">
                        <label>Periodo escolar actual:</label>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <input type="date" id="fechaInicio" style="flex: 1; min-width: 150px;">
                            <input type="date" id="fechaFin" style="flex: 1; min-width: 150px;">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="meses">Número de meses cuyos pagos se solicita:</label>
                        <input type="number" id="meses" min="1">
                    </div>
                    <div class="file-upload">
                        <label for="constancia">Constancia de estudios con promedio (PDF):</label>
                        <input type="file" id="constancia" accept=".pdf">
                    </div>
                    <button type="button" class="btn-submit" onclick="alert('Solicitud de Beca en Revisión.')">Aceptar</button>
                    <button type="button" class="btn-cancel" onclick="document.getElementById('modalNuevaSolicitud').style.display='none'">Cancelar</button>
                </form>
            `;
            break;
            
        case 'reembolso-inscripciones':
            formularioHTML = `
                <h2>Nueva Solicitud de Reembolso de Inscripciones</h2>
                <form class="modal-form">
                    <div class="form-group">
                        <label for="beneficiario">Seleccione beneficiario:</label>
                        <select id="beneficiario">
                            <option value="trabajador">Trabajador (Juan Pérez)</option>
                            <option value="dependiente1">María Pérez (Dependiente)</option>
                            <option value="dependiente2">Carlos Pérez (Dependiente)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="estadoCivil">Estado Civil:</label>
                        <select id="estadoCivil">
                            <option value="soltero">Soltero</option>
                            <option value="casado">Casado</option>
                            <option value="divorciado">Divorciado</option>
                            <option value="viudo">Viudo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="telefono">Teléfono:</label>
                        <input type="tel" id="telefono">
                    </div>
                    <div class="form-group">
                        <label for="email">Correo electrónico:</label>
                        <input type="email" id="email">
                    </div>
                    <div class="form-group">
                        <label for="escuela">Nombre de la escuela:</label>
                        <input type="text" id="escuela">
                    </div>
                    <div class="form-group">
                        <label for="estudios">Nombre completo de los estudios que cursa:</label>
                        <input type="text" id="estudios">
                    </div>
                    <div class="file-upload">
                        <label for="recibo">Recibo o factura (PDF):</label>
                        <input type="file" id="recibo" accept=".pdf">
                    </div>
                    <button type="button" class="btn-submit" onclick="alert('Solicitud de Reembolso de inscripciones en Revisión.')">Aceptar</button>
                    <button type="button" class="btn-cancel" onclick="document.getElementById('modalNuevaSolicitud').style.display='none'">Cancelar</button>
                </form>
            `;
            break;
            
        case 'reembolso-libros':
            formularioHTML = `
                <h2>Nueva Solicitud de Reembolso de Libros</h2>
                <form class="modal-form">
                    <div class="form-group">
                        <label for="beneficiario">Seleccione beneficiario:</label>
                        <select id="beneficiario">
                            <option value="trabajador">Trabajador (Juan Pérez)</option>
                            <option value="dependiente1">María Pérez (Dependiente)</option>
                            <option value="dependiente2">Carlos Pérez (Dependiente)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="estadoCivil">Estado Civil:</label>
                        <select id="estadoCivil">
                            <option value="soltero">Soltero</option>
                            <option value="casado">Casado</option>
                            <option value="divorciado">Divorciado</option>
                            <option value="viudo">Viudo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="telefono">Teléfono:</label>
                        <input type="tel" id="telefono">
                    </div>
                    <div class="form-group">
                        <label for="email">Correo electrónico:</label>
                        <input type="email" id="email">
                    </div>
                    <div class="form-group">
                        <label for="escuela">Nombre de la escuela:</label>
                        <input type="text" id="escuela">
                    </div>
                    <div class="form-group">
                        <label for="estudios">Nombre completo de los estudios que cursa:</label>
                        <input type="text" id="estudios">
                    </div>
                    <div class="form-group">
                        <label for="grado">Grado escolar que cursa:</label>
                        <input type="text" id="grado">
                    </div>
                    <div class="form-group">
                        <label>Periodo escolar actual:</label>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <input type="date" id="fechaInicio" style="flex: 1; min-width: 150px;">
                            <input type="date" id="fechaFin" style="flex: 1; min-width: 150px;">
                        </div>
                    </div>
                    <div class="file-upload">
                        <label for="recibo">Recibo o factura (PDF):</label>
                        <input type="file" id="recibo" accept=".pdf">
                    </div>
                    <div class="file-upload">
                        <label for="listaLibros">Lista oficial de libros de texto (PDF):</label>
                        <input type="file" id="listaLibros" accept=".pdf">
                    </div>
                    <div class="file-upload">
                        <label for="constancia">Constancia de estudios que acredite al usuario como alumno regular (PDF):</label>
                        <input type="file" id="constancia" accept=".pdf">
                    </div>
                    <button type="button" class="btn-submit" onclick="alert('Solicitud de Reembolso de Libros en Revisión.')">Aceptar</button>
                    <button type="button" class="btn-cancel" onclick="document.getElementById('modalNuevaSolicitud').style.display='none'">Cancelar</button>
                </form>
            `;
            break;
            
        case 'reembolso-tesis':
            formularioHTML = `
                <h2>Nueva Solicitud de Reembolso de Impresión de Tesis</h2>
                <form class="modal-form">
                    <div class="form-group">
                        <label for="beneficiario">Seleccione beneficiario:</label>
                        <select id="beneficiario">
                            <option value="trabajador">Trabajador (Juan Pérez)</option>
                            <option value="dependiente1">María Pérez (Dependiente)</option>
                            <option value="dependiente2">Carlos Pérez (Dependiente)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="estadoCivil">Estado Civil:</label>
                        <select id="estadoCivil">
                            <option value="soltero">Soltero</option>
                            <option value="casado">Casado</option>
                            <option value="divorciado">Divorciado</option>
                            <option value="viudo">Viudo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="telefono">Teléfono:</label>
                        <input type="tel" id="telefono">
                    </div>
                    <div class="form-group">
                        <label for="email">Correo electrónico:</label>
                        <input type="email" id="email">
                    </div>
                    <div class="form-group">
                        <label for="escuela">Nombre de la escuela:</label>
                        <input type="text" id="escuela">
                    </div>
                    <div class="form-group">
                        <label for="estudios">Nombre completo de los estudios que cursa:</label>
                        <input type="text" id="estudios">
                    </div>
                    <div class="file-upload">
                        <label for="recibo">Recibo o factura (PDF):</label>
                        <input type="file" id="recibo" accept=".pdf">
                    </div>
                    <div class="file-upload">
                        <label for="constancia">Constancia de estudios que acredite al usuario como alumno regular o pasante (PDF):</label>
                        <input type="file" id="constancia" accept=".pdf">
                    </div>
                    <button type="button" class="btn-submit" onclick="alert('Solicitud de Reembolso de Impresión de Tesis en Revisión.')">Aceptar</button>
                    <button type="button" class="btn-cancel" onclick="document.getElementById('modalNuevaSolicitud').style.display='none'">Cancelar</button>
                </form>
            `;
            break;
            
        case 'reembolso-chofer':
            formularioHTML = `
                <h2>Nueva Solicitud de Reembolso de Licencia de Conducir</h2>
                <form class="modal-form">
                    <div class="form-group">
                        <label for="beneficiario">Seleccione beneficiario:</label>
                        <select id="beneficiario">
                            <option value="trabajador">Trabajador (Juan Pérez)</option>
                            <option value="dependiente1">María Pérez (Dependiente)</option>
                            <option value="dependiente2">Carlos Pérez (Dependiente)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="estadoCivil">Estado Civil:</label>
                        <select id="estadoCivil">
                            <option value="soltero">Soltero</option>
                            <option value="casado">Casado</option>
                            <option value="divorciado">Divorciado</option>
                            <option value="viudo">Viudo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="telefono">Teléfono:</label>
                        <input type="tel" id="telefono">
                    </div>
                    <div class="form-group">
                        <label for="email">Correo electrónico:</label>
                        <input type="email" id="email">
                    </div>
                    <div class="file-upload">
                        <label for="recibo">Recibo o factura (PDF):</label>
                        <input type="file" id="recibo" accept=".pdf">
                    </div>
                    <button type="button" class="btn-submit" onclick="alert('Solicitud de Reembolso de Licencia de Conducir en Revisión.')">Aceptar</button>
                    <button type="button" class="btn-cancel" onclick="document.getElementById('modalNuevaSolicitud').style.display='none'">Cancelar</button>
                </form>
            `;
            break;
            
        case 'reembolso-posgrado':
            formularioHTML = `
                <h2>Nueva Solicitud de Reembolso de Inscripción a Posgrado</h2>
                <form class="modal-form">
                    <div class="form-group">
                        <label for="beneficiario">Seleccione beneficiario:</label>
                        <select id="beneficiario">
                            <option value="trabajador">Trabajador (Juan Pérez)</option>
                            <option value="dependiente1">María Pérez (Dependiente)</option>
                            <option value="dependiente2">Carlos Pérez (Dependiente)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="estadoCivil">Estado Civil:</label>
                        <select id="estadoCivil">
                            <option value="soltero">Soltero</option>
                            <option value="casado">Casado</option>
                            <option value="divorciado">Divorciado</option>
                            <option value="viudo">Viudo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="telefono">Teléfono:</label>
                        <input type="tel" id="telefono">
                    </div>
                    <div class="form-group">
                        <label for="email">Correo electrónico:</label>
                        <input type="email" id="email">
                    </div>
                    <div class="form-group">
                        <label for="escuela">Nombre de la escuela:</label>
                        <input type="text" id="escuela">
                    </div>
                    <div class="form-group">
                        <label for="estudios">Nombre completo de los estudios que cursará:</label>
                        <input type="text" id="estudios">
                    </div>
                    <div class="file-upload">
                        <label for="recibo">Recibo o factura (PDF):</label>
                        <input type="file" id="recibo" accept=".pdf">
                    </div>
                    <button type="button" class="btn-submit" onclick="alert('Solicitud de Reembolso de Inscripción a Posgrado en Revisión.')">Aceptar</button>
                    <button type="button" class="btn-cancel" onclick="document.getElementById('modalNuevaSolicitud').style.display='none'">Cancelar</button>
                </form>
            `;
            break;
            
        case 'reembolso-beca':
            formularioHTML = `
                <h2>Nueva Solicitud de Reembolso de Beca Especial</h2>
                <form class="modal-form">
                    <div class="form-group">
                        <label for="beneficiario">Seleccione beneficiario:</label>
                        <select id="beneficiario">
                            <option value="trabajador">Trabajador (Juan Pérez)</option>
                            <option value="dependiente1">María Pérez (Dependiente)</option>
                            <option value="dependiente2">Carlos Pérez (Dependiente)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="estadoCivil">Estado Civil:</label>
                        <select id="estadoCivil">
                            <option value="soltero">Soltero</option>
                            <option value="casado">Casado</option>
                            <option value="divorciado">Divorciado</option>
                            <option value="viudo">Viudo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="telefono">Teléfono:</label>
                        <input type="tel" id="telefono">
                    </div>
                    <div class="form-group">
                        <label for="email">Correo electrónico:</label>
                        <input type="email" id="email">
                    </div>
                    <div class="file-upload">
                        <label for="recibo">Recibo o factura (PDF):</label>
                        <input type="file" id="recibo" accept=".pdf">
                    </div>
                    <button type="button" class="btn-submit" onclick="alert('Solicitud de Reembolso de Beca Especial en Revisión.')">Aceptar</button>
                    <button type="button" class="btn-cancel" onclick="document.getElementById('modalNuevaSolicitud').style.display='none'">Cancelar</button>
                </form>
            `;
            break;
            
        default:
            // Formulario genérico para otros reembolsos no especificados
            formularioHTML = `
                <h2>Nueva Solicitud de Reembolso</h2>
                <form class="modal-form">
                    <div class="form-group">
                        <label for="beneficiario">Seleccione beneficiario:</label>
                        <select id="beneficiario">
                            <option value="trabajador">Trabajador (Juan Pérez)</option>
                            <option value="dependiente1">María Pérez (Dependiente)</option>
                            <option value="dependiente2">Carlos Pérez (Dependiente)</option>
                        </select>
                    </div>
                    <div class="file-upload">
                        <label for="comprobante">Comprobante del gasto (PDF):</label>
                        <input type="file" id="comprobante" accept=".pdf">
                    </div>
                    <div class="form-group">
                        <label for="monto">Monto de reembolso:</label>
                        <input type="number" id="monto" min="0" step="0.01">
                    </div>
                    <button type="button" class="btn-submit" onclick="alert('Solicitud de reembolso enviada.')">Aceptar</button>
                    <button type="button" class="btn-cancel" onclick="document.getElementById('modalNuevaSolicitud').style.display='none'">Cancelar</button>
                </form>
            `;
    }
    
    modalBody.innerHTML = formularioHTML;
}
    
    // Simulación de edición y eliminación (solo para solicitudes rechazadas)
    const editarBtns = document.querySelectorAll('.btn-editar');
    const eliminarBtns = document.querySelectorAll('.btn-eliminar');
    
    editarBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Función de edición (simulada)');
        });
    });
    
    eliminarBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('¿Estás seguro de que deseas eliminar esta solicitud?')) {
                alert('Solicitud eliminada (simulada)');
            }
        });
    });
    
    // Ajustar el menú al cambiar el tamaño de la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

