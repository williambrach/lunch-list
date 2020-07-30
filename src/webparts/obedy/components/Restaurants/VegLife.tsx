import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';
export default class Veglife extends React.Component {
  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>🥕 VegLife</span>
              </div>
              <InfoBoard distance="1,4" link="https://goo.gl/maps/zfJtEif8zxnfvZww8" time="18"/>

              <div className={styles.column}>
              <div className={styles.iframeRotundaDiv}>
                <iframe src="https://restauracie.sme.sk/restauracia/veg-life_6328-stare-mesto_2949/denne-menu" className={styles.iframeVeglife} scrolling="no" sandbox="">
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
