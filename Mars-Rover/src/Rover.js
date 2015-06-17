function createRover(point, direction, grid) {
	var rover = {};
	var currentPoint = point;
	var currentDirection = directionFactory(direction);

	rover.getPoint = function() {
		return currentPoint;
	};

	rover.getDirection = function() {
		return currentDirection.toString();
	};
	
	rover.move = function(commands){
		for(var i = 0; i < commands.length ; i++){
			var command = createCommand(commands[i]);
			var cell = command.nearestCell(
				grid, currentDirection, currentPoint);
			if(cell.isObstacle()) {		
				return createReport(movementStatus.OBSTACLE,
									cell.getPoint());		
			}
			currentPoint = cell.getPoint();
			currentDirection = command.rotate(currentDirection);
		}
		return createReport(movementStatus.SUCCESS);
	};

	return rover;
};

var movementStatus = {
	SUCCESS: 'success',
	OBSTACLE: 'obstacle'
};

function createReport(status, obstaclePoint) {
	var report = {};

	report.getStatus = function() {
		return status;
	};

	report.getObstaclePoint = function() {
		return obstaclePoint;
	};
	return report;
}
