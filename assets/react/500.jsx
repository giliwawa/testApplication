var React = require('react'),
ReactDOM = require('react-dom'),
StaticErrorContainer = require('./components/StaticErrorContainer.react'),
NavigationLogo = require('./components/NavigationLogo.react');

/*************************************************************
SIGN UP
*************************************************************/

var SectionError = React.createClass({

  render: function() {
    return (
        <StaticErrorContainer title="500: Server Error"/>
     );
  }
}); 



ReactDOM.render(
  <SectionError/>,
  document.getElementById('divContainer')
  );
