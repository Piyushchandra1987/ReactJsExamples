var contacts = [
  {id: 1, name: "User 1", email: "user1@test.com"},
  {id: 2, name: "User 2"},
  {id: 3, name: "User 3", email: "user3@test.com"}
]

var contacts2 = [
  {id: 6, name: "User 6", email: "user6@test.com", description: "This is User 6"},
  {id: 7, name: "User 7", email: "user7@test.com", description: "This is User 7"}
]

var contactList = contacts
  .filter(function(contact){return contact.email})
  .map(function(contact) {
    return React.DOM.li({key: contact.id},
      React.DOM.h2({}, contact.name),
      React.DOM.a({href: 'mailto:' + contact.email}, contact.email))
  })

var currentTime = React.DOM.p({}, "Current Time is " + new Date().toTimeString())

var contactItem1 = React.createClass({
    render: function(){
      return (
        React.DOM.li({className: 'Contact', key: 4},
          React.DOM.h2({className: 'Contact-name'}, "User 4"),
          React.DOM.a({href: 'mailto:user4@test.com'}, "user4@test.com")
        )
      )
    }
  }
)

var contactItem2 = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired
  },

  render: function(){
    return(
      React.DOM.li({className: 'Contact', key: this.props.id },
        React.DOM.h2({className: 'Contact-name'}, this.props.name),
        React.DOM.a({href: this.props.email}, this.props.email)
      )
    )
  }
})

var contactItem3 = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired
  },

  render: function(){
    return (
      React.DOM.li({ key: this.props.id},
        React.DOM.h2({className: 'Contact-name'}, this.props.name),
        React.DOM.a({href: this.props.email}, this.props.email),
        React.DOM.p({}, this.props.description)
      )
    )
  }
})

var contactList2 = contacts2
  .map(function(contact) {
    return React.createElement(contactItem3, {id: contact.id, name: contact.name, email: contact.email,
      description: contact.description})
  })


var rootElement = React.createElement('div', {},
  React.DOM.h1({}, "Contacts"),
  React.DOM.ul({},
    contactList,
    React.createElement(contactItem1),
    React.createElement(contactItem2, {name: "User 5", email: "user5@test.com", id: 5}),
    contactList2
  ),
  currentTime
)

ReactDOM.render(rootElement, document.getElementById('root'))







