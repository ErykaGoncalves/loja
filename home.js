// fetch('https://fakestoreapi.com/products')
//   .then(res => res.json())
//   .then(json => {
//     const apiDataElement = document.getElementById('apiData');
//     apiDataElement.style.display = 'flex';
//     apiDataElement.style.margin = '0';

    


//     // Limpar o conteúdo existente no elemento
//     apiDataElement.innerHTML = '';

//     json.forEach(product => {
//       const productContainer = document.createElement('div');
//       productContainer.classList.add('product-container');
//       productContainer.style.color = '#191970';
//       productContainer.style.padding = '50px';
      
//       const productImageElement = document.createElement('img');
//       productImageElement.src = product.image;
//       productImageElement.alt = 'Product Image';

//       productImageElement.style.marginTop = '10px';
//       productContainer.appendChild(productImageElement);

      
//       const productTitleElement = document.createElement('h2');
//       productTitleElement.innerText = product.title;
//       productTitleElement.style.textAlign = 'justify'
//       productTitleElement.style.letterSpacing = '1px'
//       productTitleElement.style.fontSize = '20px'
//       productTitleElement.style.textTransform = 'uppercase'
//       productTitleElement.style.marginBottom = '10px'
//       productTitleElement.style.textIndent = '10px'
//       productTitleElement.style.fontWeight = 'bold'
//       productTitleElement.style.width = '300px';
//       productTitleElement.style.height = 'px';
//       productContainer.appendChild(productTitleElement);
      
//       const productPriceElement = document.createElement('p');
//       productPriceElement.innerText = `Price: $${product.price}`;
//       productContainer.appendChild(productPriceElement);
      
//       const productRatingElement = document.createElement('p');
//       productRatingElement.innerText = `Rating: ${product.rating.rate} (Count: ${product.rating.count})`;
//       productContainer.appendChild(productRatingElement);
//       apiDataElement.appendChild(productContainer);


//       placeholder: 'blur'
//       productImageElement.style.filter = 'blur(3px)';
//       productImageElement.style.transition = 'all 0.5s ease-in-out';
//       productImageElement.onmouseover = function() {
//         productImageElement.style.filter = 'blur(0px)';
//       }
//       productImageElement.onmouseout = function() {
//         productImageElement.style.filter = 'blur(3px)';
//       }
//     });
//   })
//   .catch(error => console.log(error));
  