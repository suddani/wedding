import React, {useState} from 'react';
import { withTranslation, Trans } from 'react-i18next';
import './Tips.scss'

import tipPicture from './tips.jpg';

function Tips({t}) {
  return (
    <section className="Tips" style={{background: "url("+tipPicture+")"}}>
      <h1 style={{display: 'none'}}>Tips</h1>
      <div>
        <h4 >Wedding location</h4>
        <p>Do deserunt voluptate labore nulla eu amet. Qui laborum qui ullamco occaecat aute. Officia consectetur cupidatat ea labore id et dolor magna nostrud laboris. Cillum ut occaecat deserunt anim eu ipsum mollit sit deserunt sint commodo eu ad. Veniam in aliquip aliqua aliqua aliqua eiusmod duis reprehenderit et. Sint qui est fugiat quis magna consequat sunt veniam commodo veniam fugiat excepteur. Laborum exercitation occaecat officia dolore culpa elit.</p>
        <h4>Food</h4>
        <p>Ad excepteur incididunt eu aute sint velit consectetur Lorem nisi aliqua nisi. Elit qui commodo elit pariatur sit est voluptate laboris id consequat reprehenderit sunt amet consequat. Sunt minim duis incididunt aliqua ullamco ullamco enim ullamco in minim exercitation irure qui nulla. Elit aute do in eiusmod qui voluptate reprehenderit. Ad aliqua esse dolor ex aliqua.</p>
        <p>Anim esse commodo enim qui elit. Nisi et sunt adipisicing aliqua officia laborum. Consequat mollit proident adipisicing aliqua veniam officia irure elit aliqua eiusmod amet. Voluptate excepteur sunt mollit excepteur irure aliquip voluptate veniam irure consequat nisi. Minim eu enim culpa est sit. Reprehenderit ullamco magna magna et tempor. Nostrud tempor ullamco eiusmod nulla aliquip deserunt Lorem officia voluptate est esse magna.</p>
        <h4>Stuff to do in Ukraine</h4>
        <p>Amet mollit cillum quis non sunt laborum duis Lorem. Commodo reprehenderit irure fugiat anim Lorem esse enim culpa sunt adipisicing amet. Esse et ex ipsum proident labore. Id consequat aliquip sint nisi proident esse ad magna elit elit. Quis ad velit tempor ad enim sunt. Cillum sint eu commodo esse id.</p>
      </div>
    </section>);
}


export default withTranslation("tips")(Tips);