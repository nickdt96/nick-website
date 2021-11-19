
//when the image is clicked it will enlarge with an ease transition then when you click it again or anywhere else on the screen it returns to normal size

document.addEventListener("click", function (enlarge){
    if(enlarge.target.classList.contains("portfolio-image")){
        const src = enlarge.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})

/*
// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementsByClassName("portfolio-image");
let modalImg = document.getElementById("modalImage");
let captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}*/

