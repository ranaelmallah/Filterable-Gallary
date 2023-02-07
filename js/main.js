let all =document.querySelector(".all")
let logo =document.querySelector(".logo")
let web =document.querySelector(".web")
let mobile =document.querySelector(".mobile")
let first =document.querySelector(".first")
let sec =document.querySelector(".sec")
let third =document.querySelector(".third")

logo.onclick=function(){
    
    first.style.display="inline"
    sec.style.display="none"
    third.style.display="none"
}
web.onclick=function(){
    sec.style.display="inline"
    first.style.display="none"
    third.style.display="none"

}
mobile.onclick=function(){
    third.style.display="inline"
    first.style.display="none"
    sec.style.display="none"

}
all.onclick=function(){
    third.style.display="block"
    first.style.display="block"
    sec.style.display="block"

}