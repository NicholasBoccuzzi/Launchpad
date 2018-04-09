import React from 'react';

 class projectShowCampaign extends React.Component {
   constructor (props) {
     super(props);
     this.body = props.body;
     this.image = props.image;
     this.rewards = props.rewards;
     this.displayCampaignBody = this.displayCampaignBody.bind(this);
   }

   displayCampaignBody () {
    if (this.body) {
      return this.body;
    } else {
      return "Loading...";
    }
   }

  render () {
    return (
      <main className="sp-content-container">
        <section className="sp-campaign-container">
          <div className="sp-campaign-header">
            About
          </div>
          <img className="sp-campaign-image" src={this.image}></img>
          <div>{this.displayCampaignBody()}</div>
        </section>
        <section className="sp-rewards-container">
        </section>
      </main>
    );
  }
}


export default projectShowCampaign;
