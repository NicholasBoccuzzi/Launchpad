import React from 'react';
import { Link } from 'react-router-dom';
import { Line, Circle } from 'rc-progress';

class createProjectForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      creator_id: this.props.currentUser.id,
      title: "",
      funding_goal: "0",
      summary: "",
      body: "",
      deadline: "",
      category: ""
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    const project = this.state;
    this.props.createProject({project});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  doNothing() {
    return;
  }

  render () {

    return (
      <main className="largest-project-container">
        <nav className="project-nav">
        </nav>
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
              <div className="project-input-container">
                <button className="project-button-container" onClick={this.doNothing}>
                  <div className="project-image-button">
                    <h3 className="project-upload-image-header">Choose an image from your computer</h3>
                    <p className="small-font">This is the main image associated with your project. Make it count!</p>
                    <p className="small-font">JPEG, PNG, GIF, or BMP</p>
                    <p className="small-font">16:9 aspect ratio</p>
                  </div>
                </button>
                <p className="project-form-explanations">
                  This is the first thing that people will see when
                  they come across your project. Choose an image that’s crisp
                  and text-free.
                </p>
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
                <h3 className="project-form-input-title">Funding duration</h3>
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

          </section>
        </main>
      </main>
    );
  }
}

export default createProjectForm;
