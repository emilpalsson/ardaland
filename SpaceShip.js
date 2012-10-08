/*
 * Constructs a new SpaceShip
 * x and y refer to the top-left
 * Parameters
 * x - spaceship position on x-axis
 * y - spaceship position on y-axis
 * width - spaceship width
 * height - spaceship height
 * img - spaceship drawing
 */
SI.SpaceShip = function (x, y, width, height, img) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.img = img
}
/*
 * Moves spaceship by delta from it's current position
 * Parameters
 * deltaX - amount to move on x-axis
 * deltaY - amount to move on y-axis
 */
SI.SpaceShip.prototype.move = function (deltaX, deltaY) {
	this.x += deltaX;
	if(this.x <= 0) {
		this.x = 0;
	}
	else if(this.x >= SI.Sizes.width - this.width) {
		this.x = SI.Sizes.width - this.width;
	}
	
	this.y += deltaY;
	if(this.y <= 0) {
		this.y = 0;
	}
	else if(this.y >= SI.Sizes.height - this.height) {
		this.x = SI.Sizes.height - this.height;
	}
}
/*
 * Draws the spaceship
 * Parameters
 * painter - canvas context(painter)
 */
SI.SpaceShip.prototype.draw = function (painter) {
	painter.drawImage(this.img, this.x, this.y, this.width, this.height);
}
/*
 * Constructs a new rocket 
 * Parameters
 * x - rocket position on x-axis
 * y - rocket position on y-axis
 */
SI.Rocket = function (x, y, direction, img) {
	this.x = x;
	this.y = y;
	this.direction = direction;
	// current status of rocket
	// used for deletion of rocket
	this.exploded = false;
	this.img = img;
}
/*
 * Moves rocket by delta from it's current position
 * The rocket moves on y-axis only
 * if the rocket hits the top, it explodes
 * Parameters
 * deltaY - amount to move on y-axis
 */
SI.Rocket.prototype.move = function (deltaY) {
	this.y += this.direction * deltaY;
	if(this.y <= 0 || this.y >= SI.Sizes.bottomMargin) {
		this.exploded = true;
	}
}
SI.Rocket.prototype.draw = function (painter) {
	painter.drawImage(this.img, this.x, this.y, SI.Sizes.rocketWidth, SI.Sizes.rocketHeight); 
}
