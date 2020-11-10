// Variables
let w = window.innerWidth;
let menuState;

// OnLoad
window.onload = function(){
    if (w < 768){
        menuState = false;
        hideMenu(menuState);
    }else{
        menuState = true;
    }
};
// On Resize
window.onresize = function() {
    if (w < 768) {
        
    }
};

document.getElementById('groadNavBtn').onclick = function () {
    hideMenu(menuState);
}


function changeMenuState() {
    menuState = !menuState;
}

function hideMenu(state){
    console.log(state);
    let menu = document.getElementById('groadMenuContent');
    if (state) {
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
    changeMenuState();
}



// cuando se achica esconderlo
// cuando se agranda mostrarlo y si se vuelva a achicar mantener el estado anterior
// cuando tiene menos de 768 esconderlo
// cuando sea mas de 