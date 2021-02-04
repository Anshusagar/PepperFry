let browse_collection_button = document.querySelector("#show-more-button")
browse_collection_button.addEventListener("click", browseCollection)

let display_all_browse_collection = document.querySelector("#third-block-third-part")

function browseCollection() {
    // console.log("Browse Collection")
    display_all_browse_collection.innerHTML = ""
    let html = "";
    html = `<div>
                <img src="https://ii1.pepperfry.com/media/catalog/product/collections/1600688693_camila.jpg" alt="logo-of-sofa" />
                <h5>CAMILA</h5>
                <p>Velvet & Coated Fabric Sofas</p>
            </div>
            <div>
                <img src="https://ii1.pepperfry.com/media/catalog/product/collections/1610767274_simon.jpg" alt="logo-of-sofa" />
                <h5>SIMON</h5>
                <p>Velvet & Coated Fabric Sofas</p>
            </div>
            <div>
                <img src="https://ii1.pepperfry.com/media/catalog/product/collections/1610766956_fuego.jpg" alt="logo-of-sofa" />
                <h5>FUEGO</h5>
                <p>Velvet & Coated Fabric Sofas</p>
            </div>
            <div>
                <img src="https://ii1.pepperfry.com/media/catalog/product/collections/1610767130_santiago.jpg" alt="logo-of-sofa" />
                <h5>SANTIAGO</h5>
                <p>Velvet & Coated Fabric Sofas</p>
            </div>
            <div></div>
            <div></div>`
    display_all_browse_collection.innerHTML = html
}

// let odd_add_cart_button = document.querySelector("")
// odd_add_cart_button.addEventListener("click", openAddCartBar)

// function openAddCartBar() {
//     document.getElementById("mySidenav").style.width = "550px";
// }