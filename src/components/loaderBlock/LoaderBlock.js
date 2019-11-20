import React, { Component } from 'react'
import styles from './loaderblock.module.scss';
import { TimelineMax, Power3 } from 'gsap';
import {splitLetters} from 'textsplitter';

export default class LoaderBlock extends Component {
  
  constructor(props) {
    super(props);
    this.text = React.createRef();
  }

  componentDidMount() {
    splitLetters(this.text.current.childNodes[0], '<span>', '</span>');
    var tl = new TimelineMax();
    tl
      .staggerTo(this.text.current.childNodes[0].children, 2, {delay: 1, y: 30, opacity: 0, ease: Power3.easeIn},.01)
      .to(this.text.current, 2, {autoAlpha: 0, ease: Power3.easeInOut})
  }

  render() {
    return (
      <div ref={this.text} className={styles.container}>
        <div className={styles.loader_text}>
          <p>Empty</p>
        </div>
      </div>
    )
  }
}
