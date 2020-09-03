import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';
import { apiUrl } from '../ApiConstants'


interface IHanoi {

}

interface HanoiState {
  link: string
  loaded: boolean
}

export default class HanoiGarden extends React.Component<IHanoi, HanoiState> {

  constructor(props) {
    super(props);
    this.state = {
      link: "https://www.google.sk",
      loaded: true
    }
  }
  componentDidMount() {

    fetch(apiUrl + "hanoi")
      .then(response => response.json()
      )
      .then(response => {
        const dayNum = new Date(Date.now());
        console.log(response[dayNum.getDay().toString()])
        this.setState({
          link: response[dayNum.getDay().toString()],
          loaded: false
        })

      }

      )
      .catch(error => console.log(error));
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
            {(this.state.loaded == true) ? (<div></div>) : (<iframe src={this.state.link} width="100%" height="950px" scrolling="no"></iframe>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
