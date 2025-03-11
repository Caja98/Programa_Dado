import { JuegoDado } from "./JuegoDado.js";

/**
 * Función para escribir un mensaje en el contenedor de salida del juego.
 */
function historialJugadas(mensaje: string, tipo: 'normal' | 'advertencia' | 'exito' = 'normal') {
    const contenedorHistorial = document.getElementById('gameOutput');
    if (contenedorHistorial) {
        const entrada = document.createElement('div');
        entrada.className = `log-entry ${tipo}`;

        // Agregar icono según el tipo de mensaje
        const icono = document.createElement('span');
        icono.className = 'log-icon';
        switch(tipo) {
            case 'advertencia':
                icono.textContent = '⚠️';
                break;
            case 'exito':
                icono.textContent = '✅';
                break;
            default:
                icono.textContent = '🎲';
        }
        entrada.appendChild(icono);

        // Contenido principal
        const texto = document.createElement('span');
        texto.textContent = mensaje;
        entrada.appendChild(texto);

        contenedorHistorial.appendChild(entrada);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const botonInicio = document.getElementById('iniciarJuego') as HTMLButtonElement;
    const entradaJugador1 = document.getElementById('Jugador1') as HTMLInputElement;
    const entradaJugador2 = document.getElementById('Jugador2') as HTMLInputElement;

    botonInicio.addEventListener('click', () => {
        // Limpiar el contenedor de salida en cada nueva partida
        const contenedorHistorial = document.getElementById('gameOutput');
        if (contenedorHistorial) {
            contenedorHistorial.innerHTML = '';
        }

        const nombreJugador1 = entradaJugador1.value.trim();
        const nombreJugador2 = entradaJugador2.value.trim();

        if (!nombreJugador1 || !nombreJugador2) {
            historialJugadas('Por favor, ingresa ambos nombres.', 'advertencia');
            return;
        }

        // Se crea la instancia del juego con los nombres ingresados
        const juego = new JuegoDado(nombreJugador1, nombreJugador2);
        juego.iniciarJuego();

        // Historial de jugadas
        juego.historial.forEach(mensajeTexto => {
            historialJugadas(mensajeTexto, 'normal');
        });

        // Mensaje de vencedor
        if (juego.vencedor === null) {
            historialJugadas("Empate. No hay un vencedor", 'advertencia');
        } else {
            historialJugadas(`¡El vencedor es ${juego.vencedor.nombre}!`, 'exito');
        }
    });
});
