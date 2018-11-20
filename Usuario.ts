import {Chat} from "./Chat";

export class Usuario{
    private usuId: string;
    private rChat: Array<Chat>;

    constructor(usuId: string) {
        this.usuId = usuId;
        this.rChat = new Array<Chat>();
    }

    public getUsuId(): string {
        return this.usuId;
    }
    public setUsuId(usuId: string) : void{
        this.usuId = usuId;
    }

    public getrChat(): Array<Chat> {
        return this.rChat;
    }
    public setrChat(chat: Array<Chat>): void{
        this.rChat = this.rChat;
    }
    // ------------------- metodos -------------------

	public get usId(): string {
		return this.usuId;
}

    hasChat (chatId : string) : boolean{
        return ; 
    }
    getChats(): Array<string>{
        return ;
    }
    getChat(chatId: string): Chat{
        return ;
    }
    mostraChats(): string{
        let saida = "[ " ;
        return saida;
    }

    public mostraGrupos(): string{
        let saida = "[ ";
        for (let elem of this.rChat.keys())
            saida += elem + " ";
        return saida;
    }
/*
    public addGrupo(chat: Chat){
        this.rChat.add(chat.getChatId, Chat);
        chat.addUsuChat(this);

        try{
            this.rChat(chat.getChatId, Chat);
            this.rChat.addUsuChat(this);
        }
        catch(e){
        } 
        */
       toString() : string{
        return this.usuId;
        }
    } 