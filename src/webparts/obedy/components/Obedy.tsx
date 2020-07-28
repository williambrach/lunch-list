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



export default class Obedy extends React.Component<IObedyProps, {}> {



  getDate = () => {

    let weekMap = new Map();

    weekMap.set(1, 'Pondelok');
    weekMap.set(2, 'Utorok');
    weekMap.set(3, 'Streda');
    weekMap.set(4, 'Štvrtok');
    weekMap.set(5, 'Piatok');
    weekMap.set(6, 'Sobota');
    weekMap.set(7, 'Nedela');

    const dayNum = new Date(Date.now());
    return weekMap.get(dayNum.getDay()) + ", " + dayNum.getDate() + "." + dayNum.getMonth() + "." + dayNum.getFullYear()
  }

  public render(): React.ReactElement<IObedyProps> {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.row}>
                <span className={styles.title}>Kam na obed? 🤔 </span>
              </div>
              <div className={styles.row}>
                <span className={styles.subTitle}>Dátum : {this.getDate()}</span>
                <div>


                </div>
                <div className={styles.row}>
                  <a href="https://aka.ms/spfx" className={styles.button}>
                    <span className={styles.label}>Update Obedov</span>
                  </a>
                </div>
              </div>


            </div>
          </div>
          <div>
            <div className={styles.rowRestaurants}>
              <div className={styles.colRestaurants}>
                <Rotunda />
              </div>
              <div className={styles.colRestaurants}>
                <Mlyn />
              </div>
              <div className={styles.colRestaurants}>
                <Oravec />
              </div>
            </div>

            <BeQuick />
            <Yummy />
            <Rebecca />
            <HanoiGarden />
          </div>
        </div>
      </div>
    );
  }
}
