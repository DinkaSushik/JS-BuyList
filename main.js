$(function() {
    console.log("!!!")
    var ITEM_TEMPLATE = $(".bl-row-temp").html();
    var ITEM_TITLE = $(".temp").html();
    var ITEM_TITLED=$(".temped").html();
    var lIST=$(".bl-list");
    var lIST_TITLE=$(".bl-bought-temp");
    var lIST_TITLED=$(".bl-boughted-temp");
    var number = 1;
    $(".bl-add").click(function() {
       var input = $(".bl-input");
       var value = input.val();
       console.log(" input val " ,value);
       addItem(value);
    });
    
    
    function addItem(title) {
       if(title){
           var node =$(ITEM_TEMPLATE);
           var nodeTit=$(ITEM_TITLE);
           var nodeTited=$(ITEM_TITLED);
           node.fadeOut(250,	function(){
           $(node).find(".bl-product").text(title);
           $(node).find(".bl-label").text(number);
           $(nodeTit).find(".bl-storage").text(title);
           $(nodeTit).find(".bl-buyProd").text(number);
                node.fadeIn(250);
           });
           node.find(".bl-buttonsDel").click(function(){ //видалення продукта
               node.fadeOut(250,	function(){
               node.remove();
               nodeTit.remove();
                   
                   node.fadeIn(250);
           });
           });
           
           node.find(".bl-plus").click(function(){          //додаванян кількості продукта
               node.find(".bl-label").fadeOut(250,	function(){
               node.find(".bl-mines").css("background-color","red");
               var numberOfProduct = parseInt(node.find(".bl-label").text(),10);
               node.find(".bl-label").text(numberOfProduct+1);
               nodeTit.find(".bl-buyProd").text(numberOfProduct+1);
                     node.find(".bl-label").fadeIn(250);
           });
           });
           node.find(".bl-mines").click(function(){                                 //відніманя кількості продукта
                node.find(".bl-label").fadeOut(250,	function(){
               var numberOfProduct = parseInt(node.find(".bl-label").text(),10);
               if(parseInt(node.find(".bl-label").text(),10)>1){
                   node.find(".bl-label").text(parseInt(node.find(".bl-label").text(),10)-1);
                   nodeTit.find(".bl-buyProd").text(numberOfProduct-1);
               }if(parseInt(node.find(".bl-label").text(),10)<2){
                   node.find(".bl-mines").css("background-color","pink");
               }
                     node.find(".bl-label").fadeIn(250);
           });
               
           });
           node.find(".bl-buttonsBuy").click(function(){                //процес купування
               node.fadeOut(250,	function(){
                   node.find(".bl-buttonsNotBuy").show();
                   node.find(".bl-buttonsBuy").hide();
                   node.find(".bl-product").css("text-decoration","line-through");
                   node.find(".bl-plus").hide();
                   node.find(".bl-mines").hide();
                   node.find(".bl-buttonsDel").hide();
                   nodeTit.find(".bl-storage").hide();
                   nodeTit.find(".bl-buyProd").hide();
                   nodeTited.find(".bl-storage").text(nodeTit.find(".bl-storage").text());
                   nodeTited.find(".bl-buyProd").text(nodeTit.find(".bl-buyProd").text());
                   nodeTited.find(".bl-storage").show();
                   nodeTited.find(".bl-buyProd").show();
                   lIST_TITLED.append(nodeTited);
                   node.fadeIn(250);
               });
           });
           
           node.find(".bl-buttonsNotBuy").click(function(){         //процес відміни
               node.fadeOut(250,function(){
                   node.fadeIn(700);
                   node.find(".bl-buttonsNotBuy").hide();
                   node.find(".bl-buttonsBuy").show();
                   node.find(".bl-product").css("text-decoration","none");
                   node.find(".bl-plus").show();
                   node.find(".bl-mines").show();
                   node.find(".bl-buttonsDel").show();
                   nodeTit.find(".bl-storage").show();
                   nodeTit.find(".bl-buyProd").show();
                   nodeTited.find(".bl-storage").hide();
                   nodeTited.find(".bl-buyProd").hide();
                   lIST_TITLED.append(nodeTited);
                   node.fadeIn(250);
               });
           });
    
           node.find(".bl-product").click(function(){
               node.find(".inputReduct").val(node.find(".bl-product").text());
                node.find(".bl-product").hide();
               node.find(".inputReduct").show();
                   });
                    
               
              node.find(".inputReduct").focusout(function(){
                   node.find(".inputReduct").hide();
                  var input2 = node.find(".inputReduct");
                    var value2 = input2.val();
                    node.find(".bl-product").text(value2);
                   node.find(".bl-product").show();
                  nodeTit.find(".bl-storage").text(value2);
                  
              })
           
          
           lIST.append(node);
           lIST_TITLE.append(nodeTit);
        
    
       }  
    }
    

    addItem("Печиво");
    addItem("Сир");
    addItem("Помідори");
    

    

});
