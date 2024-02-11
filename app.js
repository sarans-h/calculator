let buttons=document.querySelectorAll('button');
let input=document.querySelector('input');
for(let button of buttons){
    button.addEventListener('click',function (e) {
       let btnText= e.target.innerText;
       if (btnText=='C') {
        input.value='';
       }  
       else if(btnText=="="){

        try{
        input.value=eval(input.value);}
        catch(e){
            input.value='Errr'
        }
        setTimeout(() => {
            input.value="";
        }, 10000);
       } 
       else 
        input.value+=btnText;
    });

}