import 'App.scss';
import Header from 'components/layout/Header';
import ThemeProvider from 'components/providers/ThemeProvider';
import Home from 'pages/Home';
import Settings from 'pages/Settings';
import { Redirect, Route, Switch } from 'react-router-dom';

export default function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Header />
                <main>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => <Home {...props} />}
                        ></Route>
                        <Route
                            path="/settings"
                            render={(props) => <Settings {...props} />}
                        ></Route>
                        <Route render={() => <Redirect to="/" />} />
                    </Switch>
                </main>
            </div>
        </ThemeProvider>
    );
}
