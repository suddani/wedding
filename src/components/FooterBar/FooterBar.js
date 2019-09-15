import React from 'react';
import './FooterBar.css';
import Heart from '../Heart/Heart';

function FooterBar({t}) {

  const weddingMailText = `mailto:info@daniel-mariia.wedding?subject=${t('Question about your wedding')}&body=${t('Hey Mariia and Daniel,%0d%0a%0d%0aGreetings')}`;

  return (
    <section className="FooterBar">
      <a href={weddingMailText} target="_top"><Heart size='10'/>Contact</a>
      <a href="https://twitter.com/MDanielwedding" target="_top"><Heart size='10'/>Twitter</a>
      <div></div>
      <a href="mailto:mail@daniel-sudmann.de" target="_top">© 2019 Daniel Sudmann</a>
    </section>
  );
}

export default FooterBar;