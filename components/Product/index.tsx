import React, { FC } from "react";
import { mockProducts } from "../../services/getProduct";

type ProductPropsType = {
  // props: string;
};

const Product: FC<ProductPropsType> = () => {
  return (
    <div>
      "Product component"
      <p>{JSON.stringify(mockProducts)}</p>
    </div>
  );
};

export default Product;
