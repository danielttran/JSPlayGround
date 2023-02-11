class Tree {
    constructor(data) {
        this.data = data;
    }

    createNode(nodeData) {
        const node = document.createElement("li");
        const toggle = document.createElement("span");
        toggle.classList.add("toggle");
        toggle.textContent = nodeData.name;
        toggle.setAttribute("data-id", nodeData.id);
        toggle.addEventListener("click", (event) => {
            if (event.target.classList.contains("toggle")) {
                event.target.parentNode.classList.toggle("collapsed");
            } else {
                if (typeof this.onNodeClick === "function") {
                    this.onNodeClick(toggle.getAttribute("data-id"));
                }
            }
            nodeData.onClick ? nodeData.onClick(nodeData.id) : this.defaultOnClick(nodeData.id);

        });
        node.appendChild(toggle);

        if (nodeData.children) {
            const childrenList = document.createElement("ul");
            for (const child of nodeData.children) {
                childrenList.appendChild(this.createNode(child));
            }
            node.appendChild(childrenList);
        }

        return node;
    }

    render() {
        const tree = document.getElementById("tree");
        tree.appendChild(this.createNode(this.data));
    }
}
