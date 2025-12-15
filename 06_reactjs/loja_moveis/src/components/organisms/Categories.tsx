export default function Categories(){
  const items=[
    {img:'/assets/img/category1.jpg',label:'Office'},
    {img:'/assets/img/category2.jpg',label:'Home'},
    {img:'/assets/img/category3.jpg',label:'Kitchen'}
  ];
  return (
    <div className="container pt-4" id="categories">
      <h2 className="text-center title">Categorias dos Produtos</h2>
      <div className="row mt-4 justify-content-center">
        {items.map(i=>(
          <div key={i.label} className="col-8 col-md-4 mb-4">
            <img src={i.img} className="img-fluid" />
            <a className="text-center d-block mt-4">{i.label}</a>
          </div>
        ))}
      </div>
    </div>
  );
}