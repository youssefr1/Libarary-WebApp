function scrollFunction () {
    if(document.documentElement.scrollTop > 80){
        document.getElementById("navbar").classList.add("noTansparrent");
    }
    else{
        document.getElementById("navbar").classList.remove("noTansparrent");
    }
}


window.onscroll = function(){
    scrollFunction();
}
// document.getElementById('frmSearch').onsubmit = function() {
//     window.location = 'http://www.google.com/search?q=site:yoursitename.com ' + document.getElementById('txtSearch').value;
//     return false;
// }
// document.getElementById('frmSearch').onsubmit = function() {
//     var searchQuery = 'site:' + window.location.hostname + ' ' + document.getElementById('txtSearch').value;
//     window.location = 'http://www.google.com/search?q=' + encodeURIComponent(searchQuery);
//     return false;
// }
// document.getElementById('frmSearch').onsubmit = function() {
//     var searchQuery = document.getElementById('txtSearch').value;
//     var cseID = '356ccc12b8b47432a'; // Replace 'YOUR_CSE_ID' with your actual CSE ID
//     var url = 'https://www.googleapis.com/customsearch/v1?key=https://cse.google.com/cse?cx=' + cseID + '&q=' + encodeURIComponent(searchQuery);
//     window.location = url;
//     return false; // Prevent default form submission
// }
document.getElementById('frmSearch').onsubmit = function() {
    var searchQuery = document.getElementById('txtSearch').value;
    var cseID = '356ccc12b8b47432a'; // Replace 'YOUR_CSE_ID' with your actual CSE ID
    var apiKey = 'AIzaSyBaWyC-EpaFdRJC7QXLC5DhIw85VJG6mkc'; // Replace 'YOUR_API_KEY' with your actual API key
    var url = 'https://www.googleapis.com/customsearch/v1?key=' + apiKey + '&cx=' + cseID + '&q=' + encodeURIComponent(searchQuery);
    window.location = url;
    return false; // Prevent default form submission
}

var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML= year;


