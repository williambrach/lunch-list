import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import axios from 'axios'

export default class Rotunda extends React.Component {

  handleClick () {
    axios.get('https://restauracie.sme.sk/restauracia/pizzeria-rotunda_2316-ruzinov_2980/denne-menu')
      .then(respond =>{console.log(document.getElementsByClassName("dnesne_menu"))})


  }

  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>🏰 Rotunda</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
