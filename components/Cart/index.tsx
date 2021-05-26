import React, { FC, useState } from "react";
import { submitCart } from "../../services/cart";
import { InputCartType } from "../../types/Cart";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

type CartPropsType = {
  cartInput: InputCartType;
};

const Cart: FC<CartPropsType> = (props) => {
  const { cartInput } = props;
  const [isSubmitCart, setIsSubmitCart] = useState(false);
  const [responseInfo, setResponseInfo] = useState<any>(null);

  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmitCart = async () => {
    // setIsSubmitCart(true);
    // const response = await submitCart(cartInput);
    // setIsSubmitCart(false);

    // setResponseInfo(response);

    setOpen(true);
    // console.log({ response });
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handleSubmitCart()}
        disabled={isSubmitCart}
      >
        Submit
      </button>
      <br />
      <p>cartInput: {JSON.stringify(cartInput)}</p>
      <br />

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              {responseInfo && <p>{JSON.stringify(responseInfo)}</p>}
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default Cart;
