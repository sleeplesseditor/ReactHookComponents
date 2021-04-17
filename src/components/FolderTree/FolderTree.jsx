import * as React from 'react';
import { AiOutlineFile, AiOutlineFolder } from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";
import './FolderTree.scss';

const FILE_ICONS = {
    js: <DiJavascript1 />,
    css: <DiCss3Full />,
    html: <DiHtml5 />,
    jsx: <DiReact />
};

const File = ({ name }) => {
    let ext = name.split(".")[1];

    return (
        <div className="tree-file">
            {FILE_ICONS[ext] || <AiOutlineFile />}
            <span>{name}</span>
        </div>
    )
}

const Folder = ({ name, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleToggle = e => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div className="tree-folder">

        </div>
    )
};

const Tree = ({ children }) => {
    return <div className="tree-main">{children}]</div>
}