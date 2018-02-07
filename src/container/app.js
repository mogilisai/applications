import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {MapComponent} from '../components/map';
import Bike from '../components/list_component';
import { fetchData, getLatLng } from '../redux/actions/index';
import '../style/map.css';

class App extends Component {
  constructor(props){
    console.log(props,'props')
    super(props);
    this.state = {
      results: [],
      latitude: '',
      longitude: ''
    };
  }
  componentWillMount(){
    this.props.fetchData();
  }
  componentDidMount() {
 }

  render() {
    console.log('render',this.props.state)
        return (
          <div>
          <MapComponent
            latitude={this.props.lat}
            longitude={this.props.lng}
          />
          {
            this.props.result.length > 0 ?
            <Bike data={this.props.result} navigation={this.props.getLatLng}/> : 'Sai Kiran Kumar'
          }
          </div>
        );
     }
  }

function mapStateToProps(state, ownProps) {
  const { apiResult, currentLocation } = state;
  console.log(state,'apiResult')
  return {
    state,
    result: apiResult,
    lng: currentLocation.longitude,
    lat: currentLocation.latitude
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchData,
    getLatLng
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
