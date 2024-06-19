import {marked} from "marked";

const PreviewerField = ({text}) => {
    // the first way - it's not recommended in react
    // useEffect(()=>{
    //     document.getElementById('content').innerHTML = marked.parse(text);
    // }, [text])

    // the second way:
    // document.getElementById('content').innerHTML = marked.parse(text);

    return (
        <div className={'previewerField'}>
            <h3 className={'header'}>Previewer</h3>
            <div className={'previewerText'} dangerouslySetInnerHTML={{__html: marked.parse(text)}}/>
        </div>
    );

}

export default PreviewerField;