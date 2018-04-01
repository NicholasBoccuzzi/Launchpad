import React from 'react';

 class projectShowCampaign extends React.Component {
   constructor (props) {
     super(props);
     this.body = props.body;
     this.rewards = props.rewards;
   }

  render () {
    return (
      <main className="sp-content-container">
        <section className="sp-campaign-container">

        </section>
        <section className="sp-rewards-container">
        </section>
      </main>
    );
  }
}


export default projectShowCampaign;
