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

const Collapsible = ({ children, isOpen }) => {
    return (
        <div className={`tree-collapsible${isOpen ? '-open' : '-closed'}`}>{children}</div>
    )
}

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
            <div className="folder--label" onClick={handleToggle}>
                <AiOutlineFolder />
                <span>{name}</span>
            </div>
            <Collapsible isOpen={isOpen}>{children}</Collapsible>
        </div>
    );
};

const TreeRecursive = ({ data }) => {
    return data.map(item => {
        if (item.type === "file") {
            return <File name={item.name} />;
        }
        if (item.type === "folder") {
            return (
                <Folder name={item.name}>
                    {console.log('ITEM', item.childrens)}
                    <TreeRecursive data={item.childrens} />
                </Folder>
            );
        }
    });
  };

const FolderTree = ({children, data}) => {
    const isImparative = data && !children;

    return <div className="tree-main">{isImparative ? <TreeRecursive data={data} /> : children}</div>
}

export { 
    FolderTree
}