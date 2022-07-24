document.getElementById("Logo").addEventListener("click",function(){
    window.location.href="index.html"
})


let username=localStorage.getItem("jioname")
console.log(username)
if(username.length>0){
    document.getElementById("usericon").className="fa-regular fa-circle-user"   
    document.getElementById("logdata").innerText=username
}
localStorage.setItem("jioname","")

    