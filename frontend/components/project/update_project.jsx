import React from 'react';
import { Link } from 'react-router-dom';
import { Line, Circle } from 'rc-progress';
import Modal from '../modal_container';
import { Redirect } from 'react-router-dom';
import RewardsTab from './rewards_tab_container';

class updateProjectForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: parseInt(this.props.projectId),
      creator_id: "",
      title: "",
      funding_goal: "0",
      summary: "",
      body: "temp",
      deadline: "",
      category: "",
      location: "",
      image: {
        imageUrl: null,
        imageFile: null
      },
      modalVisible: false,
      wrongUser: false

    };

    this.activeTab = "Basics";
    this.formData = new FormData();
    this.formData.set(`project[body]`, "blah");
    this.formData.set(`project[id]`, this.props.projectId);
    this.formData.set(`project[creator_id]`, this.props.currentUser.id);
    this.update = this.update.bind(this);
    this.renderSubmit = this.renderSubmit.bind(this);
    this.currentFunding = this.currentFunding.bind(this);
    this.handlePictureUpload = this.handlePictureUpload.bind(this);
    this.handlePicturePreview = this.handlePicturePreview.bind(this);
    this.switchSelectedTab = this.switchSelectedTab.bind(this);
    this.displayProjectBasics = this.displayProjectBasics.bind(this);
    this.displayProjectRewards = this.displayProjectRewards.bind(this);

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
    if (this.props.modalVisible) {
      this.setState({modalVisible: false});
    }

    this.props.fetchProject(parseInt(location.hash.split('/')[2]));
    this.props.toggleUpdateProjectModal();
  }

  componentWillUnmount() {
    this.setState({modalVisible: false});

    this.props.toggleUpdateProjectModal();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.projectId !== nextProps.projectId) {
      this.props.fetchProject(parseInt(nextProps.projectId));
    }

    let projectUser;
    if (nextProps.project) {
      projectUser = nextProps.project.creator_id;
      if (this.props.currentUser.id != projectUser) {
        this.setState({wrongUser: true});
      }
    }

    if (!this.state.modalVisible) {

      if (nextProps.project) {
        if (nextProps.project.title) {
          this.setState({title: nextProps.project.title});
          this.formData.set(`project[title]`, nextProps.project.title);
        } else {
          this.setState({title: ""});
          this.formData.set(`project[title]`, "");
        }

        if (nextProps.project.funding_goal) {
          this.setState({funding_goal: nextProps.project.funding_goal});
          this.formData.set(`project[funding_goal]`, nextProps.project.funding_goal);
        } else {
          this.setState({funding_goal: ""});
          this.formData.set(`project[funding_goal]`, "");
        }

        if (nextProps.project.summary) {
          this.setState({summary: nextProps.project.summary});
          this.formData.set(`project[summary]`, nextProps.project.summary);
        } else {
          this.setState({summary: ""});
          this.formData.set(`project[summary]`, "");
        }

        if (nextProps.project.deadline) {
          this.setState({deadline: nextProps.project.deadline});
          this.formData.set(`project[deadline]`, nextProps.project.deadline);
        } else {
          this.setState({deadline: ""});
          this.formData.set(`project[deadline]`, "");
        }
        // deadline:  nextProps.project.deadline.slice(0, 10),

        if (nextProps.project.category) {
          this.setState({category: nextProps.project.category});
          this.formData.set(`project[category]`, nextProps.project.category);
        } else {
          this.setState({category: ""});
          this.formData.set(`project[category]`, "");
        }

        if (nextProps.project.location) {
          this.setState({location: nextProps.project.location});
          this.formData.set(`project[location]`, nextProps.project.location);
        } else {
          this.setState({location: ""});
          this.formData.set(`project[location]`, "");
        }

        this.setState({
          creator_id: nextProps.project.creator_id,
          image: {imageUrl: nextProps.project.image}
        });
      }
    }
  }

  update(field) {
    const that = this;
    return e => {
      that.setState({
        [field]: e.target.value
      });

      if (!that.state.modalVisible) {
        that.setState({modalVisible: true});
      }

      if (field === "funding_goal") {
        that.formData.set(`project[${field}]`, parseInt(e.currentTarget.value));
      } else {
        that.formData.set(`project[${field}]`, e.currentTarget.value);
      }

    };
  }

  renderSubmit () {
    if (this.state.modalVisible) {

      return (
        <Modal
          fundingGoal={this.state.funding_goal}
          modalVisible={this.state.modalVisible}
          image={this.state.image}
          formData={this.formData}
          location={this.props.location}
          id={this.state.id}
          />
      );
    }
  }

  currentFunding () {

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
      this.setState({modalVisible: true});
    }
  }

  handlePictureUpload () {
    const file = this.state.image.imageFile;
    if (file) {
      this.formData.set("project[image]", file);
    }
  }

  displayProjectRewards() {
    if (this.activeTab === "Rewards") {
      return (
        <RewardsTab state={this.state} location={this.props.location} />
      );
    }
  }

  displayProjectBasics () {
    if (this.activeTab === "Basics") {
      return (
      <div>
        <header className="get-started-container">
          <h1 className="get-started-title">Let's get started.</h1>
          <h2 className="get-started-body">Make a great first impression
          with your project's title and image, and set your funding goal,
        campaign duration, and project category.</h2>
        </header>
        <main className="new-project-container">
          <form onSubmit={this.handleSubmit} className="project-form">
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
                <select value={this.state.category} className=" input-categories"
                  onChange={this.update('category')}>
                  <option value="">--</option>
                  <option value="Art">Art</option>
                  <option value="Comics">Comics</option>
                  <option value="Crafts">Crafts</option>
                  <option value="Dance">Dance</option>
                  <option value="Design">Design</option>
                  <option value="Fashion">Fashion</option>
                  <option value='FilmVideo'>Film & Video</option>
                  <option value="Food">Food</option>
                  <option value="Games">Games</option>
                  <option value="Journalism">Journalism</option>
                  <option value="Music">Music</option>
                  <option value="Photography">Photography</option>
                  <option value="Publishing">Publishing</option>
                  <option value="Tech">Technology</option>
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
          <section className="project-current-summary">
            <div className="helpful-tips-box">
              <i class="far fa-lightbulb"  aria-hidden="true"></i>&nbsp;&nbsp;
                <div className="helpful-tips-box-content">
                  <h2 className="small-font">How to:</h2>
                  <br/>
                <Link className="link-text" to="#">Make an awesome project</Link>
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
                  <div className="small-preview-funding-item">{this.currentFunding()}%<p>funded</p></div>
                  <div className="small-preview-funding-item">${this.state.funding_goal}<p>pledged</p></div>
                </div>
              </div>

            </div>
          </section>
        </main>
      </div>
      );
    }
  }

  render () {
    let redirect;
    if (this.state.wrongUser) {
      redirect = <Redirect to={`/projects/${this.state.id}`} />;
    }

    return (
      <main className="largest-project-container">
        {redirect}

        <nav className="project-nav">
          <div className="project-nav-tabs-container">
            <div className="project-nav-tabs-li selected-project-tab-li"
              id="Basics"
              onClick={this.switchSelectedTab}>
              <i className="fa fa-check-circle project-tab-li-checkbox"></i>
              <div>Basics</div>
            </div>
            <div className="project-nav-tabs-li"
              id="Rewards"
              onClick={this.switchSelectedTab}>
              <i className="fa fa-check-circle project-tab-li-checkbox"></i>
              <div>Rewards</div>
            </div>
            <div className="project-nav-tabs-li"
              id="Story"
              onClick={this.switchSelectedTab}>
              <i className="fa fa-check-circle project-tab-li-checkbox"></i>
              Story
            </div>
            <div className="project-nav-tabs-li"
              id="About you"
              onClick={this.switchSelectedTab}>
              <i className="fa fa-check-circle project-tab-li-checkbox"></i>
              <div>About you</div>
            </div>
            <div className="project-nav-tabs-li no-border"
              id="Account"
              onClick={this.switchSelectedTab}>
              <i className="fa fa-check-circle project-tab-li-checkbox"></i>
              <div>Account</div>
            </div>
          </div>

          <div className="project-nav-tabs-container small-margin-left">
            <div className="project-nav-tabs-li no-border" id="Preview" onClick={this.switchSelectedTab}>
              <div>Preview</div>
            </div>
          </div>

          <div className="project-nav-tabs-container small-margin-left">
            <div className="project-nav-tabs-li no-border">
              <div>Activate the Project</div>
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

export default updateProjectForm;
