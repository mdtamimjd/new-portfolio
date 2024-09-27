getId("hambar").addEventListener("click",()=>{
    let btn = getId("hambar");
    if(btn.innerText === "menu"){
    getId("mobileMenu").classList.remove("-translate-y-[500px]");
    btn.innerText = "close";
    } else{
    getId("mobileMenu").classList.add("-translate-y-[500px]");
    btn.innerText = "menu";
    }
})