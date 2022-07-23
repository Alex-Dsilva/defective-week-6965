let phone=document.getElementById("submit")
phone.addEventListener("click",checknumber)

let phonearr=JSON.parse(localStorage.getItem("phonedata"))||[];

function checknumber(event){
    event.preventDefault();
    let currentno=document.getElementById("phone").value
    
    if(phonearr.length==0){
        let obj={
            phno:currentno
        }
        phonearr.push(obj)
        
        localStorage.setItem("phonedata", JSON.stringify(phonearr))
        localStorage.setItem("cno", currentno)
        // localStorage.clear() 
        window.location.href="Signup.html"
        
    }else{
        phonearr.forEach(function(ele,index) {
        
            if(currentno==ele.phno){
                window.location.href="login.html"
            }else{
                let obj={
                    phno:currentno
                }
                phonearr.push(obj)  
                window.location.href="Signup.html"
                
            }
         
        });

    }   
    
}