import React, { useState, useEffect } from "react";

const SearchParams = () => {
  const [category, setCategory] = useState("beauty");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");

  async function getCategories() {
    const productCategories = await fetch("https://dummyjson.com/products/category-list");

    const json = await productCategories.json();

    const result = json;

    setCategories(result);
  }

  function getProductsByCategory() {
    setProducts([]);
    setProduct("");

    const response = fetch(
      `https://dummyjson.com/products/category/${category}?limit=0`
    ).then((value) => value.json().then(({ products }) => setProducts(products)));
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getProductsByCategory();
  }, [category]);

  return (
    <form>
      <label>
        Kategorija: {category}
        <br />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </label>
      <br />

      <label>
        Proizvod: {product}
        <br />
        <select value={product} onChange={(e) => setProduct(e.target.value)}>
          <option value="">Odaberite proizvod</option>
          {products.map((item) => (
            <option key={item.id} value={item.title}>{item.title}</option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default SearchParams;
