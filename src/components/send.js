import React from 'react';

class Send extends React.Component{
    componentDidMount(){
        const {location, history}=this.props;
        if(location.state===undefined){
            history.push('/');
        }
        console.log(location.state);
    }

    render(){
        return (
            <div>hi</div>
        );
    }
}
export default Send;