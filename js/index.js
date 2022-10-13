// todo I make function for shop now button motion
function motion(){
    var el = document.querySelector("#motion")
var styles = getComputedStyle(el)

var marLeft = styles.marginLeft;

var marLeftValue = parseInt(marLeft)

if(marLeftValue >= 65){
    marLeftValue = 48
}

marLeftValue += 2

el.style.marginLeft = marLeftValue +"px"
}

setInterval(()=>{
    setTimeout(motion,50)
},100)

function shopNow(){
    $(".shop-now").click(()=>{
        window.location.href = "#shoes"
    })
}
shopNow();


function imgShower()
{for(let i = 1; i< 5; i++){
    let id = "#red-shoes" + i;
    let el = document.querySelector(id).firstChild

    
    el.addEventListener("click", function(){
        let src = this.getAttribute("src")
        let el = document.querySelector(".main-block").firstChild
        el.setAttribute("src", src)
        })
}}

imgShower();
var likes = 0;
// $("#like-shoes").click(function(){
//     this.style.color = "var(--clr2)"
//     likes++;
//     $(".like-count").text(likes);
// })

function liker(){
    for(let i = 1; i < 10 ; i++){
        id = "#heart-icon"+ i;
        $(id).click(likeShoe);
    }
}
function effects(className1){
        $(className1).fadeIn(100).fadeOut(100).fadeIn(100)

}
var likes = 0;
function likeShoe(){
    if(this.getAttribute("data-like") == "false"){
        this.setAttribute("data-like", "true")
        this.style.color= "var(--clr2)"
        likes++;
        effects("#likes");
        $(".like-count").text(likes)
    }
    else{
        this.setAttribute("data-like", "false")
    likes--;
    this.style.color= "black"
    effects("#likes");
    $(".like-count").text(likes)
    }
    
}

liker();

var items = 0;
function addToCart(){
    for(let i = 1; i < 10 ; i++){
        let id = "#shoe-in-cart" + i;

        $(id).click(function(){           
            if(this.getAttribute("data-add-in-cart") == "false"){
                items++;
                this.setAttribute("data-add-in-cart", "true")
                effects("#cart")
                $(".item-count").text(items)
                this.textContent = "Remove From Cart"
            }
            else{
                items--;
                this.setAttribute("data-add-in-cart", "false") ;           
                $(".item-count").text(items)
                this.textContent = "Add To Cart"
            }
        })
    }
}

addToCart();