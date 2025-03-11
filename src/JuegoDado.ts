import { Jugador } from "./Jugador.js";
import { Dado } from "./Dado.js";
import { Jugada } from "./Jugada.js";

export class JuegoDado {
    cantidadJugadas : number = 0;
    jugador1 : Jugador;
    jugador2 : Jugador;
    marcadorJugador1 : number = 0;
    marcadorJugador2 : number = 0;
    dado1: Dado = new Dado;
    dado2 : Dado = new Dado;
    vencedor : Jugador | null = null;
    private bandJugador: boolean = true;
    // Nueva propiedad para almacenar el historial de jugadas
    historial: string[] = [];

    constructor(nombreJugador1 : string, nombreJugador2: string) {
        this.jugador1 = new Jugador(nombreJugador1);
        this.jugador2 = new Jugador(nombreJugador2);
    }

    elegirPrimerLanzador(){
        this.bandJugador = Math.floor(Math.random() * (3-1)) == 1;
    }

    iniciarJugada(): void{
        const jugadaActual = new Jugada();

        if(this.bandJugador){
            jugadaActual.iniciarJugada(this.jugador1, this.jugador2, this.dado1,this.dado2);
        }
        else{
            jugadaActual.iniciarJugada(this.jugador2, this.jugador1, this.dado1,this.dado2);
        }

        this.marcadorJugador1 = this.marcadorJugador1 + this.jugador1.puntoGanado;
        this.marcadorJugador2 = this.marcadorJugador2 + this.jugador2.puntoGanado;
    }

    iniciarJuego(): void {
        this.dado1 = new Dado();
        this.dado2 = new Dado();

        this.cantidadJugadas = 0;
        this.marcadorJugador1 = 0;
        this.marcadorJugador2 = 0;

        this.historial = []; // Limpiar historial

        this.elegirPrimerLanzador();

        do{
            this.iniciarJugada();
            this.cantidadJugadas++;

            this.historial.push(`Num. Jugada: ${this.cantidadJugadas} | Puntaje ${this.jugador1.nombre} = ${this.marcadorJugador1} | Puntaje ${this.jugador2.nombre} = ${this.marcadorJugador2}`);

        }while((this.marcadorJugador1 != 5) && (this.marcadorJugador2 != 5));

        this.vencedor = this.determinarVencedor();
    }

    determinarVencedor(): Jugador | null{
        //caso empate
        if (this.marcadorJugador1 === 5 && this.marcadorJugador2 === 5) return null;
        //Jugador 1 gana
        if (this.marcadorJugador1 === 5) return this.jugador1;
        //Jugador 2 gana
        if (this.marcadorJugador2 === 5) return this.jugador2;
        return null;
    }
}