import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Yummy extends React.Component {
  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Yummy</span>
              <iframe src="https://yummycantina.sk/wp-content/uploads/2020/07/27-31.7.2020-1.pdf" width="100%" height="600px">
                </iframe>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
