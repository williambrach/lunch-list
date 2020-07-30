import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';

interface RebeccaProps {
  link: string;
}

export default class Rebecca extends React.Component <RebeccaProps> {

  public render(): React.ReactElement {
    return (
      <div className={styles.obedy}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <a target='_blank' href="https://www.facebook.com/Bufet-Rebecca-373850779712228/" style={{ textDecoration: 'none' }}>
                <span className={styles.title}>🍳 Rebecca</span>
              </a >

            </div>
            <InfoBoard distance="0.11" link="https://goo.gl/maps/Zs8Yi4tQkCP2GXFK6" time="1" />

            <div className={styles.column}>
              <embed src={this.props.link} width="100%" height="600px">
              </embed>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
