import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DiegoPeñafiel from "../assets/images/diego.png";
import AngelRugel from "../assets/images/angel.png";
import CristianSosoranga from "../assets/images/cristian.png";
import BryanMacias from "../assets/images/bryan.png";
import KerlyGuaman from "../assets/images/kerly.png";
import MaricelaRodriguez from "../assets/images/mary.png";

export default function ActionAreaCard() {
  return (
    <div className="cards-colaboradores">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={DiegoPeñafiel}
            alt="Diego Peñafiel"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Diego Peñafiel
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={AngelRugel}
            alt="Angel Rugel"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Angel Rugel
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={CristianSosoranga}
            alt="Cristian Sosoranga"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cristian Sosoranga
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={BryanMacias}
            alt="Bryan Macias"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bryan Macias
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={KerlyGuaman}
            alt="Kerly Guaman"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kerly Guaman
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image={MaricelaRodriguez}
            alt="Maricela Rodriguez"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Maricela Rodriguez
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="Francisco Borja"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Francisco Borja
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="Joselyn Quispillo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Joselyn Quispillo
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="Jefferson Peñafiel"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Jefferson Peñafiel
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
