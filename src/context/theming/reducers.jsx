//! theme reducer
export const CHANGE_THEME = 'CHANGE_THEME';

const changeTheme = (selection, data) => {
    const updatedData = { ...data };

    const updatedCurrentTheme = updatedData.otherThemes.find(
        (theme) => theme === selection
    );

    updatedData.otherThemes = updatedData.otherThemes.filter(
        (theme) => theme !== selection
    );

    updatedData.otherThemes.unshift(updatedData.currentTheme);
    updatedData.currentTheme = updatedCurrentTheme;

    return updatedData;
};

export const themeReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return changeTheme(action.selection, state);
        default:
            return state;
    }
};

//! style reducer
export const UPDATE_USER_STYLE = 'UPDATE_USER_STYLE';

const updateStyleStateFromCustomForm = (formData, styles) => {
    const updatedStyle = [...styles];
    updatedStyle.map((file) => {
        file.customizableComponents.map((comp) => {
            Object.keys(comp)
                .filter((e) => e !== 'name')
                .map((property) => {
                    const newProp = formData[file.path][comp.name][
                        property
                    ].includes('__proto__')
                        ? 'nice try'
                        : formData[file.path][comp.name][property];
                    comp[property].custom = newProp;
                    return property;
                });

            return comp;
        });

        return file;
    });

    // updatedStyle[0].customizableComponents[0].color.custom =
    //     formData['src/components/weather/WeatherData'].BoldSpan.color;
    return updatedStyle;
};

export const styleReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USER_STYLE:
            return updateStyleStateFromCustomForm(action.preferences, state);
        default:
            return state;
    }
};
