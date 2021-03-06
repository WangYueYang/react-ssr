import axios from 'axios';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Dispatch } from 'redux';

type IProps = {
  data: string;
  dispatch: Dispatch;
};

function About(props) {
  const [data, setData] = useState('');

  useEffect(() => {
    if (!props.data) {
      axios.get('http://localhost:3000/getData').then((res) => {
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
    <>
      <main>
        <h2>Who are we?</h2>
      </main>
      <nav>About</nav>
      <div>{props.data}</div>
    </>
  );
}

About.loadData = (store) => {
  return new Promise((resolve) => {
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

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(About);
