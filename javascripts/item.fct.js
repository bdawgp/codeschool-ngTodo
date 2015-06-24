(function()
{

	angular.module('todoApp')

		.factory('Item', [
			function()
			{
				///////////////////////////////
				// Collection of Items Stuff //
				///////////////////////////////

				var Item = function(itemIn){
					itemIn = itemIn || {};
					this.id = itemIn.id || new Date().valueOf();
					this.title = itemIn.title || '';
					this.complete = itemIn.complete || false;
				};

				var json = localStorage.getItem('todoApp_Item');
				Item.list = angular.fromJson(json) || {};

				Item.persist = function()
				{
					var json = angular.toJson(Item.list);
					localStorage.setItem('todoApp_Item', json);
				};

				///////////////////////
				// Single Item Stuff //
				///////////////////////

				var item = Item.prototype;

				/** @type {Number} */
				item.id = 0;
				/** @type {String} */
				item.title = '';
				/** @type {Boolean} */
				item.complete = false;
				/** @type {Boolean} */
				item.editing = false;

				// Create

				item.save = function(skipEditing)
				{
					if(!skipEditing)
					{
						this.editing = false;
					}
					Item.list[this.id] = this;
					Item.persist();
				};

				// Update

				var currentItem = null;

				item.edit = function()
				{
					if(currentItem instanceof Item)
					{
						currentItem.save();
					}

					currentItem = this;
					this.editing = true;
					Item.persist();
				};

				// Delete

				item.remove = function()
				{
					delete Item.list[this.id];
					Item.persist();
				};

				/////////////////////////
				// Make Item available //
				/////////////////////////

				angular.forEach(Item.list, function(item, id)
				{
					new Item(item).save(true);
				});

				return Item;
			}
		]);

}).call(this);