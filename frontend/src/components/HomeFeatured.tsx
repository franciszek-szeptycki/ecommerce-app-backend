

function HomeFeatured() {
  return (
    <div className="container">
        <h1 className="text-center my-5">Online Store</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/500" className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/600" className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/700" className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HomeFeatured