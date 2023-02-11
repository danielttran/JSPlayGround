(function(){
	const fileMenu = new FileMenuToolbar('file-menu', [
		{
		  label: 'File',
		  submenu: [
			{
			  label: 'New',
			  action: function() {
				console.log('Create a new file');
			  }
			},
			{
			  label: 'Open',
			  action: function() {
				console.log('Open a file');
			  }
			},
			{
			  label: 'Save',
			  action: function() {
				console.log('Save a file');
			  }
			}
		  ]
		},
		{
		  label: 'Edit',
		  submenu: [
			{
			  label: 'Cut',
			  action: function() {
				console.log('Cut');
			  }
			},
			{
			  label: 'Copy',
			  action: function() {
				console.log('Copy');
			  }
			},
			{
			  label: 'Paste',
			  action: function() {
				console.log('Paste');
			  }
			}
		  ]
		}
	  ]);
	  
	  fileMenu.mount();
	  



})();