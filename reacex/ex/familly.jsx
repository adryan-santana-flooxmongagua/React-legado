import React from "react";
import { childrenWithprops } from "../utils/utilsr";

export default props =>(
    <div>
        <h1>Familaimsd</h1>
        
        {childrenWithprops(props.children,props)}
    </div>
)