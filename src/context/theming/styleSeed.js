const styleSeed = [
    {
        path: 'src/components/layout/GlobalStyle',
        customizableComponents: [
            {
                name: 'GlobalContainer',
                'font-size': {
                    default: '1rem',
                },
                'font-family': {
                    default: 'inherit',
                    fun: 'Comic Sans MS, Comic Sans, cursive',
                    minimal: 'Times New Roman, Times, serif',
                },
                color: {
                    default: 'rgb(68, 68, 68) !default',
                    light: 'rgb(34, 34, 34) !default',
                    dark: 'rgb(237, 237, 237) !default',
                    fun: 'rgb(60, 206, 138) !default',
                },
                background: {
                    default: 'rgb(216, 215, 163)',
                    light: 'rgb(237, 237, 237)',
                    dark: 'rgb(34, 34, 34)',
                    fun: 'rgb(228, 120, 213)',
                    minimal: 'white',
                },
                padding: {
                    default: '0.5rem 0.25rem 0.25rem 0.5rem',
                    fun: '1rem 0.5rem 0.5rem 1rem',
                    minimal: 0,
                },
            },
        ],
    },

    {
        path: 'src/components/layout/Header',
        customizableComponents: [
            {
                name: 'HeaderContainer',
                'border-radius': {
                    default: '0px',
                },
                border: {
                    default: '2px solid transparent',
                },
                'font-size': {
                    default: '32px',
                },
                'background-color': {
                    default: 'transparent',
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
                },
                border: {
                    default: '2px solid transparent',
                },
                'font-size': {
                    default: '32px',
                },
                'background-color': {
                    default: 'transparent',
                },
            },
        ],
    },
];

const themeSeed = {
    currentTheme: 'custom',
    otherThemes: ['default', 'light', 'dark', 'fun', 'minimal'],
};

module.exports = {
    styleSeed,
    themeSeed,
};
