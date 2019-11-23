import React, { Component } from 'react'
import HeaderBlock from '../headerBlock/headerBlock'
import styles from './menuBlock.module.scss'
import { TweenMax, TimelineMax, Expo } from 'gsap'

const array = [{ "title": "Catégories", "listItems": ["VENTES PRIVÉES", "NOUVEAUTÉS", "TOUS LES PRODUITS", "BLOUSONS, MANTEAUX & PARKAS", "VESTES DE PEINTRE", "CHEMISES", "COSTUMES", "CUIR", "DENIM", "PANTALONS & CHINOS", "PULLS & SWEATS", "T-SHIRTS & POLOS", "CHAUSSURES"] }, { "title": "Accessoires", "listItems": ["CHAUSSETTES", "ECHARPES", "GANTS", "MAROQUINERIE"] },{ "title": "Sélection", "listItems": ["NOS ICONIQUES", "WEEK-END", "PETITS PRIX"] }]

export default class MenuBlock extends Component {

  constructor(props) {
    super(props);
    this.container = null;
    this.grid = null;
    this.line = null;
    this.overlay = null;
    this.cta = null;
    this.h3 = [];
    this.p = [];
    this.tl = new TimelineMax({ paused: true });
    this.element = null;
  }

  createListItem = () => {
    return array.map((hit, index) =>
      <div key={index}>
        <h3 ref={h3 => this.h3[index] = h3}>{hit.title}</h3>
        <ul>
          {hit.listItems.map((hit, index) => { return (<li key={index}>{hit}</li>) })}
        </ul>
      </div>
    )
  }

  componentDidMount() {

    // Init
    TweenMax.set(this.container, { yPercent: -100 });

    // Animation
    this.tl
      .fromTo(this.container, 1.4, { yPercent: -100 }, { yPercent: 0, ease: Expo.easeInOut })
      .fromTo(this.grid, 1.4, { yPercent: 150, opacity: 0 }, { yPercent: 0, opacity: 1, ease: Expo.easeInOut }, 0)
      .fromTo(this.h3, 1.4, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, ease: Expo.easeInOut }, 0)
      .fromTo(this.line, 1.4, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: .1, ease: Expo.easeInOut }, 0)
      .fromTo(this.cta, 1.4, { yPercent: 100, scale: 1.2, rotation: 4 }, { yPercent: 0, scale: 1, rotation: 0, ease: Expo.easeInOut }, 0)
      .fromTo(this.p, 1.4, { yPercent: 200 }, { yPercent: 0, ease: Expo.easeInOut }, 0)
      .fromTo(this.cta.children[1].childNodes[2], 1.4, { yPercent: 200, opacity: 0 }, { yPercent: 0, opacity: 1, ease: Expo.easeInOut }, 0)
      .to(this.overlay, 1.4, { autoAlpha: 1, ease: Expo.easeInOut }, 0);
  }

  handleOnClick = () => {
    this.tl.play();
    TweenMax.set(this.element.selected.current, { className: "selected" });
  }

  handleOnClickClosed = () => {
    this.tl.reverse();
    TweenMax.set(this.element.selected.current, { className: "-selected" });
  }

  render() {
    return (
      <>
        <div ref={div => this.container = div} className={styles.container}>

          {/* First half */}
          <div ref={div => this.line = div} className={styles.line}></div>
          <div className={styles.flex}>
            <div ref={div => this.grid = div} className={styles.mega_menu}>
              {this.createListItem()}
            </div>

            {/* second half */}
            <div className={styles.image_container} ref={div => this.cta = div}>
              <img src="https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80" alt="plaatje"></img>
              <div className={styles.heading_text}>
                <p ref={p => this.p[0] = p}><strong>La nouvelle</strong></p>
                <p ref={p => this.p[1] = p}>collection Automne / Hiver 2019</p>
                <button className={styles.button}><a href="/">Decouvrir</a></button>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div onClick={this.handleOnClickClosed} className={styles.overlay} ref={div => this.overlay = div}></div>

        {/* Only for this example:-) */}
        <HeaderBlock ref={li => this.element = li} onClick={this.handleOnClick} />
      </>
    )
  }
}
