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


export default class Obedy extends React.Component<IObedyProps, {}> {

  getDate = () => {
    const dayNum = new Date(Date.now());
    var options = { weekday: 'long'};
    var day = new Intl.DateTimeFormat('en-GB', options).format(dayNum);
    return day+" "+dayNum.getDate()+"."+dayNum.getMonth()+"."+dayNum.getFullYear()
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
              <span className={styles.subTitle}>Dnes je : {this.getDate()}</span>
              <div>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Update Obedov</span>
              </a>
              </div>

              </div>


            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <Rotunda/>
            </div>
            <div className={styles.column}>
              <Mlyn/>
            </div>
          </div>
          <div className={styles.row}>
            <BeQuick/>
          </div>
          <div className={styles.row}>
            <Yummy/>
          </div>
          <div className={styles.row}>
            <Rebecca/>
          </div>
          <div className={styles.row}>
            <HanoiGarden/>
          </div>
        </div>
      </div>
    );
  }
}
