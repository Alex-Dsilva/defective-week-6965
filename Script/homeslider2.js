let imglink2=[
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1656494148_910-x-278.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657119726_INDUSLAND-Bank-Offer-Banner-910x278-4-7-22.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657175622_910-x-278.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657278400_910-X-278.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657631246_Payzapp_910x278.jpg"
]
let back2=document.getElementById("backward2");
    let further2=document.getElementById("forward2");
    let slider2=document.getElementById("slider2")
    let imgsta=0;
    back2.addEventListener("click",function(){
      imgsta--
      if(imgsta<0){
        imgsta=imglink2.length-1
      }
      slider2.src=imglink2[imgsta]
    })
    further2.addEventListener("click",function(){
      imgsta++
      if(imgsta>imglink2.length-1){
        imgsta=0
      }
      slider2.src=imglink2[imgsta]
    })
