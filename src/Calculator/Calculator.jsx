import { useState } from 'react'
import Header from './Header'
import AmountField from './AmountField'
import TypeField from './TypeField'
import PeopleField from './PeopleField'
import Answer from './Answer'

function Calculator() {
    const [amount, setAmount] = useState(100)
    const [percent, setPercent] = useState(5)
    const [people, setPeople] = useState(1)

    return <main>
        <Header/>
        <AmountField amount={amount} setAmount={setAmount}/>
        <TypeField percent={percent} setPercent={setPercent}/>
        <PeopleField people={people} setPeople={setPeople}/>
        <Answer amount={amount} percent={percent} people={people}/>
    </main>
}

export default Calculator