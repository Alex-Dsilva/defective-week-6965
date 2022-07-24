let imglink=[
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658305953_Snacking_1680x320_West.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658407441_Mumbai.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658418415_1658301091_Tea--Coffee-1680-X-320.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658327758_1655838697_1655624014_Cream-Biscuits_1680x320_web.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657897108_1657641245_1657556677_1657205534_JioMart-Best-Selling-Electronics-Carousel-Banner-27_05_2022.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657897383_1657640341_1657556982_1656598512_1656425860_Beauty-Store-Banner-1680x320.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658421698_July-21_Banner-1_web.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658419733_1657291841_1656518889_1656417099_Baby-Fest_1680x320.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658244944_1658232168_Dairy-Bakery_1680-x-320-_sugar-strip.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1658244944_1658232168_Dairy-Bakery_1680-x-320-_sugar-strip.jpg"
    ]
    let back=document.getElementById("backward");
    let further=document.getElementById("forward");
    let slider1=document.getElementById("slider1")
    let imgstat=0;
    back.addEventListener("click",function(){
      imgstat--
      if(imgstat<0){
        imgstat=imglink.length-1
      }
      slider1.src=imglink[imgstat]
    })
    further.addEventListener("click",function(){
      imgstat++
      if(imgstat>imglink.length-1){
        imgstat=0
      }
      slider1.src=imglink[imgstat]
    })
    slideshow()
    function slideshow(){
      
      if(imgstat<imglink.length-1){
        imgstat++
      }else{
        imgstat=0
      }
      slider1.src=imglink[imgstat]
      setTimeout("slideshow()",2000)
    }

    document.querySelector("#banner").addEventListener("click", signup)

    function signup(){
      if(username.length<1){
        alert("Please Sign-up or sign-in to proceed")
        window.location.href="Sign-in.html"
      }else{
        alert("You are signed in Thank you")
      }
    }

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
    