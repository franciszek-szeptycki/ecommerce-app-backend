const Products = () => {
    const products = [
        { id: 1, img: 'https://via.placeholder.com/100', title: 'Printer', description: 'This thing can print.' },
        { id: 2, img: 'https://via.placeholder.com/200', title: 'Dump Truck', description: 'It carries loads and dumps them.' },
        { id: 3, img: 'https://via.placeholder.com/300', title: 'Apple', description: 'Not the company; just a fruit.' },
        { id: 4, img: 'https://via.placeholder.com/400', title: 'VSH Tape', description: 'For recording TV in the 90s.' },
        { id: 5, img: 'https://via.placeholder.com/500', title: 'Small Spoon', description: 'For soup.' },
        { id: 6, img: 'https://via.placeholder.com/600', title: 'Big Spoon', description: 'For shoveling.' },
        { id: 7, img: 'https://via.placeholder.com/700', title: 'Smartphone', description: 'Stay connected on the go with our latest smartphone featuring advanced technology and sleek design.' },
        { id: 8, img: 'https://via.placeholder.com/800', title: 'Wireless Headphones', description: 'Experience the freedom of wireless audio with our premium-quality headphones, delivering crystal-clear sound and all-day comfort.' },
        { id: 9, img: 'https://via.placeholder.com/900', title: 'Smartwatch', description: 'Enhance your lifestyle with our smartwatch, packed with features like fitness tracking, notifications, and stylish design.' },
        { id: 10, img: 'https://via.placeholder.com/100', title: 'Tablet', description: 'Enjoy entertainment and productivity on the go with our powerful and versatile tablet, perfect for work, play, and everything in between.' },
        { id: 11, img: 'https://via.placeholder.com/200', title: 'Gaming Console', description: 'Immerse yourself in the world of gaming with our state-of-the-art console, offering stunning graphics, responsive controls, and a vast library of games.' },
        { id: 12, img: 'https://via.placeholder.com/300', title: 'Laptop', description: 'Unleash your creativity and productivity with our high-performance laptop, featuring cutting-edge technology and sleek, portable design.' },
    ];    

    return (
        <div className="container">
            <h1 className="text-center my-5">Products</h1>
            <div className="row">
                {products.map(product => (
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
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