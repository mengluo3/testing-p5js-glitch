let particles = [];  // let particles be an array

function setup(){
	createCanvas(600, 400);
}

function draw(){
	background(0);

	let p = new Particle();
	particles.push(p); // adds new Particle p into the array push(p) each time you draw()

	for(let i = particles.length-1; i >= 0; i--){
		particles[i].update();
		particles[i].show();
		if (particles[i].finished()){ // this returns true or false if particle should be deleted
			//remove this particle
			particles.splice(i, 1); //splice() REMOVES ELEMENTS FROM ARRAY at pos 1, and just removes 1 element.
		}
	}// allows the many particles to show. 
}


//______________________________________________

class Particle{
	
	constructor(){
		this.x = 300;//sets up the x and y coordinates of Particle
		this.y = 380;
		this.vx = random(-1, 1);//x velocity
    	this.vy = random (-5, -1); // y velocity, all negative because the particles are going upward. 

		this.alpha = 255; //SETS A TRANSPARENCY

	}//end of constructor()

	// creates motion by updating the position of the particle.
	update(){
			this.x += this.vx;
			this.y += this.vy;

			this.alpha -= 5; //CAUSES THE PARTICLE TO SLOWLY BECOME TRANSPARENT

	}//end of update()

	show(){
		noStroke(); //CHANGES THE STROKE TO NO STROKE
		fill(255, this.alpha);
		ellipse(this.x, this.y, 3);//creates ellipses 
	}//end of show()

	//returns true or false if particle should be deleted. 
	finished(){
		return this.alpha<0;
	}
}//end of Particle()