(function()
{

	angular.module('todoApp')

		.controller('FormCtrl', [
			'Item',
			function(Item)
			{
				this.formItemData = new Item();

				this.formAddItem = function()
				{
					this.formItemData.save();
					this.formItemData = new Item();
				};
			}
		]);

}).call(this);