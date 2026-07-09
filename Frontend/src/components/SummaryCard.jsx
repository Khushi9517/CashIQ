function SummaryCard({

    title,

    value,

    icon,

    color

}) {

    return (

        <div className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-1 transition-all duration-300">

            <div
                className={`w-14 h-14 rounded-2xl ${color} text-white flex items-center justify-center text-2xl`}
            >

                {icon}

            </div>

            <h2 className="text-slate-500 mt-5">

                {title}

            </h2>

            <h1 className="text-3xl font-bold text-slate-800 mt-2">

                {value}

            </h1>

        </div>

    );

}

export default SummaryCard;