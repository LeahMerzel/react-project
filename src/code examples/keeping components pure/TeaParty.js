import React from "react";
import ImpureComp from './ImpureComp';
import PureComp from './PureComp';

function TeaParty(){
    return (
        <div className="trackers">
          <ImpureComp/>
          <PureComp/>
        </div>
    )
}

export default TeaParty;