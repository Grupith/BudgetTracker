
export const Header = ({ setBudgetAmount, setSubmit, setItems}) => {
    return (
        <div>
            <button className='resetButton' onClick={() => {
                setSubmit(false);
                setBudgetAmount(0);
                setItems([]);
                localStorage.clear();
            }}>Reset</button>
            <h2 className='title'>Budget Tracker</h2>
        </div>
    )
}
