const EditorField = ({text, setText}) => {

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div className={'editorBlock'}>
            <div>
                <h3 className={'header'}>Editor</h3>
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