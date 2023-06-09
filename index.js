thisGuyElement = document.getElementById('this-guy')

function thisGuy() {
    console.log('this guy');
    thisGuyElement.textContent = '** Created by This Guy';
}

function remove() {
    thisGuyElement.textContent = '';
}