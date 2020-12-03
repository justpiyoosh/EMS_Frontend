import React from 'react'
export default class Homepage extends React.Component{
componentDidMount(){
    fetch("http://localhost:8000").then(res=>{console.log('itm',res.body)})
}
render(){
return(<div>Homepage</div>
);}
}