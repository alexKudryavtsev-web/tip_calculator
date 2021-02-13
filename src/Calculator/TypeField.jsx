function TypeField({ percent, setPercent }) {
    return <select
        defaultValue={percent}
        onChange={node => setPercent(node.target.value)}
    >
        <option value={5}>
            Poorly Served (5%)
        </option>
        <option value={10}>
            Satisfactory Served (10%)
        </option>
        <option value={20}>
            Average Served (20%)
        </option>
        <option value={30}>
            Nice Served (30%)
        </option>
    </select>
}

export default TypeField