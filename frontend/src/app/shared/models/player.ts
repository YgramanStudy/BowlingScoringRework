export class Player{
    id!:number;
    name!:string;
    frame_number!:number;
    resalt_table:any[]=Array(9).fill(["",""]);
    score:number[]=Array(10);
    // extra_turn:boolean=false;

    
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
        this.frame_number=1;
        this.resalt_table[9]=["","",""]

       
    }

    
}