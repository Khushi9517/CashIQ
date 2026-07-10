import {

    ResponsiveContainer,

    PieChart,

    Pie,

    Cell,

    Tooltip,

    Legend

} from "recharts";

const COLORS = [

    "#4F46E5",

    "#14B8A6",

    "#F59E0B",

    "#EF4444",

    "#8B5CF6",

    "#10B981"

];

function ExpensePieChart({ data }) {

    return (

        <div className="bg-white rounded-3xl shadow-lg p-6 h-[420px]">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">

                Category Breakdown

            </h2>

            <ResponsiveContainer
                width="100%"
                height="85%"
            >

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="total"

                        nameKey="category"

                        outerRadius={120}

                    >

                        {

                            data.map((entry,index)=>(

                                <Cell

                                    key={index}

                                    fill={

                                        COLORS[index%COLORS.length]

                                    }

                                />

                            ))

                        }

                    </Pie>

                    <Tooltip/>

                    <Legend/>

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default ExpensePieChart;