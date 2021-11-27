/* istanbul ignore file */
module.exports = {
    // Other Eslint rules are already placed in react-scripts package
    'extends': ['react-app', 'react-app/jest'],
    'plugins': ['@emotion'],
    'rules': {
        '@emotion/jsx-import': 'error',
        '@emotion/no-vanilla': 'error',
        '@emotion/import-from-emotion': 'error',
        '@emotion/styled-import': 'error',

        // react-scripts eslint import
        'import/order': [
            'error',
            {
                'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
                'newlines-between': 'always-and-inside-groups',
            },
        ],
        'quotes': [
            'error',
            'single',
            {
                'avoidEscape': true,
            },
        ],
        'jsx-quotes': [
            'error',
            'prefer-single',
        ],

        'max-len': [
            'error',
            {
                'code': 120,
            },
        ],

        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'semi': [
            'error',
            'always',
        ],

        'prefer-const': 'error',
        'arrow-spacing': ['error', { 'before': true, 'after': true }],
    },
};