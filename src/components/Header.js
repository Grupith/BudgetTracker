
const Header = ({ budgetAmount }) => {
    return (
        <div>
            <h2 className='title'>Budget Tracker</h2>
            <h3 className='budgetAmount'>${budgetAmount}</h3>
        </div>
    )
}

export default Header;
