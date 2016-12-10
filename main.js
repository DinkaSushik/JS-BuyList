$(function() {
    console.log()
    var ITEM_TEMPLATE = $(".bl-row-temp").html();
    var ITEM_TITLE = $(".temp").html();
    var ITEM_TITLED=$(".temped").html();
    var lIST=$(".bl-list");
    var lIST_TITLE=$(".bl-bought-temp");
    var lIST_TITLED=$(".bl-boughted-temp");
    var number= 1;
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
    }
        відніманя кількості продукта
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
    
 

    addItem("Печиво");
    addItem("Сир");
    addItem("Помідори");
    