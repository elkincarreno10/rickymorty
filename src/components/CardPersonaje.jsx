
const CardPersonaje = ({personaje, modal, setPersonaje}) => {

    const { id, name, status, species, gender, origin, location, image } = personaje

    const modalPersonaje = personaje => {
        modal()
        setPersonaje(personaje)
    }

    return (
        <div 
            className="p-4 bg-slate-200 shadow-lg shadow-green-500 rounded-lg hover:bg-slate-300 cursor-pointer"
            onClick={() => modalPersonaje({id, name, status, species, gender, origin, location, image})}
        >
            <h2 className="text-center text-xl font-extrabold text-emerald-900 mb-2">{name}</h2>
            <img className="w-60" src={image} alt={`Personaje ${name}`} />
            <div className="mt-4">
                <h3 className="text-green-900 font-bold text-center text-lg">Information:</h3>
                <p>- Status: <span className="text-green-900">{status}</span></p>
                <p>- Species: <span className="text-green-900">{species}</span></p>
                <p>- Gender: <span className="text-green-900">{gender}</span></p>
            </div>

        </div>
    )
}

export default CardPersonaje
