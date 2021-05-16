var github=document.getElementById('github');


chrome.storage.sync.set({key: github.value}, function() {
    console.log('Value is set to '+ github.value);
  });

chrome.storage.sync.get(['key'], function(result) {
    github.href=result.key
  });
