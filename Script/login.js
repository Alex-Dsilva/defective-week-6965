document.querySelector("form").addEventListener("submit",checkpassword)

let dataarr=JSON.parse(localStorage.getItem("jiodata"))||[]
let currentno=JSON.parse(localStorage.getItem("cno"))||1234567894;
console.log(currentno)
document.getElementById("number").value=currentno
document.getElementById("change").addEventListener("click",function(){
    window.location.href="Sign-in.html"
})
function checkpassword(){
    event.preventDefault();
    let Pass=document.getElementById("pass").value
    let objcheck={
        flag:false,
        fname:"",
    }
    dataarr.forEach(function(ele ,index) {
        present(ele,index,objcheck,Pass,currentno)
    });

    
    if(objcheck.flag){
        window.location.href="index.html"
        localStorage.setItem("jioname",objcheck.fname)
    }else{
        alert("Wrong Password")
    }
}
function present(ele,index,objcheck,Pass,currentno){
    if(Pass==ele.Pass&&currentno==ele.phone){
            objcheck.flag=true
            objcheck.fname=ele.fname
        }
        return objcheck
}
