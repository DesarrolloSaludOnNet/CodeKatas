function directionFactory(directionAsChar){
	if(directionAsChar == 'N')
		return createNorthDirection();
	if(directionAsChar == 'S')
		return createSouthDirection();
	if(directionAsChar == 'W')
		return createWestDirection();
	if(directionAsChar == 'E')
		return createEastDirection();
}

function createDirection(){
	var direction = {};
	direction.equals = function(anotherDirection){
		return this.toString() === anotherDirection.toString();
	};
	return direction;
}

function createNorthDirection(){
	var direction = Object.create(createDirection());

	direction.getLeft = function(){
		return createWestDirection();
	};
	direction.getRight = function(){
		return createEastDirection();
	};
	direction.toString = function(){
		return "N";
	}
	direction.invert = function(){
		return createSouthDirection();
	}
	return direction;
	
	return {
		getLeft : function(){
			return createWestDirection();
		},
		getRight : function(){
			return createEastDirection();
		},
		toString : toString,
		equals : function(direction){
			return toString() === direction.toString();
		},
		invert : function(){
			return createSouthDirection();
		}
	};

	function toString(){
		return "N";
	}
}

function createSouthDirection(){
	return {
		getLeft : function(){
			return createEastDirection();
		},
		getRight : function(){
			return createWestDirection();
		},
		toString : toString,
		equals : function(direction){
			return toString() === direction.toString();
		},
		invert : function(){
			return createNorthDirection();
		}
	};

	function toString(){
		return "S";
	}
}

function createWestDirection(){
	return {
		getLeft : function(){
			return createSouthDirection();
		},
		getRight : function(){
			return createNorthDirection();
		},
		toString : toString,
		equals : function(direction){
			return toString() === direction.toString();
		},
		invert : function(){
			return createEastDirection();
		}
	};

	function toString(){
		return "W";
	}
}

function createEastDirection(){
	return {
		getLeft : function(){
			return createNorthDirection();
		},
		getRight : function(){
			return createSouthDirection();
		},
		toString : toString,
		equals : function(direction){
			return toString() === direction.toString();
		},
		invert : function(){
			return createWestDirection();
		}
	};

	function toString(){
		return "E";
	}
}