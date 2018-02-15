import React from 'react';
import { Link } from 'react-router-dom';
import { Line, Circle } from 'rc-progress';
import Modal from '../modal_container';
import RewardsTab from './rewards_tab';

class createProjectForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      creator_id: this.props.currentUser.id,
      title: "",
      funding_goal: "0",
      summary: "",
      body: "temp",
      deadline: "",
      category: "Art",
      location: "",
      image: {
        imageUrl: null,
        imageFile: null
      },
      modalVisible: false,
    };

    this.activeTab = "Basics";
    this.formData = new FormData();
    this.formData.set(`project[body]`, "blah");
    this.formData.set(`project[category]`, "Art");
    this.formData.set(`project[creator_id]`, this.props.currentUser.id);
    this.update = this.update.bind(this);
    this.renderSubmit = this.renderSubmit.bind(this);
    this.current_funding = this.current_funding.bind(this);
    this.handlePictureUpload = this.handlePictureUpload.bind(this);
    this.handlePicturePreview = this.handlePicturePreview.bind(this);
    this.switchSelectedTab = this.switchSelectedTab.bind(this);
    this.displayProjectBasics = this.displayProjectBasics.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
  }

  switchSelectedTab (e) {
    let curSelected = document.getElementsByClassName("selected-project-tab-li");
    curSelected[0].classList.remove("selected-project-tab-li");
    e.currentTarget.classList.add("selected-project-tab-li");
    this.activeTab = e.currentTarget.id;
    this.props.switchTabs();
  }

  componentDidMount () {
    if (this.state.modalVisible) {
      this.setState({modalVisible: false});
    }

    if (this.props.projectCreateUpdateModalActive) {
      this.props.toggleCreateProjectModal();
    }
  }

  componentWillUnmount () {
    if (this.props.projectCreateUpdateModalActive) {
      this.props.toggleCreateProjectModal();
    }

    this.setState({modalVisible: false});
  }

  update(field) {
    const that = this;
    return e => {
      that.setState({
        [field]: e.currentTarget.value
      });

      if (!that.state.modalVisible) {
        that.setState({modalVisible: true});
      }

      if (!that.props.projectCreateUpdateModalActive) {
        that.props.toggleCreateProjectModal();
      }

      if (!that.formData[field]) {
        if (field === "funding_goal") {
          that.formData.set(`project[${field}]`, parseInt(e.currentTarget.value));
        } else {
          that.formData.set(`project[${field}]`, e.currentTarget.value);
        }
      }
    };
  }

  renderSubmit () {
    if (this.state.modalVisible) {
      if (this.props.projectCreateUpdateModalActive) {
        return <Modal
          state={this.state}
          formData={this.formData}
          location={this.props.location}
          />;
      }
    }
  }

  current_funding () {

    if (this.state.funding_goal > 0) {
      return Math.floor("0"/this.state.funding_goal);
    } else {
      return "0";
    }
  }

  handlePicturePreview(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () => {
      this.setState({
        image: {
          imageUrl: reader.result,
          imageFile: file
        }
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handlePictureUpload () {
    const file = this.state.image.imageFile;
    if (file) {
      this.formData.append("project[image]", file);
    }
  }

  displayProjectRewards() {
    if (this.activeTab === "Rewards") {
      return (
        <RewardsTab state={this.state}/>
      );
    }
  }

  displayProjectBasics () {
    if (this.activeTab === "Basics") {
      return (
        <div>
          <header className="get-started-container animated fadeIn">
            <h1 className="get-started-title">Let's get started.</h1>
            <h2 className="get-started-body">Make a great first impression
              with your project's title and image, and set your funding goal,
              campaign duration, and project category.</h2>
          </header>
          <main className="new-project-container no-overflow">
            <form onSubmit={this.handleSubmit} className="project-form animated slideInLeft">
              <div className="project-form-input-box">
                <div className="project-form-input-title-box">
                  <h3 className="project-form-input-title">Project Image</h3>
                </div>
                <div className="flexed-columns">
                  <img className="larger-input-preview" src={this.state.image.imageUrl} />
                  <div className="project-input-container">
                    <div className="big-button">
                      <label htmlFor="file-input" className="file-input">
                        <h3 className="project-upload-image-header">Choose an image from your computer</h3>
                        <h3 className="small-font background-white">This is the main image associated with your project. Make it count!</h3>
                        <h3 className="small-font background-white">JPEG, PNG, GIF, or BMP</h3>
                        <h3 className="small-font-last background-white">16:9 aspect ratio</h3>
                        <input type="file" id="file-input" className="file-input-button" onChange={this.handlePicturePreview}></input>
                      </label>
                    </div>
                    <p className="project-form-explanations">
                      This is the first thing that people will see when
                      they come across your project. Choose an image that’s crisp
                      and text-free.
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-form-input-box">
                <div className="project-form-input-title-box">
                  <h3 className="project-form-input-title">Project Title</h3>
                </div>
                <div className="project-input-container">
                  <input type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                    className="project-form-input input-title"
                    placeholder=""
                    />
                  <p className="project-form-explanations">
                    Our search looks through words from your project title and blurb,
                    so make them clear and descriptive of what you’re making.
                    Your profile name will be searchable, too.
                  </p>
                  <p className="project-form-explanations">
                    These words will help people find your project, so choose
                    them wisely! Your name will be searchable too.
                  </p>
                </div>
              </div>
              <div className="project-form-input-box">
                <div className="project-form-input-title-box">
                  <h3 className="project-form-input-title">Short blurb</h3>
                </div>
                <div className="project-input-container">
                  <input
                    value={this.state.summary}
                    onChange={this.update('summary')}
                    className="project-form-input input-summary"
                    placeholder=""
                    />
                  <p className="project-form-explanations">
                    Give people a sense of what you’re doing.
                    Skip “Help me” and focus on what you’re making.
                  </p>
                </div>
              </div>
              <div className="project-form-input-box">
                <div className="project-form-input-title-box">
                  <h3 className="project-form-input-title">Category</h3>
                </div>
                <div className="project-categories-container">
                  <select className=" input-categories"
                    onChange={this.update('category')}>
                    <option value="Art">Art</option>
                    <option value="Comics">Comics</option>
                    <option value="Crafts">Crafts</option>
                    <option value="Dance">Dance</option>
                    <option value="Design">Design</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Film & Video">Film & Video</option>
                    <option value="Food ">Food</option>
                    <option value="Games">Games</option>
                    <option value="Journalism">Journalism</option>
                    <option value="Music">Music</option>
                    <option value="Photography">Photography</option>
                    <option value="Publishing">Publishing</option>
                    <option value="Technology">Technology</option>
                    <option value="Theater">Theater</option>
                  </select>
                </div>
              </div>
              <div className="project-form-input-box">
                <div className="project-form-input-title-box">
                  <h3 className="project-form-input-title">Project Location</h3>
                </div>
                <div className="project-input-container">
                  <input
                    type="text"
                    value={this.state.location}
                    onChange={this.update('location')}
                    className="project-form-input input-location"
                    placeholder=""
                    />
                </div>
              </div>
              <div className="project-form-input-box">
                <div className="project-form-input-title-box">
                  <h3 className="project-form-input-title">Funding Deadline</h3>
                </div>
                <div className="project-input-container">
                  <input
                    type="date"
                    value={this.state.deadline}
                    onChange={this.update('deadline')}
                    className="project-form-input input-deadline"
                    />
                  <p className="project-form-explanations">Projects with shorter durations have higher success rates.
                    You won’t be able to adjust your duration after you launch.
                  </p>
                </div>
              </div>
              <div className="project-form-input-box">
                <div className="project-form-input-title-box">
                  <h3 className="project-form-input-title">Funding goal</h3>
                </div>
                <div className="project-input-container">
                  <input
                    type="text"
                    value={this.state.funding_goal}
                    onChange={this.update('funding_goal')}
                    className="project-form-input input-goal"
                    />
                </div>
              </div>
            </form>
            <section className="project-current-summary animated fadeIn">
              <div className="helpful-tips-box">
                <i className="fa fa-lightbulb-o" aria-hidden="true"></i>&nbsp;&nbsp;
                  <div className="helpful-tips-box-content">
                    <h2 className="small-font">How to:</h2>
                    <br/>
                    <a className="link-text" href="https://www.kickstarter.com/help/handbook/getting_started?ref=build_basics">Make an awesome project</a>
                  </div>
                </div>

                <div className="text-left">
                  <div className="basic-black">Need Advice?</div>
                  <div className="project-form-explanations ">
                    Visit Campus to read discussions about preparing
                    for a project and more.
                  </div>
                </div>

                <div className="small-preview-container">
                  <div className="preview-photo">
                    <img className="preview-photo-image" src={this.state.image.imageUrl}></img>
                  </div>
                  <div className="small-preview-info-container">
                    <div className="small-preview-item">{this.state.title}</div>
                    <div className="small-preview-item">{this.state.summary}</div>
                  </div>
                  <div className="small-preview-funding">
                    <Line className="small-preview-item" trailColor="#F1EEEA" percent="0" strokeWidth="1" strokeColor="#169D74" />
                    <div className="create-flexed">
                      <div className="small-preview-funding-item">{this.current_funding()}%<p>funded</p></div>
                      <div className="small-preview-funding-item">${this.state.funding_goal}<p>pledged</p></div>
                    </div>
                  </div>

                </div>
              </section>
            </main>
          </div>
        );
    } else {
      return;
    }
  }

  render () {

    return (
      <main className="largest-project-container">
        <nav className="project-nav">
          <div className="project-nav-tabs-container">
            <div className="project-nav-tabs-li selected-project-tab-li"
              onClick={this.switchSelectedTab}
              id="Basics">
              <i className="fa fa-check-circle project-tab-li-checkbox"></i>
              <div>Basics</div>
            </div>
            <div className="project-nav-tabs-li"
              onClick={this.switchSelectedTab}
              id="Rewards">
              <i className="fa fa-check-circle project-tab-li-checkbox"></i>
              <div>Rewards</div>
            </div>
            <div className="project-nav-tabs-li"
              onClick={this.switchSelectedTab}
              id="Story">
              <i className="fa fa-check-circle project-tab-li-checkbox"></i>
              Story
            </div>
            <div className="project-nav-tabs-li"
              onClick={this.switchSelectedTab}
              id="About you">
              <i className="fa fa-check-circle project-tab-li-checkbox"></i>
              <div>About you</div>
            </div>
            <div className="project-nav-tabs-li no-border"
              onClick={this.switchSelectedTab}
              id="Account">
              <i className="fa fa-check-circle project-tab-li-checkbox"></i>
              <div>Account</div>
            </div>
          </div>

          <div className="project-nav-tabs-container small-margin-left">
            <div className="project-nav-tabs-li no-border" onClick={this.switchSelectedTab}>
              <div>Preview</div>
            </div>
          </div>

          <div className="project-nav-tabs-container small-margin-left">
            <div className="project-nav-tabs-li no-border">
              <div>Activate Project</div>
            </div>
          </div>
        </nav>
        {this.displayProjectRewards()}
        {this.displayProjectBasics()}

        {this.renderSubmit()}
      </main>
    );
  }
}

export default createProjectForm;
