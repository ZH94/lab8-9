window.onload= function()
{ returncallback();};

function returncallback()
{
    
    $("lookup").observe('click', function(){
        var term= $('term').getValue();
        new Ajax.Request(
            "world.php",
            {
                parameters: {lookup:term},
                method: "get",
                onSuccess:function(transport)
                {
                    var data= transport.responseText || "no response text";
                    alert(data);
                    $('result').update(data);
                }, onFailure: function() {alert("Did not response");}
            });
            
    
    });
}



/*
Ajax.Request("world.php",
{
    method: "get",
    onSuccess: success,
   });
   
if {
    
}
  else
  {
      
  }
function success(ajax){
    var deff = document.getElementById("result").value;
    deff.innerHTML=alert(deff);
    
}
function failure()
{
    alert("Not acceptable");
} 
*/
