import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class BeQuick extends React.Component {

    handleClick () {

      const dayNum = new Date(Date.now());

      let day = dayNum.getDay();


      var frame = document.getElementsByTagName("iframe")[0];


      switch(day){
        case 1:
          frame.style.height="950px";
          frame.style.marginTop="-550px";
          break;
        case 2:
          document.getElementById("1").style.height="950px";
          document.getElementById("1").style.marginTop="-550px";
          break;
        case 3:
          frame.style.height="100px";
          frame.scrollTo(0, 200);
          break;
        case 4:
          document.getElementById("1").style.height="950px";
          document.getElementById("1").style.marginTop="-150px";
          break;
        case 5:
          document.getElementById("1").style.height="950px";
          document.getElementById("1").style.marginTop="-550px";
          break;
        
      }
  }
  componentDidMount(){
    this.handleClick();
  }
  

  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>⏲️ BeQuick</span>
              <iframe id="1" src="https://ranajky-obedy.sk/wp-content/uploads/Obedov%c3%a9-menu-27.7.-31.7.2020.pdf#toolbar=0&navpanes=0&scrollbar=0" width="100%">
                </iframe>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
