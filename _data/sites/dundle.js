module.exports = {
	name: "Sample", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 3,
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://next.dundle.com/au/category/paymentcards/",
		"https://next.dundle.dev/au/category/paymentcards/",
		"https://next.dundle.dev/au/amazon/",
		"https://next.dundle.com/au/amazon/",
		"https://next.dundle.dev/au/",
		"https://next.dundle.com/au/",

		"https://next.dundle.com/us/category/paymentcards/",
		"https://next.dundle.dev/us/category/paymentcards/",
		"https://next.dundle.dev/us/amazon/",
		"https://next.dundle.com/us/amazon/",
		"https://next.dundle.dev/us/",
		"https://next.dundle.com/us/",
	]
};