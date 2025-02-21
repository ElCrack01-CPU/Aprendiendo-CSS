import './components.css';

export const Hero = ( username ) => {
    return (
        <div className="banner">
            <div className="user-greeting">
                <h1>Welcome</h1>
                <h2 id="username">{username}</h2>
            </div>
            <hr />
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
        </div>
    );
};


