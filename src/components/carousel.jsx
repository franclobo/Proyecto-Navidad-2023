import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2F100080703520947%2Fvideos%2F4461537260625417%2F&show_text=false&width=560&t=0"
          width="560"
          height="320"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
          title="2018"
        />
        <Carousel.Caption>
          <h3>2018</h3>
          <p>Proyecto Navidad</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          width="560"
          height="320"
          src="https://www.youtube.com/embed/rqHlr2C4d-E"
          title="2021"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <Carousel.Caption>
          <h3>2021</h3>
          <p>Jatumpamba</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100080703520947%2Fvideos%2F2388017908029868%2F&show_text=false&width=560&t=0"
          width="560"
          height="320"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
          title="2022"
        ></iframe>

        <Carousel.Caption>
          <h3>2022</h3>
          <p>
            Nono
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
