export class Jugada {
    /* TODO: Mover estos atributos a la clase juego
    Jugador jugador1;
    Jugador jugador2;
    Dado dado1;
    Dado dado2;
    */
    /**
     * Este método hace la función del constructor
     */
    iniciarJugada(jugador1, jugador2, dado1, dado2) {
        let puntosJ1;
        let puntosJ2;
        puntosJ1 = this.turnarJugador(jugador1, dado1, dado2);
        puntosJ2 = this.turnarJugador(jugador2, dado1, dado2);
        this.determinarGanador(jugador1, puntosJ1, jugador2, puntosJ2);
    }
    turnarJugador(jugadorEnTurno, d1, d2) {
        return jugadorEnTurno.lanzaDados(d1, d2);
    }
    determinarGanador(j1, pJ1, j2, pJ2) {
        if (pJ1 == 7) {
            //Se le asigna un punto al jugador 1
            j1.puntoGanado = 1;
        }
        else {
            j1.puntoGanado = 0;
        }
        if (pJ2 == 7) {
            //Se le asigna un punto al jugador 2
            j2.puntoGanado = 1;
        }
        else {
            j2.puntoGanado = 0;
        }
    }
}
