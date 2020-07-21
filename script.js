const login=document.getElementById("loginBtn");
login.addEventListener("click",function(){
  document.getElementById("loginContainer").style.display="none";
  document.getElementById('transaction-area').style.display="block";
  

});


const deposit=document.getElementById("addDeposit");
deposit.addEventListener("click",function(){
  let depositAmount=parseFloat(document.getElementById("depositValue").value);
  console.log(typeof(depositAmount));
});

const withdraw=document.getElementById("addWithdraw");
withdraw.addEventListener("click",function(){
  let withdrawAmount=parseFloat(document.getElementById("withdrawValue").value);
  console.log(typeof(withdrawAmount));
});

  