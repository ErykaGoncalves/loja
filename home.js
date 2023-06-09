fetch('https://fakestoreapi.com/products/')
  .then(res => res.json())
  .then(json => {
    const apiDataElement = document.getElementById('apiData');

    // Limpar o conteúdo existente no elemento
    apiDataElement.innerHTML = '';

    json.forEach(product => {

      const productText = document.createElement('h1');
      productText.src = product.text;

      const productContainer = document.createElement('li');
      productContainer.classList.add('produto-1');

      const productImageElement = document.createElement('img');
      productImageElement.src = product.image;
      productImageElement.alt = 'description image';
      productImageElement.style.width = '100%'
      productImageElement.style.height = '350px'
      productContainer.appendChild(productImageElement);

      const figcaptionElement = document.createElement('figcaption');
      figcaptionElement.classList.add('info-produto');

      const productTitleElement = document.createElement('h2');
      productTitleElement.id = 'productTitle';
      productTitleElement.innerText = product.title;
      figcaptionElement.appendChild(productTitleElement);

     /* const buttonSalesElement = document.createElement('div');
      buttonSalesElement.classList.add('button-sales');
      */

      const buttonDetailsElement = document.createElement('button');
      buttonDetailsElement.classList.add('button-details');
      buttonDetailsElement.innerText = 'Detalhes';

      //buttonSalesElement.appendChild(buttonDetailsElement);
      //figcaptionElement.appendChild(buttonSalesElement);
      productContainer.appendChild(figcaptionElement);
      apiDataElement.appendChild(productContainer);
    });
  })
  .catch(error => console.log(error));