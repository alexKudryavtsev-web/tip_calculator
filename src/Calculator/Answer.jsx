import './style.css'

function Answer({ amount, percent, people }) {
    let value = Math.ceil(amount * percent / 100 / people)
    return <h1 className='Answer'>
        {value === Infinity || isNaN(value)
            ? ''
            : value + '$'
        }
    </h1>
}

export default Answer