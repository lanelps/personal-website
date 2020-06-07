export default {
	name: "nav",
	title: "Nav Bar",
	type: "document",
	fields: [
		{
			name: "itemName",
			title: "Nav Item Name",
			type: "string",
			validation: (Rule) => Rule.max(20).warning("You need a shorter name")
		},
		{
			name: "itemtemSlug",
			title: "Nav Item Link",
			type: "slug",
			options: {
				source: "itemName",
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, "-").slice(0, 50)
			}
		}
	]
}
