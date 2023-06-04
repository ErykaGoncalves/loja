fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    const apiDataElement = document.getElementById('apiData');
    apiDataElement.style.display = 'flex';
    apiDataElement.style.margin = '0';
    


    // Limpar o conteúdo existente no elemento
    apiDataElement.innerHTML = '';

    json.forEach(product => {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product-container');
      productContainer.style.color = '#191970';
      productContainer.style.padding = '50px';
      
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


      apiDataElement.appendChild(productContainer);
    });
  })
  .catch(error => console.log(error));
