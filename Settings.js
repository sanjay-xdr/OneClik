const github = document.getElementById("github");
const stackoverflow = document.getElementById("stackoverflow");

github.addEventListener("keyup", function () {
  chrome.storage.sync.set({ github: github.value }, function () {});
});

stackoverflow.addEventListener("keyup", function () {
  chrome.storage.sync.set({ stackoverflow: stackoverflow.value }, function () {});
});























// showing the Notification
const button=document.querySelectorAll('.btn')
const toasts=document.getElementById('toast')



button.forEach(btn=>btn.addEventListener('click',()=>{
    createNotification()
}))


function createNotification(){
    const notif=document.createElement('div');
    notif.classList.add('toast');
    notif.innerText="Link added successfully ";
    toasts.appendChild(notif);

    setTimeout(()=>{
        notif.remove()
    },5000)
}