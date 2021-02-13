import './style.css'

function AmountField({ amount, setAmount }) {
    function onChange(node) {
        let value = node.target.value
        setAmount(value)
    }

    return <input
        className='Input'
        min={1}
        type='number'
        defaultValue={amount}
        onChange={onChange}
        placeholder='amount'
    />
}

export default AmountField