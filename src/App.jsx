import { useState } from "react";
import "./index.css";
import { marked } from "marked";
import { FaExpand } from "react-icons/fa";
import { FaCompress } from "react-icons/fa";

function App() {
  const [input, setInput] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

You can also make text **bold**... whoa!

> Block Quotes!


Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function greet()
{
console.log("Hello world");
}

\`\`\`

This is my github profile [link](https://github.com/SHAIK-MUNEERUDDIN/)


![freeCodeCamp Logo](https://avatars.githubusercontent.com/u/120248240?v=4)
`);

  const [inputFullscreen, setInputFullscreen] = useState(false);
  const [previewFullscreen, setPreviewFullscreen] = useState(false);

  const handleInputFullscreen = () => {
    setInputFullscreen((prevInputFullscreen) => !prevInputFullscreen);
  };

  const handlePreviewFullscreen = () => {
    setPreviewFullscreen((prevPreviewFullscreen) => !prevPreviewFullscreen);
  };

  marked.setOptions({ breaks: true, gfm: true });
  return (
    <>
      <div id="wrapper" className="bg-blue-200 w-full h-full overflow-auto">
        <div
          id="input-container"
          className={`w-3/6 border-[1px] border-black mx-auto mt-8 mb-5 
            ${previewFullscreen ? "hidden" : ""}
`}
        >
          <div
            id="tool-bar"
            className="flex justify-between px-2 items-center border-b-[1px] border-black bg-blue-500"
          >
            <h4 className="text-white font-semibold text-lg ">Editor</h4>
            <button onClick={() => handleInputFullscreen()}>
              {inputFullscreen ? (
                <FaCompress className="text-white text-lg cursor-pointer hover:text-black" />
              ) : (
                <FaExpand className="text-white text-lg cursor-pointer hover:text-black" />
              )}
            </button>
          </div>
          <textarea
            name=""
            id="editor"
            className={`w-full h-full min-h-60 outline-none text-sm resize-y p-2 flex             
            ${inputFullscreen ? "h-screen" : ""}`}
            onChange={(event) => {
              setInput(event.target.value);
            }}
            value={input}
          ></textarea>
        </div>

        <div
          id="output-container"
          className={`w-4/6 border-[1px] border-black mx-auto min-h-96
             ${inputFullscreen ? "hidden" : ""}
            ${previewFullscreen ? "mt-10" : ""}
             `}
        >
          <div
            id="tool-bar"
            className="flex justify-between px-2 items-center border-b-[1px] border-black bg-blue-500"
          >
            <h4 className="text-white font-semibold text-lg ">Preview</h4>
            <button onClick={() => handlePreviewFullscreen()}>
              {previewFullscreen ? (
                <FaCompress className="text-white text-lg cursor-pointer hover:text-black" />
              ) : (
                <FaExpand className="text-white text-lg cursor-pointer hover:text-black" />
              )}
            </button>
          </div>

          <div
            id="preview"
            className="prose max-w-none h-full min-h-96 p-2 text-lg bg-white"
            dangerouslySetInnerHTML={{ __html: marked(input) }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
