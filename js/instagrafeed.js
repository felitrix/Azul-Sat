var instagram_username='waveriders_obsat';var instagram_amount=6;var jsonurl='https://profilepageimages.usecue.com/images/'+instagram_username+'/images.json';var request=new XMLHttpRequest();request.open('GET',jsonurl,true);request.onload=function(){if(this.status>=200&&this.status<400){var data=JSON.parse(this.response);data.forEach(function callback(object,index){if(index<instagram_amount){var image_small=object.image_small;var caption=object.caption;if(!caption)caption='';var permalink=object.permalink.replace(/\/$/,'');var media_type=object.media_type.toLowerCase();document.getElementById('instafeed').innerHTML=document.getElementById('instafeed').innerHTML+"<li style='background-image: url("+image_small+")' class='"+media_type+"'><a href='"+permalink+"' target='_blank' title='"+caption+"'><img src='"+image_small+"' alt='"+caption+"' /></a></li>";}});}else{}};request.onerror=function(){};request.send();