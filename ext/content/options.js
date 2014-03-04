function save_options() {
  var input = document.getElementById("newHost");
  var newHost = input.value;

 chrome.permissions.request({
     permissions: [],
     origins : [newHost]
    }, function(granted) {
        if (granted) {
          // possibly persist newHost to json array in local storage
          // Update status to let user know options were saved.
          var status = document.getElementById("status");
          status.innerHTML = "Options Saved.";
          setTimeout(function() {
            status.innerHTML = "";
          }, 750);
        } 
    });
}

function remove_options() {
  var input = document.getElementById("newHost");
  var newHost = input.value;

 
  chrome.permissions.remove({
    permissions: [newHost],
    }, function(removed) {
        // The callback argument will be true if the user granted the permissions.
        if (removed) {
          // possibly load localStorage["hosts"] and remove newHost
          // Update status to let user know options were saved.
          var status = document.getElementById("status");
          status.innerHTML = "Options Saved.";
          setTimeout(function() {
            status.innerHTML = "";
          }, 750);
        } 
    });
}


document.querySelector('#save').addEventListener('click', save_options);
document.querySelector('#remove').addEventListener('click', remove_options);
