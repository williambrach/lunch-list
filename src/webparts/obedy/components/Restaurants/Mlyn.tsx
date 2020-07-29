import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Mlyn extends React.Component {
  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>🏡 Mlyn</span>
              <div className={styles.iframeMlynDiv}>
                <iframe scrolling="no" src="https://restauracie.sme.sk/restauracia/mlyn-restaurant_1745-ruzinov_2980/denne-menu" className={styles.iframeMlyn}>
                  </iframe>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
