import React from 'react';
import ProjectCampaignRewardItem from './project_show_reward_item_container';

 class projectShowCampaign extends React.Component {
   constructor (props) {
     super(props);
     this.body = props.body;
     this.image = props.image;
     this.rewards = props.rewards;
     this.displayCampaignBody = this.displayCampaignBody.bind(this);
     this.displayCampaignRewards = this.displayCampaignRewards.bind(this);
   }

   componentWillReceiveProps(nextProps) {
     if (nextProps.rewards) {
       this.rewards = nextProps.rewards;
     }
   }

   displayCampaignBody () {
    if (this.body) {
      return this.body;
    } else {
      return "Loading...";
    }
   }

   displayCampaignRewards () {
     let rewards = [];
     if (this.rewards) {
       this.rewards.forEach((reward) => {
         rewards.push(
           <ProjectCampaignRewardItem reward={reward} projectId={this.props.projectId}/>
         );
       });
     }

     return (
       <div className="ps-rewards-container">{rewards}</div>
     );
   }

  render () {

    return (
      <main className="sp-content-container">
        <section className="sp-campaign-container">
          <div className="sp-campaign-header">
            About
          </div>
          <img className="sp-campaign-image" src={this.image}></img>
          <div className="sp-campaign-body">{this.displayCampaignBody()}</div>
        </section>
        <section className="sp-rewards-container">
          <div className="sp-campaign-header">
            Support
          </div>
          {this.displayCampaignRewards()}
        </section>
      </main>
    );
  }
}


export default projectShowCampaign;
