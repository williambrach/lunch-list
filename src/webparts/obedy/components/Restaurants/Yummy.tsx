import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';
import { apiUrl } from '../ApiConstants';

interface IYummy {

}

interface YummyState {
  link: string;
  loaded: boolean;
}


export default class Yummy extends React.Component<IYummy, YummyState> {


  constructor(props) {
    super(props);
    this.state = {
      link: "https://www.google.sk",
      loaded: true
    };
  }

  public componentDidMount() {
    fetch(apiUrl + "yummy")
      .then(response => response.json()
      )
      .then(response =>
        this.setState({
          link: response['link'],
          loaded: false
        })).catch(error => console.log(error));
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
              {(this.state.loaded == true) ? (<div></div>) : (<iframe src={this.state.link} width="100%" height="950px" scrolling="no"></iframe>)}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
