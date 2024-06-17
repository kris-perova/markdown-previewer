import {useState} from "react";

const PreviewerField = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className={'markdownField'}>
            <h3 className={'header'}>Previewer</h3>
            <input
                className={'textArea'}
                type={'text'}
                onChange={handleChange}
                value={text}
            />
        </div>
    );

}

export default PreviewerField;