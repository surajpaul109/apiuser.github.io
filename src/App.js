import React from 'react';
import $ from 'jquery';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        this.fetch();
    }
    fetch(){
        var context=this;
        $.ajax({
            url:'https://reqres.in/api/users?page=2',
            method:'GET',
            success:function(response){
                context.setState({  
                    data:response.data
                })
            }
        })
    }
    render(){
        return(
            <div className="container">
                <h2>API Users</h2>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Email</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.data.map(api =>
                            <tr>
                                <td>{api.id}</td>
                                <td>{api.email}</td>
                                <td>{api.first_name}</td>
                                <td>{api.last_name}</td>
                                <td><img src={api.avatar} alt={api.id} width="300" height="200"/></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
