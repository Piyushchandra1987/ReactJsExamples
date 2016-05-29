var contacts = [
					{key: 1, name: "User 1", email: "user1@test.com"},
					{key: 2, name: "User 2"},
					{key: 3, name: "User 3", email: "user3@test.com"}
]

var contacts2 = [
					{key: 6, name: "User 6", email: "user6@test.com", description: "This is User 6"},
					{key: 7, name: "User 7", email: "user7@test.com", description: "This is User 7"}
]

var contactList = contacts
					.filter(function(contact){return contact.email})
					.map(function(contact) {
						return React.createElement('li', {key: contact.key},
									React.createElement('h2', {}, contact.name),
									React.createElement('a', {href: 'mailto:' + contact.email}, contact.email))
					})

var currentTime = React.createElement('p', {}, "Current Time is " + new Date().toTimeString())

var contactItem1 = React.createClass({
	render: function(){
		return (
				React.createElement('li', {className: 'Contact'},
						React.createElement('h2', {className: 'Contact-name'}, "User 4"),
						React.createElement('a', {href: 'mailto:user4@test.com'}, "user4@test.com")
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
									React.createElement('li', {className: 'Contact'},
										React.createElement('h2', {className: 'Contact-name'}, this.props.name),
										React.createElement('a', {href: this.props.email}, this.props.email)
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
									React.createElement('li', {className: 'Contact', key: this.props.key},
										React.createElement('h2', {className: 'Contact-name'}, this.props.name),
										React.createElement('a', {href: this.props.email}, this.props.email),
										React.createElement('p', {}, this.props.description)
									)
								)
						}
})

var contactList2 = contacts2
					.map(function(contact) {
						return React.createElement(contactItem3, {key: contact.key, name: contact.name, email: contact.email, 
																				description: contact.description})
					})


var rootElement = React.createElement('div', {}, 
							React.createElement('h1', {}, "Contacts"), 
							React.createElement('ul', {}, 
								contactList,
								React.createElement(contactItem1),
								React.createElement(contactItem2, {name: "User 5", email: "user5@test.com"}),
								contactList2
								),
							currentTime	
						)

ReactDOM.render(rootElement, document.getElementById('root'))







