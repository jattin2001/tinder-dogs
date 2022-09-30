// Create the Dog class here

class Dog{
    constructor(data){
        Object.assign(this, data)
    }

    getDogPostHtml(){
        const {name, avatar, age, bio} = this; 
        return `<img class="main-dog-img" src="${avatar}" alt="${name}">
                <div class="dog-info">
                    <h1>${name}, ${age}</h1>
                    <p>${bio}</p>
                </div>`
    }


}


export default Dog