import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';

import config from 'helmconfig.js';

class Header extends React.Component {
  render() {
    return (
      <Helmet
        title="YOHO!有货 | 年轻人潮流购物中心，中国潮流购物风向标，官方授权正品保证"
        meta={config.meta}
        link={config.link}
      />
    );
  }
}

ReactDOMServer.renderToString(<Header />);
let header = Helmet.rewind();

export default header;
