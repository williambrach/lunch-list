import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Rebecca extends React.Component {
  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Rebecca</span>
              <embed src="https://scontent.fbts5-1.fna.fbcdn.net/v/t1.0-9/s960x960/116363983_1008603299570303_3765125248679278916_o.jpg?_nc_cat=111&_nc_sid=110474&_nc_ohc=f3g2SOt63j8AX9ccboO&_nc_ht=scontent.fbts5-1.fna&_nc_tp=7&oh=17b77cca287afe61d688a49cfbe14e61&oe=5F46D9B0
              " width="100%" height="600px">
                </embed>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
