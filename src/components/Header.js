
const Header = ({ setBudgetAmount, setSubmit, setItems}) => {
    return (
        <div>
            <button onClick={() => {
                setSubmit(false);
                setBudgetAmount(0);
                setItems([]);
                localStorage.clear();
            }}>Reset</button>
            <h2 className='title'>Budget Tracker</h2>
        </div>
    )
}

export default Header;
