import React from 'react';

const ImageLinkForm = ()=> {
    return (
        <div>
            <p className="f3">
                {'This Magic Brain will detect your face in your picture'}  
            </p>
            <div className="center">
                <div className="center form br3 ba bw1 pa4 shadow-5 ">
                    <input className="f3 pa1 w-70 " type="text"/>
                    <button className="w-30 ma2 f3 br2 pa2 pv2 grow link dib bg-light-purple ">Detect</button>
                </div>
                
            </div>
        </div>
    );
}
export default ImageLinkForm;