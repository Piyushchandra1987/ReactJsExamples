
var nameInput = React.createClass({
  propTypes:{
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  render: function(){
    return React.createElement('input', {type: 'text',
      placeholder: 'Name :',
      value: this.props.name,
      onChange: this.props.onChange  })
  }
})

var emailInput = React.createClass({
  propTypes:{
    email: React.PropTypes.string.isRequired
  },

  render: function(){
    return React.createElement('input', {type: 'email',
      placeholder: 'Email :',
      value: this.props.email,
      onChange: this.props.onChange})
  }
})

var descriptionInput = React.createClass({
  propTypes:{
    description: React.PropTypes.string.isRequired
  },

  render: function(){
    return React.createElement('textarea', {
      placeholder: 'Description :',
      value: this.props.description,
      onChange: this.props.onChange})
  }
})

var contactForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired
  },

  onNameChange: function(e){
    this.props.onChange(Object.assign({}, this.props.value, {name: e.target.value}))
  },

  onEmailChange: function(e){
    this.props.onChange(Object.assign({}, this.props.value, {email: e.target.value}))
  },

  onDescChange: function(e){
    this.props.onChange(Object.assign({}, this.props.value, {description: e.target.value}))
  },

  onSubmit: function (e) {
    e.preventDefault()
    this.props.onSubmit()
  },


  render: function () {
    var oldContact = this.props.value;
    var onChange = this.props.onChange;
    return (
      React.DOM.form({className: "ContactForm", onSubmit: this.onSubmit},
        React.createElement(nameInput, {
            name: this.props.value.name,
            onChange: this.onNameChange
          }),
        React.DOM.p({}),
        React.createElement(emailInput, {
          email: this.props.value.email,
          onChange: this.onEmailChange
        }),
        React.DOM.p({}),
        React.createElement(descriptionInput, {
          description: this.props.value.description,
          onChange: this.onDescChange
        }),
        React.DOM.p({}),
        React.createElement('button', {type: 'submit'}, "Add Contact")
      )
    )
  }
});

var contactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.DOM.li({},
        React.DOM.h2({}, this.props.name),
        React.DOM.a({href: this.props.email}, this.props.email),
        React.DOM.p({}, this.props.description)
      )
    )
  }


})

var contactView = React.createClass({
  propTypes: {
    contactList: React.PropTypes.arrayOf(React.PropTypes.object),
    newContact: React.PropTypes.object.isRequired,
    onNewContactChange: React.PropTypes.func.isRequired,
    onSubmitContact: React.PropTypes.func.isRequired
  },

  render: function(){
    var contactsItems = this.props.contactList
      .map(function(contact){return React.createElement(contactItem, contact)})


    return (
      React.DOM.div({},
        React.createElement(contactForm, {value: this.props.newContact,
          onChange: this.props.onNewContactChange,
          onSubmit: this.props.onSubmitContact}),
        React.DOM.h1({}, "Contact List"),
        React.DOM.ul({}, contactsItems)
      )
    )
  }
});

//Constants

var CONTACT_TEMPLATE = {name: "", email: "", description: ""}

//Model

var state ={}

//Actions

function updateNewContact(contact) {
  setState({newContact: contact});
}

function submitNewContact(){
  var contact = Object.assign({}, state.newContact, {key: state.contactList.length +1})
  console.log(contact)
  if(contact.name && contact.email) {
    setState({newContact: Object.assign({},CONTACT_TEMPLATE), contactList: state.contactList.slice(0).concat(contact)})
  }
  console.log(state)
}

//Set initial state data
setState({
  contactList: [
    {key: 1, name: "User 1", email: "user1@test", description: "This is User 1."}
  ],
  newContact: {name: "", email: "", description: ""}
})

function setState(changes){
  Object.assign(state, changes);

  ReactDOM.render(
    React.createElement(contactView, Object.assign({}, state, {
      onNewContactChange: updateNewContact,
      onSubmitContact: submitNewContact
    })),
    document.getElementById('root')
  );
}








