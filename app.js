document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById('form').addEventListener('submit', (e) => {
        const baseURL = 'http://www.reddit.com/search.json?q='
        e.preventDefault()
        const text = document.querySelector('.text')
        document.getElementById('submit').style.visibility = "hidden";
        const inputBox = document.getElementById('go').value
        
        go.style.visibility = "hidden";
        text.style.visibility = "hidden";
        // console.log(baseURL+inputBox+"+nsfw:no")
        fetch(baseURL+inputBox+'+nsfw:no')
        .then((responseData)=> {
            return responseData.json()
        })
        .then((jsonData) => {
            // let array = [];
            // jsonData.data.children.map(child=>{
            //     return array.push(child.data.thumbnail)
            let imgArr = jsonData.data.children.map(child=>{
                return child.data.thumbnail
            })
            
            imgArr.forEach(addData)

            
        })
        .catch((err)=>{
            console.log('Something went wrong', err)
        })
    })

    
    const addData = (thumbnailUrl) => {
        let pic = document.createElement('img')
        pic.setAttribute('src', thumbnailUrl)
        images.appendChild(pic);
    }

})  

document.getElementById('stop').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('img')
    while(images.firstChild) {
        images.removeChild(images.firstChild)
    }
    document.querySelector('.text').style.visibility = "visible";
    document.getElementById('go').style.visibility = 'visible';
    document.getElementById('submit').style.visibility = "visible";
    document.getElementById('go').value=''
})
