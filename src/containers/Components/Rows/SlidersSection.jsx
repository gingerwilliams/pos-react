import React, { Component } from 'react';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';

const options = {
    mode: 'jsx',
    readOnly: true
};
const codeImport = `import noUiSlider from 'nouislider';
import wNumb from 'wnumb';`;
const codeExample = `<div id="slider1"></div>
<div id="slider2"></div>`;
const codeExampleInitialize = `var slider1 = document.getElementById('slider1');
noUiSlider.create(slider1, {
    start: 40,
    connect: "lower",
    tooltips: true,
    step: 1,
    range: {
        min: 0,
        max: 100
    },
    format: wNumb({
        decimals: 0
    })
});
var slider2 = document.getElementById('slider2');
noUiSlider.create(slider2, {
    start: [ 20, 60 ],
    connect: true,
    tooltips: true,
    step: 1,
    range: {
        min: 0,
        max: 100
    },
    format: wNumb({
        decimals: 0
    })
});`;
class SlidersSection extends Component{
    componentDidMount(){
        var slider1 = document.getElementById('slider1');
        noUiSlider.create(slider1, {
            start: 40,
            connect: "lower",
            tooltips: true,
            step: 1,
            range: {
                min: 0,
                max: 100
            },
            format: wNumb({
                decimals: 0
            })
        });
        var slider2 = document.getElementById('slider2');
        noUiSlider.create(slider2, {
            start: [ 20, 60 ],
            connect: true,
            tooltips: true,
            step: 1,
            range: {
                min: 0,
                max: 100
            },
            format: wNumb({
                decimals: 0
            })
        });
    }
    render(){
        return (
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Sliders</h2>
                    <legend></legend>
                    <p>We restyled nouislider, while keeping the design consistent.</p>
                    <p>To use it, you will need the following imports:</p>
                    <CodeMirror value={codeImport} options={options}/>
                    <h4>Example code</h4>
                    <div id="slider1"></div>
                    <br />
                    <div id="slider2"></div>
                    <p>In the redner method you will have to put</p>
                    <CodeMirror value={codeExample} options={options}/>
                    <br />
                    <p>And in <code>componentDidMount()</code> function you will have to put</p>
                    <CodeMirror value={codeExampleInitialize} options={options}/>
                    <h4>Props</h4>
                    <p>Please refer to <a href="https://refreshless.com/nouislider/" target="_blank" rel="noopener noreferrer">nouislider documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default SlidersSection;



// WEBPACK FOOTER //
// ./src/containers/Components/Rows/SlidersSection.jsx