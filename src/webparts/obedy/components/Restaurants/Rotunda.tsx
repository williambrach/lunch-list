import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import axios from 'axios'
import InfoBoard from '../InfoBoard';

export default class Rotunda extends React.Component {

  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>🏰 Rotunda</span>
            </div>
            <InfoBoard distance="1,2" link="https://goo.gl/maps/aN8X1MZKJr3Ahf8i8" time="14"/>
            <div className={styles.column}>
              <div className={styles.iframeRotundaDiv}>
                <iframe src="https://restauracie.sme.sk/restauracia/pizzeria-rotunda_2316-ruzinov_2980/denne-menu" className={styles.iframeRotunda} scrolling="no" sandbox="">
                </iframe>
                <div className={styles.rectangle}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
