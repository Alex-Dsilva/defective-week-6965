let form=document.querySelector("form")
form.addEventListener("submit",createdata)


let dataarr=JSON.parse(localStorage.getItem("jiodata"))||[]

let currentno=localStorage.getItem("cno")||1234567894;
document.getElementById("loginnumber").innerText=currentno

document.getElementById("change").addEventListener("click",function(){
    window.location.href="Sign-in.html"
})

function createdata(event){
    
    event.preventDefault();
    let obj={
        fname:form.fname.value,
        lname:form.lname.value,
        email:form.Email.value,
        phone:currentno
    }
    let p1=form.password1.value
    let p2=form.password2.value
    if(p1==p2){
        obj["Pass"]=p1
        
    dataarr.push(obj)
    localStorage.setItem("jiodata",JSON.stringify(dataarr))
    // localStorage.clear()
    localStorage.setItem("jioname",form.fname.value,)
    // localStorage.clear()
    window.location.href="index.html"
    }else{
        alert("Password Did Not Match Please Try Again")
    }
}