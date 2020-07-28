import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HanoiGarden extends React.Component {


  getMenuByDate(type: number): string {

    let weekMap = new Map();

    weekMap.set(1, 'pondelok');
    weekMap.set(2, 'utorok');
    weekMap.set(3, 'streda');
    weekMap.set(4, 'stvrtok');
    weekMap.set(5, 'piatok');

    const dayNum = new Date(Date.now());
    const day = weekMap.get(dayNum.getDay())


    if (type == 1){
      return "../src/assets/hanoi_"+day+"_1.pdf"
    }
    else {
      return "../src/assets/hanoi_"+day+"_2.pdf"
    }
}

  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>HanoiGarden</span>

              <embed src={this.getMenuByDate(1)} width="100%" height="600px">
                </embed>
                <embed src={this.getMenuByDate(2)} width="100%" height="600px">
                </embed>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
