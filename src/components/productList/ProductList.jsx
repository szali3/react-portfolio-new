import "../productList/productList.css"
import Product from "../product/Product"

function productList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus dignissimos consequatur incidunt odio iusto quos consequuntur ea obcaecati nesciunt corrupti dolor magni, soluta dolores voluptatum illum temporibus animi ullam eligendi!
        </p>
      </div>
      <div className="pl-list">
        <Product />
        <Product />
        <Product /> 
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default productList