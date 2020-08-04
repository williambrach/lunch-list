import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';

export default class Yummy extends React.Component {

  getUrlWithDates() {
    const date = new Date(Date.now());
    var day = date.getDate();
    var weekIndex = date.getDay();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var startWeekDay = day - weekIndex + 1;
    var endWeekDay = startWeekDay + 4;
    var spacedMonth = month.toString();
    if (spacedMonth.length < 2) {
      spacedMonth = "0" + month;
    }
    var spacedStartWeekDay = startWeekDay.toString();
    if (spacedStartWeekDay.length < 2) {
      spacedStartWeekDay = "0" + startWeekDay;
    }
    var spacedEndWeekDay = endWeekDay.toString();
    if (spacedEndWeekDay.length < 2) {
      spacedEndWeekDay = "0" + endWeekDay;
    }
    let url = "https://yummycantina.sk/wp-content/uploads/" + year + "/" + spacedMonth + "/" + spacedStartWeekDay + "-" + spacedEndWeekDay + "." + month + "." + year + "-1.pdf#toolbar=0&navpanes=0&scrollbar=0"
    return url
  }

  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <a target='_blank' href="https://yummycantina.sk/prevadzky/yummy-1/" style={{ textDecoration: 'none' }}>
                <span className={styles.title}>🤮 Yummy</span>
              </a >

            </div>
            <InfoBoard distance="Hned dole " link="" time="1" />

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
