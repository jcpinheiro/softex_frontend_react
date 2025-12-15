import products from '../../data/products.json';

export default function ProductsList(){
  return (
    <div className="container mt-4">
      <h2 className="text-center title">Our Products</h2>
      <div className="row mt-4 bg-primary align-items-center">
        <div className="col-lg-8">
          <img src={products[0].img} className="img-fluid" />
        </div>
        <div className="col-lg-4 text-light p-4">
          <h3>{products[0].title}</h3>
          <p>{products[0].price}</p>
          <a className="btn btn-success d-block btn-lg">Add To Cart</a>
        </div>
      </div>
    </div>
  );
}