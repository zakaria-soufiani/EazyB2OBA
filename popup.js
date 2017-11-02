function click (e) {
    chrome.tabs.executeScript(null,
        {
            code:"document.body.style.backgroundImage='url("
         + images[e.target.id] + "'"
        });
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
   var aTag = document.querySelectorAll('a');
   for (var i = 0; i < aTag.length; i++){
       aTag[i].addEventListener('click', click);
   }
});

var images = {
    booba:'https://www.raprnb.com/wp-content/uploads/2017/02/booba-ukt.jpg',
    fouiny:'https://static.booska-p.com/images/news/la-fouine-balance-un-extrait-inedit-de-cdc-censure-video-649.jpg',
    turpel: 'https://content.malakye.com/media/uploads/13784.jpg',
    reset: 'none'
};

