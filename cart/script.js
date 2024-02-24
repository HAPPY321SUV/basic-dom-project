//show the products
//i-products array in betwn obj in name,heading,image,price
var products=[
    {name:"chair",heading:"diamondstic chair",price:"12,000",image:"https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"whitechair",heading:"white premium chair",price:"14,000",image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"Blackchair",heading:"Blackluxury chair",price:"18,000",image:"https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"Pinkchair",heading:"pink lovevale chair",price:"15,000",image:"https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww"},
];
var popular=[
    {name:"chair",heading:"diamondstic chair",price:"12,000",image:"https://images.unsplash.com/photo-1549497538-303791108f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"whitechair",heading:"white premium chair",price:"14,000",image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"Blackchair",heading:"Blackluxury chair",price:"18,000",image:"https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"Pinkchair",heading:"pink lovevale chair",price:"15,000",image:"https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww"},

];
var cart=[]
function addProduct(){
var clutter="";
products.forEach(function(product,index){
    clutter +=`<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
    <img class="w-full h-full object-cover"src="${product.image}">
    </div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
        <div class="flex justify-between w-full items-center mt-2"/>
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.heading}</h3>
                <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
            </div>
            <button data-index='${index}' class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i
                   data-index="${index} "class="add ri-add-line"></i></button>
        </div>
    </div>
</div>`

})
document.querySelector(".products").innerHTML=clutter;
};
function addPopularProduct(){
    var clutter="";
    popular.forEach(function(product){
        clutter +=` <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20  flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="image">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.heading}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${product.price}</h4>
        </div>
    </div>`
    })
    document.querySelector(".populars ").innerHTML=clutter;
};
function addToCart(){
    document.querySelector(".products")
    .addEventListener("click",function(details){
    //     alert("product added")
    if(details.target.classList.contains('add')){
        cart.push(products[details.target.dataset.index])

    }
     })

};
function showCart(){
    document.querySelector(".carticon").addEventListener("click",function(){
        document.querySelector(".cartexpnd").style.display="block";
        var clutter="";
        cart.forEach(function(prod,index){
            clutter +=`<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
            <img class="w-full h-full object-cover"src="${prod.image}"/>
           </div>
           <div>
           <h3  class="font-semibold">${prod.name}</h3>
           <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
           </div>
            </div>`;

        })
        document.querySelector(".cartexpnd").innerHTML=clutter;

    });
}
showCart();
addToCart();
addProduct();
addPopularProduct();
//show the popular products
//on click of products add button add it to the cart
