function check(){  
  var storedName = localStorage.getItem('name2');
  var storedPw = localStorage.getItem('pw1');
  var userName = document.getElementById('email');
  var userPw = document.getElementById('pass');
  if(userName.value == storedName && userPw.value == storedPw){
      alert('You are logged in.');
  }else{
      alert('Error on login');
  }
}   

