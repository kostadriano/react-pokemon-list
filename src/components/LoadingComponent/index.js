import React from 'react';
import { useSelector } from 'react-redux';
import { LoadingWrapper, LoadingIcon } from './LoadingComponent.styled';
import pokeballImage from '@assets/images/pokeball.png';

const LoadingComponent = () => {
  const loading = useSelector((state) => state.loading);

  return loading
    ? (
      <LoadingWrapper data-testid="loading-component">
        <LoadingIcon src={pokeballImage} />
      </LoadingWrapper>
    )
    : null
}

export default LoadingComponent;
