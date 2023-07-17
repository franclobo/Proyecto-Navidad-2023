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
              <ul>
                <li>Buscar lugar para las donaciones.</li>
                <li>Pactar lugar y fecha con la directiva del lugar seleccionado.</li>
                <li>Coordinar al personal interno, monto de donación, encargados de actividades y diversidad de canasta.</li>
                <li>Compras acompañado por secretaria y tesorera</li>
                <li>Velar por los intereses de los integrantes.</li>
                <li>Postulaciones de socios conjuntamente con marketing.</li>
              </ul>
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
              <ul>
                <li>Animación del evento.</li>
              </ul>
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
              <ul>
                <li>Gestión con el personal de apoyo en salud.</li>
                <li>Logística.</li>
                <li>Trato al paciente.</li>
                <li>Colocación de medicamentos.</li>
                <li>Abastecer con enceres necesarios para el evento.</li>
              </ul>
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
              <ul>
                <li>Charlas sobre protección personal.</li>
                <li>Charlas de bioseguridad.</li>
                <li>Charlas de distanciaminto social.</li>
                <li>Encargado de protección personal.</li>
              </ul>
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
              <ul>
                <li>Documentación del proyecto.</li>
                <li>Eventos sociales, animación.</li>
                <li>LOgística de entrega de certificados.</li>
                <li>Apoyo al personal requerido.</li>
              </ul>
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
              <ul>
                <li>Brindar apoyo a todas las áreas.</li>
                <li>Encargado de alimentación.</li>
                <li>Encargado de transporte.</li>
                <li>Encargado de coordinar todos los materiales, donaciones que estén disponibles para el uso correspondiente.</li>
              </ul>
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
              <ul>
                <li>Publicidad</li>
                <li>Documentar el programa digital y físicamente.</li>
                <li>Apoyo a secretaría para entrega de certificados.</li>
                <li>Búsqueda de donadores.</li>
                <li>Campaña de satisfacción y mejora.</li>
                <li>Proponer logos, colores y posición de marca.</li>
              </ul>
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
              <ul>
                <li>Recaudo de cuaotas para el evento.</li>
                <li>Estadística de compras.</li>
                <li>Respaldo de compras.</li>
                <li>Informe de contabilidad.</li>
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
