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
        productImageElement.classList.add('produto-img');
        productImageElement.alt = 'description image';
        productImageElement.style.width = '230px'
        productImageElement.style.height = '350px'
        productContainer.appendChild(productImageElement);

        const figcaptionElement = document.createElement('figcaption');
        figcaptionElement.classList.add('info-produto');

        const productTitleElement = document.createElement('h2');
        productTitleElement.id = 'productTitle';
        productTitleElement.innerText = product.title;

        const productLinkElement = document.createElement('a');
        productLinkElement.href = `./html/detalhes.html?id=${product.id}`;

        const productRatingElement = document.createElement('div');
        productRatingElement.innerHTML = getStarRating(product.rating.rate);
        productRatingElement.classList = 'productRating';

        const productPriceElement = document.createElement('p');
        productPriceElement.innerText = `$ ${product.price}`;
        productPriceElement.classList = 'productPrice';

        const buttonSalesElement = document.createElement('div');
        buttonSalesElement.classList.add('button-sales');

        const buttonSaleElement = document.createElement('button');
        buttonSaleElement.classList.add('button-sale');
        buttonSaleElement.innerText = 'Comprar';
        buttonSaleElement.addEventListener('click', () => {
          window.alert('AÇÃO NÃO DISPONÍVEL')
        });

        const buttonDetailsElement = document.createElement('button');
        buttonDetailsElement.classList.add('button-details');
        buttonDetailsElement.innerText = 'Detalhes';
        buttonDetailsElement.addEventListener('click', () => {
          window.location.href = productLinkElement.href;
        });

        figcaptionElement.appendChild(productTitleElement);
        figcaptionElement.appendChild(productLinkElement);
        figcaptionElement.appendChild(productRatingElement);
        figcaptionElement.appendChild(productPriceElement);

        //botões
        figcaptionElement.appendChild(buttonSalesElement);
        buttonSalesElement.appendChild(buttonSaleElement);
        buttonSalesElement.appendChild(buttonDetailsElement);

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

    function getStarRating(rating) {
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 !== 0;
      const emptyStars = 5 - Math.ceil(rating);

      let starRating = '';

      for (let i = 0; i < fullStars; i++) {
        starRating += '<i class="fas fa-star"></i>';
      }

      if (halfStar) {
        starRating += '<i class="fas fa-star-half-alt"></i>';
      }

      for (let i = 0; i < emptyStars; i++) {
        starRating += '<i class="far fa-star"></i>';
      }

      return starRating;
    }
  })
  .catch(error => console.log(error));
