import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HanoiGarden extends React.Component {
  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>HanoiGarden</span>

              <embed src="http://www.hanoigarden.sk/images/Obedove%20menu%20pondelok_1.pdf" width="100%" height="600px">
                </embed>
                <embed src="http://www.hanoigarden.sk/images/Obedove%20menu%20pondelok_2.pdf" width="100%" height="600px">
                </embed>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
