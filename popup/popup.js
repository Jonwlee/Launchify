   var urlA1 = document.getElementById('siteUrlA1').value;
   var urlA2 = document.getElementById('siteUrlA2').value;
   var urlA3 = document.getElementById('siteUrlA3').value;
   var urlA4 = document.getElementById('siteUrlA4').value;
   var urlA5 = document.getElementById('siteUrlA5').value;

   var urlB1 = document.getElementById('siteUrlB1').value;
   var urlB2 = document.getElementById('siteUrlB2').value;
   var urlB3 = document.getElementById('siteUrlB3').value;
   var urlB4 = document.getElementById('siteUrlB4').value;
   var urlB5 = document.getElementById('siteUrlB5').value;

   var urlC1 = document.getElementById('siteUrlC1').value;
   var urlC2 = document.getElementById('siteUrlC2').value;
   var urlC3 = document.getElementById('siteUrlC3').value;
   var urlC4 = document.getElementById('siteUrlC4').value;
   var urlC5 = document.getElementById('siteUrlC5').value;




   function launchifyA() {

       chrome.tabs.create(

           {
               'url': urlA1
           }
       )
       chrome.tabs.create(

           {
               'url': urlA2
           }
       )
       chrome.tabs.create(

           {
               'url': urlA3
           }
       )
       chrome.tabs.create(

           {
               'url': urlA4
           }
       )
       chrome.tabs.create(

           {
               'url': urlA5
           }
       )
       console.log("new urls A");

   };

   function launchifyB() {

       chrome.tabs.create(

           {
               'url': urlB1
           }
       )
       chrome.tabs.create(

           {
               'url': urlB2
           }
       )
       chrome.tabs.create(

           {
               'url': urlB3
           }
       )
       chrome.tabs.create(

           {
               'url': urlB4
           }
       )
       chrome.tabs.create(

           {
               'url': urlB5
           }
       )
       console.log("new urls B");

   };

   function launchifyC() {

       chrome.tabs.create(

           {
               'url': urlC1
           }
       )
       chrome.tabs.create(

           {
               'url': urlC2
           }
       )
       chrome.tabs.create(

           {
               'url': urlC3
           }
       )
       chrome.tabs.create(

           {
               'url': urlC4
           }
       )
       chrome.tabs.create(

           {
               'url': urlC5
           }
       )
       console.log("new urls C");

   };


   document.getElementById('launcherA').addEventListener('onClick', launchifyA);
   document.getElementById('launcherB').addEventListener('onClick', launchifyB);
   document.getElementById('launcherC').addEventListener('onClick', launchifyC);