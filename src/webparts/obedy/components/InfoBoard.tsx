import * as React from 'react';
import styles from './Obedy.module.scss';
import { IObedyProps } from './IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';


interface IInfoBoard {
  distance: string;
  time: string;
  link: string;

}

export default class InfoBoard extends React.Component<IInfoBoard> {

  public render(): React.ReactElement {

    return (
      <div>
        <div className={styles.column}>
    <span className={styles.subTitle}>🚶‍♂️ = {this.props.distance}km, ⏱️ =~ {this.props.time} minút</span>
        </div>
        <div className={styles.column}>
          <a target='_blank' href={this.props.link} className={styles.button}>
            <span className={styles.label}>🗺️</span>
          </a>
        </div>
      </div>

    );
  }
}
