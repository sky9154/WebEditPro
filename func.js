function set(){
    document.getElementById("tab1").style.backgroundColor="rgb(99, 115, 131)";
    document.getElementById("tab2").style.backgroundColor="lightslategrey";
    document.getElementById("css").style.display="none"
}
function openPage(pageName) {
    if(pageName=="html"){
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="none";
        document.getElementById("tab1").style.backgroundColor="rgb(99, 115, 131)";
        document.getElementById("tab2").style.backgroundColor="lightslategrey";
    }
    if(pageName=="css"){
      document.getElementById("html").style.display="none";
      document.getElementById("css").style.display="block";
      document.getElementById("tab1").style.backgroundColor="lightslategrey";
      document.getElementById("tab2").style.backgroundColor="rgb(99, 115, 131)";
    }
}
