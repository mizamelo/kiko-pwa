import React from 'react';

import loading from '../../assets/loading.gif';
import './styles.scss';

export default function Loading() {
  return (
    <div className="loading">
      <img src={loading} alt="Carregando..."/>
    </div>
  );
}
