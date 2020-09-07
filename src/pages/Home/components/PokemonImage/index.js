import React from 'react';
import Image from '@components/ui/Image';
import questionMark from '@assets/images/question-mark.png';

const PokemonImage = ({ imageUrl }) =>
  <Image
    src={imageUrl}
    lazy
    placeholderImage={questionMark}
    width="100%"
  />

export default PokemonImage;
