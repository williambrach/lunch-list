import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';
import LunchRow from '../LunchRow';
import axios from 'axios';
import {apiUrl} from '../ApiConstants'

interface IMlyn {

}

interface MlynState {
  menu?: object;
}

export default class Mlyn extends React.Component<IMlyn, MlynState> {


  constructor(props) {
    super(props);
    this.state = {
      menu: this.getMenuItems()
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

  async getMenuItems(): Promise<object> {
    let response = await this.getApiCall(apiUrl+"mlyn")
    console.log(response)
    return {
      "soup": "0,33l (1,7,13)  Šošovicová kyslá",
      "foods": [
        {
          "name": "120g (7) 1. Kurací stroganov, ryža alebo varené zemiaky, obloha z čerstvej zeleniny",
          "price": "5,90"
        },
        {
          "name": "120g (1) 2. Morčacie stehno na hubách, ryža  alebo varené zemiaky, obloha z čerstvej zeleniny",
          "price": "5,90"
        },
        {
          "name": "120g (1,3,7) 3. Vyprážaný bravčový rezeň v Cornflakes, ryža alebo varené zemiaky, obloha z čerstvej zeleniny",
          "price": "5,90"
        },
        {
          "name": "150g  (1,3,7) 4. Jelenie ragú , zemiaková knedľa",
          "price": "6,90"
        }
      ],
      "images": null
    }
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
            <LunchRow menuNumber="Polievka" price={null} menu={this.state.menu['soup']} />
            {this.state.menu['foods'].map((item, index) =>
              <LunchRow menuNumber={"Menu " + (index + 1)} price={item['price']} menu={item['name']} />
            )}
          </div>
        </div>
      </div>


    );
  }
}
