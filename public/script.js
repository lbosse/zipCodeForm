//var zipcodes = [ '92128', '92129', '92064' ];
Components.utils.import('resource://zip.js');

function checkZip() {
  var zip = document.getElementById('zip').value;
  if(zipcodes.indexOf(zip) != -1) {
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
