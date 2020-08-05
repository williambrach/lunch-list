import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';

export default class HanoiGarden extends React.Component {


  private getMenuByDate(type: number): string {

    let weekMap = new Map();

    weekMap.set(1, 'pondelok');
    weekMap.set(2, 'utorok');
    weekMap.set(3, 'streda');
    weekMap.set(4, 'stvrtok');
    weekMap.set(5, 'piatok');

    const dayNum = new Date(Date.now());
    const day = weekMap.get(dayNum.getDay());


    if (type == 1) {
      return "../src/assets/hanoi_" + day + "_1.pdf#toolbar=0&navpanes=0&scrollbar=0";
    }
    else {
      return "../src/assets/hanoi_" + day + "_2.pdf#toolbar=0&navpanes=0&scrollbar=0";
    }
  }

  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <a target='_blank' href="http://www.hanoigarden.sk/" style={{ textDecoration: 'none' }}>
                <span className={styles.title}>🌸 HanoiGarden</span>
              </a >

            </div>
            <InfoBoard distance="1,3" link="https://goo.gl/maps/cAL1z435kUgJPgnP6" time="17" />

            <div className={styles.column}>
              <iframe src={this.getMenuByDate(1)} width="100%" height="630px" scrolling="no">
              </iframe>
              <iframe src={this.getMenuByDate(2)} width="100%" height="630px" scrolling="no">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
