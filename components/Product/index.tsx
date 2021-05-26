import React, { FC, useEffect, useState } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { getProducts } from "../../services/product";
import { ProductType } from "../../types/Product";

type ProductPropsType = {
  selectedProduct: string;
  handleProductChange: React.Dispatch<React.SetStateAction<string>>;
};

const Product: FC<ProductPropsType> = (props) => {
  const { selectedProduct, handleProductChange } = props;
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [productsData, setProductsData] = useState<ProductType[] | []>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleProductChange(event.target.value as string);
  };

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
    <>
      {isLoadingProducts ? (
        <Grid container justify="center" className="m-2">
          <CircularProgress />
        </Grid>
      ) : (
        <Select
          variant="outlined"
          id="product-select"
          value={selectedProduct}
          onChange={handleChange}
          fullWidth
        >
          {productsData.map((product: ProductType) => (
            <MenuItem key={product.id} value={product.id}>
              {product.id} : {product.name} price : {product.price_per_unit}
            </MenuItem>
          ))}
        </Select>
      )}
    </>
  );
};

export default Product;
