
const CardUbicacion = ({ubicacion}) => {

    const { id, name, type, dimension } = ubicacion

    return (
        <div 
            className="p-4 bg-slate-200 shadow-lg shadow-green-500 rounded-lg"
        >
            <h2 className="text-center text-xl font-extrabold text-emerald-900 mb-2">{name}</h2>
            <div className="mt-4">
                <h3 className="text-green-900 font-bold text-center text-lg">Information:</h3>
                <p>- Type: <span className="text-green-900">{type}</span></p>
                <p>- Dimension: <span className="text-green-900">{dimension}</span></p>
            </div>
        </div>
    )
}

export default CardUbicacion