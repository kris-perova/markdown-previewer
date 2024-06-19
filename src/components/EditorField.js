

const EditorField = ({text, setText}) => {
    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className={'editorField'}>
            <h3 className={'header'}>Editor</h3>
            <input
                className={'textArea'}
                type={'text'}
                onChange={handleChange}
                // value={text} // устанавливается из состояния компонента [text]
            />
        </div>
    );
}

export default EditorField;