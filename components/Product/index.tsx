import React, { FC, useEffect, useState } from "react";
import { getProducts } from "../../services/product";
import { ProductType } from "../../types/Product";

type ProductPropsType = {
  // props: string;
};

const Product: FC<ProductPropsType> = () => {
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [productsData, setProductsData] = useState<ProductType[] | []>([]);

  useEffect(() => {
    async function getInitProductsData() {
      const initProductsData = await getProducts();
      if (initProductsData) {
        setProductsData(initProductsData);
        setIsLoadingProducts(false);
      }
    }
    setIsLoadingProducts(true);
    getInitProductsData();
  }, []);

  return (
    <div>
      "Product component"
      <br />
      {isLoadingProducts ? (
        <p>Loading...</p>
      ) : (
        <p>{JSON.stringify(productsData)}</p>
      )}
    </div>
  );
};

export default Product;
