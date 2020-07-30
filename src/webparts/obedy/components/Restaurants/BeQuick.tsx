import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';

export default class BeQuick extends React.Component {

  getUrlWithDates(){
    const date = new Date(Date.now());
    var day = date.getDate();
    var weekIndex = date.getDay();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var startWeekDay = day - weekIndex + 1;
    var endWeekDay = startWeekDay + 4;
    let url = "https://ranajky-obedy.sk/wp-content/uploads/Obedov%c3%a9-menu-"+startWeekDay+"."+month+".-"+endWeekDay+"."+month+"."+year+".pdf#toolbar=0&navpanes=0&scrollbar=0"
    return url
  }


  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <a target='_blank' href="https://ranajky-obedy.sk/obedove-menu/" style={{ textDecoration: 'none' }}>
                <span className={styles.title}>⏲️ BeQuick</span>
              </a >

            </div>
            <InfoBoard distance="0.6" link="https://goo.gl/maps/tXsTjYeBfm6vU9EX7" time="8" />
            <div className={styles.column}>
              <iframe src={this.getUrlWithDates()} width="100%" height="630px" scrolling="no">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
