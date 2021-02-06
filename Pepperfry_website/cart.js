window.addEventListener("load", function() {
    let query = window.location.search
    // let path = window.location.pathname
    // console.log(query)
    // console.log(path)
    fetchid(query)
    overviewInformation()
})

let object_description = document.querySelector("#object-description")
let image_box = document.querySelector("#image-description")



function fetchid(query, path) {
    let url = new URLSearchParams(query)
    let product_id = url.get("id")
    let type = url.get("type")
    fetchData(product_id, type)
    // console.log(product_id, type)
}

function fetchData(id, type) {
    // console.log(id, type)
    let url = `http://localhost:3005/${type}?id=${id}`

    fetch(url).then((res) => res.json()).then((data) => display(data)).catch((err) => console.log("Error While Fetching the data"))
}


function display(data) {
    console.log(data)

    let object_heading = document.createElement("p")
    object_heading.textContent = data[0].name
    object_heading.setAttribute("class", "object-heading")

    //Product Image
    let product_image = document.createElement("img")
    product_image.src = data[0]["img-address"]
    product_image.style.width = "100%";
    product_image.style.height = "510px"
    image_box.append(product_image)
    

    // made Box
    let made_by_box = document.createElement("div")
    made_by_box.setAttribute("class", "made_by_box")

    let made_by_name = document.createElement("p")
    made_by_name.textContent = "CasaCraft by Pepperfry"
    made_by_name.setAttribute("class", "made_by_name")
    made_by_box.append(made_by_name)

    //rate box
    let rate_box = document.createElement("div")
    rate_box.setAttribute("class", "rate-box")

    //rate description
    let total_rate = document.createElement("h3")
    total_rate.textContent = data[0].rate
    total_rate.setAttribute("class", "total-rate")
    //strike rate
    let strike_rate = document.createElement("del")
    strike_rate.textContent = "₹5,000 MRP"
    strike_rate.setAttribute("class", "strike-rate")
    //taxes content
    let taxes_content = document.createElement("p")
    taxes_content.textContent = "(Inclusive of all taxes)"
    taxes_content.setAttribute("class", "taxes-content")

    rate_box.append(total_rate, strike_rate, taxes_content)
    
    //discount image
    
    let discount_image = document.createElement("img")
    discount_image.src = "https://ii2.pepperfry.com/media/wysiwyg/banners/Web_vipcoupon_2000_2221.jpg"
    discount_image.setAttribute("class", "discount-image")

    //another rate box
    let another_rate_box = document.createElement("div")
    another_rate_box.setAttribute("class", "another-rate-box")

    //another rate sub box
    let another_rate_sub_box = document.createElement("div")
    another_rate_sub_box.setAttribute("class", "another-rate-sub-box")

    //another rate sub box1 
    let another_rate_sub_box1 = document.createElement("div")
    another_rate_sub_box1.setAttribute("class", "another-rate-sub-box")

    //another rate sub box first content
    let sub_box_first_content = document.createElement("p")
    sub_box_first_content.textContent = "Total Savings"
    sub_box_first_content.setAttribute("class", "sub_box_first_content")

    //another rate sub box second content
    let sub_box_second_content = document.createElement("p")
    sub_box_second_content.textContent = "Also Earn Cashback"
    sub_box_second_content.setAttribute("class", "sub_box_second_content")

    //another rate sub box first content
    let sub_box1_first_content = document.createElement("p")
    sub_box1_first_content.textContent = "₹ 5,500 (39% off) >"
    sub_box1_first_content.setAttribute("class", "sub_box1_first_content")

    //another rate sub box second content
    let sub_box1_second_content = document.createElement("p")
    sub_box1_second_content.textContent = "₹ 5000"
    sub_box1_second_content.setAttribute("class", "sub_box1_second_content")

    //other details div
    let other_details_div = document.createElement("div")
    other_details_div.setAttribute("class", "other-details-div")

    //other details div content box
    let other_details_div_content_box1 = document.createElement("div")
    other_details_div_content_box1.setAttribute("class", "other_details_div_content_box")

    let other_details_div_content_box2 = document.createElement("div")
    other_details_div_content_box2.setAttribute("class", "other_details_div_content_box other_details_div_content_box_styles")

    let other_details_div_content_box3 = document.createElement("div")
    other_details_div_content_box3.setAttribute("class", "other_details_div_content_box other_details_div_content_box_styles")

    let other_details_div_content_box4 = document.createElement("div")
    other_details_div_content_box4.setAttribute("class", "other_details_div_content_box other_details_div_content_box_styles")

    //other details content first div content
    let image = document.createElement("img")
    image.src = "https://ii1.pepperfry.com/images/svg/w20-calender-icon.svg"

    let content_box_first = document.createElement("p")
    content_box_first.textContent = "EMI from ₹ 1,413"
    content_box_first.setAttribute("class", "content_box_first")

    let content_box_second = document.createElement("p")
    content_box_second.textContent = "No Cost EMI"
    content_box_second.setAttribute("class", "content_box_second")

    let content_box = document.createElement("div")
    content_box.setAttribute("class", "content-box-div")

    content_box.append(content_box_first, content_box_second)

    other_details_div_content_box1.append(image, content_box)

    //other details content second div content
    let second_image = document.createElement("img")
    second_image.src = "https://ii1.pepperfry.com/images/svg/w20-warranty-icon.svg"

    let second_content_box = document.createElement("div")
    second_content_box.setAttribute("class", "content-box-div")

    let second_content_box1 = document.createElement("p")
    second_content_box1.textContent = "36 Months"
    second_content_box1.setAttribute("class", "second_content_box1")

    let second_content_box2 = document.createElement("p")
    second_content_box2.textContent = "Warranty"
    second_content_box2.setAttribute("class", "second_content_box2")   

    second_content_box.append(second_content_box1, second_content_box2)


    other_details_div_content_box2.append(second_image, second_content_box)

    //other details content third div content
    let third_image = document.createElement("img")
    third_image.src = "https://ii1.pepperfry.com/images/svg/w20-returns-icon.svg"

    let third_content_box = document.createElement("div")
    third_content_box.setAttribute("class", "content-box-div")

    let third_content_box1 = document.createElement("p")
    third_content_box1.textContent = "Easy"
    third_content_box1.setAttribute("class", "third_content_box1")

    let third_content_box2 = document.createElement("p")
    third_content_box2.textContent = "Returns"
    third_content_box2.setAttribute("class", "third_content_box2")

    third_content_box.append(third_content_box1, third_content_box2)

    other_details_div_content_box3.append(third_image, third_content_box)

    //other details content fourth div content
    let fourth_image = document.createElement("img")
    fourth_image.src = "https://ii1.pepperfry.com/images/svg/w20-delivery-icon.svg"

    let fourth_content_box = document.createElement("div")
    fourth_content_box.setAttribute("class", "content-box-div")

    let fourth_content_box1 = document.createElement("p")
    fourth_content_box1.textContent = "Free Delivery"
    fourth_content_box1.setAttribute("class", "fourth_content_box1")

    let fourth_content_box2 = document.createElement("p")
    fourth_content_box2.textContent = "Ships in 1 day"
    fourth_content_box2.setAttribute("class", "fourth_content_box2")

    fourth_content_box.append(fourth_content_box1, fourth_content_box2)

    other_details_div_content_box4.append(fourth_image, fourth_content_box)

    //Quantity Box
    let quantity_button_box = document.createElement("div")
    quantity_button_box.setAttribute("class", "quantity_button_box")

    //Add to cart button
    let add_cart_button = document.createElement("div")
    add_cart_button.setAttribute("class", "add-cart-button")
    add_cart_button.setAttribute("id", "add-cart-button")

    let add_cart_text = document.createElement("p")
    add_cart_text.textContent = "ADD TO CART"
    add_cart_text.setAttribute("class", "add-cart-text")

    add_cart_button.append(add_cart_text)

    ///Buy Now Button
    let buy_now_button = document.createElement("div")
    buy_now_button.setAttribute("class", "buy-now-button")

    let buy_now_text = document.createElement("p")
    buy_now_text.textContent = "BUY NOW"
    buy_now_text.setAttribute("class", "buy-now-text")

    buy_now_button.append(buy_now_text)

    quantity_button_box.append(add_cart_button, buy_now_button)


    other_details_div.append(other_details_div_content_box1, other_details_div_content_box2, other_details_div_content_box3, other_details_div_content_box4)

    another_rate_sub_box1.append(sub_box1_first_content, sub_box1_second_content)

    another_rate_sub_box.append(sub_box_first_content, sub_box_second_content )

    another_rate_box.append(another_rate_sub_box, another_rate_sub_box1)

    object_description.append(object_heading, made_by_box, rate_box, discount_image, another_rate_box, other_details_div, quantity_button_box)
}

let display_overview_information = document.querySelector('#display-overview-information')

function overviewInformation() {
    let html = ""
    html = `<h5>Overview:</h5>
             <p>Casacraft offers the best in comfort with elan. The collections are a series of modern trendy designs, simple yet striking and represent the ideals of minimalism. The designs are a perfect blend of functionality and exceptional aesthetics. Each piece is crafted with passion and follows international standards on quality and style.<br/><br/>

             Mid Century Modern is a throwback to the design style of mid 50s and 60s. It is a minimalist design style which is fuss free with key design influences like splayed legs, geometric graphic patterns, natural organic shapes, mixed elements and contrasting textures. No ornate furnishings and excessive decoration for this distinct vintage style.<br/><br/>
             
             Dining Sets are coordinated table and chair or bench sets. They are large pieces of futrniture which will instantly draw attention to itself. Its a focal gathering spot which should be able to accommodate all family members at mealtimes. They come in options of 2,4,6,8-Seater Dining Sets in different design styles.</p>`
    
    display_overview_information.innerHTML += html
}


let add_cart_button = document.querySelector("#add-cart-button")
add_cart_button.addEventListener("click", productCart)


function productCart() {
    console.log("This Product is add to cart")
}



