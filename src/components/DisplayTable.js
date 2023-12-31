import React from "react"
class DisplayTable extends React.Component{

    constructor(props){

        super (props)
        this.state = {
            list:[]
        }
        this.callAPI = this.callAPI.bind(this)
        this.callAPI();

    }

    callAPI(){

fetch("https://dummy.restapiexample.com/api/v1/employees").then(
    (response) => response.json()
    ).then((data) => {
        console.log(data)
        this.setState({
        list:data.data
    })
    })
    
    }


    render(){


        let tb_data = this.state.list.map(( item)=>{
            return(
                <tr key={item.id}>

                    <td>{item.id}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.employee_salary}</td>
                    <td>{item.employee_age}</td>
                    <td>
                        <button className="btn btn-danger">Remove</button>
                        {/* <button className="btn btn-warning">Remove</button> */}
                    </td>
                   
                </tr>
            )
        }
        
        )
        return(

            <div className="container">
<table className="table table-striped">
    <thead>
        <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>SALARY</td>
            <td>AGE</td>
            <td>REMOVE</td>
        </tr>
    </thead>
    <tbody>

{tb_data}
    </tbody>
</table>

            </div>
        )
     
        
    }
    
}
export default DisplayTable;
