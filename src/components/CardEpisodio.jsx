
const CardEpisodios = ({episodio}) => {

    const { id, name, air_date, episode } = episodio


    return (
        <div 
            className="p-4 bg-slate-200 shadow-lg shadow-green-500 rounded-lg"
        >
            <h2 className="text-center text-xl font-extrabold text-emerald-900 mb-2">{`${id} - ${name}`}</h2>
            <div className="mt-4">
                <h3 className="text-green-900 font-bold text-center text-lg">Information:</h3>
                <p>- Air Date: <span className="text-green-900">{air_date}</span></p>
                <p>- Episode: <span className="text-green-900">{episode}</span></p>
            </div>

        </div>
    )
}

export default CardEpisodios