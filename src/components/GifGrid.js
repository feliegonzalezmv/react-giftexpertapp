import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className={'animate__animated animate__fadeIn  animate__delay-0.5s'}>
        {category}
      </h3>
      ;
      {loading && (
        <p
          className={'animate__animated animate__flash  animate__delay-0.5s'}
        ></p>
      )}
      <div className={'card-grid'}>
        {images && images.map((img) => <GifGridItem key={img.id} {...img} />)}
      </div>
    </>
  );
};
