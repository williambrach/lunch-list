import * as React from 'react';
import styles from './Obedy.module.scss';
import { IObedyProps } from './IObedyProps';
import { escape } from '@microsoft/sp-lodash-subset';


interface ILunchBoard {
    menuNumber: string;
    menu: string;
    price: string;

}

export default class InfoBoard extends React.Component<ILunchBoard> {

    getMenuString(): string {
        let menuString: string;
        let menu = this.props.menu;
        let price = "";
        if (this.props.price != null) {
            price = this.props.price + " " + "€";
        }
        menuString = menu;
        return menuString
    }

    public render(): React.ReactElement {

        return (
            <div className={styles.column}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <span className={styles.lunchTextHeader}>{this.props.menuNumber}</span>
                    </div>
                    <div className={styles.column}>
                        <span className={styles.lunchText}>{this.getMenuString()}</span>
                    </div>
                    {this.props.price
                        ? (
                            <div className={styles.column}>
                                <span className={styles.lunchTextHeader}>Cena : {this.props.price}€</span>
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                </div>
            </div>

        );
    }
}