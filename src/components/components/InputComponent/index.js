import React from 'react';
import './styles.scss';

export default function Input (attr) {
    return (
        <div className="input-container">
            <label className="input-title">{attr.title}</label>
            <input className="input-element" id={attr.name} name={attr.name} type={attr.type}></input>
            
        </div>
    );
};