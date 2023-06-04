fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    const carouselInner = document.querySelector('#apiData .carousel-inner');
    carouselInner.innerHTML = '';

    json.forEach((product, index) => {
      const productContainer = document.createElement('div');
      productContainer.classList.add('carousel-item');
      if (index === 0) {
        productContainer.classList.add('active');
      }

      const productImageElement = document.createElement('img');
      productImageElement.src = product.image;
      productImageElement.alt = 'Product Image';
      productImageElement.style.width = '300px';
      productImageElement.style.height = '400px';
      productImageElement.style.marginTop = '10px';
      productContainer.appendChild(productImageElement);

      const productTitleElement = document.createElement('h2');
      productTitleElement.innerText = product.title;
      productTitleElement.style.textAlign = 'justify'
      productTitleElement.style.letterSpacing = '1px'
      productContainer.appendChild(productTitleElement);

      const productDescriptionElement = document.createElement('p');
      productDescriptionElement.innerText = product.description;
      productDescriptionElement.style.textIndent = '10px';
      productDescriptionElement.style.textAlign = 'justify';
      productContainer.appendChild(productDescriptionElement);

      const productPriceElement = document.createElement('p');
      productPriceElement.innerText = `Price: $${product.price}`;
      productContainer.appendChild(productPriceElement);

      const productCategoryElement = document.createElement('p');
      productCategoryElement.innerText = `Category: ${product.category}`;
      productContainer.appendChild(productCategoryElement);

      const productRatingElement = document.createElement('p');
      productRatingElement.innerText = `Rating: ${product.rating.rate} (Count: ${product.rating.count})`;
      productContainer.appendChild(productRatingElement);

      carouselInner.appendChild(productContainer);
    });
  })
  .catch(error => console.log(error));
