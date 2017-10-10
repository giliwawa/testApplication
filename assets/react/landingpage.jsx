var React = require('react'),
  ReactDOM = require('react-dom');

var $ = require('jquery');


/*************************************************************
*************************************************************/


var ContactForm = React.createClass({

  /**
   *  Component styles
   */

  fullHeight: {
    height: '100vh',
    paddingTop: '5%',
    marginBottom:'0px'
  },

  /**
   * Initializing component state.
   */
  getInitialState: function () {
    return {
      formData: {
        name: "",
        email: "",
        message: ""
      }
    };
  },

  componentDidMount: function () {

  },

  componentWillUnmount: function () {

  },

  /**
   * Detect input changes and updates the  component's state
   * without mutating it. 
   */
  onChange: function (event) {
    var field = event.target.name;
    var value = event.target.value;
    var data = Object.assign({}, this.state.formData, { [field]: value })
    this.setState({ formData: data })
  },
  /**
   *  Event handler for the submit action.
   *  Prevents default form behavior.
   *  Calls the saveContactInfo method to submit the form
   */
  onSubmit: function (event) {
    event.preventDefault();
    this.saveContactInfo(this.state.formData);
  },

  saveContactInfo: function (data) {
    console.log(data)
    $.ajax({
      url: "/saveContactInfo",
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function (result) {
        console.log(result)
      },
      error: function (xhr, status, err) {
        console.log(xhr, err);
      }
    });
  },

  render: function () {

    //YOUR CODE GOES HERE

    return (
      <div className="jumbotron" style={this.fullHeight}>

        <div className="container">

          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h2 className="text-center"
                    style={{ marginBottom: '10px', 'color': '#26adf0' }}>Get In Touch</h2>
                  <h5 className="text-center"
                    style={{ marginBottom: '50px', 'color': '#c0c1c4' }}>We'd Love To Hear From You!</h5>
                  <form action="" onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text"
                        className="form-control input-lg"
                        name="name"
                        value={this.state.formData.name}
                        onChange={this.onChange}
                        placeholder="E.g. Alex"
                        required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email"
                        className="form-control input-lg"
                        id="email"
                        value={this.state.formData.email}
                        onChange={this.onChange}
                        name="email"
                        placeholder="E.g. Alex.dupont@exemple.com"
                        required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea className="form-control input-lg"
                        id="message"
                        value={this.state.formData.message}
                        onChange={this.onChange}
                        name="message">
                      </textarea>
                    </div>
                    <div className="form-group">
                      <button style={{'width' : '100%'}} className="btn btn-primary" >Get in touch</button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }

});




ReactDOM.render(
  <ContactForm />,
  document.getElementById('containerHome')
);



