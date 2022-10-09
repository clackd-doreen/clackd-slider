/* eslint-env amd, commonjs, node */
/* eslint-disable max-lines */

const path = require('path')


// https://stackoverflow.com/questions/73522267/how-to-combine-vue-3-and-typescript-cleanly-in-eslint
module.exports = {
	'env': {
		'amd': true,
		'browser': true,
		'commonjs': true,
		'es2022': true,
		'jest': true,
	    'node': true,
	},
	'extends': [
		'eslint:recommended',
		// load in abc order
		'plugin:jsx-a11y/recommended',
		'plugin:import/recommended',
		'plugin:import/errors',
		'plugin:import/typescript',
		'plugin:import/warnings',
		'plugin:promise/recommended',
		'plugin:react/recommended',
		'plugin:security/recommended',
		'prettier',
		// 'eslint-config-prettier',
	],
	'overrides': [
		// typescript
		{
			'extends': [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			'files': [
				'*.d.ts',
				'*.d.tsx',
				'*.js',
				'*.jsx',
				'*.ts',
				'*.tsx',
			],
			'rules': {
				'@typescript-eslint/no-non-null-assertion': 'off'
			},
			'parserOptions': {
				// 'project': './tsconfig.json',
				'project': path.join(__dirname, './tsconfig.json'),
			},
		},
		// styled components
		{
			'files': [
				'*.styles.js',
				'*.styles.jsx',
				'*.styles.ts',
				'*.styles.tsx',
			],
			'rules': {
				'@typescript-eslint/quotes': 'off',
				'multiline-ternary': 'off',
				'quotes': 'off',
				'sort-keys': 'off',
			}
		},
		// specific files
		{
			'files': [
				'src/utils/helpers/*.ts',
			],
			'rules': {
				'@typescript-eslint/no-extra-parens': 'off',
				'no-extra-parens': 'off',
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'impliedStrict': true,
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'project': path.join(__dirname, './tsconfig.json'),
		'sourceType': 'module',
		'tsconfigRootDir': './',
	},
	'plugins': [
		'@typescript-eslint',
		'prettier',
		// load in abc order
		'html',
		'import',
		'jsx-a11y',
		'prefer-arrow',
		'promise',
		'react',
		'typescript-sort-keys',
	],
	'root': true,
	'rules': {
		'@typescript-eslint/array-type': [
			'warn',
			{
				'default': 'array',
				'readonly': 'array',
			},
		],
		'@typescript-eslint/ban-tslint-comment': 'warn',
		'@typescript-eslint/class-literal-property-style': 'warn',
		'@typescript-eslint/comma-dangle': [
			'warn',
			{
				'arrays': 'always-multiline',
				'enums': 'ignore',
				'exports': 'always-multiline',
				'functions': 'never',
				'generics': 'ignore',
				'imports': 'always-multiline',
				'objects': 'always-multiline',
				'tuples': 'ignore',
			},
		],
		'@typescript-eslint/comma-spacing': [
			'error', {
				'after': true,
				'before': false,
			},
		],
		'@typescript-eslint/consistent-generic-constructors': [
			'error',
			'type-annotation',
		],
		'@typescript-eslint/consistent-indexed-object-style': [
			'error',
			'record',
		],
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				'assertionStyle': 'as',
				'objectLiteralTypeAssertions': 'allow',
			},
		],
		'@typescript-eslint/consistent-type-exports': [
			'error',
			{
				'fixMixedExportsWithInlineTypeSpecifier': true,
			},
		],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				'prefer': 'type-imports',
			},
		],
		'@typescript-eslint/default-param-last': 'warn',
		'@typescript-eslint/dot-notation': [
			'warn',
			{
				'allowKeywords': false
			}
		],
		'@typescript-eslint/explicit-member-accessibility': 'error',
		// '@typescript-eslint/explicit-module-boundary-types': 'error',
		'@typescript-eslint/func-call-spacing': [
			'warn',
			'never',
		],
		'@typescript-eslint/indent': [
			'warn',
			'tab',
			{
				'ignoredNodes': [
					'ConditionalExpression, MemberExpression, ObjectExpression'
				],
				// 'ArrayExpression': 'first',
				// 'CallExpression': {
				// 	'arguments': 'first'
				// },
				// 'ImportDeclaration': 1,
				// // 'MemberExpression': 1,
				// 'ObjectExpression': 'first',
				'SwitchCase': 1,
				'VariableDeclarator': {
					'const': 2,
					'let': 1,
					'var': 1,
				},
			},
		],
		'@typescript-eslint/keyword-spacing': [
			'error',
			{
				'after': true,
				'before': true,
			},
		],
		'@typescript-eslint/lines-between-class-members': [
			'error',
			'always',
			{
				'exceptAfterSingleLine': true,
			},
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				'multiline': {
					'delimiter': 'none',
					'requireLast': false,
				},
				'singleline': {
					'requireLast': false,
					// 'delimiter': 'none',
				},
			},
		],
		// '@typescript-eslint/member-ordering': [
		// 	'error'
		// ],
		'@typescript-eslint/method-signature-style': [
			'error',
			'property',
		],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				'format': ['PascalCase'],
				'leadingUnderscore': 'forbid',
				'selector': 'typeLike',
				'trailingUnderscore': 'forbid',
			},
		],
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-base-to-string': 'error',
		'@typescript-eslint/no-confusing-non-null-assertion': 'warn',
		// '@typescript-eslint/no-confusing-void-expression': [
		// 	'warn',
		// 	{
		// 		'ignoreArrowShorthand': true
		// 	}
		// ],
		'@typescript-eslint/no-duplicate-enum-values': 'error',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-extra-parens': [
			'warn',
			'all',
			{
				'enforceForArrowConditionals': false,
				'enforceForNewInMemberExpressions': false,
				'ignoreJSX': 'multi-line',
				'nestedBinaryExpressions': false,
				'returnAssign': false,
			},
		],
		'@typescript-eslint/no-extra-semi': 'error',
		'@typescript-eslint/no-for-in-array': 'warn',
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/no-loop-func': 'error',
		'@typescript-eslint/no-meaningless-void-operator': 'error',
		'@typescript-eslint/no-misused-promises': 'error',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		'@typescript-eslint/no-redundant-type-constituents': 'warn',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-unnecessary-condition': [
			'warn',
			{
				'allowConstantLoopConditions': true,
			},
		],
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'warn',
		'@typescript-eslint/no-unsafe-argument': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'warn',
		'@typescript-eslint/no-unsafe-call': 'warn',
		'@typescript-eslint/no-unsafe-return': 'error',
		'@typescript-eslint/no-unused-expressions': 'error',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				'argsIgnorePattern': '^_',
				'destructuredArrayIgnorePattern': '^_',
				'ignoreRestSiblings': true,
				'varsIgnorePattern': '^(React|style)',
			},
		],
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-useless-empty-export': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/non-nullable-type-assertion-style': 'warn',
		'@typescript-eslint/object-curly-spacing': [
			'warn',
			'always',
		],
		'@typescript-eslint/padding-line-between-statements': [
			'warn',
			{
				'blankLine': 'always',
				'next': 'return',
				'prev': '*',
			},
			{
				'blankLine': 'any',
				'next': 'return',
				'prev': 'expression',
			},
			{
				'blankLine': 'always',
				'next': '*',
				'prev': [
					'const',
					'let',
					'var',
				],
			},
			{
				'blankLine': 'any',
				'next': [
					'const',
					'let',
					'var',
				],
				'prev': [
					'const',
					'let',
					'var',
				],
			},
			{
				'blankLine': 'any',
				'next': 'expression',
				'prev': [
					'const',
					'let',
					'var',
				],
			},
		],
		'@typescript-eslint/prefer-as-const': 'warn',
		'@typescript-eslint/prefer-enum-initializers': 'warn',
		'@typescript-eslint/prefer-for-of': 'warn',
		'@typescript-eslint/prefer-function-type': 'warn',
		'@typescript-eslint/prefer-includes': 'warn',
		'@typescript-eslint/prefer-namespace-keyword': 'warn',
		'@typescript-eslint/prefer-optional-chain': 'warn',
		'@typescript-eslint/prefer-readonly': 'warn',
		// '@typescript-eslint/prefer-readonly-parameter-types': 'warn',
		'@typescript-eslint/prefer-reduce-type-parameter': 'warn',
		'@typescript-eslint/prefer-regexp-exec': 'warn',
		'@typescript-eslint/prefer-return-this-type': 'warn',
		'@typescript-eslint/prefer-string-starts-ends-with': 'warn',
		'@typescript-eslint/quotes': [
			'warn',
			'single',
			{
				'allowTemplateLiterals': true,
				'avoidEscape': true,
			},
		],
		'@typescript-eslint/semi': [
			'warn',
			'never',
		],
		'@typescript-eslint/sort-type-union-intersection-members': 'warn',
		'@typescript-eslint/space-before-blocks': 'warn',
		'@typescript-eslint/space-infix-ops': 'error',
		// '@typescript-eslint/strict-boolean-expressions': 'warn',
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'array-bracket-newline': [
			'warn',
			{
				'minItems': 4,
				'multiline': true,
			},
		],
		'array-bracket-spacing': [
			'warn',
			'never',
			{
				'arraysInArrays': true,
				'objectsInArrays': true,
			},
		],
		'array-callback-return': 'error',
		'array-element-newline': [
			'warn',
			'consistent',
		],
		'arrow-body-style': [
			'warn',
			'as-needed',
		],
		'arrow-parens': [
			'warn',
			'as-needed',
		],
		'arrow-spacing': 'warn',
		'block-scoped-var': 'error',
		'block-spacing': 'warn',
		'camelcase': 'error',
		// 'camelcase': [
		// 	'error',
		// 	{
		// 		'ignoreDestructuring': true,
		// 		'ignoreImports': true
		// 	}
		// ],
		// 'capitalized-comments': [
		// 	'error',
		// 	'never'
		// ],
		'comma-dangle': 'off',
		'comma-spacing': 'off',								// @typescript
		'comma-style': [
			'error',
			'last',
		],
		'complexity': [
			'error',
			20,
		],
		'computed-property-spacing': [
			'error',
			'never',
			{
				'enforceForClassMembers': true,
			},
		],
		'curly': [
			'warn',
			'multi-or-nest',
			'consistent',
		],
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': 'off',
		'dot-notation': 'off',								// @typescript
		'eol-last': 'warn',
		'eqeqeq': [
			'warn',
			'smart',
		],
		'func-call-spacing': 'off',							// @typescript
		'func-names': [
			'warn',
			'never',
		],
		'function-call-argument-newline': [
			'warn',
			'consistent',
		],
		'function-paren-newline': [
			'warn',
			'multiline-arguments',
		],
		// 'func-style': [
		// 	'error',
		// 	'declaration',
		// 	{
		// 		'allowArrowFunctions': true
		// 	}
		// ],
		'generator-star-spacing': [
			'error',
			{
				'after': true,
				'before': true,
			},
		],
		'id-length': [
			'warn',
			{
				'exceptions': [
					'_', 'a', 'b', 'c', 'd', 'i', 'j', 'k', 'x', 'y', 'z'
				],
				'min': 2,
			},
		],
		'implicit-arrow-linebreak': [
			'warn',
			'beside',
		],
		'import/exports-last': 'warn',
		'import/extensions': [
			'warn',
			'ignorePackages',
            {
                'ts': 'never',
				'tsx': 'never',
				'd.ts': 'never',
				'd.tsx': 'never',
            },
		],
		'import/first': 'error',
		'import/group-exports': 'error',
		'import/newline-after-import': [
			'error',
			{
				'count': 2,
				// 'considerComments': true,
			},
		],
		'import/no-amd': 'error',
		'import/no-anonymous-default-export': 'error',
		// 'import/no-commonjs': 'warn',
		'import/no-cycle': 'error',
		'import/no-default-export': 'warn',
		'import/no-deprecated': 'error',
		'import/no-duplicates': 'warn',
		'import/no-extraneous-dependencies': 'error',
		// 'import/no-import-module-exports': 'warn',
		'import/no-mutable-exports': 'error',
		'import/no-relative-packages': 'error',
		// 'import/no-relative-parent-imports': 'warn',
		'import/no-restricted-paths': 'error',
		'import/no-self-import': 'error',
		'import/no-unassigned-import': [
			'error',
			{
				'allow': [
					'**/*.css',
					'**/*.scss',
					'swiper',
					'swiper/*'
				],
			},
		],
		'import/no-unused-modules': 'error',
		'import/no-useless-path-segments': 'error',
		'import/no-webpack-loader-syntax': 'error',
		// 'import/order': [
		// 	'warn',
		// 	{
		// 		'alphabetize': {
		// 			'caseInsensitive': true,
		// 			'order': 'asc'
		// 		},
		// 		'groups': [
		// 			'index',
		// 			'builtin',
		// 			'external',
		// 			'parent',
		// 			'internal',
		// 			'type',
		// 			'sibling'
		// 		],
		// 		// 'newlines-between': 'always'
		// 	}
		// ],
		// 'import/unambiguous': 'warn',
		'indent': 'off',							// @typescript
		'jsx-quotes': [
			'error',
			'prefer-double',
		],
		'key-spacing': [
			'error',
			{
				'afterColon': true,
				// 'align': 'value',
			},
		],
		'keyword-spacing': 'off',							// @typescript
		// 'line-comment-position': [
		// 	'error',
		// 	{
		// 		'position': 'above'
		// 	}
		// ],
		'linebreak-style': [
			'error',
			'unix',
		],
		// 'lines-around-comment': [
		// 	'error',
		// 	{
		// 		'allowArrayStart': true,
		// 		'allowArrayEnd': true,
		// 		'allowObjectStart': true,
		// 		'allowObjectEnd': true,
		// 		'beforeBlockComment': true,
		// 		'afterBlockComment': true,
		// 		'beforeLineComment': true,
		// 		'afterLineComment': true
		// 	}
		// ],
		'lines-between-class-members': 'off',							// @typescript
		'max-len': [
			'warn',
			{
				'code': 100,
				'ignoreRegExpLiterals': true,
				'ignoreTemplateLiterals': true,
				'ignoreUrls': true,
			},
		],
		'max-lines': [
			'warn',
			{
				'max': 300,
				'skipBlankLines': true,
				'skipComments': true,
			},
		],
		'max-nested-callbacks': [
			'warn',
			{
				'max': 5,
			},
		],
		'max-params': [
			'warn',
			{
				'max': 5,
			},
		],
		'multiline-comment-style': [
			'warn',
			'separate-lines',
		],
		'multiline-ternary': 'warn',
		'newline-per-chained-call': 'warn',
		// 'newline-per-chained-call': [
		// 	'error',
		// 	{
		// 		'ignoreChainWithDepth': 3
		// 	}
		// ],
		'no-array-constructor': 'off',						// @typescript
		'no-cond-assign': 'error',
		'no-confusing-arrow': [
			'warn',
			{
				'allowParens': true,
			},
		],
		// 'no-duplicate-imports': 'error',
		'no-empty-function': 'off',
		'no-else-return': 'error',
		'no-eval': 'error',
		'no-extra-parens': 'off',							// @typescript
		'no-extra-semi': 'off',								// @typescript
		// 'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'off',								// @typescript
		'no-mixed-operators': 'error',
		'no-mixed-spaces-and-tabs': [
			'error',
			'smart-tabs',
		],
		'no-multi-assign': 'error',
		'no-multi-spaces': 'warn',
		'no-multiple-empty-lines': 'warn',
		// 'no-nested-ternary': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-wrappers': 'error',
		'no-param-reassign': 'error',
		'no-restricted-globals': [
			'error',
			'isFinite',
			'isNaN',
		],
		'no-restricted-syntax': [
			'error',
			'BinaryExpression[operator="in"][operator="of"]',
			'ForStatement',
			'FunctionExpression',
			'WithStatement',
		],
		'no-self-compare': 'error',
		'no-template-curly-in-string': 'error',
		'no-trailing-spaces': 'warn',
		'no-underscore-dangle': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unreachable-loop': 'error',
		'no-unused-expressions': 'off',					// @typescript
		'no-unused-vars': 'off',						// @typescript
		'no-use-before-define': 'off',					// @typescript
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'off',				// @typescript
		'no-useless-escape': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-newline': [
			'warn',
			{
				'ExportDeclaration': {
					'consistent': true,
					'minProperties': 2,
					'multiline': true,
				},
				'ImportDeclaration': {
					'consistent': true,
					'minProperties': 2,
					'multiline': true,
				},
				'ObjectExpression': {
					'consistent': true,
					'minProperties': 3,
					'multiline': true,
				},
				'ObjectPattern': {
					'consistent': true,
					'minProperties': 3,
					'multiline': true,
				},
			},
		],
		'object-curly-spacing': 'off',						// @typescript
		// 'object-property-newline': [
		// 	'error',
		// 	{
		// 		'allowAllPropertiesOnSameLine': true
		// 	}
		// ],
		'object-shorthand': [
			'warn',
			'always',
			{
				'avoidQuotes': false,
				'ignoreConstructors': true,
			},
		],
		// 'one-var': [
		// 	'error',
		// 	'consecutive'
		// ],
		'one-var-declaration-per-line': 'warn',
		'operator-assignment': 'warn',
		'operator-linebreak': [
			'warn',
			'before',
		],
		'padded-blocks': [
			'warn',
			'never',
		],
		'padding-line-between-statements': 'off',			// @typescript
		'prefer-arrow-callback': 'error',
		'prefer-arrow/prefer-arrow-functions': [
			'warn',
			{
				'classPropertiesAllowed': false,
				'disallowPrototype': true,
				'singleReturnOnly': false,
			},
		],
		'prefer-const': 'error',
		'prefer-destructuring': 'error',
		'prefer-exponentiation-operator': 'error',
		'prefer-object-has-own': 'error',
		// 'prefer-object-spread': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		// 'prettier/prettier': 'error',
		// 'quote-props': 'error',
		'quotes': 'off',									// @typescript
		'radix': [
			'error',
			'as-needed',
		],
		'react/destructuring-assignment': 'error',
		'react/display-name': 'off',
		'react/jsx-boolean-value': [
			'error',
			'never',
		],
		'react/jsx-closing-bracket-location': [
			'error',
			'tag-aligned'
		],
		'react/jsx-curly-brace-presence': [
			'error',
			'never',
		],
		'react/jsx-curly-spacing': [
			'error',
			'always',
		],
		// 'react/jsx-curly-spacing': [
		// 	'error',
		// 	{
		// 		'when': 'always',
		// 		'attributes': {
		// 			'children': true
		// 		},
		// 		'spacing': {
		// 			'objectLiterals': 'never'
		// 		}
		// 	}
		// ],
		'react/jsx-equals-spacing': [
			'error',
			'never',
		],
		'react/jsx-first-prop-new-line': [
			'error',
			'multiline',
		],
		'react/jsx-fragments': [
			'error',
			'syntax',
		],
		'react/jsx-max-props-per-line': [
			'error',
			{
				'maximum': {
					'multi': 1,
					'single': 2,
				},
			},
		],
		// 'react/jsx-newline': [
		// 	'error',
		// 	{
		// 		'prevent': true,
		// 		'allowMultilines': true
		// 	}
		// ],
		// 'react/jsx-no-bind': 'error',
		'react/jsx-no-leaked-render': 'warn',
		// 'react/jsx-no-useless-fragment': [
		// 	'error',
		// 	{
		// 		'allowExpressions': true
		// 	}
		// ],
		// 'react/jsx-one-expression-per-line': [
		// 	'error',
		// 	{
		// 		'allow': 'literal',
		// 		'allow': 'single-child',
		// 	}
		// ],
		'react/jsx-pascal-case': 'error',
		'react/jsx-sort-default-props': [
			'warn',
			{
				'ignoreCase': true,
			},
		],
		'react/jsx-sort-props': [
			'warn',
			{
				// 'callbacksLast': true,
				'ignoreCase': true,
				'shorthandFirst': true,
			},
		],
		'react/jsx-tag-spacing': [
			'error',
			{
				'beforeSelfClosing': 'always',
			},
		],
		'react/jsx-wrap-multilines': [
			'error',
			{
				'arrow': 'parens-new-line',
				'assignment': 'parens-new-line',
				'declaration': 'parens-new-line',
				'return': 'parens-new-line',
			},
		],
		'react/no-adjacent-inline-elements': 'error',
		// 'react/no-array-index-key': 'error',
		'react/no-invalid-html-attribute': 'error',
		'react/no-unsafe': 'error',
		'react/no-unstable-nested-components': [
			'error',
			{
				'allowAsProps': true
			},
		],
		'react/no-unused-class-component-methods': 'error',
		'react/no-unused-prop-types': 'error',
		'react/no-unused-state': 'error',
		'react/prefer-es6-class': 'error',
		'react/prefer-exact-props': 'error',
		// 'react/require-default-props': 'error',
		'react/sort-comp': 'error',
		'react/sort-prop-types': 'error',
		'semi': 'off',										// @typescript
		'semi-spacing': 'error',
		'semi-style': [
			'error',
			'last',
		],
		// 'sort-imports': [
		// 	'warn',
		// 	{
		// 		'allowSeparatedGroups': true,
		// 		'ignoreCase': true,
		// 		'memberSyntaxSortOrder': [
		// 			'all',
		// 			'single',
		// 			'multiple',
		// 			'none'
		// 		]
		// 	}
		// ],
		'sort-keys': [
			'warn',
			'asc',
			{
				'allowLineSeparatedGroups': true,
				'caseSensitive': false,
			},
		],
		// 'sort-vars': [
		// 	'warn',
		// 	{
		// 		'ignoreCase': true
		// 	}
		// ],
		'space-before-blocks': 'off',						// @typescript
		// 'space-before-function-paren': [
		// 	'error',
		// 	{
		// 		'anonymous': 'always',
		// 		'asyncArrow': 'always',
		// 		'named': 'never'
		// 	}
		// ],
		'space-in-parens': [
			'warn',
			'never',
			// {
			// 	'exceptions': [
			// 		'[]',
			// 		'{}',
			// 		'()'
			// 	]
			// }
		],
		'space-infix-ops': 'off',							// @typescript
		'space-unary-ops': 'error',
		'spaced-comment': 'error',
		'template-curly-spacing': 'error',
		'typescript-sort-keys/interface': [
			'warn',
			'asc',
			{
				'caseSensitive': false,
				'requiredFirst': false,
			},
		],
		'typescript-sort-keys/string-enum': [
			'warn',
			'asc',
			{
				'caseSensitive': false
			},
		],
		'wrap-iife': [
			'error',
			'outside',
		],
	},

	// how to fix import not recognizing custom pathing:
	// https://stackoverflow.com/questions/50066338/unable-to-resolve-path-to-module-react-import-no-unresolved
	'settings': {
		'html/indent': 'tab',
		'html/report-bad-indent': 'warn',
		'import/extensions': [
			'.js',
			'.jsx',
			'.ts',
			'.tsx',
			'.d.ts',
			'.d.tsx',
		],
        'import/parsers': {
           '@typescript-eslint/parser': [
				'.js',
				'.jsx',
				'.ts',
				'.tsx',
				'.d.ts',
				'.d.tsx',
		   ],
        },
		'import/resolver': {
			'alias': {
				'extensions': [
					'.js',
					'.jsx',
					'.ts',
					'.tsx',
					'.d.ts',
					'.d.tsx',
				],
				'map': [
					['@', './src'],
					['@assets', path.join(__dirname, './src/assets')],
					['@components', path.join(__dirname, './src/components')],
					['@contexts', path.join(__dirname, './src/contexts')],
					['@hooks', path.join(__dirname, './src/hooks')],
					['@modules', path.join(__dirname, './src/modules')],
					['@pages', path.join(__dirname, './src/pages')],
					['@styles', path.join(__dirname, './src/styles')],
					['@templates', path.join(__dirname, './src/templates')],
					['@types', path.join(__dirname, './src/types')],
					['@utils', path.join(__dirname, './src/utils')],
				],
				'root': './'
			},
			'node': {
				'extensions': [
					'.js',
					'.jsx',
					'.ts',
					'.tsx',
					'.d.ts',
					'.d.tsx',
				],
				// 'moduleDirectory': ['node_modules', 'src/'],
				'paths': ['src'],
			},
			'typescript': {
				'project': path.join(__dirname, './tsconfig.json'),
			},
			'vite': {
				'configPath': path.join(__dirname, './vite.config.ts'),
			},
		},
		'jsx-a11y': {
			'components': {
				'Button': 'button'
			},
		},
		'react': {
			'version': '17.0.2',
		},
	},
}
