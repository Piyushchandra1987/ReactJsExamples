
var helloWorld = React.createClass({
  render: function() {
    return (
     React.createElement('div', null,
        "Hello, world! "
      )
    );
  }
});
ReactDOM.render(
  React.createElement(helloWorld, null),
  document.getElementById('content')
);