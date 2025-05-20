import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Hoan',
        major: 'Information Technology'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text" 
                    onChange={(event) => this.handleOnChangeName(event)}></input>
                </div>
                <div className="second">
                    hello my component, my name is {this.state.name}
                </div>
                <div className='third'>
                    my major is {this.state.major}
                </div>
            </>
        )
    }
}

export default MyComponent;