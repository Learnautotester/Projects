import '../../styles/TopExpenses.css'
import TopExpensesChart from './TopExpensesChart';

export default function TopExpenses() {
    return (
        <div className='TopExpenses'>
            <h2>Top Expenses</h2>
            <div className='TopExpenses-inner'>
                <TopExpensesChart />
            </div>
        </div>
    )
}



