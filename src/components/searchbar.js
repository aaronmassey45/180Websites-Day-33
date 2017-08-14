import React, {Component} from 'react';
import axios from 'axios';
import SearchResults from './searchresults'

export default class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      data: ''
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.getTerm(this.state.term);
    this.setState({ term: '' })
  }
  getTerm(term) {
    let url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${term}&format=json&origin=*`;
    axios.get(url).then(res => {
      this.setState({data:res.data});
    }).catch(err => {
      console.log('Error fetching and parsing data', err);
    })
  }
  handleChange(e) {
    this.setState({term: e.target.value});
  }
  render() {
    return (
      <div className="Searchbar">
        <form onSubmit={this.handleSubmit.bind(this)} className="">
          <div className="input-group col-xs-6 col-xs-offset-3">
            <input type="text" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.term}/>
            <span className="input-group-addon search" onClick={this.handleSubmit.bind(this)}><i className="fa fa-search fa-fw"></i></span>
          </div>
        </form>
        <SearchResults data={this.state.data}/>
      </div>
    );
  }
}
