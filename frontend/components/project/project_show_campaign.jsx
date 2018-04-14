import React from 'react';
import ProjectCampaignRewardItem from './project_show_reward_item_container';

 class projectShowCampaign extends React.Component {
   constructor (props) {
     super(props);
     this.body = props.body;
     this.image = props.image;
     this.rewards = props.rewards;
     this.deadline = props.deadline;
     this.creatorProject = props.creatorProject;
     this.displayCampaignBody = this.displayCampaignBody.bind(this);
     this.displayCampaignRewards = this.displayCampaignRewards.bind(this);
     this.displayTipBox = this.displayTipBox.bind(this);
     this.dateMath = this.dateMath.bind(this);
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

   dateMath (el) {
     const time = {
       days: Math.floor((new Date(this.deadline) - new Date(Date.now()))/1000/60/60/24),
       hours: Math.floor((new Date(this.deadline) - new Date(Date.now()))/1000/60/60/24%10)
     };

     if (time.days <= 0 && time.hours <= 0) {
       if (el === "campaign") {
         return "sp-camp-full";
       } else if (this.creatorProject){
         return "sp-camp-full";
       } else if (el === "rewards"){
         return "sp-rew-hide";
       }
     }
   }

   displayTipBox() {
     return (
       <ProjectCampaignRewardItem projectId={this.props.projectId} tip={true}/>
    );
   }

   displayCampaignRewards () {
     let rewards = [];
     if (this.rewards) {
       this.rewards.forEach((reward) => {
         rewards.push(
           <ProjectCampaignRewardItem reward={reward} projectId={this.props.projectId} tip={false}/>
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
        <section className={`sp-campaign-container ${this.dateMath("campaign")}`}>
          <div className="sp-campaign-header">
            About
          </div>
          <img className="sp-campaign-image" src={this.image}></img>
          <div className="sp-campaign-body">{this.displayCampaignBody()}</div>
        </section>
        <section className={`sp-rewards-container ${this.dateMath("rewards")}`}>
          <div className="sp-campaign-header">
            Support
          </div>
          {this.displayTipBox()}
          {this.displayCampaignRewards()}
        </section>
      </main>
    );
  }
}


export default projectShowCampaign;
