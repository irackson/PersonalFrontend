import 'App.scss';
import GlobalStyle from 'components/layout/GlobalStyle';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

import ThemeProvider from 'components/providers/ThemeProvider';
import Home from 'pages/Home';
import Settings from 'pages/Settings';
import { Redirect, Route, Switch } from 'react-router-dom';

export default function App() {
    return (
        <ThemeProvider>
            <GlobalStyle>
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
                <Footer />
            </GlobalStyle>
        </ThemeProvider>
    );
}
