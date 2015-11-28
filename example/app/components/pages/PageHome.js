import React from 'react';
import Document from 'components/common/Document';
import Tooltip from 'react-tooltip-component';

class PageHome extends React.Component {
  render() {
    return (
      <Document title='Home | React component example' className='page-home'>
        <div>
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
      </Document>
    );
  }
}

export default PageHome;
