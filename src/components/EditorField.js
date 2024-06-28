import pen from "../icons/pen.png"

const EditorField = ({text, setText}) => {

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className={'editorBlock'}>
            <div  className={'header'}>
                <img style={{width: "30px", height: "30px"}}
                    src={pen}
                    alt="editor field"/>
                <h3>Editor</h3>
            </div>

            <div className={'editorField'}>
                <textarea
                    className={'inputArea'}
                    onChange={handleChange}
                    value={text} // устанавливается из состояния компонента [text]
                />
            </div>

        </div>
    );
}

export default EditorField;