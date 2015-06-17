function createCommand(commandCode) {
	if (commandCode == 'f')
		return createForwardCommand();
	if (commandCode == 'b')
		return createBackwardCommand();
	if (commandCode == 'l')
		return createRotateLeftCommand();
	if (commandCode == 'r')
		return createRotateRightCommand();
};

function createForwardCommand (){
	var command = {};
	command.nearestCell = function (grid, currentDirection, currentPoint) {
		return grid.nearestCell(currentDirection, currentPoint);
	};
	command.rotate = function (currentDirection) {
		return currentDirection;
	};
	return command; 
}

function createBackwardCommand (){
	var command = {};
	command.nearestCell = function (grid, currentDirection, currentPoint) {
		return grid.nearestCell(currentDirection.invert(), currentPoint);
	};
	command.rotate = function (currentDirection) {
		return currentDirection;
	};
	return command; 
}

function createRotateLeftCommand () {
	var command = {};
	command.nearestCell = function (grid, currentDirection, currentPoint) {
		return createCell(currentPoint, false);
	};

	command.rotate = function (currentDirection) {
		return currentDirection.getLeft();
	};
	return command; 	
}

function createRotateRightCommand () {
	var command = {};
	command.nearestCell = function (grid, currentDirection, currentPoint) {
		return createCell(currentPoint, false);
	};

	command.rotate = function (currentDirection) {
		return currentDirection.getRight();
	};
	return command;
}