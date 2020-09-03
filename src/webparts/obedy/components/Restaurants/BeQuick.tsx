import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';
import { apiUrl } from '../ApiConstants'
import axios from 'axios';
import Loading from 'react-loading';

interface Ibq {

}

interface bqState {
  linkE: string
  x : boolean
}


export default class BeQuick extends React.Component<Ibq, bqState> {

  constructor(props) {
    super(props);
    this.state = {
      linkE: "https://www.google.sk",
      x : true
    }
    console.log(this.state.linkE)
  }
  componentDidMount() {
    fetch(apiUrl + "bequick")
      .then(response => response.json()
      )
      .then(response => 
        
        this.setState({
          linkE: response['link'],
        x : false
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
              {(this.state.x == true) ? (<div></div>) : (<iframe src={this.state.linkE} width="100%" height="950px" scrolling="no"></iframe>)}
              

            </div>
          </div>
        </div>
      </div>
    );
  }
}
