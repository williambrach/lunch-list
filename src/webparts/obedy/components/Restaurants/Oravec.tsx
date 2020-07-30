import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import axios from 'axios'
import InfoBoard from '../InfoBoard';


export default class Oravec extends React.Component {


  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>🌳 Oravec</span>
              </div>
              <InfoBoard distance="1" link="https://goo.gl/maps/VEBvecVJHXQwCuKd8" time="12"/>

              <div className={styles.column}>
              <div className={styles.iframeOravecDiv}>
                <iframe scrolling="no" src="https://menucka.sk/denne-menu/bratislava/gurmansky-dvor-u-oravca" className={styles.iframeOravec}>
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

