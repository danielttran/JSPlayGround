class FileMenuToolbar {
    constructor(id, options) {
        this.id = id;
        this.options = options;
    }

    render() {
        const menuContainer = document.createElement('div');
        menuContainer.id = this.id;
        menuContainer.classList.add('menu-container');

        this.options.forEach(option => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = option.label;

            if (option.submenu) {
                const submenuContainer = document.createElement('div');
                submenuContainer.classList.add('submenu-container');

                option.submenu.forEach(suboption => {
                    const submenuItem = document.createElement('div');
                    submenuItem.classList.add('submenu-item');
                    submenuItem.innerHTML = suboption.label;

                    if (suboption.action) {
                        submenuItem.addEventListener('click', suboption.action);
                    }

                    submenuContainer.appendChild(submenuItem);
                });

                menuItem.appendChild(submenuContainer);

                menuItem.addEventListener('click', event => {
                    submenuContainer.style.display = submenuContainer.style.display === 'flex' ? 'none' : 'flex';
                });
            }

            if (option.action) {
                menuItem.addEventListener('click', option.action);
            }

            menuContainer.appendChild(menuItem);
        });

        return menuContainer;
    }

    mount() {
        const targetDiv = document.getElementById(this.id);
        if (!targetDiv) {
            console.error(`Element with id "${this.id}" not found`);
            return;
        }
        targetDiv.appendChild(this.render());
    }
}
