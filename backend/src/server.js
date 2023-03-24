const express = require('express'); 
const cors = require('cors');


let player_data = new Array();
const app = express();  

app.use(cors({credentials: true,origin:["http://localhost:4200"]}))
app.use(express.json());

app.get("/api/players/all",(req,res) => {
    res.send(player_data);
})

app.post('/api/player/create',(req,res) => {
    player_data.push(req.body.playerObj);
    res.send(player_data);
})


app.post("/api/player/frame/update",(req,res) => {
    if(player_data[req.body.playerId-1].frame_number-1!=10){
        player_data[req.body.playerId-1].resalt_table[player_data[req.body.playerId-1].frame_number-1]=req.body.frameData;
        player_data[req.body.playerId-1].frame_number++;
    }
    res.send(player_data)
})


app.delete("/api/players/delete/all",(req,res) => {
    player_data = new Array();   
})



app.get("/api/get/score",(req,res) => {
    player_data.forEach(player=>{calc_score(player);});
    res.send(player_data)  
})



function calc_score(player){
    var tatal_score=0;
    for(var i=0;i<(player.resalt_table.length-1);i++){
        var local_sum=0;
        for(var j=0;j<((player.resalt_table[i].length));j++){
            if(player.resalt_table[i][0]===''){
                break;
            }
            if(player.resalt_table[i][0]==10){
                if(player.resalt_table[i+1][0]==10 && player.resalt_table[i+1][0]!=''){
                    if(i+2!=10){
              
                        local_sum=10+10+player.resalt_table[i+1][0];
                    }
                    else{
               
                        local_sum=10+10+player.resalt_table[i+1][1]
                    }
                }
            }
            else{
                local_sum+=player.resalt_table[i][j];
                if(local_sum==10 && player.resalt_table[i+1][0]!=''){
                    
                    local_sum+=player.resalt_table[i+1][0];
                }
            }            
       }
       tatal_score+=local_sum;
       player.score[i]=tatal_score;
    }
    player.resalt_table[9].forEach(element=>{
        if(element!=''){
            tatal_score+=element;
        }
    });
    player.score[9]=tatal_score;
}



const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:"+port)

})