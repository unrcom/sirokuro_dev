import { FC } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

type BannerItem = {
  name: string;
  caption: string;
  siroName: string;
  siroImage: string;
  kuroName: string;
  kuroImage: string;
};

type Props = {
  bnnr: BannerItem;
  key: number;
};

export const Banner: FC<Props> = ({ bnnr, key }) => {
  //   if (props.newProp) console.log(props.newProp);
  //   const contentPosition = props.contentPosition
  //     ? props.contentPosition
  //     : "left";
  //   const totalItems = props.length ? props.length : 3;
  //   const mediaLength = totalItems - 1;

  const totalItems = 3;
  let items = [];

  const siroAlt = bnnr.siroName + "に投票!";
  const kuroAlt = bnnr.kuroName + "に投票!";

  const content = (
    <Grid item xs={2} key={key}>
      <CardContent className="Content">
        {/* <Typography className="Title">{bnnr.name}</Typography> */}

        <Typography className="Caption">{bnnr.caption}</Typography>

        <Button variant="outlined" className="ViewButton">
          View
        </Button>
      </CardContent>
    </Grid>
  );

  const siro = (
    <Grid item xs={5} key={bnnr.siroName}>
      <CardMedia className="Media" image={bnnr.siroImage} title={siroAlt}>
        <Typography className="SiroMediaCaption">{bnnr.siroName}</Typography>
      </CardMedia>
    </Grid>
  );

  const kuro = (
    <Grid item xs={5} key={bnnr.kuroName}>
      <CardMedia className="Media" image={bnnr.kuroImage} title={kuroAlt}>
        <Typography className="MediaCaption">{bnnr.kuroName}</Typography>
      </CardMedia>
    </Grid>
  );

  items.push(siro);
  items.push(content);
  items.push(kuro);

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
};
