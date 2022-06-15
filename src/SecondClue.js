function SecondClue({setDispaly, setSecondClue}) {
        function validate2() {
        const clueText = document.querySelector('.firstClue')
            if (clueText.value.toUpperCase() === "kukluxklan".toUpperCase()) {
                setDispaly(false)
                setSecondClue(true)
        }
    }
    return (
        <div className="container">
            <h1>Gdzie dalej...?</h1>
            <p>Tam gdzie pracownikow nowych co nie miara, podłogi na nockach zle myja... Malo który schylic sie zechce i zobaczyc czy w meskiej toalecie pod umywalka cos nie jest przyklejone...</p>
            <input type="text" className="firstClue" />
            <button onClick={validate2} className="check">Check!</button>
        </div>
    )
}

export default SecondClue