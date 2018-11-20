declare function require(msg:string) : any;
var readline = require('readline-sync');

import {Mensagem} from "./Mensagem";
import {Usuario} from "./Usuario";
import {Chat} from "./Chat";
import {WhatsApp} from "./WhatsApp";

export class Wpp{
    private usuarios: Array<Usuario>;
    private grupos: Array<Chat>;

    super () {
        this.usuarios = Array<Usuario>();
        this.grupos = Array<Chat>();
    }
    public getUsuarios(): Array<Usuario>{
        return this.usuarios;
    }
    public setUsuarios(usuarios: Array<Usuario>) : void{
        this.usuarios = usuarios;
    }
    public getGrupos() : Array<Chat>{
        return this.grupos;
    }
    public setGrupos(grupos : Array<Chat>) : void{
        this.grupos = grupos;
    }
}
    // ------------------- metodos -------------------
    