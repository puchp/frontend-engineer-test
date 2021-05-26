import React, { FC, useState } from "react";
import { submitCart } from "../../services/cart";
import { InputCartType } from "../../types/Cart";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

type CartPropsType = {
  cartInput: InputCartType;
};

const Cart: FC<CartPropsType> = (props) => {
  const { cartInput } = props;
  const [isSubmitCart, setIsSubmitCart] = useState(false);
  // TODO: change any to axios post response
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
    setIsSubmitCart(true);
    const response = await submitCart(cartInput);
    // response = {"id":"3","status":"success","date":"2021-05-27","product":1,"locations":[{"id":4,"quantity":10}]}
    setIsSubmitCart(false);
    setResponseInfo(response);
    // TODO: clear cart
    setOpen(true);
  };

  console.log({ cartInput });

  return (
    <div>
      <Grid container justify="center">
        <Button
          onClick={() => handleSubmitCart()}
          disabled={isSubmitCart}
          variant="outlined"
        >
          Submit
        </Button>
      </Grid>

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={10000} // after 10s
        onClose={handleClose}
        message={responseInfo?.data?.status}
        action={
          <>
            <Button
              style={{
                color:
                  responseInfo?.data?.status === "success" ? "#5a5" : "#f577",
              }}
              size="small"
              onClick={handleClose}
            >
              {responseInfo?.data?.date}
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
};

export default Cart;
