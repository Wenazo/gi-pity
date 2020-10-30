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
document.getElementById('addTimeOnce').onclick = function(){ addOne('countTime', 'countTime'); };
document.getElementById('addTimeTen').onclick = function(){ addTen('countTime', 'countTime'); };
document.getElementById('resetTime').onclick = function(){ resetCounter('countTime','countTime'); };
document.getElementById('addPermOnce').onclick = function(){ addOne('countPerm', 'countPerm'); };
document.getElementById('addPermTen').onclick = function(){ addTen('countPerm', 'countPerm'); };
document.getElementById('resetPerm').onclick = function(){ resetCounter('countPerm','countPerm'); };
document.getElementById('addWeaponOnce').onclick = function(){ addOne('countWeapon', 'countWeapon'); };
document.getElementById('addWeaponTen').onclick = function(){ addTen('countWeapon', 'countWeapon'); };
document.getElementById('resetWeapon').onclick = function(){ resetCounter('countWeapon', 'countWeapon'); };

// Add one to counter
function addOne(item, element) {
    let currentPos = parseInt(window.localStorage.getItem(item));
    currentPos++;
    if (currentPos > 89) {
        currentPos = 0;
    }
    window.localStorage.setItem(item, currentPos);
    document.getElementById(element).textContent = currentPos;
}
// Add ten to counter
function addTen(item, element) {
    let currentPos = parseInt(window.localStorage.getItem(item));
    currentPos += 10;
    if (currentPos > 89) {
        currentPos -= 90;
    }
    window.localStorage.setItem(item, currentPos);
    document.getElementById(element).textContent = currentPos;
}
// Reset counter
function resetCounter(item, element) {
    window.localStorage.setItem(item, 0);
    document.getElementById(element).textContent = window.localStorage.getItem(item);
}

// load Content
function loadContent() {
    document.getElementById('countTime').textContent = window.localStorage.getItem('countTime');
    document.getElementById('countPerm').textContent = window.localStorage.getItem('countPerm');
    document.getElementById('countWeapon').textContent = window.localStorage.getItem('countWeapon');
}