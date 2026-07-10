import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

function ExpenseBarChart({ data }) {

    return (

        <div className="bg-white rounded-3xl shadow-lg p-6 h-[420px]">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">

                Monthly Spending

            </h2>

            <ResponsiveContainer
                width="100%"
                height="85%"
            >

                <BarChart data={data}>

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="month"
                    />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="total"
                        fill="#4F46E5"
                        radius={[8,8,0,0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default ExpenseBarChart;