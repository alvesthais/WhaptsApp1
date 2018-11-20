declare function require(msg:string) : any;
var readline = require('readline-sync');

import{Mensagem} from "./Mensagem";
import{Chat} from "./Chat";
import{Usuario} from "./Usuario";

export class WhatsApp{
    private usuarios: Array<Usuario>;
    private chats: Array<Chat>;

    public constructor(){
        this.usuarios= [];
        this.chats = [];
    }

    public getUsuarios(): any{
        return this.usuarios;
    }
    public setUsuarios(): void{
        this.usuarios = [];
    }
    public getChats(): any{
        return this.chats;
    }
    public setChats(): void{
        this.chats = [];
    }
    //             ------------------- metodos -------------------
    public mostrarUsuarios(): string{
        let res: string = " ";
        for (let i of this.usuarios){
            res += i.getUsuId + " ";
        }
        return res;
    }
    public buscaUsuarios(nome: string): any{
        for(let i of this.usuarios){
            if(i.getUsuId() == nome){
                return i;
            }
        } return undefined;
    }
    public buscaChat(chat: string): any{
        for(let i of this.chats){
            if(i.getChatId() == chat){
                return i;
            }
        } return undefined;
    }
    
    public buscarMensagensNovas(usuario: string, chat: string): Chat[]{
        let p : Usuario = this.buscaUsuarios(usuario);
        let g : Chat = this.buscaChat(chat);
        let res: Mensagem [] = [];
        if(p == undefined){
            console.log("pessoa não existe");
        }
        else if(g == undefined){
            console.log("grupo não existe");
        }
        else if(g.buscaUsuarios(usuario) == undefined){
            console.log("pessoa não está no grupo");
        }
        else{
            for(let m of g.getMensagens()){
                if(m.buscarLeitor(usuario) == undefined){
                    res.push(m);
                    m.getLeitores().push(p);
                }
            }
        }
        return res;

    }
    // ------------------- menu que ficaria na principal -------------------
    
    public iniciar(): void{
        let menu: string = readline.question("opções: \n 1 - add usuario; \n 2 - usuarios cadastrados; \n 3 - criar grupo; \n 4 - ver os chats; \n");
        
        if (menu == "1") {
            let id : string = readline.question("Digite o nome: ");
            let usu: Usuario = new Usuario(id);
            this.usuarios.push(usu);
            console.log ("done");
        }
        if (menu == "2"){
            console.log("usuarios cadastrados: " + this.mostrarUsuarios);
        }
        
        if (menu == "3"){
            let chatId: string = readline.question("Nome do grupo: ");
            let chat = new Chat(chatId);
            this.chats.push(chat);
            console.log("done");
        }
        if (menu == "4"){
            let nome : string = readline.question("Nome do usuario que participa dos chats: ");
            console.log("chats do usuario: " + this.buscaUsuarios); 
        }





    }

}