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
                    default: 'rgb(68, 68, 68)',
                    light: 'rgb(34, 34, 34)',
                    dark: 'rgb(237, 237, 237)',
                    fun: 'rgb(60, 206, 138)',
                },
                background: {
                    default: 'rgb(216, 215, 163)',
                    light: 'rgb(237, 237, 237)',
                    dark: 'rgb(34, 34, 34)',
                    fun: 'rgb(228, 120, 213)',
                    minimal: 'white',
                },
                padding: {
                    // default: '0.5rem 0.25rem 0.25rem 0.5rem',
                    default: '0',
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
        path: 'src/components/layout/Nav',
        customizableComponents: [
            {
                name: 'ActiveNavButton',
                background: {
                    default: 'rgb(175, 173, 38)',
                    light: 'rgb(237, 237, 237)',
                    dark: 'rgb(34, 34, 34)',
                    fun: 'rgb(228, 120, 213)',
                    minimal: 'white',
                },
                color: {
                    default: 'rgba(68, 68, 68, 0.74)',
                    light: 'rgba(34, 34, 34, 0.904)',
                    dark: 'rgb(237, 237, 237)',
                    fun: 'rgb(60, 206, 79)',
                },
                outline: {
                    default: '1px solid rgb(161, 105, 105)',
                    light: '1px solid rgb(119, 50, 50)',
                    dark: '1px solid rgb(243, 226, 226)',
                    fun: '2px dashed rgb(58, 114, 88)',
                },
            },
            {
                name: 'InactiveNavButton',
                background: {
                    default: 'rgb(116, 115, 163)',
                    light: 'rgb(137, 137, 137)',
                    dark: 'rgb(0, 34, 34)',
                    fun: 'rgb(128, 20, 113)',
                    minimal: 'lemonchiffon',
                },
                color: {
                    default: 'rgba(168, 168, 168, 0.74)',
                    light: 'rgba(211, 205, 205, 0.904)',
                    dark: 'rgb(137, 137, 137)',
                    fun: 'rgb(160, 106, 179)',
                },
            },
            {
                name: 'PageNav',
                background: {
                    default: 'linear-gradient(to right,#99ff71, #526181)',
                    light: 'linear-gradient(to right,#2c276b, rgb(160, 106, 179))',
                    dark: 'linear-gradient(to right,#47643c, #526181)',
                    fun: 'linear-gradient(to right,#f71070, rgb(160, 106, 179))',
                    minimal:
                        'linear-gradient(to right,#384e2f, rgb(243, 226, 226))',
                },
                opacity: {
                    default: '0.7',
                    light: '0.2',
                    dark: '1',
                    fun: '0.9',
                },
            },
        ],
    },
    {
        path: 'src/components/layout/ThemeApplicator',
        customizableComponents: [
            {
                name: 'ActiveNavButton',
                background: {
                    default: 'rgb(216, 215, 163)',
                    light: 'rgb(237, 237, 237)',
                    dark: 'rgb(34, 34, 34)',
                    fun: 'rgb(228, 120, 213)',
                    minimal: 'white',
                },
                color: {
                    default: 'rgba(68, 68, 68, 0.74)',
                    light: 'rgba(34, 34, 34, 0.904)',
                    dark: 'rgb(237, 237, 237)',
                    fun: 'rgb(60, 206, 79)',
                },
                outline: {
                    default: '1px solid rgb(161, 105, 105)',
                    light: '1px solid rgb(119, 50, 50)',
                    dark: '1px solid rgb(243, 226, 226)',
                    fun: '2px dashed rgb(58, 114, 88)',
                },
            },
            {
                name: 'InactiveNavButton',
                background: {
                    default: 'rgb(116, 115, 163)',
                    light: 'rgb(137, 137, 137)',
                    dark: 'rgb(0, 34, 34)',
                    fun: 'rgb(128, 20, 113)',
                    minimal: 'lemonchiffon',
                },
                color: {
                    default: 'rgba(168, 168, 168, 0.74)',
                    light: 'rgba(211, 205, 205, 0.904)',
                    dark: 'rgb(137, 137, 137)',
                    fun: 'rgb(160, 106, 179)',
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
    {
        path: 'src/components/Markdown',
        customizableComponents: [
            {
                name: 'MarkdownHeading',
                color: {
                    default: 'inherit',
                    fun: 'orange',
                },
            },
            {
                name: 'MarkdownCode',
                'line-height': {
                    default: 'inherit',
                    fun: '20px',
                },
                'white-space': {
                    default: 'inherit',
                    fun: 'normal',
                },
                color: {
                    default: 'inherit',
                    fun: 'yellow',
                },
                background: {
                    default: 'inherit',
                    fun: 'gray',
                },
            },
        ],
    },
];

const themeSeed = {
    currentTheme: 'default',
    otherThemes: ['custom', 'light', 'dark', 'fun', 'minimal'],
};

module.exports = {
    styleSeed,
    themeSeed,
};
