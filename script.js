async function readword() {
    let word = document.getElementById("Word").value.trim();
    let output = document.getElementById("output");
    output.innerHTML = ""; 

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);     
    const data = await response.json();
    const result = data[0]; 
    console.log(result);


    let htmlContent = `
    <h2>${result.word}</h2>
    <p><strong>Phonetic:</strong> ${result.phonetic}</p>
    <h3>Definitions:</h3>
    ${result.meanings.map(meaning => `
        <p><strong>${meaning.partOfSpeech}:</strong></p>
        <ul>
            ${meaning.definitions.map(def => `
                <li>
                    ${def.definition}
                    <br><em>Example:</em> ${def.example || "No example available"}
                </li>
            `).join("")}
        </ul>
    `).join("")}
`;
  output.innerHTML = htmlContent;
            
        }