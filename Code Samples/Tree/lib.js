
(function () {
	console.log("self called")
	const treeData = {
		name: "Parent 1",
		id: 1,
		onClick: (id) => { console.log(`click ${id}`) },
		children: [
			{
				name: "Child 1",
				id: 2,
				onClick: (id) => { console.log(`click ${id}`) },
				children: [
					{ name: "Grandchild 1", id: 3, onClick: (id) => { console.log(`click ${id}`) } },
					{ name: "Grandchild 2", id: 4, onClick: (id) => { console.log(`click ${id}`) } }
				]
			},
			{
				name: "Child 2",
				id: 5,
				onClick: (id) => { console.log(`click ${id}`) },
				children: [
					{ name: "Grandchild 3", id: 6, onClick: (id) => { console.log(`click ${id}`) } },
					{ name: "Grandchild 4", id: 7, onClick: (id) => { console.log(`click ${id}`) } }
				]
			}
		]
	};

	tree = new Tree(treeData);
	tree.render();
})();
