import React, { Component } from 'react'
import styles from './headerblock.module.scss';
import Logo from '../../svg/Logo'

export default class headerBlock extends Component {
  render() {
    return (
      <header className={styles.header}>
        <ul className={styles.nav}>
          <li>Shop</li>
          <li>Historie</li>
          <li>Silhouettes</li>
          <li>Boutiques</li>
        </ul>
        <div className={styles.heading_logo}>
          <Logo />
        </div>
        <ul className={styles.nav}>
          <li>Mon compte</li>
          <li>Aide</li>
          <li>Panier 0</li>
        </ul>
      </header>
    )
  }
}