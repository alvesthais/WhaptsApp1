import {Usuario} from "./Usuario";

export class Mensagem{
    private mensagem: string;
    private usuario: Usuario;
    private leitores: Array<Usuario>

    public constructor(mensagem: string, usuario: Usuario){
        this.mensagem = mensagem;
        this.usuario = usuario;
        this.leitores = new Array<Usuario>();

    }
    public getMensagem() : string{
        return this.mensagem;
    }
    public setMensagem(mensagem : string): void{
        this.mensagem = mensagem;
    }
    public getUsuario() : Usuario{
        return this.usuario;
    }
    public setUsuario(usuario: Usuario): void{
        this.usuario = usuario;
    }
    public getLeitores(): Array<Usuario>{
        return this.leitores;
    }
    public setLeitores(leitores: Array<Usuario>) : void{
        this.leitores = leitores;
    }

    public buscaLeitor(leitores: string): Usuario{
        for(let i of this.leitores){
            if(i.getUsuId() == leitores){
                return i;
            }
        } return undefined;
    }
} // ------------------- metodos -------------------
