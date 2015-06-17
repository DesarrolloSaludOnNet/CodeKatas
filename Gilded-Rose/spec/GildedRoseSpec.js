describe("Gilded Rose item updater", function() {

	describe("when updates a regular item", function(){

		var regularItemName;

		beforeEach(function(){
			regularItemName = "Elixir of the Mongoose";
		});

	  	it("decreases quality and sell in by one", function() {
		  	var sell_in = 5;
		  	var quality = 7;
		  	items = [new Item(regularItemName, sell_in, quality)];

		  	update_quality();

		  	expect(items[0].quality).toBe(6);
		  	expect(items[0].sell_in).toBe(4);
		  });	

	  	it("never decreases quality below zero", function(){
		  	var sell_in = 1;
		  	var quality = 0;
		  	items = [new Item(regularItemName, sell_in, quality)];

		  	update_quality();

		  	expect(items[0].quality).toBe(0);
		});

  		describe("when sell in is passed", function(){
			it("decreases quality twice as fast",function(){
				var sell_in = 0;
				var quality = 10;
				items = [new Item(regularItemName, sell_in, quality)];

				update_quality();

				expect(items[0].quality).toBe(8);
			});

			it("decreases sell in",function(){
				var sell_in = 0;
				var quality = 10;
				items = [new Item(regularItemName, sell_in, quality)];

				update_quality();

				expect(items[0].sell_in).toBe(-1);
			});
  		});
	  });

	describe("when updates a Sulfuras item", function(){
		
		var sulfurasItemName;

		beforeEach(function(){
			sulfurasItemName = "Sulfuras, Hand of Ragnaros";
		});

		it("never decreases either quality and sell in", function(){
			var sell_in = 10;
			var quality = 30;
			items = [new Item(sulfurasItemName, sell_in, quality)];

			update_quality();

			expect(items[0].sell_in).toBe(sell_in);
			expect(items[0].quality).toBe(quality);
		});

		it("never decreases either quality and sell in when sell in passed", function(){
			var sell_in = 0;
			var quality = 30;
			items = [new Item(sulfurasItemName, sell_in, quality)];

			update_quality();

			expect(items[0].sell_in).toBe(sell_in);
			expect(items[0].quality).toBe(quality);
		});
	});

	describe("when updates an Aged Brie item", function(){
		
		var agedBrieItemName;

		beforeEach(function(){
			agedBrieItemName = "Aged Brie";
		});

		it("increases quality and decreases sell in", function(){
			var sell_in = 10;
			var quality = 30;
			items = [new Item(agedBrieItemName, sell_in, quality)];

			update_quality();

			expect(items[0].sell_in).toBe(9);
			expect(items[0].quality).toBe(31);
		});

		it("never increases quality over 50 and decreases sell in", function(){
			var sell_in = 10;
			var quality = 50;
			items = [new Item(agedBrieItemName, sell_in, quality)];

			update_quality();

			expect(items[0].sell_in).toBe(9);
			expect(items[0].quality).toBe(50);
		});

		describe("when sell in passed", function(){


			it("increases quality twice as fast", function(){
				var sell_in = 0;
				var quality = 40;
				items = [new Item(agedBrieItemName, sell_in, quality)];

				update_quality();

				expect(items[0].quality).toBe(42);
			});

			it("decreases sell in", function(){
				var sell_in = 0;
				var quality = 40;
				items = [new Item(agedBrieItemName, sell_in, quality)];

				update_quality();

				expect(items[0].sell_in).toBe(-1);
			});
		});
	});
});