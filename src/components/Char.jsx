function Char({ letter, color }) {
    return <>
        <div className={"col char " + (!color ? "": "bg-"+color+" text-"+color+"-emphasis")}>{letter}</div>
    </>
}

export default Char;