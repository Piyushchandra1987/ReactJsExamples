
var CommentBox = React.createClass({
  render: function() {
    return (
     React.createElement('div', null,
        "Hello, world! "
      )
    );
  }
});
ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);