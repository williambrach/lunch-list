import * as React from 'react';
import styles from '../Obedy.module.scss';
import { IObedyProps } from '../IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';
import InfoBoard from '../InfoBoard';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";

interface RebeccaProps {
  link: string;
}

interface RebeccaState {
  insertedLink: boolean;
}

export default class Rebecca extends React.Component<RebeccaProps, RebeccaState> {

  constructor(props) {
    super(props);
    this.state = {
      insertedLink: undefined
    };
  }



  private checkState() {
    if (this.props.link == "link" || this.props.link == "" || this.props.link == "Rebecca Link") {
      return true;
    } else {
      return false;
    }
  }

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
              {this.checkState() ? (
                <div className={styles.rebeccaLoad}>
                  <h4>Je potrebné pridať link na menu ✏️</h4>
                  <ReactLoading type={"cylon"} color={"white"} />
                </div>
              ) : (
                  <embed src={this.props.link} width="100%" >
                  </embed>
                )}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
