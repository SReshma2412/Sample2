import { Component } from "react";

export class Footer extends Component
{
    constructor(props)
    {
        super(props);
        this.state={brand:"nike" ,price:"300"}
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick =()=>
    {
        this.setState({
            brand:"a",
            price:"32"
        });
    }

    render()
    {
        return(
            <div>
                <h1>Footer component{this.props.color} is {this.props.shape} ohh {this.props.name}  </h1>
            <h2>I have a {this.state.brand} price {this.state.price}</h2>
            <button onclick={this.handleClick}>handle</button>
            </div>
        )
    }
}
Footer.defaultProps={
    name:"Not given"
}