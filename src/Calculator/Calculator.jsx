import { useState } from 'react'
import Header from './Header'
import AmountField from './AmountField'
import TypeField from './TypeField'
import PeopleField from './PeopleField'
import Answer from './Answer'
import './style.css'

function Calculator() {
    const [amount, setAmount] = useState()
    const [percent, setPercent] = useState(5)
    const [people, setPeople] = useState()

    return <main className='Calculator'>
        <Header/>
        <AmountField amount={amount} setAmount={setAmount}/>
        <PeopleField people={people} setPeople={setPeople}/>
        <TypeField percent={percent} setPercent={setPercent}/>
        <Answer amount={amount} percent={percent} people={people}/>
    </main>
}

export default Calculator