var flatten = require('ramda/src/flatten')
var asArray = require('as-array')

// NOTE: this doesn't do much right now, but it will soon

module.exports = function app () {

	// TODO: Need to flatten and merge the trees
	//       for use with things like handler() (handlers with no alias)

	var tree = flatten(asArray(arguments))

	return function (globalOptions) {

		return tree

		// TODO: handle passing in global options
		//       Use the type: "app" and  value: tree to help
		//       merge composable apps and set restirctions

		// return {
		// 	type: 'app',
		// 	value: tree,
		// 	options: globalOptions
		// }
	}
}
