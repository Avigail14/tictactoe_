var pick="x"
var counter=0
var x_moves=[0,0,0,0,0,0,0,0,0]
var o_moves=[0,0,0,0,0,0,0,0,0]

var winning_situation =[
	[1,1,1,0,0,0,0,0,0], 
	[0,0,0,1,1,1,0,0,0], 
	[0,0,0,0,0,0,1,1,1], 
	[1,0,0,1,0,0,1,0,0], 
	[0,1,0,0,1,0,0,1,0], 
	[0,0,1,0,0,1,0,0,1], 
	[1,0,0,0,1,0,0,0,1], 
	[0,0,1,0,1,0,1,0,0]];

var winning = "";
var X_Winning = 0;
var O_Winning = 0;


function generateGame(){
    restartVariables()
    var box= 0 
    var div = document.getElementById("game-board");
    div.innerHTML=``
    for (let i = 0; i < 3; i++) {
        var uu = document.createElement("br");
        div.appendChild(uu);
        for (let j = 0; j < 3; j++) {
            var button = document.createElement("input");
            button.setAttribute("type", "button");
            button.setAttribute("class", "grid-cell");
            button.setAttribute("onclick", "markCheck(this)");
            button.setAttribute("value"," ")
            div.appendChild(button);
            button.setAttribute("id",box);
            box=box+1
           
        
            
        }
    }
}

function restartVariables(){
    pick="x"
    counter=0
    x_moves=[0,0,0,0,0,0,0,0,0]
    o_moves=[0,0,0,0,0,0,0,0,0]
    winning = "";
}



function Is_Winning(winning_situation, moves){
    for (let i = 0; i <8;i ++){
        let result = true
        for (let k=0 ; k < 9; k++){

            result = result && winning_situation [i][k]== winning_situation [i][k] * moves[k];
        }
        if(result==true){
            return true
        }
    }
    return false
}


function markCheck(obj){
    if (winning==""){

    
    counter=counter+1
obj.setAttribute("disabled","disabled")


if (pick=="x"){
    obj.setAttribute("value","x");
    obj.setAttribute("class","green-player");
    pick="o";
    
    x_moves[obj.id]=1
    console.log(`player x marked ${obj.id}!`);
    if(Is_Winning (winning_situation, x_moves)){
        alert("x is winning ");
        winning = "x";
        X_Winning += 1;
        document.getElementById('score-X').innerHTML = X_Winning;
    }
    

    
}else if (pick=="o"){
    obj.setAttribute("value","o");
    obj.setAttribute("class","red-player");
    pick="x";
    
    o_moves[obj.id]=1
    console.log(`player o marked ${obj.id}!`);
    if(Is_Winning (winning_situation, o_moves)){
        alert("o is winning ");
        winning = "o";
        O_Winning += 1;
        document.getElementById('score-O').innerHTML = O_Winning;
    }

}if (counter==9 && winning==""){

    alert("Game Draw")
    console.log("o_moves: ")
    console.log(o_moves)
    console.log("x_moves: ")
    console.log(x_moves)
    winning = "";

}
    }

}

function generateGameRe(){
    if (document.getElementById('score-X').innerHTML == 0 && document.getElementById('score-O').innerHTML == 0){
        alert("There's nothing to restart.")
    }
    document.getElementById('score-X').innerHTML = 0;
    document.getElementById('score-O').innerHTML = 0;
    X_Winning = 0;
    O_Winning = 0;

    
}
