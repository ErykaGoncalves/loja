fetch('https://fakestoreapi.com/products/')
  .then(res => res.json())
  .then(json => {
    const apiDataElement = document.getElementById('apiData');
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    apiDataElement.innerHTML = '';

    function displayProducts(products) {
      products.forEach(product => {
        const productContainer = document.createElement('li');
        productContainer.classList.add('produto-1');

        const productImageElement = document.createElement('img');
        productImageElement.src = product.image;
        productImageElement.alt = 'description image';
        productImageElement.style.width = '230px'
        productImageElement.style.height = '350px'
        productContainer.appendChild(productImageElement);

        const figcaptionElement = document.createElement('figcaption');
        figcaptionElement.classList.add('info-produto');

        const productTitleElement = document.createElement('h2');
        productTitleElement.innerText = product.title;

        const productLinkElement = document.createElement('a');
        productLinkElement.href = `./detalhes.html?id=${product.id}`;
        productLinkElement.appendChild(productTitleElement);

        const buttonSalesElement = document.createElement('div');
        buttonSalesElement.classList.add('button-sales');

        const buttonSaleElement = document.createElement('button');
        buttonSaleElement.classList.add('button-sale');
        buttonSaleElement.innerText = 'Comprar';

        const buttonDetailsElement = document.createElement('button');
        buttonDetailsElement.classList.add('button-details');
        buttonDetailsElement.innerText = 'Detalhes';
        buttonDetailsElement.addEventListener('click', () => {
          window.location.href = productLinkElement.href;
        });

        figcaptionElement.appendChild(productLinkElement);
        buttonSalesElement.appendChild(buttonSaleElement);
        buttonSalesElement.appendChild(buttonDetailsElement);
        figcaptionElement.appendChild(buttonSalesElement);
        productContainer.appendChild(figcaptionElement);
        apiDataElement.appendChild(productContainer);
      });
    }

    displayProducts(json);

    searchForm.addEventListener('submit', event => {
      event.preventDefault();
      const searchTerm = searchInput.value.toLowerCase();

      const filteredProducts = json.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
      );

      apiDataElement.innerHTML = '';
      displayProducts(filteredProducts);
    });
  })
  .catch(error => console.log(error));
