import { useEffect, useState } from "react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
} from '@coreui/react'

function Definition({ answer, theme }) {
    const [visible, setVisible] = useState(false);
    const [ wordDefinition, setWordDefinition ] = useState([]);


    //as an improvement, try moving api calls to a custom hook. it's good for readability, maintenance and reusability
    useEffect(() => {
        async function getDefinitionData() {
            let result;
            let response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+answer);
            if (response.ok) {
                let data = await response.json();
                result = data[0].meanings;
            } else {
                result = null;
            }
            setWordDefinition(result);
        }

        getDefinitionData();
    }, [answer]);
    return <div className="mx-2 mx-sm-4">
        <span type="button" onClick={() => setVisible(true)} aria-labelledby="wordDefinitionLabel">
            <i className="bi bi-book mx-2"></i> <span className="d-none d-sm-inline-block">Word Definition</span>
        </span>

        <CModal 
            id="wordDefinitionModal" 
            visible={visible} 
            scrollable
            data-bs-theme={theme} data-theme={theme}
            onClose={() => setVisible(false)}
        >
            <CModalHeader>
                <CModalTitle id="wordDefinitionLabel">Word Definition</CModalTitle>
            </CModalHeader>
            <CModalBody>
                {/* having this function as its own callback is good for readability */}
                { wordDefinition.map((meaning, index) => {
                    let result = [];
                    result.push(<p key={"meaning"+index}><span className="text-capitalize">{meaning.partOfSpeech}</span>:</p>)
                    
                    if (meaning.definitions.length) {
                        let defArray = [];
                        { meaning.definitions.map((definitionObj, iDef) => {
                            defArray.push(<li key={"meaningList"+index+"def"+iDef}>{iDef} - {definitionObj.definition}</li>)
                        }) }
                        result.push(<ul key={"meaningList"+index}>{defArray}</ul>);
                        result.push(<hr key={"break"+index} />);
                    }
                    
                    return result;
                }) }
            </CModalBody>
        </CModal>
    </div>;
}

export default Definition;