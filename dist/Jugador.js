export class Jugador {
    constructor(nombre) {
        this.puntoGanado = 0;
        this.nombre = nombre;
    }
    /**
     *
     * @param dado1 Primer dado a lanzar
     * @param dado2 Segundo dado a lanzar
     * @return Devuelve la suma de los puntos obtenidos en ambos dados
     */
    lanzaDados(dado1, dado2) {
        dado1.lanzar();
        dado2.lanzar();
        // retornar los puntos que cayeron en los dados
        return dado1.puntos + dado2.puntos;
    }
}
