import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';
import LunchRow from '../LunchRow';
import axios from 'axios';
import { apiUrl } from '../ApiConstants';

interface IMlyn {

}

interface MlynState {
  menu?: object;
  loaded: boolean;
}

export default class Mlyn extends React.Component<IMlyn, MlynState> {


  constructor(props) {
    super(props);
    this.state = {
      menu: this.getMenuItems(),
      loaded: false
    };
  }

  public async getApiCall(url: string): Promise<object> {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  public async getMenuItems(): Promise<object> {
    let response = await this.getApiCall(apiUrl + "mlyn");
    this.setState({
      loaded: true,
      menu: response['data']
    });
    return response['data'];
  }


  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <a target='_blank' href="http://www.mlynrestaurant.com/" style={{ textDecoration: 'none' }}>
                <span className={styles.title}>🏡 Mlyn</span>
              </a >

            </div>
            <InfoBoard distance="1,3" link="https://goo.gl/maps/6gP8a5RPohSgdSDj8" time="16" />
            {(this.state.loaded == true) ? (
              <LunchRow menuNumber="Polievka" price={null} menu={this.state.menu['soup']} />
            ) : (
                <div></div>
              )}
            {(this.state.loaded == true) ? (

              this.state.menu['foods'].map((item, index) =>
                <LunchRow key={index} menuNumber={"Menu " + (index + 1)} price={item['price']} menu={item['name']} />
              )
            ) : (
                <div></div>
              )
            }
          </div>
        </div>
      </div>


    );
  }
}
