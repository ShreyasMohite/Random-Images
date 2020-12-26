


/*
   
images=()=>{
let img="https://picsum.photos/200/300?grayscale";
const imgs=document.querySelector("img");
imgs.setAttribute("src",img);

}


setInterval(images,1000);

change=()=>{
   
    window.location.reload();
     

}
    
*/

const show=()=>{
    const opt=document.getElementById("opt").value;
    if(opt=="Normal"){
        let img="https://picsum.photos/200/300";
        const imgs=document.querySelector("img");
        imgs.setAttribute("src",img);
    }
    if(opt=="grayscale"){
        let img="https://picsum.photos/200/300?grayscale";
        const imgs=document.querySelector("img");
        imgs.setAttribute("src",img);

    }
    if(opt=="Random"){
        let img="https://source.unsplash.com/random";
        const imgs=document.querySelector("img");
        imgs.setAttribute("src",img);
    }
}


setInterval(show,1000);

    
        
change=()=>{
    window.location.reload();
    show();
     
}


