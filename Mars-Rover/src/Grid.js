function createGrid(bottomLeftPoint, upperRightPoint, obstacles) {
	var grid = {};

	grid.nearestCell = function (direction, point){
		var nearestPoint = getNearestPoint(direction, point);
		return createCell(nearestPoint, isObstacle(nearestPoint));

		function isObstacle(point){
		 return _.some(obstacles, function(obstacle){
				return (point.getX() == obstacle.getX() && 
						point.getY() == obstacle.getY());
			});
		}

		function getNearestPoint(direction,point){
			if(direction.equals(createNorthDirection())){
				return getNorthPoint(point);
			}
			if(direction.equals(createSouthDirection())){
				return getSouthPoint(point);
			}
			if(direction.equals(createWestDirection())){
				return getWestPoint(point);
			}
			if(direction.equals(createEastDirection())){
				return getEastPoint(point);
			}
		}
	};

	function getEastPoint(point) {
		if (point.getX() == upperRightPoint.getX())
			return createPoint(bottomLeftPoint.getX(), point.getY());
		return createPoint(point.getX() + 1, point.getY());
	};

	function getWestPoint(point){ 
		if (point.getX() == bottomLeftPoint.getX())
			return createPoint(upperRightPoint.getX(), point.getY());		
		return createPoint(point.getX() - 1, point.getY());
	};

	function getNorthPoint(point){ 
		if (point.getY() == upperRightPoint.getY())
			return createPoint(point.getX(), bottomLeftPoint.getY());
		return  createPoint(point.getX(), point.getY() + 1);
	};

	function getSouthPoint(point){ 
		if (point.getY() == bottomLeftPoint.getY())
			return createPoint(point.getX(), upperRightPoint.getX());
		return  createPoint(point.getX(), point.getY() - 1);
	};

	return grid;
}