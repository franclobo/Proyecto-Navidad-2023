import React from "react";
import { Card } from "antd";
import Toys from "../assets/icons/toys.png";
import Clothes from "../assets/icons/clothes.png";
import Candy from "../assets/icons/candy.png";
import Health from "../assets/icons/health.png";
import Certificate from "../assets/icons/certificate.png";

const { Meta } = Card;
const Cards = () => (
  <div className="site-card-border-less-wrapper">
    <Card
      hoverable
      style={{
        width: 240,
        height: 300,
        border: "solid 1px #1cdf26",
        padding: "10px",
      }}
      cover={<img alt="ropa" src={Clothes} style={{ height: 120 }} />}
    >
      <Meta
        title="Ropa"
        description="Entregamos ropa en buen estado para todas la edades."
      />
    </Card>
    <Card
      hoverable
      style={{
        width: 240,
        height: 300,
        border: "solid 1px #1cdf26",
        padding: "10px",
      }}
      cover={<img alt="comida" src={Candy} style={{ height: 120 }} />}
    >
      <Meta
        title="Comida"
        description="Realizamos canastas de comda y fundas de caramelos para los más pequeños. "
      />
    </Card>
    <Card
      hoverable
      style={{
        width: 240,
        height: 300,
        border: "solid 1px #1cdf26",
        padding: "10px",
      }}
      cover={<img alt="juguetes" src={Toys} style={{ height: 120 }} />}
    >
      <Meta
        title="Juguetes"
        description="Entregamos juguetes a los niños y niñas asistentes. "
      />
    </Card>
    <Card
      hoverable
      style={{
        width: 240,
        height: 300,
        border: "solid 1px #1cdf26",
        padding: "10px",
      }}
      cover={<img alt="Medicina" src={Health} style={{ height: 120 }} />}
    >
      <Meta
        title="Medicinas"
        description="Reaizamos terapias físicas a las personas de la tercera edad y entregamos medicamentos. "
      />
    </Card>
    <Card
      hoverable
      style={{
        width: 240,
        height: 300,
        border: "solid 1px #1cdf26",
        padding: "10px",
      }}
      cover={
        <img alt="Certificado" src={Certificate} style={{ height: 120 }} />
      }
    >
      <Meta
        title="Certificados"
        description="En agradecimiento entregamos certifcados a nuestros patrocinadores. "
      />
    </Card>
  </div>
);
export default Cards;
