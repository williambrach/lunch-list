import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import axios from 'axios'



export default class Oravec extends React.Component {


  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>🌳 Oravec</span>
              <iframe src="https://menucka.sk/denne-menu/bratislava/gurmansky-dvor-u-oravca" width="100%" height="600px">
                </iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
