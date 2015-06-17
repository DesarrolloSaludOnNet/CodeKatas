function Cell(point, isObstacle){
	var cell = {};

	cell.getPoint = function(){
		return point;
	};

	cell.isObstacle = function(){
		return isObstacle;
	};

	return cell;
}

function createCell(point, isObstacle){
	return new Cell(point, isObstacle);
}