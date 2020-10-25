var mangoPicker;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var tallDude;
var sidewalk;
var weapon;
var chain;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
	mangoPicker = loadImage("images/boy.png");

}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;




	//Create the Bodies Here.
	weapon = new Stone(500, 500, 90);

	chain = new slingShot(weapon, { x: 195, y: 590 });





	hungryGuy = createSprite(200, 600, 50, 100);
	hungryGuy.scale = 0.095;
	hungryGuy.addImage(mangoPicker);
	Engine.run(engine);
	mango1 = new mangoes(500, 400, 30);
	mango2 = new mangoes(695, 400, 30);
	mango3 = new mangoes(600, 410, 30);
	mango4 = new mangoes(540, 420, 30);
	mango5 = new mangoes(550, 450, 30);
	mango6 = new mangoes(580, 490, 30);
	mango7 = new mangoes(695, 470, 30);

	tallDude = new enviorment(600, 500);
	sidewalk = new Ground(400, 690, 800, 20);
}

function
	draw() {
	rectMode(CENTER);
	background(169);

	hungryGuy.display();

	sidewalk.display();
	tallDude.display();

	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	weapon.display();

	mango1.display();

	mango2.display();
	mango3.display();
	drawSprites();

}



