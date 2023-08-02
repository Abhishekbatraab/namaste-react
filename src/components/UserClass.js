import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: '',
                location: '',
                avatar_url: ''
            }
        }
        console.log(props.name+"child constructor");
    }

    // async componentDidMount(){
    //     console.log(this.props.name+"child component did mount");
    //     const data = await fetch("https://api.github.com/users/abhishek");
    //     const json = await data.json();
    //     console.log(json);
    //     this.setState({userInfo: json})
    // }

    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log('Namaste React OP');
        }, 1000)
    }

    componentDidUpdate(){
        console.log('componentDidUpdate called');
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log('Component Will unmount');
    }

    render(){
        const { name, location, avatar_url } = this.state.userInfo;
        console.log('child render');
        return (<div className="user-card">
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: https://www.linkedin.com/in/abhishek-batra-9910/</h4>
        </div>)
    }
}

export default UserClass