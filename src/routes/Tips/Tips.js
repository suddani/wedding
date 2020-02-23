import React, {useState} from 'react';
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Tips.scss'

import tipPicture from './tips.jpg';

function Tips({t}) {
  return (
    <section className="Tips" style={{background: "url("+tipPicture+")"}}>
      <h1 style={{display: 'none'}}>Tips</h1>
      <div>
        <h2>Wedding location</h2>
        <p>
          Please check the location of the chruch wedding and the venue <Link to={'/wedding'}>here</Link>.
        </p>
        <h3>How to get here from Germany</h3>
        <p>
          There are three airports with a good connection to the town.
          <ul>
            <li>
              Kyiv
              <p>
                There is a direct sleep train to the town but it takes 12hrs(2:30pm - 2:40am).
              </p>
            </li>
            <li>Lviv</li>
            <li>Chernivtsi</li>
          </ul>
        </p>
        <h2>Food</h2>
        <p>Ad excepteur incididunt eu aute sint velit consectetur Lorem nisi aliqua nisi. Elit qui commodo elit pariatur sit est voluptate laboris id consequat reprehenderit sunt amet consequat. Sunt minim duis incididunt aliqua ullamco ullamco enim ullamco in minim exercitation irure qui nulla. Elit aute do in eiusmod qui voluptate reprehenderit. Ad aliqua esse dolor ex aliqua.</p>
        <p>Anim esse commodo enim qui elit. Nisi et sunt adipisicing aliqua officia laborum. Consequat mollit proident adipisicing aliqua veniam officia irure elit aliqua eiusmod amet. Voluptate excepteur sunt mollit excepteur irure aliquip voluptate veniam irure consequat nisi. Minim eu enim culpa est sit. Reprehenderit ullamco magna magna et tempor. Nostrud tempor ullamco eiusmod nulla aliquip deserunt Lorem officia voluptate est esse magna.</p>
        <h2>Stuff to do in Ukraine</h2>
        <p>Amet mollit cillum quis non sunt laborum duis Lorem. Commodo reprehenderit irure fugiat anim Lorem esse enim culpa sunt adipisicing amet. Esse et ex ipsum proident labore. Id consequat aliquip sint nisi proident esse ad magna elit elit. Quis ad velit tempor ad enim sunt. Cillum sint eu commodo esse id.</p>
        <img src={tipPicture}></img>
      </div>
    </section>);
}


export default withTranslation("tips")(Tips);