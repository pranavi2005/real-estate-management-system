import React, { useEffect } from "react";

function GoogleMap(){
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        ifameData.src='https://maps.google.com/maps?q=$&hl=es;&output=embed'
    })
    return(
        <div>
            <iframe id="iframeId" height="500px" width="100%"></iframe>
        </div>
    );
}
export default GoogleMap;
/*An HTML iframe is used to display a web page within a web page.*/