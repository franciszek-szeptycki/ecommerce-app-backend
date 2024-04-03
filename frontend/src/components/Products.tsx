const Products = () => {
    const products = [
        { id: 1, img: 'https://via.placeholder.com/100', title: 'Printer', description: 'This thing can print.' },
        { id: 2, img: 'https://via.placeholder.com/200', title: 'Dump Truck', description: 'It carries loads and dumps them.' },
        { id: 3, img: 'https://via.placeholder.com/300', title: 'Apple', description: 'Not the company; just a fruit.' },
        { id: 4, img: 'https://via.placeholder.com/400', title: 'VSH Tape', description: 'For recording TV in the 90s.' },
        { id: 5, img: 'https://via.placeholder.com/500', title: 'Small Spoon', description: 'For soup.' },
        { id: 6, img: 'https://via.placeholder.com/600', title: 'Big Spoon', description: 'For shoveling.' },
        { id: 7, img: 'https://via.placeholder.com/700', title: 'Product 7', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
        { id: 8, img: 'https://via.placeholder.com/800', title: 'Product 8', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
        { id: 9, img: 'https://via.placeholder.com/900', title: 'Product 9', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
        { id: 10, img: 'https://via.placeholder.com/100', title: 'Product 10', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
        { id: 11, img: 'https://via.placeholder.com/200', title: 'Product 11', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
        { id: 12, img: 'https://via.placeholder.com/300', title: 'Product 12', description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    ];

    return (
        <div className="container">
            <h1 className="text-center my-5">Products</h1>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-3 mb-4" key={product.id}>
                        <div className="card">
                            <img src={product.img} className="card-img-top" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <a href="#" className="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;