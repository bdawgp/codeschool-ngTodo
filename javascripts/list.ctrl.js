(function()
{

	angular.module('todoApp')

		.controller('ListCtrl', [
			'Item',
			function(Item)
			{
				this.listItems = Item.list;
			}
		]);

}).call(this);