import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import './Story.css';
import shark from './../../assets/images/shark.jpg';
import Slider from './../../components/Slider';

function Story() {
  return (<section className="StoryMain">
    {/* <Trans i18nKey="theStory" ns="story">
      <section className="Story">
        <p>Daniel Sudmann is a beautiful, handsome and helpful software engineer from Europe. His life is going nowhere until he meets Mariia Sendziuk, a smart, sexy woman with a passion for playing games.
        <br/>Daniel takes an instant disliking to Mariia and the selfish and hungry ways she learnt during her years in Ukraine.
        <br/>However, when a shark tries to hurt Daniel, Mariia springs to the rescue. Daniel begins to notices that Mariia is actually rather generous at heart.</p>
      </section>
        <Slider text={<div className="shark">"The Shark"</div>} height='300' banner={shark}/>
      <section className="Story">
        <p>But, the pressures of Mariia's job as a product manager leave her blind to Daniel's affections and Daniel takes up peotry to try an distract herself.
        <br/>Finally, when wild , Brad DeVito, threatens to come between them, Mariia has to act fast. But will they ever find the sensational love that they deserve?</p>
      </section>
    </Trans> */}
    Story
  </section>);
}

export default withTranslation("story")(Story);