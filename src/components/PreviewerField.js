import {marked} from "marked";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import view from "../icons/view.png"

const PreviewerField = ({text}) => { // {Markdown text}
    // the first way - it's not recommended in react
    // useEffect(()=>{
    //     document.getElementById('content').innerHTML = marked.parse(text);
    // }, [text])

    // the second way:
    // document.getElementById('content').innerHTML = marked.parse(text);

    const htmlString = marked.parse(text); // convert Markdown-text into html-string: <p>asd</p><h1>dsf</h1>
    const cleanHtmlString = DOMPurify.sanitize(htmlString);

    return (
        <div className={'previewerBlock'}>
            <div className={'header'}>
                <img style={{width: "30px", height: "30px"}}
                    src={view}
                    alt="previewer text"/>
                <h3>Previewer</h3>
            </div>

            {/*<div className={'previewerText'} dangerouslySetInnerHTML={{__html: cleanHtmlString}}/>*/}
            <div className={'viewArea'}>
                {parse(cleanHtmlString)} {/* converting the string into the React element*/}
            </div>
        </div>
    );

}

export default PreviewerField;