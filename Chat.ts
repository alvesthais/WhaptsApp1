import {Usuario} from "./Usuario";
import { Mensagem } from "./Mensagem";
import {WhatsApp} from "./WhatsApp";

export class Chat{
    private usuarios: Array<Usuario>;
    private chatId: string;
    public chat: Array<Mensagem>;

    public constructor(chatId: string){
        this.usuarios= [];
        this.chatId = chatId;
        this.chat = [];
    }

    public getUsuarios(): Array<Usuario>{
        return this.usuarios;
    }
    public setUsuarios(usuarios: Array<Usuario>) : void{
        this.usuarios = usuarios;
    }
    public getChatId(): string{
        return this.chatId;
    }
    public setChatId(chatId: string) : void{
        this.chatId = chatId;
    } 
    // ------------------- metodos -------------------
    public addMsg(mensagem : Mensagem){
        this.chat.unshift(mensagem);
    }
    public naoLido(){
        return this.chat.length; 
    }
    public getMensagens() : Array<Mensagem>{
        let mensagens = this.chat;
        this.chat = [];
        return mensagens;
    }
    public enviaMsg(usuId: string, mensagem: Mensagem){

    }
    public getUsus(): Array<string>{
        let lista = [] ;
        for (let i = 0; i < this.usuarios.length; i++){
            console.log(i);
            lista.push(this.usuarios[i]) ;
        }
    return lista;
    }
/*    public naoLidos (usuId: string): number{
            let entrada = this.usuarios.get(usuId);
            if (entrada){
                return entrada.naoLidos();
            }
            return 0;
            //let 
            //if (!entrada){
               // return 0;
            //}
        return entrada.naoLidos();
    }
    public temUsuario(usuId: string) : boolean{
        let entrada = this.usuarios.find(usuId);
        if (!entrada){
            return false;
        }
        return true;
    } 
}
}

/*  
        let inbox = this.rgUserinbox.find(x => x._user.userId == userId);
        if (!inbox)
            return 0;
        return inbox.unreadCount();
    }

    hasUser (userId: string): boolean{
        let inbox = this.rgUserinbox.find(x => x._user.userId == userId);
        if (!inbox)
            return false;
        return true;
    }

    addUserGrupo(user: User){
        let inbox = this.rgUserinbox.find(x => x._user == user);
        console.log(inbox);
        if (!inbox) {
            console.log(1);
            this.rgUserinbox.push(new UserInbox(user));
            console.log(2);
        } else {
            throw new Error("Usuario " + user.userId + " já esta no grupo\n");
        }
        console.log(3);
    }
    toString(): string{
        return this._grupoId;
    }

  /*   addByInvite(invited: User) {
        console.log("varios1");
        if (this.userInboxes.has(invited.userId)) {
            console.log("varios 2")
            return;
        }
        console.log("varios 3");
        this.userInboxes.set(invited.userId, new UserInbox(invited));
        console.log("varios 4");
        invited.addGrupo(this);
        console.log("varios 5");
    }   

    /* rmUserChat (user: User){
        for(let key of this.rep_chat.keys()){
            if(this.rep_chat.get(key).hasUser(user.userId)){
                user.userId.split(user.userId, 1);
            }
        }
        throw new Error("Erro | Este usuário não existe")
    } */ 
}
