import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Popover from "@material-ui/core/Popover";
import RoomIcon from "@material-ui/icons/Room";
import Typography from "@material-ui/core/Typography";

type MarkerPropsType = {
  text: string;
  lat: number;
  lng: number;
  fee: number;
  max_dist: number;
  id: string;
  addLocation: Function;
  disabled: boolean;
};

export const MarkerComponent: FC<MarkerPropsType> = (props) => {
  const { text, fee, max_dist, id, addLocation, disabled } = props;

  const [anchorEl, setAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? "location-popover" : undefined;

  return (
    <>
      <ButtonBase onClick={handleClick}>
        <RoomIcon color="secondary" fontSize={"large"} />
      </ButtonBase>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: 20,
            width: 200,
            height: 120,
          }}
        >
          <Grid container>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="subtitle1">{text}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Button
                  disabled={disabled}
                  variant="contained"
                  onClick={() => {
                    addLocation(id);
                    setAnchorEl(null);
                  }}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
            <Typography variant="subtitle2"> max units: {max_dist}</Typography>
            <Typography variant="subtitle2"> fee: {fee}</Typography>
          </Grid>
        </div>
      </Popover>
    </>
  );
};
