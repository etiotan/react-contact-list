## React Contact List

A simple Contact-list made with React and styled with materialize-css. Made for tilr developer test.

### Tools

- create-react-app
- materialize-css

### Features

- preloaded contacts
- add contacts
- remove contacts
- sort names alphabetically
- validation check, must enter name or alert prompt
- responsive
- deployed via create-react-app

### Things that were done well

- It's functional and presentable
- bugs were fixed fairly quickly

### Future features

Since this test was mostly focused on my usage of react, a lot of the database utilities were forgone. However, I have included what I could have done if I wanted to implement these features.

- I just used an objects array to hold the data, therefore the data is not dynamically being rendered. A solution to this issue is that I could have used Meteor.js's Mini-Mongo to store and render data into the contact-list.

- Authentications of users, assuming this means logins, I could have implemented a simple log-in using Meteor. I actually have a project on Github where users have to login to create a resolution and can only see their own resolutions.

### React

There were a few things I did not know and learned while doing this project.
- "..." spread operator, I was having trouble deleting table data due to the fact I didn't use the spread operator.

        function App1() {
        return <Greeting firstName="Ben" lastName="Hector" />;
        }

        function App2() {
        const props = {firstName: 'Ben', lastName: 'Hector'};
        return <Greeting {...props} />;
        }

        are equivalent

- Supposedly bad practice to pass "refs" into a parent component. I feel like it would have allowed me to separate my input field from my state. I ended up not doing it, and am looking for a better way. I chose to use "refs" for my inputs because this is the method I am most familiar with but in the past I have used another method for inputs which would look more like this.

        handleChange(event) {
        this.setState({value: event.target.value});
        }

        handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        }
