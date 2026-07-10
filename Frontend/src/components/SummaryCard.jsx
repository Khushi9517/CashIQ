function SummaryCard({

    title,

    value,

    icon,

    color

}) {

    return (

        <div className="bg-white rounded-3xl shadow-lg p-7 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

            <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg`}>

                {icon}

            </div>

            <h2 className="mt-6 text-slate-500 font-medium">

                {title}

            </h2>

            <h1 className="text-4xl font-bold text-slate-800 mt-2">

                {value}

            </h1>

            <p className="text-emerald-500 mt-3 text-sm">

                ↑ Updated just now

            </p>

        </div>

    );

}

export default SummaryCard;