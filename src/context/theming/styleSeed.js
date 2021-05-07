const styleSeed = [
    {
        path: 'src/components/layout/Header',
        customizableComponents: [
            {
                name: 'HeaderContainer',
                'border-radius': {
                    default: '0px',
                    themeA: '2rem',
                    themeB: '4rem',
                },
                border: {
                    default: '2px solid transparent',
                    themeA: '2px solid #a3a52a',
                    themeB: '2px solid #a52a2a',
                },
                'font-size': {
                    default: '32px',
                    themeA: '16px',
                    themeB: '48px',
                },
                'background-color': {
                    default: 'transparent',
                    themeA: 'lightgreen',
                    themeB: 'lightblue',
                },
            },
        ],
    },
    {
        path: 'src/components/layout/Footer',
        customizableComponents: [
            {
                name: 'FooterContainer',
                'border-radius': {
                    default: '0px',
                    themeA: '2rem',
                    themeB: '4rem',
                },
                border: {
                    default: '2px solid transparent',
                    themeA: '2px solid #a3a52a',
                    themeB: '2px solid #a52a2a',
                },
                'font-size': {
                    default: '32px',
                    themeA: '16px',
                    themeB: '48px',
                },
                'background-color': {
                    default: 'transparent',
                    themeA: 'lightgreen',
                    themeB: 'lightblue',
                },
            },
        ],
    },
];

const themeSeed = {
    currentTheme: 'default',
    otherThemes: ['userPreference', 'themeA', 'themeB'],
};

module.exports = {
    styleSeed,
    themeSeed,
};
