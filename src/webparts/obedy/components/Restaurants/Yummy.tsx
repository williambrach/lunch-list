import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';

export default class Yummy extends React.Component {

  private getUrlWithDates() {
    const date = new Date(Date.now());
    var startWeekDate = new Date();
    var endWeekDate = new Date();

    var day = date.getDate();
    var weekIndex = date.getDay();
    
    startWeekDate.setDate(day - weekIndex + 1)
    endWeekDate.setDate( startWeekDate.getDate() + 4)
    
    var startMonthDate = startWeekDate.getMonth() + 1;
    var endMonthDate = endWeekDate.getMonth() + 1;

    var startYearDate = startWeekDate.getFullYear();
    var endYearDate = endWeekDate.getFullYear();
    
    //days
    var startWeekDay = startWeekDate.getDate();
    var endWeekDay = endWeekDate.getDate();
    var spacedStartDay = startWeekDay.toString();
    var spacedEndDay = endWeekDay.toString();
    if (spacedStartDay.length == 1) {
      spacedStartDay = "0" + startWeekDay;
    }
    if (spacedEndDay.length == 1) {
      spacedEndDay = "0" + endWeekDay;
    }
    //months
    var startMonth = startMonthDate.toString();
    var endMonth = endMonthDate.toString();

    if (startMonth.length == 1) {
      var spacedStartMonth = "0" + startMonth;
    }
    // if (endMonth.length == 1) {
    //   endMonth = "0" + endMonth;
    // }
    let url = "https://yummycantina.sk/wp-content/uploads/" + startYearDate + "/" + spacedStartMonth + "/" + spacedStartDay +"."+startMonth+ ".-" + spacedEndDay + "." + endMonth + "." + endYearDate + "-1.pdf#toolbar=0&navpanes=0&scrollbar=0";
    return url;
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
              <iframe src={this.getUrlWithDates()} width="100%" height="950px" scrolling="no">
              </iframe>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
