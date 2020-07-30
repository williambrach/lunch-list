import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';

export default class BeQuick extends React.Component {
  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>⏲️ BeQuick</span>
              <InfoBoard distance="0.6" link="https://goo.gl/maps/tXsTjYeBfm6vU9EX7" time="8"/>
              <div className={styles.column}>
                <iframe src="https://ranajky-obedy.sk/wp-content/uploads/Obedov%c3%a9-menu-27.7.-31.7.2020.pdf#toolbar=0&navpanes=0&scrollbar=0" width="100%" height="630px" scrolling="no">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
