active = true;
browser.runtime.onMessage.addListener(message => { switch(message.name) {
    case 'turn-on': enable(); active = true; break;
    case 'turn-off': disable(); active = false; break;
} });

function disable() {
    browser.browserAction.setPopup({ popup: 'turnoff.js', });
    browser.webNavigation.onCommitted.addListener(onTabLoad);
}

function enable() {
    browser.browserAction.setPopup({ popup: 'turnon.js', });
    browser.webNavigation.onCommitted.removeListener(onTabLoad);
}

if (active){
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].style.WebkitFilter = 'blur(15px)';
    }
}
