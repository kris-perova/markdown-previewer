import {marked} from "marked";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

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
        <div className={'previewerField'}>
            <h3 className={'header'}>Previewer</h3>
            {/*<div className={'previewerText'} dangerouslySetInnerHTML={{__html: cleanHtmlString}}/>*/}
            <div>
                {parse(cleanHtmlString)} {/* converting the string into the React element*/}
            </div>
        </div>
    );

}

export default PreviewerField;