import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [homeData, setHomeData] = useState(null);
    // const url =
    //     process.env.NODE_ENV === 'production'
    //         ? 'https://api.ianrackson.com/'
    //         : 'http://localhost:3000/';
    const url = 'https://api.ianrackson.com/';
    const getHomeData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setHomeData(data);
    };

    useEffect(() => {
        getHomeData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!homeData) {
        return (
            <div className="App">
                <h1>loading</h1>
            </div>
        );
    } else {
        return <div className="App">{JSON.stringify(homeData.blog)}</div>;
    }
}

export default App;
