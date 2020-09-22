import React from 'react';
import SearchBar from './SearchBar';
import youtube, { baseParams } from '../apis/youtube';
import VedioList from './VedioList';
import VedioDetail from './VedioDetail';
class App extends React.Component{


    componentDidMount(){
        this.onTermSubmit('buildings');
    }
    
    state = {vedios: [], selectedVedio: null}
    onTermSubmit = async(term) => {
        const response = await youtube.get('/search', {
            params:{
                ...baseParams,
                q: term
            }
        });
        //console.log(response)

        this.setState({
            vedios: response.data.items,
            selectedVedio: response.data.items[0]
        });
    }

    onVedioSelect = (vedio)=>{
        //console.log('From the App!', vedio);
        this.setState({selectedVedio: vedio});
    }
    render(){

        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VedioDetail vedio={this.state.selectedVedio} />
                        </div>
                        <div className="five wide column">
                            <VedioList 
                                onVedioSelected = {this.onVedioSelect} 
                                vedios={this.state.vedios}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;




