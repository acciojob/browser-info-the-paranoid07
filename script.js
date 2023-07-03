//your JS code here. If required.

const div = document.getElementById("browser-info");
const nameOfBrowser=navigator.appName;
const version = navigator.appVersion;

div.innerText=`You are using ${nameOfBrowser} version ${version}`;