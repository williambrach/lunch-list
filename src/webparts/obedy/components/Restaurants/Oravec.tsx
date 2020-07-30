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
              <a target='_blank' href="https://www.gurmanskydvor.sk/denne-menu/" style={{ textDecoration: 'none' }}>
                <span className={styles.title}>🌳 Oravec</span>
              </a >

            </div>
            <InfoBoard distance="1" link="https://goo.gl/maps/VEBvecVJHXQwCuKd8" time="12" />

            <div className={styles.column}>
              <div className={styles.iframeOravecDiv}>
                <iframe scrolling="no" src="https://menucka.sk/denne-menu/bratislava/gurmansky-dvor-u-oravca" className={styles.iframeOravec}>
                </iframe>

              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

