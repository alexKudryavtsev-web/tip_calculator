import './style.css'

function PeopleField({people, setPeople}) {
    return <input
        className='Input' 
        min={1}
        type='number' 
        placeholder='people'
        onChange={node => setPeople(node.target.value)}
        defaultValue={people}
    />
}

export default PeopleField