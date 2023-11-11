"use client";

import React, { ReactNode } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Styles from "../app/styles/carousel.module.scss";

type PropType = {
  options?: EmblaOptionsType;
  slides: ReactNode[];
};

export const EmblaCarousel = (props: PropType) => {
  const { options, slides } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className={Styles.embla} ref={emblaRef}>
      <div className={Styles.embla__container}>
        {slides.map((slide, index) => (
          <div className={Styles.embla__slide} key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};
