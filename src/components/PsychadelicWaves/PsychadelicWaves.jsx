
var __html = require('./dist/html.js');
var template = { __html: __html };

export default function PsychadelicWaves() {
    return (
        <span dangerouslySetInnerHTML={template} />
    )
}