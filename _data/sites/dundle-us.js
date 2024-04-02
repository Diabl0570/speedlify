module.exports = {
	name: "Dundle US", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 3,
		frequency: 10, // (in minutes)
	},
	urls: [
		"https://next.dundle.com/us/category/paymentcards/",
		"https://next.dundle.dev/us/category/paymentcards/",
		"https://next.dundle.dev/us/amazon/",
		"https://next.dundle.com/us/amazon/",
	]
};