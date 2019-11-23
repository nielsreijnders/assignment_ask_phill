import React, { Component } from 'react'
import styles from './headerblock.module.scss';
import Logo from '../../svg/Logo'

export default class headerBlock extends Component {
  
  constructor(props) {
    super(props);
    this.selected = React.createRef();
  }

  render() {
    return (
      <header className={styles.header}>
        <ul className={styles.nav}>
          <li ref={this.selected}  onClick={this.props.onClick}>Shop</li>
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