import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { withRouter } from 'react-router-dom';
import GeneralUtil from './utils/GeneralUtil';
import ComposeUtil from './utils/ComposeUtil';
import Poppup from './components/Popup/Popup';
import page_data_source from './data_source/sites/kw/collect/index.json';
let count = 0;

function App({}) {
  useEffect(() => {
    if (count === 0) {
      GeneralUtil.loadExternalCss(
        'https://websiteimages.b-cdn.net/css/used_fontfaces.css'
      );
      require('./App.css');
      count += 1;
    }
  }, []);

  return (
    <div className={'App'} dir={'ltr'}>
      <React.Fragment>
        <Poppup></Poppup>
        {ComposeUtil.composeComponent(page_data_source)}
      </React.Fragment>
    </div>
  );
}

export default withRouter(observer(App));
