import 'App.scss';
import Header from 'components/layout/Header';
import {
    UPDATE_USER_STYLE,
    styleReducer,
    CHANGE_THEME,
    themeReducer,
} from 'context/theming/reducers';
import Home from 'pages/Home';
import Settings from 'pages/Settings';
import { createContext, useContext, useReducer } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

//! import data
const { styleSeed, themeSeed } = require('context/theming/styleSeed');

const StyleContext = createContext(styleSeed);
const ThemeContext = createContext(themeSeed);

export default function App() {
    //* style context & reducer stuff
    const [styleState, styleDispatch] = useReducer(
        styleReducer,
        useContext(StyleContext)
    );

    const updateStyleFromForm = (formData) => {
        // console.log('before', formData);
        setTimeout(() => {
            styleDispatch({ type: UPDATE_USER_STYLE, preferences: formData });
        }, 1);
        return;
    };

    //* theme context & reducer stuff
    const [themeState, themeDispatch] = useReducer(
        themeReducer,
        useContext(ThemeContext)
    );

    const updateThemeSelection = (selection) => {
        console.log('before', themeState.currentTheme);
        if (themeState.currentTheme !== selection) {
            setTimeout(() => {
                themeDispatch({ type: CHANGE_THEME, selection: selection });
            }, 1);
            return;
        }
        return; // TODO: necessary?
    };

    return (
        <StyleContext.Provider
            value={{
                styles: useContext(StyleContext), // TODO: swap to styleState after writing reducer
                updateStyleFromForm,
                themes: themeState,
                updateThemeSelection,
            }}
        >
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
        </StyleContext.Provider>
    );
}

export { StyleContext, ThemeContext };
