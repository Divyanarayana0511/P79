var menuarray=["Tandoori Pizza","chicken pizza","Veg extravaganza","Peppercorn pizza"];

function showmenu(){
    var htmldata="<ol id='menulist'>"
    for (i=0;i<menuarray.length;i++){
        htmldata=htmldata+"<li>"+menuarray[i]+"</li>";
    }
    htmldata=`${htmldata}</ol>`;
    document.getElementById("displaymenu").innerHTML=htmldata;
    console.log(htmldata);
}
function newmenu(){
    var newitem1=document.getElementById("newitem").value;
    document.getElementById("newitem").innerHTML="";
    console.log(newitem1);
    menuarray.push(newitem1);
    var htmldata1=document.getElementById("displaymenu").innerHTML;
    htmldata1= htmldata1+"<li>"+menuarray[menuarray.length]+"</li>";
    console.log(htmldata1);
    document.getElementById("displaymenu").innerHTML=htmldata1;

}