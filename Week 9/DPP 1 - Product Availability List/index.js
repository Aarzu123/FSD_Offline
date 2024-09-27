const products=[
    { name: "Sport Shoes", inStock: true },
    { name: "Watch", inStock: false },
    { name: "Air Fryer", inStock: true },
    { name: "Hair Dryer", inStock: false },
    { name: "Sandals", inStock: true }
];
function createProductItem(product)
{
    const li =document.createElement('li');
    li.className='product-item';
    li.innerHTML=`<span class='product-item'>${product.name}</span>
    <span class="stock-status ${product.inStock?'in-stock':'out-of-stock'}" 
    onclick="toggleStockStatus(this)">
    ${product.inStock? 'In Stock': 'Out of Stock'}</span>`;
    return li;
}

function renderProductList()
{
    const productList= document.getElementById('product-list');
    //productList.innerHTML='';
    products.forEach(product=> {
        productList.appendChild(createProductItem(product));
    });

}

function toggleStockStatus(element)
{
    element.classList.toggle('in-stock');
    element.classList.toggle('out-of-stock');
    element.textContent=element.classList.contains('in-stock')?'In Stock':'Out of Stock';
}

function addRandomProduct()
{
    const randomProducts=["Jacket","Hat","Lens","Hair Oil","Shampoo","Laptop","Oven","Filter"];
    const randomName=randomProducts[Math.floor(Math.random()*randomProducts.length)];
    const randomStock=Math.random()<0.5;
    products.push({name:randomName,inStock:randomStock});
    renderProductList();
}
function toggleAllStatuses()
{
    const statuses=document.getElementsByClassName('stock-status');
    for(let i=0;i<statuses.length;i++)
    {
        toggleStockStatus(statuses[i]);
    }

}
//event handling