function sendMessage(){
    var text = document.getElementById("user-input")
    var response = document.getElementById("response")

    
    console.log(text)

    // text = text + " This is my skills what is the jobs i should prefer give me the results in bullet points"

    fetch("response.php", {
        method: "post",
        body: JSON.stringify({
            text: text.value,
        }),

    })
    .then(res=>res.text())
    .then(res=>{
        response.innerHTML = res
    })
}
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.querySelector(".main-content").style.marginLeft = "250px";
  }
  
  function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.querySelector(".main-content").style.marginLeft= "0";
  }
  



  
  
  
  
  
  