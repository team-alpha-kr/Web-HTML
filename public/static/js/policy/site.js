// SW Project Custom Javascript
// Copyright 2020 SW Project
// Create: 2020. 12. 27. PM 5:25

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                /* Remove the attribute, and call this function once more: */
                elmnt.removeAttribute("include-html");
                includeHTML();
            }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

function join() {
    location.replace('https://discord.gg/GtZdSDPktT');
}

function cast() {
    location.replace('https://discord.gg/pzBAHJw');
}

function shop() {
    location.replace('https://discord.gg/Q5bvC3CfpR');
}

function old() {
    location.replace('https://swp.creatorlink.net/Main');
}

function old2() {
    location.replace('https://swporject.netlify.app/');
}

function news() {
    location.replace('http://bbs.swproject.cf/news');
}