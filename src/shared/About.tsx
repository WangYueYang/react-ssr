import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { routeList } from './routes';

const About = (props) => {
  const [data, setData] = useState('default');

  useEffect(() => {
    if (!props.data) {
      axios.get('/getData').then((res) => {
        props.dispatch({
          type: 'CHANGE_STATE',
          payload: {
            data: res.data.data,
          },
        });
      });
    }
  }, []);
  return (
    <div>
      About
      <p>{props.data}</p>
    </div>
  );
};

About.getData = (store) => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3000/getData').then((res) => {
      store.dispatch({
        type: 'CHANGE_STATE',
        payload: {
          data: res.data.data,
        },
      });
      resolve(res.data.data);
    });
  });
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
