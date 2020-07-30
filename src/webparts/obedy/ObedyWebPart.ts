import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ObedyWebPartStrings';
import Obedy from './components/Obedy';
import { IObedyProps } from './components/IObedyProps';

export interface IObedyWebPartProps {
  rebeccaLink: string;
  description: string;
}

export default class ObedyWebPart extends BaseClientSideWebPart <IObedyWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IObedyProps> = React.createElement(
      Obedy,
      {
        description: this.properties.description,
        rebeccaLink: this.properties.rebeccaLink
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }, 
            {
              groupName: "Rebecca link",
              groupFields: [
                PropertyPaneTextField('rebeccaLink', {
                  label: "Daj link na menu v Rebecce!",
                  placeholder: "Link"
                })
              ]
            }
          ],
        }
      ]
    };
  }
}
