function seterror(id,error){
    let element=document.getElementById('search');
    element.getElementsByClassName('search-input')[0].innerHTML=error;
}
function validateform(){
    var returnval=true;
    var search=document.forms['searchbox']['search'].value;
    if(search.length==0){
        alert("search box can't be empty");
        returnval=false;
    }
return returnval;
}