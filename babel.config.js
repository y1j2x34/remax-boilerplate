module.exports = {
    presets: [
        [
            'remax',
            {
                decorators: {
                    legacy: true
                }
            }
        ]
    ],
    plugins: [
        [
            'import',
            {
                libraryDirectory: 'es',
                libraryName: '@kqinfo/ui'
            },
            '@kqinfo/ui'
        ]
    ]
}