import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

//Content > Tabs > Tab
//Content > Cards > Card


export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    //points the values to where they are defined in the data.js file
    this.setState ({
      tabs: tabData,
      cards: cardData
    })

  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    //this changes the 'selected' state to the new tab
    let NewTab = tab
    this.setState ({selected: NewTab});
  };

  filterCards = () => {
   { /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
   */}
   //filters though to see if tabb is set to all, and if it is, it will show all the cards, if not, it will show the cards that correspond with 'selected'
   if (this.state.selected === 'all') {
    return this.state.cards
  } else {
    let newCards = [...this.state.cards];
    newCards = newCards.filter(card => {
      return card.tab === this.state.selected
    })
    return newCards;
  }
}

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab

          Passes the props to the other components
        */}
        
        <Tabs 
          tabs={this.state.tabs}
          selectedTab = {this.state.selected}
          selectTabHandler = {this.changeSelected}
          />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
