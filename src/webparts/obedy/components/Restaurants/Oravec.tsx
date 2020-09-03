import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';
import LunchRow from '../LunchRow';
import axios from 'axios';
import { apiUrl } from '../ApiConstants'
import ImageGallery from 'react-image-gallery';

interface IOravec {

}

interface OravecState {
  menu?: object;
  loaded: boolean;
  images: { original: string, thumbnail: string }[];
}
const images = [
  {
    original: 'https://www.menucka.sk/img/photo_of_the_day/thumbnails/gurmanskydvor/32300887d5961a6baf5c0c0c66bd065d62470ac2.jpg',
    thumbnail: 'https://www.menucka.sk/img/photo_of_the_day/thumbnails/gurmanskydvor/32300887d5961a6baf5c0c0c66bd065d62470ac2.jpg',
  },
  {
    original: 'https://www.menucka.sk/img/photo_of_the_day/thumbnails/gurmanskydvor/f9dbec4d626388595b4b24670eabf6854ead789c.jpg',
    thumbnail: 'https://www.menucka.sk/img/photo_of_the_day/thumbnails/gurmanskydvor/f9dbec4d626388595b4b24670eabf6854ead789c.jpg',
  },
  {
    original: 'https://www.menucka.sk/img/photo_of_the_day/thumbnails/gurmanskydvor/f9dbec4d626388595b4b24670eabf6854ead789c.jpg',
    thumbnail: 'https://www.menucka.sk/img/photo_of_the_day/thumbnails/gurmanskydvor/f9dbec4d626388595b4b24670eabf6854ead789c.jpg',
  },
];

export default class Oravec extends React.Component<IOravec, OravecState> {



  constructor(props) {
    super(props);
    this.state = {
      menu: this.getMenuItems(),
      loaded: false,
      images: [{ "original": "x", "thumbnail": "x" }]
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

  parseImages(response) {
    let array = new Array();
    response.forEach(element => {
      let obj = {
        "original": element,
        "thumbnail": element
      }
      array.push(obj);
    });
    return array;
  }

  async getMenuItems(): Promise<object> {
    let response = await this.getApiCall(apiUrl + "oravec")
    let imagesOfFood = this.parseImages(response['data']['images'])
    console.log(imagesOfFood)
    this.setState({
      loaded: true,
      menu: response['data'],
      images: imagesOfFood
    })

    return response['data']
  }

  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <a target='_blank' href="https://www.gurmanskydvor.sk/denne-menu/" style={{ textDecoration: 'none' }}>
                <span className={styles.title}>🌳 Oravec</span>
              </a >

            </div>
            <InfoBoard distance="1" link="https://goo.gl/maps/VEBvecVJHXQwCuKd8" time="12" />

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
          <div className={styles.row}>
            {(this.state.loaded == true) ? (
              <ImageGallery items={this.state.images} />) : (<div></div>)}
          </div>


        </div>
      </div>

    );
  }
}

