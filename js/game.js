
//FUNCTION FOR UNDO LEFT
  //GETTING HANG ONCE ALL TILES ARE FILLED

//for generalising change 4 and 4 by row and col variable
var Game = (function() {
console.log("step1");
    var mat = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
 var x;
 var y;
  var value;
    var score = 0;
    var show2048dialog = false;
    var temp ;
function makeitawesome(i ,j){
    if(mat[i][j]==2){
     document.getElementById("tile" +i+j).style.backgroundColor = "#eee4da";
     document.getElementById("tile" +i+j).style.color = "black";
    }
    if(mat[i][j]==4){
             document.getElementById("tile" +i+j).style.backgroundColor = "#ede0c8";
     document.getElementById("tile" +i+j).style.color = "black";
        
    }
    if(mat[i][j]==8){
             document.getElementById( "tile" +i+j).style.backgroundColor = "#f2b179";
     document.getElementById("tile" +i+j).style.color = "white";
        
    }
    if(mat[i][j]==16){
             document.getElementById("tile" +i+j).style.backgroundColor = "#f59563";
     document.getElementById("tile" +i+j).style.color = "white";
    }
    if(mat[i][j]==32){
             document.getElementById("tile" +i+j).style.backgroundColor = "#f67c5f";
     document.getElementById("tile" +i+j).style.color = "white";
        
    }
    if(mat[i][j]==64){
             document.getElementById("tile" +i+j).style.backgroundColor = "#f65e3b";
     document.getElementById("tile" +i+j).style.color = "white";
        
    }
    if(mat[i][j]==128){
             document.getElementById("tile" +i+j).style.backgroundColor = "#edcf72";
     document.getElementById("tile" +i+j).style.color = "white";
        
    }
    if(mat[i][j]==256){
             document.getElementById("tile" +i+j).style.backgroundColor = "red";
     document.getElementById("tile" +i+j).style.color = "white";
        
    }
    if(mat[i][j]==512){
             document.getElementById("tile" +i+j).style.backgroundColor = "purple";
     document.getElementById("tile" +i+j).style.color = "white";
        
    }
    if(mat[i][j]==1024){
             document.getElementById("tile" +i+j).style.backgroundColor = "blue";
     document.getElementById("tile" +i+j).style.color = "white";
        
    }
    if(mat[i][j]==2048){
             document.getElementById("tile" +i+j).style.backgroundColor = "red";
     document.getElementById("tile" +i+j).style.color = "white";
        
    }
    if(mat[i][j]==4096){
             document.getElementById("tile" +i+j).style.backgroundColor = "black";
     document.getElementById("tile" +i+j).style.color = "white";
        
    }
    if(mat[i][j]==0){
        document.getElementById("tile" +i+j).style.backgroundColor = "#CDC1B4";
     document.getElementById("tile" +i+j).style.color = "black";
    }
   
} 
function antirotate(){
    transpose();
    for (var i=0;i<4;i++){
        for(var j=0;j<2;j++){
                var temp = mat[j][i];
                mat[j][i] = mat[4-1-j][i];
                mat[4-1-j][i] = temp;
            
        }
    }
}

    function  rotate(){
    for (var i = 0; i < 4 / 2; i++) {
        for (var j = i; j < 4 - i - 1; j++) {
            
             temp = mat[i][j];
            mat[i][j] = mat[4 - j - 1][i];
            mat[4 - j - 1][i] = mat[4 - i - 1][4 - j - 1];
            mat[4 - i - 1][4 - j - 1] = mat[j][4 - i - 1];
            mat[j][4 - i - 1] = temp;
        }
    }
}
      function transpose(){
    for (var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if (j < i){
                temp = mat[i][j];
                mat[i][j] = mat[j][i];
                mat[j][i] = temp;
            }
        }
    }
}

function getRandomEmptyCell() {
       console.log("step4");
  
            var tryx =Math.floor( Math.random() * (4));
            
            
           
              var tryy = Math.floor( Math.random() * (4));
            
              
        if( document.getElementById("tile" +tryx +tryy).innerHTML == 0 ){
                 x = tryx;
                y = tryy;
        }
        else{
            console.log("step4.5");

            getRandomEmptyCell();

          }  
    }

  /*  function fillOneRandomEmptyCell() {     //WHY NOT WORKING

        var coord = getRandomEmptyCell();
        var value = getRandomValue();
        mat[coord.x][coord.y] = value;
    }
        }
        }
*/
function fillOneRandomEmptyCell() {//NORT BUILD ,BUILD PROPERLY
    console.log("step3");
        getRandomEmptyCell();
        var coordx = x;
         var coordy = y;
        
        
         getRandomValue();
         var z = value;
         mat[coordx][coordy] = value;
    }
  function getRandomValue() {
        console.log("step5");
       
         var random = Math.random()*10;
       

        if(random < 6  ){
            value = 2;
        }
       
         else{
             value =4  ;
        }

        console.log(value);
       
    }

    // checks if gameover
   function isGameOver() {
        var g=0;
         for (var i =0;i<3 ;i++) {
            for(var j= 0;j<3;j++){
                
                if(i==3){
                    if(mat[i][j]!=mat[i][j+1]){
                      continue;
                  }
                  else{
                    g++;
                  }
                } 
                else if(j==3){
                    if(mat[i][j]!=mat[i+1][j]){
                    continue;
                    }
                    else{
                     g++;
                    }
                  }
                
               else if(mat[i][j+1]!=0 &&mat[i+1][j]!=0){
                  if( mat [i][j]!=0 &&mat[i][j]!=mat[i+1][j] && mat[i][j]!=mat[i][j+1]){
                    continue;
                  }
                  else{
                    g++
                  }


                }
                else{
                  g++;
                }
            }
        }
        if(g==0){
          return true;
        }
        else{
          return false;
        }

}

    // function to change state of mat;
    // and set show2048dialog variable if required
function moveLeft() {
    antirotate();
    moveDown();
    rotate();

    }
    function moveRight() {
        antirotate();
    antirotate();
    antirotate();
    moveDown();
    antirotate();
    }
    function moveTop() {
        antirotate();
    antirotate();
    moveDown();
    rotate();
    rotate();
    }
    // reflect state of mat
    function redraw() {
    
       for (var i =0;i<4 ;i++) {
            for(var j= 0;j<4;j++){   
                makeitawesome(i ,j);
                var l = "tile" +i +j;
              // if(mat[i][j]!=0){
                document.getElementById("tile" +i +j).innerHTML = mat[i][j];
                //}
                //else{
                  //   document.getElementById("tile" +i +j).innerHTML ="";
                //}
                if(mat[i][j] === 2048){
                    show2048dialog =true;
                                   
                }
            }
        }
    }

       // randomw number between 2 and 4
 function moveDown() { 
   for( var j = 3;j>=0;j--){
        for(var i=3;i>=0;i--){
           
                if(mat[i][j] != 0){
                    var g=0;
                    for(var k=i+1;k<=3;k++){
                        if(mat[k][j]==0){
                            g++;
                        } 
                        else{
                            break;
                        }
                    
                    }
                   
                    if(g!=0){ 
                    mat[i+g][j]=mat[i][j];
                    mat[i][j]=0;
                    }    

            }
        }
    }
    for( var j = 3;j>=0;j--){
        for(var  i=2;i>=0;i--){ 
            if (mat[i+1][j]==mat[i][j])
            {    if(score==0){
                        score=2*(mat[i][j]);
                    }
                    else{
                        score=score+(2*(mat[i][j]));
                    }

                    console.log(score);
                    document.getElementById("scorebox").innerHTML = "Score:" +score;
                    document.getElementById("scorebox").style.fontSize = "37px";
                    document.getElementById("scorebox").style.fontWeight = "900";
                mat[i+1][j]=2*mat[i+1][j];
                var k=i;
                while(k>0){
                    mat[k][j]=mat[k-1][j];
                    mat[k-1][j]=0;
                    k--;
                }
                if(k==0){
                    mat[k][j]=0;
                }
            }
        
        }
    }
  } 

 /*
    console.log("yo");
    for (var i =0;i<4 ;i++) {
        for(var j= 0;j<4;j++){
            if(mat[i][j]==0){
                for(var k=i;k>0;k--){
                    mat[k][j] = mat[k-1][j];
                    mat[k-1][j] = 0;
                }
            }      
        }
    }

    for (var i=3;i>0;i--){
        for(var j=3;j>=0;j--){   
            if(mat[i][j]==mat[i-1][j]){
          
                    if(score==0){
                        score=2*(mat[i][j]);
                    }
                    else{
                        score=score+(2*(mat[i][j]));
                    }

                    console.log(score);
                    document.getElementById("scorebox").innerHTML = "Score:" +score;
                    document.getElementById("scorebox").style.fontSize = "37px";
                    document.getElementById("scorebox").style.fontWeight = "900";
                    mat[i][j] = mat[i][j]+mat[i-1][j];
                    mat[i-1][j]=0;
                    for(var k=i-1;k>0;k--){
                        mat[k][j]=mat[k-1][j];
                        mat[k-1][j]=0;
                    }
                
                
            }
        }   
    }*/
    
    // show Dialog for GameOver()
    //   WRONG WHAT IF BOX IS FULL BUT SAME VALUES ARE CONSECUTIVE
    function showGameOverDialog() {
       document.getElementById("box").innerHTML ="YOUloose";
        document.getElementById('box').style.display = 'block'
    }

    // show dialog for 2048
    function show2048Dialog() {
    document.getElementById('box').style.display = 'block'//   WRONG WHAT IF BOX IS FULL BUT SAME VALUES ARE CONSECUTIVE
         document.getElementById("box").innerHTML ="YOU won";
         
    }
      function reset(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        mat = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
        score = 0;
        fillOneRandomEmptyCell();
        redraw();
        fillOneRandomEmptyCell();
        redraw();
        
       
        document.getElementById("scorebox").innerHTML = "Score:" +0;

    }
   function move(e) {
        //depending upon keypress you call the respective function
       
        if (isGameOver()) {
            showGameOverDialog();
        }
        if (show2048dialog === true) {
          show2048Dialog();
                    console.log(show2048dialog); 
                    show2048dialog = false;    
            console.log("ti");
            
           // 
        }
    

    if (e.keyCode == '38') {
        console.log("q1");
      
       // redraw();
        moveTop();
        fillOneRandomEmptyCell();
        redraw();
        // up arrow
    }
    else if (e.keyCode == '40') {
         console.log("q2");
        
        moveDown();
        fillOneRandomEmptyCell();
        
        redraw();
        // down arrow
    }
    else if (e.keyCode == '37') {
         console.log("q3");
        
        moveLeft();
        fillOneRandomEmptyCell();
        redraw();
       // left arrow
    }
    else if (e.keyCode == '39') {
         console.log("q4");
          
        moveRight();
        fillOneRandomEmptyCell();
        redraw();
       // right arrow
    }
}
function direction(tag){
        if(tag == "moveleft"){
            mergeLeft();
        }
        else if(tag == "moveup"){
            mergeUp();
        }
        else if(tag == "moveright"){
            mergeRight();
        }
        else if(tag == "movedown"){
            mergeDown();
        }
    }
    function init() {
        console.log("step2");
        reset();
        if (annyang) {
            var commands = {
                '*tag': direction
            };
            annyang.addCommands(commands);
            annyang.debug();
            annyang.start();
        }
       
        // add reset method on click actions of all the reset elements
      window.addEventListener('keydown', move);  
      var ng =document.getElementById("yo");
      ng.addEventListener('click', reset);



}

    return {
        init : init()
    };
} ) ();

