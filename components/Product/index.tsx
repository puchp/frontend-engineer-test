import React, { FC } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { ProductType } from "../../types/Product";

type ProductPropsType = {
  productsData: ProductType[];
  handleProductChange: React.Dispatch<
    React.SetStateAction<ProductType | undefined>
  >;
  isLoadingProducts: boolean;
};

const Product: FC<ProductPropsType> = (props) => {
  const { handleProductChange, isLoadingProducts, productsData } = props;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const getProductFromID = productsData.find(
      (product) => product.id === event.target.value
    );
    handleProductChange(getProductFromID);
  };

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
