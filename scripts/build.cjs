// Preserve the existing React/Webpack output on supported Node.js releases.
const { spawnSync } = require('node:child_process');
const result = spawnSync(process.execPath, [require.resolve('react-scripts/scripts/build')], {
    stdio: 'inherit',
    env: {
        ...process.env,
        CI: 'false',
        NODE_OPTIONS: [process.env.NODE_OPTIONS, '--openssl-legacy-provider'].filter(Boolean).join(' '),
        REACT_APP_API_URL: process.env.REACT_APP_API_URL || 'https://api.ianrackson.com',
        REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL || '',
        GENERATE_SOURCEMAP: 'false',
    },
});
process.exit(result.status ?? 1);
