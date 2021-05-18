var github = document.getElementById("github");

var stackoverflow = document.getElementById("stackoverflow");

var youtube1 = document.getElementById("youtube1");

var instagram = document.getElementById("instagram");

var twitter = document.getElementById("twitter");

var linkedin = document.getElementById("linkedin");

var netflix = document.getElementById("netflix");

var prime_video = document.getElementById("prime_video");

var geeksforgeeks = document.getElementById("geeksforgeeks");

var codeforces = document.getElementById("codeforces");

var leetcode = document.getElementById("leetcode");

var facebook = document.getElementById("facebook");

var codechef = document.getElementById("codechef");



var extra = document.getElementById("extra");

var discord = document.getElementById("discord");

var hackerearth = document.getElementById("hackerearth");


chrome.storage.sync.get(["hackerearth"], function (result) {
  hackerearth.setAttribute("href", `${result.hackerearth}`)
});



chrome.storage.sync.get(["discord"], function (result) {
  discord.setAttribute("href", `${result.discord}`)
});



chrome.storage.sync.get(["extra"], function (result) {
  extra.setAttribute("href", `${result.extra}`)
});




chrome.storage.sync.get(["codechef"], function (result) {
  codechef.setAttribute("href", `${result.codechef}`)
});



chrome.storage.sync.get(["facebook"], function (result) {
  facebook.setAttribute("href", `${result.facebook}`)
});




chrome.storage.sync.get(["leetcode"], function (result) {
  leetcode.setAttribute("href", `${result.leetcode}`)
});



chrome.storage.sync.get(["codeforces"], function (result) {
  codeforces.setAttribute("href", `${result.codeforces}`)
});


chrome.storage.sync.get(["geeksforgeeks"], function (result) {
  geeksforgeeks.setAttribute("href", `${result.geeksforgeeks}`)
});




chrome.storage.sync.get(["prime_video"], function (result) {
  prime_video.setAttribute("href", `${result.prime_video}`)
});


chrome.storage.sync.get(["netflix"], function (result) {
  netflix.setAttribute("href", `${result.netflix}`)
});




chrome.storage.sync.get(["linkedin"], function (result) {
  linkedin.setAttribute("href", `${result.linkedin}`)
});


chrome.storage.sync.get(["twitter"], function (result) {
  twitter.setAttribute("href", `${result.twitter}`)
});



chrome.storage.sync.get(["instagram"], function (result) {
  instagram.setAttribute("href", `${result.instagram}`)
});




chrome.storage.sync.get(["youtube"], function (result) {
  youtube1.setAttribute("href", `${result.youtube}`)
});


chrome.storage.sync.get(["github"], function (result) {
  github.href = result.github;
});

chrome.storage.sync.get(["stackoverflow"], function (result) {
  stackoverflow.href = result.stackoverflow;
});
