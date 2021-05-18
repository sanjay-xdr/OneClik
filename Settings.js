const github = document.getElementById("github");
const stackoverflow = document.getElementById("stackoverflow");

github.addEventListener("keyup", function () {
  chrome.storage.sync.set({ github: github.value }, function () {});
});

stackoverflow.addEventListener("keyup", function () {
  chrome.storage.sync.set({ stackoverflow: stackoverflow.value }, function () {});
});
