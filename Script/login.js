document.querySelector("form").addEventListener("submit",checkpassword)

let dataarr=JSON.parse(localStorage.getItem("jiodata"))||[]
let currentno=JSON.parse(localStorage.getItem("cno"))||1234567894;
document.getElementById("loginnumber").innerText=currentno
document.getElementById("change").addEventListener("click",function(){
    window.location.href="Sign-in.html"
})
function checkpassword(){
    event.preventDefault();
    let Pass=document.getElementById("pass").value
    dataarr.forEach(function(ele ,index) {
        if(Pass==ele.Pass&&currentno==ele.phone){
            window.location.href="index.html"
            localStorage.setItem("jioname",ele.fname)
        }else{
            alert("Wrong Password")
        }
    });
}