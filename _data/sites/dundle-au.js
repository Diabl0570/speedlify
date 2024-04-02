module.exports = {
	name: "Dundle AU", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 3,
		frequency: 10, // (in minutes)
	},
	urls: [
		"https://next.dundle.com/au/category/paymentcards/",
		"https://next.dundle.dev/au/category/paymentcards/",
		"https://next.dundle.dev/au/amazon/",
		"https://next.dundle.com/au/amazon/",
	]
};