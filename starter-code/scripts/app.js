document.querySelector("form").addEventListener("submit", getGif);
let gallery = document.querySelector(".gif-gallery");

function getGif(event){
    event.preventDefault();

    let apiKey = "1D6TfNiI9D9OHCqa7SCm2BttZwg6kdBY";
    let category = document.querySelector(".form-control").value;


    let child = gallery.lastElementChild;
    while(child){
        gallery.removeChild(child);
        child = gallery.lastElementChild;
    }

    fetch(`http://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}`,{
        method: "GET", 
    })
    .then((response)=>
        response.json()
    )
    .then(onSuccess)
	.catch(onError);
}

function onSuccess(json){
    for(let i = 0; i < 10; i++){
        console.log(json.data);
        let image = json.data[i].embed_url;
        let showImage = document.createElement("iframe");

        showImage.setAttribute('width','100em');
        showImage.setAttribute('height','100em');
        showImage.setAttribute('src',image);

        gallery.appendChild(showImage);
    }

    //set a new button
    let button = document.createElement("BUTTON");
    button.setAttribute("id","moreButton");
    let buttonText = document.createTextNode("load more");
    button.appendChild(buttonText)
    
    //get more image
    gallery.appendChild(button);
    gallery.querySelector("#moreButton").addEventListener("click",function() {
        moreImage(json);
      });
}

function onError(error) {
    alert("Sorry, there was a problem!");
    console.dir(error);
}
function moreImage(jsonData){
    console.log(jsonData.data);
    for(let i = 10; i < 20; i++){
        let image = jsonData.data[i].embed_url;
        let showImage = document.createElement("iframe");

        showImage.setAttribute('width','100em');
        showImage.setAttribute('height','100em');
        showImage.setAttribute('src',image);

        gallery.appendChild(showImage);
    }
}


