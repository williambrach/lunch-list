import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';

export default class Mlyn extends React.Component {
  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>🏡 Mlyn</span>
              </div>
            <InfoBoard distance="1,3" link="https://goo.gl/maps/6gP8a5RPohSgdSDj8" time="16"/>
            <div className={styles.column}>
              <div className={styles.iframeMlynDiv}>
                <iframe scrolling="no" src="https://restauracie.sme.sk/restauracia/mlyn-restaurant_1745-ruzinov_2980/denne-menu" className={styles.iframeMlyn} sandbox="">
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
