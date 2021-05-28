const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;
var Food;
var Dog;
var Dogsitting, Dogstanding;


function preload(){

    Dogsitting= loadImage("images/doglmg.png");
    Dogstanding = loadImage("images/doglmg");

}


function setup(){
    
    createCanvas(1200,400);
    database = firebase.database();
    dog = new Dog(600,200,20,20);

}


  function draw(){

   background("46,139,87");
   Engine.update(myEngine);
   Dog.show();
   Food.show();

   if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   Dog.addImage(Dogsitting);
   }

  }
