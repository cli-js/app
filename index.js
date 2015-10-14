var flatten = require('ramda/src/flatten')
var asArray = require('as-array')

module.exports = function app () {

	// TODO: Need to flatten and merge the trees
	//       for use with things like handler()

	var tree = flatten(asArray(arguments))

	return function (globalOptions) {

		return tree

		// TODO: handle passing in global options

		// return {
		// 	type: 'program',
		// 	value: tree,
		// 	options: globalOptions
		// }
	}
}
