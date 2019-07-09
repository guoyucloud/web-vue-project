module.exports = {
	extends: [
		'@commitlint/config-conventional'
	],
	rules: {
		'type-enum': [2, 'always', [
			'build',
			'ci',
			'chore',
			'docs',
			'feat',
			'fix',
			'perf',
			'refactor',
			'revert',
			'style',
			'test'
		]],
		'type-case': [2, 'always', 'lowerCase'],
		'type-empty': [2, 'never'],
		'scope-empty': [0],
		'scope-case': [0],
		'subject-case': [0],
		'subject-empty': [2, 'never'],
		'header-max-length': [2, 'always', 70],
		'header-min-length': [2, 'always', 10]
	}
}
