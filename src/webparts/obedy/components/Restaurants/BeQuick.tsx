import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class BeQuick extends React.Component {
  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>BeQuick</span>
              <iframe src="https://ranajky-obedy.sk/wp-content/uploads/Obedov%c3%a9-menu-27.7.-31.7.2020.pdf" width="100%" height="600px">
                </iframe>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
