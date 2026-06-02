import Char from "./Char";

function Instructions() {
    return <div className="mx-1">
        <span type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <i className="bi bi-patch-question"></i>
        </span>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">How to play</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body text-start">
                <p>Guess the Wordle in five tries.</p>
                <p>Each guess must be a valid five-letter word.</p>
                <p>The color of the tiles will change to show how close your guess was to the word.</p>
                <p>Examples:</p>
                <div className="d-flex mb-3">
                    <Char key="char-w" letter="W" color="success" />
                    <Char key="char-o" letter="O" />
                    <Char key="char-r" letter="R" />
                    <Char key="char-d" letter="D" />
                    <Char key="char-y" letter="Y" />
                </div>
                <p>W is in the word and in the correct spot.</p>
                <div className="d-flex mb-3">
                    <Char key="char-l" letter="L"/>
                    <Char key="char-i" letter="I" color="warning"  />
                    <Char key="char-g" letter="G" />
                    <Char key="char-h" letter="H" />
                    <Char key="char-t" letter="T" />
                </div>
                <p>I is in the word but in the wrong spot.</p>
                <div className="d-flex mb-3">
                    <Char key="char-r2" letter="R" />
                    <Char key="char-o2" letter="O" />
                    <Char key="char-g2" letter="G" />
                    <Char key="char-u" letter="U" color="danger" />
                    <Char key="char-e" letter="E" />
                </div>
                <p>U is not in the word in any spot.</p>
                <p>Simple as this! Enjoy the game!</p>
            </div>
        </div>
    </div>;
}

export default Instructions;