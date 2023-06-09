const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const productDetailsElement = document.getElementById('productDetails');

fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(product => {
        const productText = document.createElement('h1');
        productText.src = product.text;

        productDetailsElement.appendChild(productText);

        const productTitleElement = document.createElement('h2');
        productTitleElement.className = 'productTitle';
        productTitleElement.innerText = product.title;

        const productImageElement = document.createElement('img');
        productImageElement.src = product.image;
        productImageElement.alt = 'description image';
        productImageElement.className = 'productImage';

        const productDescriptionElement = document.createElement('p');
        productDescriptionElement.innerText = `Description: ${product.description}`;
        productDescriptionElement.classList = 'productDescription';

        const productCategoryElement = document.createElement('p');
        productCategoryElement.innerText = `Category: ${product.category}`;
        productCategoryElement.classList = 'productCategory';

        const productPriceElement = document.createElement('p');
        productPriceElement.innerText = `Price: $${product.price}`;
        productPriceElement.classList = 'productPrice';

        const productRatingElement = document.createElement('p');
        productRatingElement.innerText = `Rating: ${product.rating.rate}`;
        productRatingElement.classList = 'productRating';

        productDetailsElement.appendChild(productTitleElement);
        productDetailsElement.appendChild(productImageElement);
        productDetailsElement.appendChild(productDescriptionElement);
        productDetailsElement.appendChild(productCategoryElement);
        productDetailsElement.appendChild(productPriceElement);
        productDetailsElement.appendChild(productRatingElement);
        
    })
    .catch(error => console.log(error));
