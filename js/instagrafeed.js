// Copyright (c) 2023 by Joost van der Schee (https://codepen.io/joosts/pen/bGBByOo)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var instagram_username = 'waveriders_obsat';
var instagram_amount = 6;

var jsonurl = 'https://profilepageimages.usecue.com/images/'+instagram_username+'/images.json';
var request = new XMLHttpRequest();
request.open('GET', jsonurl, true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    data.forEach( function callback(object,index) {
      if(index<instagram_amount) {
        var image_small = object.image_small;
        var caption = object.caption;
        if(!caption) caption = '';
        var permalink = object.permalink.replace(/\/$/, '');
        var media_type = object.media_type.toLowerCase();
        document.getElementById('instafeed').innerHTML = document.getElementById('instafeed').innerHTML + "<li style='background-image: url("+image_small+")' class='"+media_type+"'><a href='"+permalink+"' target='_blank' title='"+caption+"'><img src='"+image_small+"' alt='"+caption+"' /></a></li>";
      }
    });
  } else {
    // We reached our target server, but it returned an error
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();