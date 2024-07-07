    // Função para exibir uma mensagem de boas-vindas
    function welcomeMessage() {
        alert("Bem-vindo à TecnoStore! Confira nossos produtos.");
    }

    // Função para exibir um alerta quando o botão "Comprar" é clicado
    function comprarProduto(produto) {
        alert("Você clicou em comprar " + produto + "!");
    }

    // Chama a função welcomeMessage quando a página é carregada
    window.onload = welcomeMessage;

       // Função para adicionar um produto ao carrinho
       function comprarProduto(produto) {
        cart.push(produto);
        alert(produto + " foi adicionado ao carrinho!");
        updateCart();
    }

    // Função para atualizar a exibição do carrinho
    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        cartItems.innerHTML = "";
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            cartItems.appendChild(li);
        });
        cartTotal.textContent = "Total de itens: " + cart.length;
    }

    // Função para filtrar produtos por categoria
    function filterProducts() {
        const category = document.getElementById('category').value;
        const products = document.querySelectorAll('.product-item');
        products.forEach(product => {
            if (category === 'all' || product.classList.contains(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Chama a função welcomeMessage quando a página é carregada
    window.onload = welcomeMessage;