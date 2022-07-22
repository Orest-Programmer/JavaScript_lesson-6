"use stric"
function Robot(){
    this.workDo = 'I am Robot, i just working!';
}

Robot.prototype.work = function(){
    console.log(this.workDo);
}

Robot.prototype.setWorkDo = function(value){
    this.workDo = value;
}

// -----------------------------------------------------------

function CoffeRobot(){
    this.setWorkDo('I am CoffeRobot, i make cofee!');
}
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;

// -----------------------------------------------------------

function RobotDancer(){
    this.setWorkDo('I am RobotDancer, i just dance!');
}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotCoocker; 
// -----------------------------------------------------------

function RobotCoocker(){
    this.setWorkDo('I am RobotCoocker, i just coocking!');
}
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor =RobotCoocker;

// -----------------------------------------------------------

let robot = new Robot();
let coffeRobot = new CoffeRobot();
let robotDancer = new RobotDancer();
let robotCoocker = new RobotCoocker();

let robots = [robot, coffeRobot, robotDancer, robotCoocker];

for(let i =0; i < robots.length; i++){
    robots[i].work();
}