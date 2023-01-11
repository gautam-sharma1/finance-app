import { useEffect, useState } from "react"
import ExpenseForm from "../../components/expenseform"
import Layout from "../../components/layout"
import LineGraph from "../../components/linegraph";
import Grid from '@mui/material/Grid';
import structuredClone from '@ungap/structured-clone';
import { createClient } from "@supabase/supabase-js";
import { CURRENT_YEAR } from "../../global";

export default function Portal() {
    const [data, setData] = useState([{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page B', uv: 600, pv: 2400, amt: 3600 }, { name: 'Page C', uv: 200, pv: 2400, amt: 4800 }]);

    const [expenseName, setExpenseName] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("Personal");
    const [month, setMonth] = useState("Jan");
    const [year, setYear] = useState(CURRENT_YEAR);

    useEffect(() => {
        const obj = {
            [year]: {
                [month]: {
                    [category]: {
                        [expenseName]: amount
                    }
                }
            }
        };
        console.log(obj);
        const d = { name: 'Page A', uv: structuredClone(amount), pv: 2400, amt: 2400 };
        const dummyData = structuredClone(data);
        dummyData.push(d);
        setData(dummyData);
    }, [amount])
    return (
        <Layout>
            <Grid container spacing={1}>
                <Grid item xs={6} md={6}>
                    <ExpenseForm setExpenseName={setExpenseName} setAmount={setAmount} setCategory={setCategory} setMonth=
                        {setMonth} setYear={setYear} />
                </Grid>
                <Grid item xs={6} md={4}>
                    <LineGraph data={data} />
                </Grid>
            </Grid>

        </Layout>
    )


}

export async function getServerSideProps(context) {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const jsonObject = {
        2022: {
            "Jan": {
                1: {
                    "Rent": 1705,
                    "Netflix": 15
                },
                2: {
                    "Gas": 30
                }
            }
        }
    }

    const { data, error } = await supabase
        .from('expenses')
        .upsert({ userid: 1, data: jsonObject }).select();

    return {
        props: {
            user: data,
        },
    }
}

