
const slashPositions = 
{
 "slashTopRowTop"        : "47px",  //slot 1 to slot3
 "slashMiddleRowTop"     : "149px", //slot 4 to slot6
 "slashBottomRowTop"     : "249px", //slot 7 to slot9
 "slashVertLeftColLeft"  : "-94px",
 "slashVertCenterColLeft": "10px",  //slod 2 to slot8
 "slashVertRightColLeft" : "110px",
 "slashVertColsTop"      : "146px",
 "slashHorizontalLeft"   : "7px",
 "slashDiagSlot1to9Top"  : "144px",
 "slashDiagSlot7to3Top"  : "145px",
 "slashDiagSlot1to9Left" : "3px",
 "slashDiagSlot7to3Left" : "4px"
};

function showWinSlash(winCode,winner)
{
   if (winCode === "nw") return;
   var myRawSlash = document.getElementById("winSlash");
   var myWinnerBox = $("#winnerBox");
   var mySlash = $("#winSlash");  
   if ((winner == 'x') || (winner == 'X'))
   {
      mySlash.attr("src","winSlashRed.png");
   }
   if ((winner == 'o') || (winner == 'O')) 
   {
      mySlash.attr("src","winSlashBlue.png");
   }

    // whereWin codes will be: nw, tr, mr, br, lc, cc, rc, dl, dr
    // meaning repectively:    no win, top row, middle row, bottom row, left col, center col, right col,
    //                         diagonal up left to down right, diagonal down left to up right 
   switch (winCode) 
    {
      case "tr" :
         document.getElementById("winSlash").style.transform = "rotate(0deg)";
         document.getElementById("winSlash").style.top  = slashPositions["slashTopRowTop"];
         document.getElementById("winSlash").style.left = slashPositions["slashHorizontalLeft"];
      break
           
      case "mr" :
         document.getElementById("winSlash").style.transform = "rotate(0deg)";
         document.getElementById("winSlash").style.top  = slashPositions["slashMiddleRowTop"];
         document.getElementById("winSlash").style.left = slashPositions["slashHorizontalLeft"];
      break
       
       case "br" :
         document.getElementById("winSlash").style.transform = "rotate(0deg)";
         document.getElementById("winSlash").style.top  = slashPositions["slashBottomRowTop"];
         document.getElementById("winSlash").style.left = slashPositions["slashHorizontalLeft"];
       break
      case "lc" :
         document.getElementById("winSlash").style.transform = "rotate(90deg)";
         document.getElementById("winSlash").style.top  = slashPositions["slashVertColsTop"];
         document.getElementById("winSlash").style.left = slashPositions["slashVertLeftColLeft"];
      break
           
      case "cc" :
         document.getElementById("winSlash").style.transform = "rotate(90deg)";
         document.getElementById("winSlash").style.top  = slashPositions["slashVertColsTop"];
         document.getElementById("winSlash").style.left = slashPositions["slashVertCenterColLeft"];
      break
       
       case "rc" :
         document.getElementById("winSlash").style.transform = "rotate(90deg)";
         document.getElementById("winSlash").style.top  = slashPositions["slashVertColsTop"];
         document.getElementById("winSlash").style.left = slashPositions["slashVertRightColLeft"];
       break

       case "dl" :
         document.getElementById("winSlash").style.transform = "rotate(45deg)";
         document.getElementById("winSlash").style.top  = slashPositions["slashDiagSlot1to9Top"];
         document.getElementById("winSlash").style.left = slashPositions["slashDiagSlot1to9Left"];
       break
       
       case "dr" :
         document.getElementById("winSlash").style.transform = "rotate(-45deg)";
         document.getElementById("winSlash").style.top  = slashPositions["slashDiagSlot7to3Top"];
         document.getElementById("winSlash").style.left = slashPositions["slashDiagSlot7to3Left"];
       break
   }
   mySlash.removeClass("winSlashHidden");
   mySlash.addClass("winnerShow");
    
   //console.log(winCode);

}  // end showWinSlash


