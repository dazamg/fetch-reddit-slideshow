document.addEventListener("DOMContentLoaded", () => {
    const baseURL = 'http://www.reddit.com/search.json?q='
    
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault()
        const inputBox = document.getElementById('go').value
        // console.log(baseURL+inputBox+"+nsfw:no")
        fetch(baseURL+inputBox+'+nsfw:no')
        .then((responseData)=> {
            return responseData.json()
        })
        .then((jsonData) => {
            const imgArr = jsonData.data.children.map(child=>{
                return child.data.thumbnail
            })
            console.log(imgArr)
        })
        .catch((err)=>{
            console.log('Something went wrong', err)
        })
    })
})



// json.data.children.forEach((child) => {
//     array.push(child.data.thumbnail)
// })  












