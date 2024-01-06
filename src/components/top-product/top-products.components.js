import Card from "../card/card.component";
import Product from "../product/product.component";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TopProductsComponents() {
  const [products, setProducts] = useState([]);

  const deleteProductHandler = (product) => {
    const filteredProducts = products.filter((p) => p.id !== product.id);
    setProducts(filteredProducts);
  };
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((r) =>
        setProducts(() =>
          r.data.map((data) => ({ ...data, price: data.price * 1000 })),
        ),
      );
  }, []);
  return (
    <Card>
      <header className={"grid md:grid-cols-7 grid-cols-2 bg-gray-400 rounded-t-lg p-6"}>
        <span className={"md:col-span-2"}>ITEMS</span>
        <span>PRICE</span>
        <span className={'hidden md:flex'}>CATEGORY</span>
        <span className={'hidden md:flex'}>VIEWS</span>
        <span className={'hidden md:flex'}>OPTIONS</span>
        <span className={'hidden md:flex'}>AVAILABILITY</span>
      </header>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            deleteProductHandler={() => deleteProductHandler(product)}
          />
        ))}
      </div>
    </Card>
  );
}
