import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';

export default function LineGraph({ data }) {
    return (
        <div>
            <br></br>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis dataKey="uv" />
                <Label></Label>
                <Tooltip />
            </LineChart>
        </div>)

}