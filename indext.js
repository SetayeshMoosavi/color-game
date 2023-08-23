let data=[[ , , ], [ , , ] ,[ , , ] ,[ , , ] ,[ , , ] ,[ , , ]]
let a=0
NewColors()
function NewColors(){
    for( let i=0; i<6; i++){
        data[i][0]=RandomColor()
        data[i][1]=RandomColor()
        data[i][2]=RandomColor()
    }
    for (let i=0; i<6; i++){
        document.getElementById(i).style.backgroundColor="#"+(data[i][0]).toString(16)+(data[i][1]).toString(16)+(data[i][2]).toString(16)
    }
    a=Math.floor(Math.random()*6)
    document.getElementById("question").innerHTML="RGB (" +data[a][0] +","+ data[a][1] +","+data[a][2]+")"
}

function checkTheAnswer(x){
    if (a==x){
        document.getElementById("result").innerHTML ="you won"
       
    }
    else{
        document.getElementById("result").innerHTML ="you lost"
    }
    for (let i=0; i<6; i++){
        document.getElementById(i).disabled = true
    }
    

}

function RandomColor() {
    a=Math.floor(Math. random() * 256)
    return a 
}

function RESET(){
    NewColors()
    document.getElementById("result").innerHTML =""
    for (let i=0; i<6; i++){
        document.getElementById(i).disabled = false
    }
    
}



