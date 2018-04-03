var zipList = servicedCodes;

function checkZip() {
  var zip = document.getElementById('zipInput').value;
  if(zipList.indexOf(zip) != -1) {
    document.getElementById('dialog').style.background = 'green';
    document.getElementById('dialog')
      .innerHTML = 'we service your zip code!'; 
    document.getElementById('dialog').style.opacity = 1;
    setTimeout(() => {
      document.getElementById('dialog').style.opacity = 0;
    }, 3000);
  }
  else {
    document.getElementById('dialog').style.background = 'red';
    document.getElementById('dialog')
      .innerHTML = 'sorry, we don\'t service your area yet!'; 
    document.getElementById('dialog').style.opacity = 1;
    setTimeout(() => {
      document.getElementById('dialog').style.opacity = 0;
    }, 3000);
  }
}
