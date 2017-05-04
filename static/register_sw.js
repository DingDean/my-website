function toggleRefresh () {
  var rb = document.getElementById("refresh-buttion");
  if (rb.className.split(' ').indexOf('rb-show') == -1) {
    rb.className += " rb-show";
  }
  else {
    rb.className = rb.className.split(' ').filter(ele => ele != 'rb-show').join(' ')
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service_worker.js').then(function (reg) {
      reg.onupdatefound = function () {
        var installingworker = reg.installing;
        installingworker.onstatechange = function () {
          switch (installingworker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                console.log('New Content Available')
                toggleRefresh();
              } else {
                console.log('Content has been cached')
              }
              break;
            case 'redundant':
              console.error('The installing service worker became redundant')
              break;
          }
        }
      }
    }).catch(function (e) {
      console.error('Error during service worker registrition', e);
    })
  })
}

