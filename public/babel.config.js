module.exports = {
    presets: ['@babel/preset-react', '@babel/preset-env'],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-arrow-functions',
        'jsx-control-statements',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
    ]
}