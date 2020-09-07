import React from 'react';
import styled from 'styled-components';
import IntersectionObserver from '@components/IntersectionObserver';

const Image = ({ lazy, placeholderImage, ...props }) =>
  lazy
    ? <LazyImage placeholderImage={placeholderImage} {...props} />
    : <StyledImage {...props} />;

const LazyImage = ({ placeholderImage, src, ...props }) => {
  const [image, setImage] = React.useState({
    fetched: false,
    src: placeholderImage,
  });

  const handleImageIntersection = () => {
    if (!image.fetched) {
      setImage({
        fetched: true,
        src
      })
    }
  }

  return (
    <IntersectionObserver
      handleIntersection={handleImageIntersection}
    >
      <StyledImage src={image.src} {...props} />
    </IntersectionObserver>
  )
}

const StyledImage = styled.img({
  display: 'block'
});

export default Image;
