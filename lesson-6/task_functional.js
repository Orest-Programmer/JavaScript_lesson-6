"use stric"

function Robot(){
    this.workDo = 'I am Robot, i just working!';
    this.work = function(){
        console.log(this.workDo);
    }

    this.setWorkDo = function(value){
        this.workDo = value;
    }

    
}
// -----------------------------------------------------------
function CoffeRobot(){
    Robot.call(this);
    this.setWorkDo('I am CoffeRobot, i make cofee!');
}
// -----------------------------------------------------------
function RobotDancer(){
    Robot.call(this);
    this.setWorkDo('I am RobotDancer, i just dance!');
}
// -----------------------------------------------------------
function RobotCoocker(){
    Robot.call(this);
    this.setWorkDo('I am RobotCoocker, i just coocking!');
}
// -----------------------------------------------------------
let robot = new Robot();
let coffeRobot = new CoffeRobot();
let robotDancer = new RobotDancer();
let robotCoocker = new RobotCoocker();

let robots = [robot, coffeRobot, robotDancer, robotCoocker];

for(let i =0; i < robots.length; i++){
    robots[i].work();
}