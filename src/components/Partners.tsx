import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { brand1, brand2 } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const MarqueeContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 0)
  );

  @media (max-width: 768px) {
    display: none;
  }
`;

const SmallScreenCarousel = styled.div`
  display: none;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const commonMarquee = css`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${commonMarquee}
`;

const MarqueeGroupReverse = styled.div`
  ${commonMarquee}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageContainer = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 20rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 20rem) / 10);
  margin: 0 10px;
  position: relative;

  @media (max-width: 768px) {
    width: 50%;
    padding: 0;
    flex: 0 0 auto;
    scroll-snap-align: center;
    margin: 0 10px;
  }
`;

const GridBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, rgba(0, 0, 0, 0.05) 1px);
  background-size: 10px 10px;
  z-index: 0;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f0f0f0;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2px 10px;
  }
`;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Partners = () => {
  const isMobile = useIsMobile();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0px',
    arrows: false
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 text-white">
      <Wrapper>
        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 mb-4">Partners</h2>
        {!isMobile ? (
          <>
            <MarqueeContainer>
              <MarqueeGroup>
                {brand1.map((item, index) => (
                  <ImageContainer key={index}>
                    <GridBackground />
                    <Image src={item.img} alt={`brand-${index}`} />
                  </ImageContainer>
                ))}
              </MarqueeGroup>
              <MarqueeGroup>
                {brand1.map((item, index) => (
                  <ImageContainer key={index}>
                    <GridBackground />
                    <Image src={item.img} alt={`brand-${index}`} />
                  </ImageContainer>
                ))}
              </MarqueeGroup>
            </MarqueeContainer>
            <MarqueeContainer>
              <MarqueeGroupReverse>
                {brand2.map((item, index) => (
                  <ImageContainer key={index}>
                    <GridBackground />
                    <Image src={item.img} alt={`brand-${index}`} />
                  </ImageContainer>
                ))}
              </MarqueeGroupReverse>
              <MarqueeGroupReverse>
                {brand2.map((item, index) => (
                  <ImageContainer key={index}>
                    <GridBackground />
                    <Image src={item.img} alt={`brand-${index}`} />
                  </ImageContainer>
                ))}
              </MarqueeGroupReverse>
            </MarqueeContainer>
          </>
        ) : (
          <SmallScreenCarousel>
            <Slider {...settings}>
              {brand1.concat(brand2).map((item, index) => (
                <ImageContainer key={index}>
                  <GridBackground />
                  <Image src={item.img} alt={`brand-${index}`} />
                </ImageContainer>
              ))}
            </Slider>
          </SmallScreenCarousel>
        )}
      </Wrapper>
    </div>
  );
};

export default Partners;
