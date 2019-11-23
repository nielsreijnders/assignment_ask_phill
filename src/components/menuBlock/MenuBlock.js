import React, { Component } from 'react'
import HeaderBlock from '../headerBlock/headerBlock'
import styles from './menuBlock.module.scss'
import { TweenMax, TimelineMax, Expo } from 'gsap'

const array = [
  {"id" : 0, "title" : "Catégories", "listItems" : ["VENTES PRIVÉES", "NOUVEAUTÉS", "TOUS LES PRODUITS", "BLOUSONS, MANTEAUX & PARKAS", "VESTES DE PEINTRE", "CHEMISES", "COSTUMES", "CUIR", "DENIM", "PANTALONS & CHINOS", "PULLS & SWEATS", "T-SHIRTS & POLOS", "CHAUSSURES"]}, 
  {"id" : 1, "title" : "Accessoires", "listItems" : ["CHAUSSETTES", "ECHARPES", "GANTS", "MAROQUINERIE"]},
  {"id" : 2, "title" : "Sélection", "listItems" : ["NOS ICONIQUES", "WEEK-END", "PETITS PRIX"]}
]

export default class MenuBlock extends Component {

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.grid = React.createRef();
    this.line = React.createRef();
  }

  createListItem = () => {
    return array.map( hit  =>  
      <div key={hit.id}>
        <h3 className="h3_menu">{hit.title}</h3>
        <ul>
          { hit.listItems.map(hit => {return ( <li>{hit}</li> )})}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    TweenMax.set(this.container.current, {yPercent: -100});
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

          {/* First half */}
          <div ref={this.line} className={styles.line}></div>
          <div className={styles.flex}>
            <div ref={this.grid}  className={styles.mega_menu}>
              {this.createListItem()}
            </div>

            {/* second half */}
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
        <div className={styles.overlay + ` overlay`}></div>
        <HeaderBlock onClick={this.handleOnClick} />
      </>
    )
  }
}
