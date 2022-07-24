let phone=document.getElementById("submit")
phone.addEventListener("click",checknumber)

let phonearr=JSON.parse(localStorage.getItem("jiodata"))||[];

function checknumber(event){
    event.preventDefault();
    let currentno=document.getElementById("phone").value
    console.log(phonearr)
    if(phonearr.length==0){
        let obj={
            phno:currentno
        }
        phonearr.push(obj)
        localStorage.setItem("cno", currentno)
        // localStorage.clear() 
        window.location.href="Signup.html"
        
    }else{
        phonearr.forEach(function(ele,index) {
        
            if(currentno==ele.phone){
                localStorage.setItem("cno", currentno)
                window.location.href="login.html"
            }else{
                localStorage.setItem("cno", currentno)
                window.location.href="Signup.html"
                
            }
         
        });

    }   
    
}