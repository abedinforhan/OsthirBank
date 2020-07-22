const login=document.getElementById("loginBtn");
   
login.addEventListener("click",function(){
      document.getElementById("loginContainer").style.display="none";
      document.getElementById('transaction-area').style.display="block";
  });

//Deposit Event handler
const deposit=document.getElementById("addDeposit");

deposit.addEventListener("click",function(){
   
    let depositInputId=document.getElementById('depositInput');
    let balanceInputId=document.getElementById('balanceInput');
    
    let depositAdded=depositInputId.value;
    
    document.getElementById('depositGrab').innerText=modifyAmount('depositGrab',depositAdded);
    document.getElementById('balanceGrab').innerText=modifyAmount('balanceGrab',depositAdded);

    depositInputId.value="";
   });

   //withdraw Handler
  const withdraw=document.getElementById("addWithdraw");
  
    withdraw.addEventListener("click",function(){

      let withdrawInputId=document.getElementById("withdrawInput");

      let withdrawAdded=withdrawInputId.value;
    
      document.getElementById('withdrawGrab').innerText=modifyAmount('withdrawGrab',withdrawAdded);
      document.getElementById('balanceGrab').innerText=modifyAmount("balanceGrab",-1*withdrawAdded);

      withdrawInputId.value="";
     
    });


   const modifyAmount=(grabId,addAmount)=>{
      let  currentAmountId=document.getElementById(grabId);
      
      let  currentAmount= currentAmountId.innerText;
      // console.log(currentAmount);
      
      let   total=parseFloat(currentAmount)+parseFloat(addAmount);
        
      return total;

  }
  
  
  
  
  
  
  
  
  
  





  
  
  
  
  
  
  
  
  
  
  
   



   








  