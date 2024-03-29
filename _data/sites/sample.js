module.exports = {
	name: "Sample", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://next.dundle.com/au/category/paymentcards/",
		"https://next.dundle.dev/au/category/paymentcards/",
		"https://next.dundle.dev/au/amazon/",
		"https://next.dundle.com/au/amazon/",
	]
};