function showCatsGame()
{
  let sweetKitty =  $("#winnerCat");
  sweetKitty.removeClass("winIsUnknown");
  sweetKitty.addClass("showCatWin");
  
}

$( init );

function createUUID() {
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
   });
}   
var universalGameId;

function init ()
{

   universalGameId = createUUID();  
   $("#gameID").val(universalGameId);
   console.log(universalGameId);
   //console.log (slashPositions["slashTopRowTop"]);
    // whereWin codes will be: nw, tr, mr, br, lc, cc, rc, dl, dr
    // meaning repectively:    no win, top row, middle row, bottom row, left col, center col, right col,
    //                         diagonal up left to down right, diagonal down left to up right 
    
   $("#testWins").click( function() 
   {
     const winPlace = $("#slashCode").val();
      showWinSlash(winPlace,'x');
   });

   $('.xpieces').draggable();
   $('.opieces').draggable();

  

   var pieces = $("#startZone1 div");
   pieces.each(function()
   {
                 
       $(this).addClass("draggablePiece")
       .css({   
      }) //end $(this).addClass
       
   }); //end fo pieces.each(function())

   pieces = $("#startZone2 div")
   pieces.each(function()
   {
      $(this).addClass("draggablePiece")
      .css({   
      }) //end $(this).addClass
  
   });// end to pieces.each(function())

   $("#movePieceX").click(function() {
      
      var   gameCode  = $("#gameID").val();
      var   slot      = $("#slot").val();    
      let responseJM = "";
      responseJM =  movePiece(gameCode, 'x', slot);
     
      let responseArray = responseJM.split("|");
      console.log(responseArray[2]);
      console.log(responseArray[3]);
      console.log(responseArray[4]);
      showWinSlash(responseArray[4],responseArray[3]);
      $("#thePoop").val(responseArray.toString());
       
     
   }); // end "#movePieceX").click


   $("#movePieceO").click(function() {
      
      var   gameCode  = $("#gameID").val();
      var   slot      = $("#slot").val();    
      let responseJM = "";
      responseJM =  movePiece(gameCode, 'o', slot);
     
      let responseArray = responseJM.split("|");
      console.log(responseArray[2]);
      console.log(responseArray[3]);
      console.log(responseArray[4]);
      showWinSlash(responseArray[4],responseArray[3]);
      $("#thePoop").val(responseArray.toString());
      

   }); // end "#movePieceO").click
   implementLogic();

}  // end init()

function implementLogic() 
{
    
    $(".draggablePiece").draggable({
        revert:"invalid",
        start:function() {
              
         
         if($(this).hasClass("droppedPiece"))
            {
                $(this).removeClass("droppedPiece");
                $(this).parent().removeClass("piecePresent");
            }
        }
        });
    $(".droppableSpace").droppable({
        hoverClass:"ui-state-highlight",
        accept:function(){
           return !$(this).hasClass("piecePresent") 
        },
        drop:function (event, ui) 
        {
           
           var draggableElement = ui.draggable;
           var droppedOn = $(this);
                                        
            droppedOn.addClass("piecePresent");
            $(draggableElement)
             .addClass("droppedPiece")
             .css({
                 top:0,
                 left:0,
                 position:"relative"
             }).appendTo(droppedOn);
             var dragID = ui.draggable.attr('id');
            console.log("piece: " + dragID.substring(0,1));
            console.log("space on: " + this.id);
            var arSlot = (this).id.substring(4,5);
            arSlot--;
           // alert("ready: " + arSlot);
            let responseJM = movePiece("dummy",dragID.substring(0,1),arSlot);
            let responseArray = responseJM.split("|");
            //
            showWinSlash(responseArray[4],responseArray[3]);
            $("#thePoop").val(responseArray.toString());
            $("#outPut").val(moveCount);
            if ((responseArray[4] =="nw") && (moveCount > 8))
            {
               showCatsGame();
            }
            
        } // end of drop:function
    }); // end $(".droppableSpace").droppable
}  // end implementLogic()



