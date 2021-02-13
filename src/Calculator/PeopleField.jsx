function PeopleField({people, setPeople}) {
    return <input 
        min={1}
        type='number' 
        placeholder='people'
        onChange={node => setPeople(node.target.value)}
        defaultValue={people}
    />
}

export default PeopleField