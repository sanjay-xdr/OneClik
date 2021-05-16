const github =document.getElementById('github');






github.addEventListener('keyup',function(){
    
    chrome.storage.sync.set({key: github.value}, function() {
        console.log('Value is set to '+ github.value);
      });



})