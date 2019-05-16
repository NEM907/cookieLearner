var int;
var call = functionCall;
var cookie = document.getElementByID('bigCookie');
  
if (cookie) {
  int == true;
} else {
  int == false; 
}
if(int == true) {
  console.log('initialize fail');
} else if(int == false) {
  console.log('initialize success');
}

cookie.click();
