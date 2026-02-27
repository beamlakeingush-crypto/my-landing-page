 const center= document.getElementById("center");
 const decrease= document.getElementById("decbtn");
 const reset= document.getElementById("resetbtn");
 const increase= document.getElementById("incbtn");

 let count=0;

 decrease.onclick= function(){
   count--;
   center.textContent=count;
 }

  increase.onclick= function(){
   count++;
   center.textContent=count;
 }

   reset.onclick= function(){
   count=0;
   center.textContent=count;
 }
 
