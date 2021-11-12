import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AxiosInstance from "../redux/axios";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const url = cat ? `/products?category=${cat}` : `/products`;
      const resp = await AxiosInstance.get(url);
      if (resp) {
        setProducts(resp.data || []);
      }
    })();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].toLowerCase().includes(value.toLowerCase())
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort) {
      if (sort.toLowerCase() === "newest") {
        setFilteredProducts((prev) =>
          [...prev].sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          )
        );
      } else if (sort.toLowerCase() === "asc")
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
      else
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
