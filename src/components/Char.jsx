function Char({ letter, color }) {
    //try to decide color before the rendering so you simplify the call
    //state or memo are best for large opperations but in a simple case like this a simple const variable is enough

    //is 'char' coming from GameBoard.css? if so, for this approach is good to have a separate css for each component. 
    //its easier to search when needed
    return <>
        <div className={"col char " + (!color ? "": "bg-"+color+" text-"+color+"-emphasis")}>{letter}</div>
    </>
}

export default Char;