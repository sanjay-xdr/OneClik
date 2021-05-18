const github = document.getElementById("github");
const stackoverflow = document.getElementById("stackoverflow");
const youtube = document.getElementById("youtube");
const instagram = document.getElementById("instagram");

const twitter = document.getElementById("twitter");

const linkedin = document.getElementById("linkedin");

const netflix = document.getElementById("netflix");

const prime_video = document.getElementById("prime_video");

const geeksforgeeks = document.getElementById("geeksforgeeks");


const codeforces = document.getElementById("codeforces");


const leetcode = document.getElementById("leetcode");

const facebook = document.getElementById("facebook");

const codechef = document.getElementById("codechef");



const extra = document.getElementById("extra");

const discord = document.getElementById("discord");

const hackerearth = document.getElementById("hackerearth");



extra.addEventListener("keyup", function () {
  chrome.storage.sync.set({ extra: extra.value }, function () {});
});


discord.addEventListener("keyup", function () {
  chrome.storage.sync.set({ discord: discord.value }, function () {});
});



facebook.addEventListener("keyup", function () {
  chrome.storage.sync.set({ facebook: facebook.value }, function () {});
});



codechef.addEventListener("keyup", function () {
  chrome.storage.sync.set({ codechef: codechef.value }, function () {});
});


hackerearth.addEventListener("keyup", function () {
  chrome.storage.sync.set({ hackerearth: hackerearth.value }, function () {});
});



leetcode.addEventListener("keyup", function () {
  chrome.storage.sync.set({ leetcode: leetcode.value }, function () {});
});






codeforces.addEventListener("keyup", function () {
  chrome.storage.sync.set({ codeforces: codeforces.value }, function () {});
});


geeksforgeeks.addEventListener("keyup", function () {
  chrome.storage.sync.set({ geeksforgeeks: geeksforgeeks.value }, function () {});
});



prime_video.addEventListener("keyup", function () {
  chrome.storage.sync.set({ prime_video: prime_video.value }, function () {});
});


netflix.addEventListener("keyup", function () {
  chrome.storage.sync.set({ netflix: netflix.value }, function () {});
});



linkedin.addEventListener("keyup", function () {
  chrome.storage.sync.set({ linkedin: linkedin.value }, function () {});
});



twitter.addEventListener("keyup", function () {
  chrome.storage.sync.set({ twitter: twitter.value }, function () {});
});



instagram.addEventListener("keyup", function () {
  chrome.storage.sync.set({ instagram: instagram.value }, function () {});
});



youtube.addEventListener("keyup", function () {
  chrome.storage.sync.set({ youtube: youtube.value }, function () {});
});

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
    },2000)
}