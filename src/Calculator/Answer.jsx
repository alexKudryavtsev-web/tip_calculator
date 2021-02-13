function Answer({ amount, percent, people }) {
    let value = Math.ceil(amount * percent / 100 / people)
    return <h1>
        {value === Infinity
            ? 'Неправильные данные'
            : value
        }
    </h1>
}

export default Answer