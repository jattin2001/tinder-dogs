// Remember to import the data and Dog class!
import Dog from './Dog.js'
import dogs from './data.js'

let dog = new Dog(dogs[0]);
document.getElementById("cross-btn").addEventListener("click", crossBadge);
function crossBadge(){
    dog.hasBeenSwiped = true;
    document.getElementById("cross-badge").style.display = "block";
    document.getElementById("like-badge").style.display = "none";
    slide();
}
document.getElementById("like-btn").addEventListener("click", likeBadge);
function likeBadge(){
    dog.hasBeenLiked = true;
    dog.hasBeenSwiped = true;
    document.getElementById("cross-badge").style.display = "none";
    document.getElementById("like-badge").style.display = "block";
    slide();
}

let index = 0;
function getNewDog(){
    if (index === dogs.length - 1) {
        index = 0;
    }
    else{
        index++;
    }
    return dogs[index]
}

function slide(){
if (dog.hasBeenLiked || dog.hasBeenSwiped) {
    setTimeout(()=>{
        dog = new Dog(getNewDog())
        document.getElementById("cross-badge").style.display = "none";
        document.getElementById("like-badge").style.display = "none";
        render()
    }, 1000)
}
}
function render(){
    document.getElementById("dog-post").innerHTML = dog.getDogPostHtml()
}
render()