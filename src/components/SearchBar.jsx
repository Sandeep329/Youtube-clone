import React from 'react';


class SearchBar extends React.Component{

    state = {vedio_term: ""}
    
    onSubmitForm = (event)=>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.vedio_term);
    }

    handleChange = (event)=>{
        this.setState({vedio_term: event.target.value}); 
    }
    render(){
        return( 
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label>Vedio Search</label>
                        <input type="text" value={this.state.vedio_term} onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
        );  
    }
}

export default SearchBar;