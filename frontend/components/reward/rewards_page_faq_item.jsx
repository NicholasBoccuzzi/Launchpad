import React from 'react';

class RewardsPageFaqLi extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.text = props.text;
    this.loaded = false;
    this.active = false;
    this.toggleFaq = this.toggleFaq.bind(this);
    this.caret = this.caret.bind(this);
    this.animation = this.animation.bind(this);
  }

  componentDidMount() {
  }


  toggleFaq() {
    this.loaded = true;
    this.active = !this.active;
    this.props.updatePage();
  }

  animation () {
    if (this.active && this.loaded) {
      return "rp-animation-open";
    } else if (!this.active && this.loaded){
      return "rp-animation-close";
    } else {
      return "";
    }
  }

  caret () {
    if (this.active) {
      return "down";
    } else {
      return "right";
    }
  }

  render() {
    return (
      <main className={`rp-faq-li-container ${this.animation()}`}>
        <div className="rp-faq-li" onClick={this.toggleFaq}>
          <i className={`fas fa-caret-${this.caret()} rp-caret`}></i>
          <div className="rp-faq-li-title">{this.title}</div>
        </div>
        <div className="rp-faq-li-text">
          {this.text}
        </div>
      </main>
    );
  }
}

export default RewardsPageFaqLi;
