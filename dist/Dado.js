export class Dado {
    constructor() {
        this.puntos = 0;
    }
    /**
     * Este método simula el lanzamiento de un dado, mediante la función random
     * y asignando el valor al atributo puntos
     * */
    lanzar() {
        //Simular el lanzamiento
        this.puntos = Math.floor(Math.random() * 6) + 1;
    }
}
