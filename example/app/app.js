import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Tooltip from 'react-tooltip-component';

import './bower_components/bootstrap-customize/css/bootstrap.css';
//import 'react-tooltip-component/src/tooltip.scss';
import './assets/styles/app.scss';

class App extends React.Component {
  render() {
    return (
      <div className='layout-page'>
        <Header/>
        <main className='layout-main'>
          <div className='container'>
            <div className='tooltips-example'>
              <Tooltip title='Tooltip on top' position='top'>
                <button className='btn btn-default'>Tooltip on top</button>
              </Tooltip>
              <Tooltip title='Tooltip on bottom' position='bottom'>
                <button className='btn btn-default'>Tooltip on bottom</button>
              </Tooltip>
              <Tooltip title='Tooltip on left' position='left'>
                <button className='btn btn-default'>Tooltip on left</button>
              </Tooltip>
              <Tooltip title='Tooltip on right' position='right'>
                <button className='btn btn-default'>Tooltip on right</button>
              </Tooltip>
            </div>
            <hr/>
            <div className='tooltips-example'>
              <Tooltip title='Tooltip on top' position='top' fixed={false}>
                <button className='btn btn-default btn-lg'>
                  Tooltip on top [fixed=false]
                </button>
              </Tooltip>
              <Tooltip title='Tooltip on bottom' position='bottom'
                fixed={false}>
                <button className='btn btn-default btn-lg'>
                  Tooltip on bottom [fixed=false]
                </button>
              </Tooltip>
              <Tooltip title='Tooltip on left' position='left' fixed={false}>
                <button className='btn btn-default btn-lg'>
                  Tooltip on left [fixed=false]
                </button>
              </Tooltip>
              <Tooltip title='Tooltip on right' position='right' fixed={false}>
                <button className='btn btn-default btn-lg'>
                  Tooltip on right [fixed=false]
                </button>
              </Tooltip>
            </div>
            <hr/>
            <div className='tooltips-example'>
              <Tooltip title='Tooltip on bottom' position='bottom' space={10}>
                <button className='btn btn-default'>
                  Tooltip on bottom [space=10]
                </button>
              </Tooltip>
              <Tooltip title='Tooltip on bottom' position='bottom' space={20}>
                <button className='btn btn-default'>
                  Tooltip on bottom [space=20]
                </button>
              </Tooltip>
              <Tooltip title='Tooltip on bottom' position='bottom' space={30}>
                <button className='btn btn-default'>
                  Tooltip on bottom [space=30]
                </button>
              </Tooltip>
              <Tooltip title='Tooltip on bottom' position='bottom' space={40}>
                <button className='btn btn-default'>
                  Tooltip on bottom [space=40]
                </button>
              </Tooltip>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

function run() {
  ReactDOM.render(<App />, document.getElementById('app'));
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
