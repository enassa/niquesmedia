
//PC/MOBILE view controller
  let switchTomobile = (w)=>{
    if(w <= 746){ 
        $i('mobile-view').style.display = "flex";
    }
    else if(w >= 746){ 
        $i('mobile-view').style.display = "none";
    }
   }
 
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  const $i = document.getElementById.bind(document);
  const $c = document.getElementsByClassName.bind(document);
  const $t = document.getElementsByTagName.bind(document);

  //Switch to mobile view when window is resized to mobile width
  window.addEventListener("resize",e=>{
  let ww2 = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
  switchTomobile(ww2);
  })
//check if everything has finish loading
document.addEventListener('DOMContentLoaded', e=>{
  let ww = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
    switchTomobile(ww);
    $i('loader').style.height = "0%";
    $i('circle').style.height = "0px";
    $i('circle').style.width = "0px";
    let contents = $i('APP');
    let scrollUp = $i('scroll-up');
    let body = $i('nav-expand-conatiner');
    let prevScroll = 0;
    //Control scroll to top button. Hide when carousal is in view
    window.addEventListener('scroll', () => {
        let currentScroll = body.getBoundingClientRect().y;
        let positionOfnav = contents.getBoundingClientRect().y;
        //console.log("current" + currentScroll);
        if (currentScroll < prevScroll) {
            //console.log("srollDown " + currentScroll);
            scrollUp.style.height = "80px";
        } else if (currentScroll > prevScroll) {
            let carousalPos = $i('carousal-container').getBoundingClientRect().top;;
            console.log("srollUp" + prevScroll);
            if (carousalPos == 0) {
                scrollUp.style.height = "0px";  //hide scroll to top if carousal has top =0 
            }
        }       
        prevScroll = currentScroll;
    })
    
//Scrolling function
    let scroller = e =>{
        $i(e.target.className).scrollIntoView({
            behavior: 'smooth',
            block:'start',
            inline:'nearest'
        });
    }



    //Controlling scrolling with navigation
    $$('header ul').forEach(ul => {
        ul.addEventListener('click', e => {
            try {
                if (e.target.className == "Interviews") {
                    scroller(e);
                    $i('items1').style.backgroundColor = "rgb(0, 0, 0,0.3)";
                    $i('items2').style.backgroundColor = "";
                    $i('items3').style.backgroundColor = "";
                    scroller(e.target.className);
                } else if (e.target.className == "Events") {
                    scroller(e);
                    $i('items1').style.backgroundColor = "";
                    $i('items2').style.backgroundColor = "rgb(0, 0, 0,0.3)";
                    $i('items3').style.backgroundColor = "";
                }
                else if(e.target.className == "APP"){
                    $i('chosen-content').scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                else {
                    scroller(e);
                    $i('items1').style.backgroundColor = "";
                    $i('items2').style.backgroundColor = "";
                    $i('items3').style.backgroundColor = "rgb(0, 0, 0,0.3)";
                }
            }
             catch {
            }
        })
    })
    
    
    //Controlling scrolling with buttom navigation
    $$('menu ul, svg').forEach(ul => {
        ul.addEventListener('click', e => {
            if (e.target.className == "Interviews") {
                scroller(e);
                $i('items1').style.backgroundColor = "rgb(0, 0, 0,0.3)";
                $i('items2').style.backgroundColor = "";
                $i('items3').style.backgroundColor = "";
                $i('items0').style.backgroundColor = "";
            } else if (e.target.className == "Events") {
                scroller(e);
                $i('items1').style.backgroundColor = "";
                $i('items2').style.backgroundColor = "rgb(0, 0, 0,0.3)";
                $i('items3').style.backgroundColor = "";
                $i('items0').style.backgroundColor = "";
    
            } else if(e.target.className == "Report-cases") {
                scroller(e);
                $i('items1').style.backgroundColor = "";
                $i('items2').style.backgroundColor = "";
                $i('items3').style.backgroundColor = "rgb(0, 0, 0,0.3)";
                $i('items0').style.backgroundColor = "";
            }
            else if(e.target.className == "APP"){
                    $i('chosen-content').scrollIntoView({
                        behavior: 'smooth'
                    });
                $i('items1').style.backgroundColor = "";
                $i('items2').style.backgroundColor = "";
                $i('items3').style.backgroundColor = "";
                $i('items0').style.backgroundColor = "rgb(0, 0, 0,0.3)";
            }
    
        })
    });

    //Highlight selected navigation pane expansion
    $$('nav ul').forEach(ul => {
        ul.addEventListener('click', e => {
            scroller(e);
            $i(e.target.className).style.transition = "background-color 0.3s linear";
            $i(e.target.className).style.backgroundColor = "rgb(124, 252, 0,1)";
      let  counter = 0;
        setTimeout(() => {
            $i(e.target.className).style.backgroundColor = "";
            counter++;
        }, 500);
        })
    
    })
    //Scroll to middle first , when lcicked again scroll to top
    let upCount = 0;
    $i('scroll-up').addEventListener('click', e => {
    if(upCount==0){
        $i("nav-expand-conatiner").scrollIntoView({
            behavior: 'smooth'
        });
        upCount = 1;
    }
    else if(upCount==1){
        $i("carousal-container").scrollIntoView({
            behavior: 'smooth'
        });
        upCount = 0;
    }
      ;
    })
    
    //Controller of thin bar at the the top and corresponding actins
    let topics = $i('topics');
    topics.style.opacity = "0";
    let bar = document.querySelector("#progress");
    window.addEventListener("scroll", () => {
        let max = document.body.scrollHeight - innerHeight;
        let percentageOfbar = (pageYOffset / max)*100;
        console.log(percentageOfbar);
        bar.style.width = `${(pageYOffset / max) * 100}%`;
        if(percentageOfbar>=33.3){
            $i('social-media-items').style.width = "40px";
            if(percentageOfbar>=43.00){
                $i('nav-overlay').style.opacity = "0"; //Hide conatiner of sgs behind nav when scroll
                $i('nav-container').style.opacity = "0"; //Hide the nav when scroll down
            }
        }
        else{
            $i('social-media-items').style.width = "0px";
            $i('nav-overlay').style.opacity = "1";
            $i('nav-container').style.opacity = "1";
        }
        if (percentageOfbar>=99.0) {
            topics.style.opacity = "1";
        } else {
            topics.style.opacity = "0";
        }
     
    });

    //Scroll to explaination of topic when clicked
    $$('.topic-items p').forEach( p =>{
        p.addEventListener('click', e=>{
            $i(e.target.className).scrollIntoView({
                behavior:'smooth'
            })
        })
    })
    
    ///display any image that is clicked
    $$('img').forEach( img=>{
        img.addEventListener('click', e=>{
            let clickedImage = e.target;
            let imgSrc = clickedImage.src;
            $i('viewed-image').src =imgSrc;
            $i('image-display').style.height = "80%";
        })
    })
    //Hide image when it is clicked
    $i('viewed-image').addEventListener('click', ()=>{
        $i('image-display').style.height = "0%";
    })
    
})
