import * as React from 'react';
import styles from './Obedy.module.scss';
import { IObedyProps } from './IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';

import BeQuick from "./Restaurants/BeQuick";
import HanoiGarden from "./Restaurants/HanoiGarden";
import Mlyn from "./Restaurants/Mlyn";
import Rebecca from "./Restaurants/Rebecca";
import Rotunda from "./Restaurants/Rotunda";
import Yummy from "./Restaurants/Yummy";
import Oravec from "./Restaurants/Oravec";
import Veglife from "./Restaurants/VegLife";

export default class Obedy extends React.Component<IObedyProps, {}> {

  private getDate = () => {

    let weekMap = new Map();

    weekMap.set(1, 'Pondelok');
    weekMap.set(2, 'Utorok');
    weekMap.set(3, 'Streda');
    weekMap.set(4, 'Štvrtok');
    weekMap.set(5, 'Piatok');
    weekMap.set(6, 'Sobota');
    weekMap.set(7, 'Nedela');

    const dayNum = new Date(Date.now());
    let month = dayNum.getMonth() + 1;
    return weekMap.get(dayNum.getDay()) + ", " + dayNum.getDate() + "." +month + "." + dayNum.getFullYear();
  }

  public render(): React.ReactElement<IObedyProps> {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.headerRow}>
                <span className={styles.headerText}>Kam na obed? 🤔 </span>
              </div>
              <div>
                <span className={styles.subTitle}>Dátum : {this.getDate()}</span>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <BeQuick />
          <Mlyn />
          <Oravec />
          <Rotunda />
          <Veglife />
          <Yummy />
          <Rebecca link={this.props.rebeccaLink} />
          <HanoiGarden />
        </div>
      </div>
    );
  }
}
