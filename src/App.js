import './App.css';
import EditorField from "./components/EditorField";
import PreviewerField from "./components/PreviewerField";
import {useState} from "react";

function App() {
    const [text, setText] = useState('');

    return (
        <div className={'outerContainer'}>
            <div className={'generalContainer'}>
                <EditorField
                    text={text}
                    setText={setText}
                />
                <PreviewerField
                    text={text}
                />
            </div>
        </div>
    );
}

export default App;