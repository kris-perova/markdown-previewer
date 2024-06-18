import './App.css';
import EditorField from "./components/EditorField";
import PreviewerField from "./components/PreviewerField";
import {useState} from "react";

function App() {
    const [text, setText] = useState('');

  return (
    <>
      <EditorField
          text={text}
          setText={setText}
      />
      <PreviewerField
          text={text}
      />
    </>
  );
}

export default App;