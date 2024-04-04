function HomeFeatured() {
  const homeFeatured = [
    {
      id: 1,
      name: 'Smartphone',
      description: 'Stay connected on the go with our latest smartphone featuring advanced technology and sleek design.',
      image: 'https://via.placeholder.com/500'
    },
    {
      id: 2,
      name: 'Tablet',
      description: 'Enjoy entertainment and productivity on the go with our powerful and versatile tablet, perfect for work, play, and everything in between.',
      image: 'https://via.placeholder.com/600'
    },
    {
      id: 3,
      name: 'Laptop',
      description: 'Unleash your creativity and productivity with our high-performance laptop, featuring cutting-edge technology and sleek, portable design.',
      image: 'https://via.placeholder.com/700'
    }
  ]
  return (
    <div className="container">
      <h1 className="text-center my-5">Featured Products</h1>
      <div className="row">
          {homeFeatured.map(product => (
              <div className="col-4" key={product.id}>
                  <div className="card">
                      <img src={product.image} className="card-img-top" alt="Product" />
                      <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.description}</p>
                          <a href="#" className="btn btn-primary">Add to Cart</a>
                      </div>
                  </div>
              </div>
          ))}
      </div>
    </div>
  )
}

export default HomeFeatured