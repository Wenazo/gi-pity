// Primer login
if (!window.localStorage.getItem('isBooted')) {
    window.localStorage.setItem('isBooted', true);
    window.localStorage.setItem('countTime', 0);
    window.localStorage.setItem('countPerm', 0);
    window.localStorage.setItem('countWeapon', 0);
    console.log('Counter initilizated!');
}else{
    loadContent();
}

// On click
document.getElementById('addTimeOnce').onclick = function(){ addOne('countTime', 'countTime', 'untilTime'); };
document.getElementById('addTimeTen').onclick = function(){ addTen('countTime', 'countTime', 'untilTime'); };
document.getElementById('resetTime').onclick = function(){ resetCounter('countTime','countTime', 'untilTime'); };
document.getElementById('addPermOnce').onclick = function(){ addOne('countPerm', 'countPerm', 'untilPerm'); };
document.getElementById('addPermTen').onclick = function(){ addTen('countPerm', 'countPerm', 'untilPerm'); };
document.getElementById('resetPerm').onclick = function(){ resetCounter('countPerm','countPerm', 'untilPerm'); };
document.getElementById('addWeaponOnce').onclick = function(){ addOne('countWeapon', 'countWeapon', 'untilWeapon'); };
document.getElementById('addWeaponTen').onclick = function(){ addTen('countWeapon', 'countWeapon', 'untilWeapon'); };
document.getElementById('resetWeapon').onclick = function(){ resetCounter('countWeapon', 'countWeapon', 'untilWeapon'); };

// Add one to counter
function addOne(item, element, until) {
    let currentPos = parseInt(window.localStorage.getItem(item));
    currentPos++;
    if (currentPos > 89) {
        currentPos = 0;
    }
    window.localStorage.setItem(item, currentPos);
    document.getElementById(element).textContent = currentPos;
    document.getElementById(until).textContent = (90-currentPos);
}
// Add ten to counter
function addTen(item, element, until) {
    let currentPos = parseInt(window.localStorage.getItem(item));
    currentPos += 10;
    if (currentPos > 89) {
        currentPos -= 90;
    }
    window.localStorage.setItem(item, currentPos);
    document.getElementById(element).textContent = currentPos;
    document.getElementById(until).textContent = (90-currentPos);
}
// Reset counter
function resetCounter(item, element, until) {
    window.localStorage.setItem(item, 0);
    document.getElementById(element).textContent = window.localStorage.getItem(item);
    document.getElementById(until).textContent = 90;
}

// load Content
function loadContent() {
    document.getElementById('countTime').textContent = window.localStorage.getItem('countTime');
    document.getElementById('untilTime').textContent = (90 - window.localStorage.getItem('countTime'));
    document.getElementById('countPerm').textContent = window.localStorage.getItem('countPerm');
    document.getElementById('untilPerm').textContent = (90 - window.localStorage.getItem('countPerm'));
    document.getElementById('countWeapon').textContent = window.localStorage.getItem('countWeapon');
    document.getElementById('untilWeapon').textContent = (90 - window.localStorage.getItem('countWeapon'));

}