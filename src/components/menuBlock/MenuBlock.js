import React, { Component } from 'react'
import HeaderBlock from '../headerBlock/headerBlock'
import styles from './menuBlock.module.scss'
import { TweenMax, TimelineMax, Expo } from 'gsap'

export default class MenuBlock extends Component {

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.grid = React.createRef();
    this.line = React.createRef();
  }

  componentDidMount() {
    TweenMax.set(this.container.current, {yPercent: -100});
    console.log(this.grid)
  }

  handleOnClick = () => {
    const tl = new TimelineMax();
    tl
      .fromTo(this.container.current, 1.4, {yPercent: -100}, {yPercent: 0, ease: Expo.easeInOut})
      .fromTo(this.grid.current, 1.4, {yPercent: 150, opacity: 0}, {yPercent: 0, opacity: 1, ease: Expo.easeInOut}, 0)
      .fromTo(".h3_menu", 1.4, {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1, ease: Expo.easeInOut}, 0)
      .fromTo(this.grid.current.line, 1.4, {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1, ease: Expo.easeInOut}, 0)
      .fromTo(".cta", 1.4, {yPercent: 100, scale:1.2, rotation: 4}, {yPercent: 0, scale: 1, rotation: 0, ease: Expo.easeInOut}, 0)
      .fromTo(".cta p", 1.4, {yPercent: 200}, {yPercent: 0, ease: Expo.easeInOut}, 0)
      .fromTo(".cta button", 1.4, {yPercent: 200, opacity: 0}, {yPercent: 0, opacity: 1, ease: Expo.easeInOut}, 0)
      .to(".overlay", 1.4, {autoAlpha: 1, ease: Expo.easeInOut},0)
  }

  render() {
    return (
      <>
        <div ref={this.container} className={styles.container}>
          <div ref={this.line} className={styles.line}></div>
          <div className={styles.flex}>
            <div ref={this.grid}  className={styles.mega_menu}>
              {/* Ik zou graag alle data willen mappen, alleen ik heb geen API of iets 👀 */}
              <div >
                <h3 className="h3_menu">Catégories</h3>
                <ul>
                  <li>VENTES PRIVÉES</li>
                  <li>NOUVEAUTÉS</li>
                  <li>TOUS LES PRODUITS</li>
                  <li>BLOUSONS, MANTEAUX & PARKAS</li>
                  <li>VESTES DE PEINTRE</li>
                  <li>CHEMISES</li>
                  <li>COSTUMES</li>
                  <li>CUIR</li>
                  <li>DENIM</li>
                  <li>PANTALONS & CHINOS</li>
                  <li>PULLS & SWEATS</li>
                  <li>T-SHIRTS & POLOS</li>
                  <li>CHAUSSURES</li>
                </ul>
              </div>
              <div>
                <h3 className="h3_menu">Accessoires</h3>
                <ul>
                  <li>CHAUSSETTES</li>
                  <li>ECHARPES</li>
                  <li>GANTS</li>
                  <li>MAROQUINERIE</li>
                </ul>
              </div>
              <div>
                <h3 className="h3_menu">Sélection</h3>
                <ul>
                  <li>NOS ICONIQUES</li>
                  <li>WEEK-END</li>
                  <li>PETITS PRIX</li>
                </ul>
              </div>
            </div>
            <div className={styles.image_container + ` cta`}>
              <img src="https://images.unsplash.com/photo-1562886812-41775a01195d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80" alt="plaatje"></img>
              <div className={styles.heading_text}>
                <p><strong>La nouvelle</strong></p>
                <p>collection Automne / Hiver 2019</p>
                <button className={styles.button}><a href="/">Decouvrir</a></button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.overlay + ` overlay`}>

        </div>
        <HeaderBlock onClick={this.handleOnClick} />
      </>
    )
  }
}
