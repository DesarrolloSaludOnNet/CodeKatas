describe("Rover", function() {
	var northDirection = "N",
		eastDirection = "E", 
		southDirection = "S",
		westDirection = "W";
	var bottomLeftPoint, upperRightPoint;
	var rover, point, grid;
	var	bottomLeftPoint = createPoint(0,0);
	var	upperRightPoint = createPoint(5,5);
	var	grid = createGrid(bottomLeftPoint, upperRightPoint);	

	beforeEach(function() {
		point = createPoint(1,1);
		rover = createRover(point, northDirection, grid);
	});

	it("initializes correctly", function() {
		expect(rover.getPoint()).toBePoint(createPoint(1,1));
		expect(rover.getDirection()).toBe(northDirection);
	});

	it("can move forward to the north", function(){
		var commands = ["f"];

		debugger;
		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(1,2));
		expect(rover.getDirection()).toBe(northDirection);
	});

	it("reports succes when moved successfully", function(){
		var commands = ["f"];

		var report = rover.move(commands);

		expect(report.getStatus()).toBe(movementStatus.SUCCESS);
	});

	it("can move twice forward to the north", function(){
		var commands = ["f","f"];

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(1,3));
		expect(rover.getDirection()).toBe(northDirection);
	});

	it("can move forward to the south", function(){
		rover = createRover(point, southDirection, grid);

		var commands = ["f"];

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(1,0));
		expect(rover.getDirection()).toBe(southDirection);
	});

	it("can move forward to the east", function(){
		rover = createRover(point, eastDirection, grid);
		var commands = ["f"];

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(2,1));
		expect(rover.getDirection()).toBe(eastDirection);
	});

	it("can move forward to the west", function(){
		rover = createRover(point, westDirection, grid);
		var commands = ["f"];

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(0,1));
		expect(rover.getDirection()).toBe(westDirection);
	});

	it("can move backward to the south", function(){
		var commands = ["b"];

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(1,0));
		expect(rover.getDirection()).toBe(northDirection);
	});	

	it("can move backward to the north", function(){
		var commands = ["b"];
		rover = createRover(point, southDirection, grid);		

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(1,2));
		expect(rover.getDirection()).toBe(southDirection);
	});		

	it("can move backward to the east", function(){
		var commands = ["b"];
		rover = createRover(point, westDirection, grid);		

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(2,1));
		expect(rover.getDirection()).toBe(westDirection);
	});			

	it("can move backward to the west", function(){
		var commands = ["b"];
		rover = createRover(point, eastDirection, grid);		

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(0,1));
		expect(rover.getDirection()).toBe(eastDirection);
	});

	it("can turn left when direction is north", function(){
		var commands = ["l"];
		rover = createRover(point, northDirection);		

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(1,1));
		expect(rover.getDirection()).toBe(westDirection);
	});

	it("can turn left when direction is west", function(){
		var commands = ["l"];
		rover = createRover(point, westDirection);		

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(1,1));
		expect(rover.getDirection()).toBe(southDirection);
	});

	it("can turn left when direction is south", function(){
		var commands = ["l"];
		rover = createRover(point, southDirection);		

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(1,1));
		expect(rover.getDirection()).toBe(eastDirection);
	});

	it("can turn left when direction is east", function(){
		var commands = ["l"];
		rover = createRover(point, eastDirection);		

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(1,1));
		expect(rover.getDirection()).toBe(northDirection);
	});

	it("can turn rigth when direction is north", function(){
		var commands = ["r"];
		rover = createRover(point, northDirection);		

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(1,1));
		expect(rover.getDirection()).toBe(eastDirection);
	});	

	it("can turn rigth when direction is east", function(){
		var commands = ["r"];
		rover = createRover(point, eastDirection);		

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(1,1));
		expect(rover.getDirection()).toBe(southDirection);
	});	

	it("can turn rigth when direction is south", function(){
		var commands = ["r"];
		rover = createRover(point, southDirection);		

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(1,1));
		expect(rover.getDirection()).toBe(westDirection);
	});		

	it("can turn rigth when direction is west", function(){
		var commands = ["r"];
		rover = createRover(point, westDirection);		

		rover.move(commands);

		expect(rover.getPoint()).toBePoint(createPoint(1,1));
		expect(rover.getDirection()).toBe(northDirection);
	});	

	it("wrapping from east edge of the grid moving forward", function(){
		var initialPoint = createPoint(upperRightPoint.getX(), 0);
		rover = createRover(initialPoint, eastDirection, grid);

		rover.move(["f"]);

		expect(rover.getPoint()).toBePoint(bottomLeftPoint);
	});

	it("wrapping from west edge of the grid moving forward", function(){
		var initialPoint = createPoint(bottomLeftPoint.getX(), 0);
		rover = createRover(initialPoint, westDirection, grid);

		rover.move(["f"]);

		expect(rover.getPoint()).toBePoint(
			createPoint(upperRightPoint.getX(), 0));
	});	

	it("wrapping from north edge of the grid moving forward", function(){
		var initialPoint = createPoint(0, upperRightPoint.getY());
		rover = createRover(initialPoint, northDirection, grid);

		rover.move(["f"]);

		expect(rover.getPoint()).toBePoint(
			createPoint(0, bottomLeftPoint.getY()));
	});

	it("wrapping from south edge of the grid moving forward", function(){
		var initialPoint = createPoint(0, 0);
		rover = createRover(initialPoint, southDirection, grid);

		rover.move(["f"]);

		expect(rover.getPoint()).toBePoint(
			createPoint(0, upperRightPoint.getY()));
	});	

	it("wrapping from east edge of the grid moving backward", function(){
		var initialPoint = createPoint(upperRightPoint.getX(), upperRightPoint.getY());
		rover = createRover(initialPoint, westDirection, grid);

		rover.move(["b"]);

		expect(rover.getPoint()).toBePoint(
			createPoint(0, upperRightPoint.getY()));
	});	

	it("wrapping from west edge of the grid moving backward", function(){
		var initialPoint = createPoint(bottomLeftPoint.getX(), 0);
		rover = createRover(initialPoint, eastDirection, grid);

		rover.move(["b"]);

		expect(rover.getPoint()).toBePoint(
			createPoint(upperRightPoint.getX(), 0));
	});	

	it("wrapping from north edge of the grid moving backward", function(){
		var initialPoint = createPoint(0, upperRightPoint.getY());
		rover = createRover(initialPoint, southDirection, grid);

		rover.move(["b"]);

		expect(rover.getPoint()).toBePoint(
			createPoint(0, bottomLeftPoint.getY()));
	});

	it("wrapping from south edge of the grid moving backward", function(){
		var initialPoint = createPoint(0, 0);
		rover = createRover(initialPoint, northDirection, grid);

		rover.move(["b"]);

		expect(rover.getPoint()).toBePoint(
			createPoint(0, upperRightPoint.getY()));
	});

	it("stops at the last point before the obstacle with north direction", function(){
		var initialPoint = createPoint(0, 0);
		var obstacles = [createPoint(0, 2)];
		grid = createGrid(bottomLeftPoint, upperRightPoint, obstacles);	
		rover = createRover(initialPoint, northDirection, grid);

		rover.move(["f","f","b"]);

		expect(rover.getPoint()).toBePoint(createPoint(0, 1));
	});

	it("reports obstacle when an obstacle is found", function(){
		var initialPoint = createPoint(0, 0);
		var obstaclePoint = createPoint(0, 2);
		var obstacles = [obstaclePoint];
		grid = createGrid(bottomLeftPoint, upperRightPoint, obstacles);	
		rover = createRover(initialPoint, northDirection, grid);

		var report = rover.move(["f","f","b"]);

		expect(report.getStatus()).toBe(movementStatus.OBSTACLE);
		expect(report.getObstaclePoint()).toBePoint(obstaclePoint);
	});

	it("stops at the last point before the obstacle with south direction", function(){
		var initialPoint = createPoint(0, 2);
		var obstacles = [createPoint(0, 1)];
		grid = createGrid(bottomLeftPoint, upperRightPoint, obstacles);	
		rover = createRover(initialPoint, southDirection, grid);

		rover.move(["f", "f"]);

		expect(rover.getPoint()).toBePoint(createPoint(0, 2));
	});

	it("stops at the last point before the obstacle with east direction", function(){
		var initialPoint = createPoint(1, 2);
		var obstacles = [createPoint(3, 2)];
		grid = createGrid(bottomLeftPoint, upperRightPoint, obstacles);	
		rover = createRover(initialPoint, eastDirection, grid);

		rover.move(["f", "f", "f", "f"]);

		expect(rover.getPoint()).toBePoint(createPoint(2, 2));
	});

	it("stops at the last point before the obstacle with west direction", function(){
		var initialPoint = createPoint(2, 2);
		var obstacles = [createPoint(0, 2)];
		grid = createGrid(bottomLeftPoint, upperRightPoint, obstacles);	
		rover = createRover(initialPoint, westDirection, grid);

		rover.move(["f", "f", "f", "f"]);

		expect(rover.getPoint()).toBePoint(createPoint(1, 2));
	});
});