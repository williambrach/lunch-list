import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';
import { apiUrl } from '../ApiConstants';
import axios from 'axios';
import Loading from 'react-loading';

interface IBeQuick {

}

interface BeQuickState {
  link: string;
  loaded: boolean;
}


export default class BeQuick extends React.Component<IBeQuick, BeQuickState> {

  constructor(props) {
    super(props);
    this.state = {
      link: "https://www.google.sk",
      loaded: true,
    };
  }

  public componentDidMount() {
    fetch(apiUrl + "bequick")
      .then(response => response.json()
      )
      .then(response =>

        this.setState({
          link: response['link'],
          loaded: false
        })

      )
      .catch(error => console.log(error));
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
              {(this.state.loaded == true) ? (<div></div>) : (<iframe src={this.state.link} width="100%" height="950px" scrolling="no"></iframe>)}


            </div>
          </div>
        </div>
      </div>
    );
  }
}
