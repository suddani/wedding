import React from 'react';
import HappyCouple from './../../components/HappyCouple';
import './About.scss';

export default function About() {
  return (
    <section className="About">
      <h1 style={{display: 'none'}}>About</h1>
      <HappyCouple/>
    </section>
  );
}