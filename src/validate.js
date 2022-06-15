function Validate({setFirstClue, setDispaly}) {
    function validate() {
        const clueText = document.querySelector('.firstClue')
        console.log(clueText.value)
        if (clueText.value.toUpperCase() === "2137/papiezpolak".toUpperCase()) {
            setFirstClue(true)
            setDispaly(true)
        }
    }
    return (
        <>
            <div className="container">
                <h1>Słuchaj...</h1>
                <p>Twa podróż rozpoczyna sie w miejscu gdzie zule czytuja opowieść o dwóch miastach ... Odnajdz koperte i poznaj swoje przeznaczenie</p>
                <input type="text" className="firstClue" />
                <button onClick={validate} className="check">Check!</button>
            </div>
        </>

    )
    

}

export default Validate