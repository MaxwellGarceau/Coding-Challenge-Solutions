function validatePIN (pin) {
switch(pin.length) {
  case 4:
  return pin.match(/[0-9]{4}/) ?  true :  false;
  case 6:
  return pin.match(/[0-9]{6}/) ?  true :  false;
}
return false;
}