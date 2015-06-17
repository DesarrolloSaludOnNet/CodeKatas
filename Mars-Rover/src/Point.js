function createPoint(x, y, isObstacle) {
	var point = {};

	point.getX = function() {
		return x;
	};

	point.getY = function() {
		return y;
	};

	return point;
}
