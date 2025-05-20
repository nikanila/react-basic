import React from "react";

class MyComponent extends React.Component {

    state = {
        name: '',
        major: 'Information Technology'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert('Click me!')
    }

    render() {
        {console.log('>>>call render: ', this.state)}
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text" 
                    onChange={(event) => this.handleOnChangeName(event)}></input>
                </div>
                <span>
                    hello my component, my name is {this.state.name}
                </span>
                <div className='second'>
                    my major is {this.state.major}
                </div>
                <div className="third">
                    <button onClick={() => {this.handleClickButton()}}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;