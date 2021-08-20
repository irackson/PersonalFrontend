import { createContext, useContext, useReducer } from 'react';
import {
    UPDATE_USER_STYLE,
    styleReducer,
    CHANGE_THEME,
    themeReducer,
} from 'context/theming/reducers';

//! import data
const { styleSeed, themeSeed } = require('context/theming/styleSeed');

const StyleContext = createContext(styleSeed);
const ThemeContext = createContext(themeSeed);

const ThemeProvider = (props) => {
    //* style context & reducer stuff
    // const [styleState, styleDispatch] = useReducer(
    //     styleReducer,
    //     useContext(StyleContext)
    // );
    const styleDispatch = useReducer(styleReducer, useContext(StyleContext))[1]; //?

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
            {props.children}
        </StyleContext.Provider>
    );
};

export default ThemeProvider;

export { StyleContext, ThemeContext };
