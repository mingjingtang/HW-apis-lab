document.querySelector("form").addEventListener("submit", getGif);

function getGif(event){
    event.preventDefault();

    let apiKey = "1D6TfNiI9D9OHCqa7SCm2BttZwg6kdBY";
    let category = document.querySelector(".form-control").value;
    let gallery = document.querySelector(".gif-gallery");
    console.log("value of category "+ category)

    fetch(`http://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}`,{
        method: "GET", 
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Credentials' : true,
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET',
            'Access-Control-Allow-Headers':'application/json',
            },
    })
    .then((response)=>{
        return response.json();
    })
    .then((response) => {
        console.log(response);
        let image = response.data[0].url;
        console.log(image);
        
        let showImage = document.createElement("img");
        showImage.setAttribute('width','3em');
        showImage.setAttribute('src',image);

        console.log(showImage);
        gallery.appendChild(showImage);
    })
}
