
var box;
var gamestate = "preto"

 function setup() { createCanvas(400,400);
    
     
     box = createSprite(200,200,20,20);
     
     } function draw() { background;
        //grupo para movimentação do personagem
         if(keyDown("d")){ box.position.x = box.position.x + 5; } 
         if(keyDown("a")){ box.position.x = box.position.x - 5; }
         if(keyDown("w")){ box.position.y = box.position.y - 5; }
         if(keyDown("s")){ box.position.y = box.position.y + 5; }
        
         //grupo para o plano de fundo mudar de cor
         if(keyDown("1")){background("#0000CD"); }
         if(keyDown("1")){gamestate == "azul"}
         if(keyDown("2")){background("#00FF00"); }
         if(keyDown("3")){background("#A020F0"); }
         if(keyDown("4")){background("#FF0000"); }
         if(keyDown("5")){background("#FFFF00"); }

         if(gamestate == "azul"){background("#0000CD"); }

        

          drawSprites(); }




