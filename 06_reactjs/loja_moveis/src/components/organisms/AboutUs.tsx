export default function AboutUs(){
  return (
    <div className="container-fluid bg-primary mt-5 about-us">
      <div className="row align-items-center">
        <div className="col-md-6" style={{backgroundImage:`url(/assets/img/aboutus.jpg)`,height:'35rem',backgroundSize:'cover'}} />
        <div className="col-md-6 text-light p-5">
          <h2 className="display-4">About Us</h2>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
      </div>
    </div>
  );
}