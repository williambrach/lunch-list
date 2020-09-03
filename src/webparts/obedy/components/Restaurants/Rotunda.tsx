import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import axios from 'axios';
import InfoBoard from '../InfoBoard';
import LunchRow from '../LunchRow';
import { apiUrl } from '../ApiConstants'

interface IRotunda {

}

interface RotundaState {
  menu?: object;
  loaded : boolean;
}

export default class Rotunda extends React.Component<IRotunda, RotundaState> {

  constructor(props) {
    super(props);
    this.state = {
      menu: this.getMenuItems(),
      loaded : false
    }
  }

  async getApiCall(url: string): Promise<object> {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async getMenuItems() : Promise<object>{
    let response = await this.getApiCall(apiUrl + "rotunda")
    this.setState({
      loaded : true,
      menu: response['data']
    })
    
    return response['data']
  }

  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <a target='_blank' href="http://www.pizzeriarotunda.sk/" style={{ textDecoration: 'none' }}>
                <span className={styles.title}>🏰 Rotunda</span>
              </a >

            </div>
            <InfoBoard distance="1,2" link="https://goo.gl/maps/aN8X1MZKJr3Ahf8i8" time="14" />
            {(this.state.loaded == true) ? (
            <LunchRow menuNumber="Polievka" price={null} menu={this.state.menu['soup']} />
            ) : (
              <div></div>
            )}
            {(this.state.loaded == true) ? (
               
                this.state.menu['foods'].map((item, index) =>
                <LunchRow menuNumber={"Menu " + (index + 1)} price={item['price']} menu={item['name']} />
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
