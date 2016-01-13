import React from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';

const AutoCompleteEx = () => (
   <AutoComplete
    floatingLabelText="showAllItems"
    filter={AutoComplete.noFilter}
    triggerUpdateOnFocus={true}
    animated={false}
    dataSource={['12345', '23456', '34567']}/>
);

export default AutoCompleteEx;