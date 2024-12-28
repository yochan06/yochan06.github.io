let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


let prv = document.getElementById('prv');
    let nxt = document.getElementById('nxt');
    let imgs = document.querySelector('.imgs');
    let itm = document.querySelectorAll('.imgs .itm');
    let cnt = document.querySelectorAll('.cnt .itm');
    
    let rot = 0;
    let act = 0;
    let cntItm = itm.length;
    let rotAdd = 360 / cntItm;
    
    function nxtSld(){
        act = act + 1 > cntItm - 1 ? 0 : act + 1;
        rot = rot + rotAdd; 
        shw();
    }
    function prvSld(){
        act = act - 1 < 0 ? cntItm - 1 : act - 1;
        rot = rot - rotAdd; 
        shw();     
         
    }
    function shw(){
        imgs.style.setProperty("--rotate", rot + 'deg');
        imgs.style.setProperty("--rotate", rot + 'deg');
        cnt.forEach((cnt, key) => {
            if(key == act){
                cnt.classList.add('act');
            }else{
                cnt.classList.remove('act');
            }
        })
    }
    nxt.onclick = nxtSld;
    prv.onclick = prvSld;
    const autoNxt = setInterval(nxtSld, 3000);