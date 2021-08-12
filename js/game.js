var width = 800; //получаем ширину экрана
var height = 600; // получаем высоту экрана
//var renderer = PIXI.autoDetectRenderer(width, height, { antialias: true });
const renderer = new PIXI.Application(width, height, { antialias: false });
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
stage.interactive = true;
var circleMass = []; //массив хранящий наши Круги
var filledRectMass = []; //массив хранящий наши Кводраты
var rectangleMass = []; //массив хранящий наши Треуголдьнкик
//Массивы для рондома
var radiusMass = [10,20,30,40,50,60]; //массив радиуса
var sizeK = [10,20,30,40,50,60,70,80,90,100]; //массив Ширины
var sizeT = [[-40, 0, 0, -100, 40, 0],[-40, 0, 0, 100, 40, 0],[100, 0, 0, 40, 0, -40],[-100, 0, 0, 40, 0, -40]]
var colors = [0xFFFF0B, 0xFF700B, 0x4286f4, 0x4286f4, 0xf441e8, 0x8dff6d, 0x41ccc9, 0xe03375, 0x95e032, 0x77c687, 0x43ba5b, 0x0ea3ba]; //массив цветов
//Звуковые файлы
var good = new Audio();
var error = new Audio();
good.src = "sound/chime.mp3";
error.src = "sound/boing.mp3";
//Конец Звуковых файлов
//Конец Массивов для рандома
class Circle
{
	constructor(x, y, colors, size)
	{
		this.x = x;
		this.y = y;
		this.colors = colors;
		this.size = size;	
		var circle = new PIXI.Graphics();
		circle.interactive = true;
		circle.buttonMode = true;
		circle.lineStyle(2,colors);
		circle.beginFill();
		circle.drawCircle(0, 0, size);
		circle
			.on('pointerdown', OnDragStart)
			.on('pointerup', OnDragEnd)
			.on('pointerupoutside', OnDragEnd)
			.on('pointermove', OnDragMove);
		circleMass.push(circle); //обратиться на прямую к объекту Circle мы не можем, поэтому отправляем его в массив
		circle.position.x = x;
		circle.position.y = y;
		if ((circle.x < size || circle.x > (renderer.screen.width + size))
			|| circle.y < size || circle.y > (renderer.screen.height + size)) {
			circle.position.set(Math.floor(Math.random() * 700), Math.floor(Math.random() * 300));
		}
		renderer.stage.addChild(circle);
		function OnDragEnd()
		{
			this.alpha = 1;
			this.dragging = false;
			this.data = null;
			if ((this.position.x > circle2.x - 80 && this.position.x < circle2.x + 80) && (this.position.y > filledRect2.y - 80 && this.position.y < filledRect2.y + 80))
			{
				this.clear();
				good.play();
			}
			else
			{
				this.position.x = this.dragObjStart.x;
				this.position.y = this.dragObjStart.y;
				error.play();
			}
		}
	}
}
class FilledRect
{
	constructor(x, y, colors, size)
	{
		this.x = x;
		this.y = y;
		this.colors = colors;
		this.size = size;	
		var filledRect = new PIXI.Graphics();
		filledRect.interactive = true;
		filledRect.buttonMode = true;
		filledRect.lineStyle(2,colors);
		filledRect.beginFill()
		filledRect.drawRect(size/-2, size/-2, size, size)
		filledRect
			.on('pointerdown', OnDragStart)
			.on('pointerup', OnDragEnd)
			.on('pointerupoutside', OnDragEnd)
			.on('pointermove', OnDragMove);
		filledRectMass.push(filledRect); //обратиться на прямую к объекту FilledRect мы не можем, поэтому отправляем его в массив
		filledRect.position.x = x;
		filledRect.position.y = y;
		if ((filledRect.x < size || filledRect.x > (renderer.screen.width + size))
			|| filledRect.y < size || filledRect.y > (renderer.screen.height + size)) {
			filledRect.position.set(Math.floor(Math.random() * 700), Math.floor(Math.random() * 300));
		}
		renderer.stage.addChild(filledRect);
		function OnDragEnd()
		{
			this.alpha = 1;
			this.dragging = false;
			this.data = null;
			if ((this.position.x > filledRect2.x - 80 && this.position.x < filledRect2.x + 80) && (this.position.y > filledRect2.y - 80 && this.position.y < filledRect2.y + 80))
			{
				this.clear();
				good.play();
			}
			else
			{
				this.position.x = this.dragObjStart.x;
				this.position.y = this.dragObjStart.y;
				error.play();
			}
		}
	}
}
class Rectangle
{
	constructor(x, y, colors, size)
	{
		this.x = x;
		this.y = y;
		this.colors = colors;
		this.size = size;	
		var rectangle = new PIXI.Graphics();
		rectangle.interactive = true;
		rectangle.buttonMode = true;
		rectangle.lineStyle(2,colors);
		rectangle.beginFill(); // Color it black
		rectangle.drawPolygon(size);
		rectangle
			.on('pointerdown', OnDragStart)
			.on('pointerup', OnDragEnd)
			.on('pointerupoutside', OnDragEnd)
			.on('pointermove', OnDragMove);
		rectangleMass.push(rectangle); //обратиться на прямую к объекту Rectangle мы не можем, поэтому отправляем его в массив
		rectangle.position.x = x;
		rectangle.position.y = y;
		if ((rectangle.x < 110 || rectangle.x > (renderer.screen.width + 110))
			|| rectangle.y < 110 || rectangle.y > (renderer.screen.height + 110)) {
			rectangle.position.set(Math.floor(Math.random() * 700), Math.floor(Math.random() * 300));
		}
		renderer.stage.addChild(rectangle);
		function OnDragEnd()
		{
			this.alpha = 1;
			this.dragging = false;
			this.data = null;
			if ((this.position.x > rectangle2.x - 80 && this.position.x < rectangle2.x + 80) && (this.position.y > rectangle2.y - 80 && this.position.y < rectangle2.y + 80))
			{
				this.clear();
				good.play();
			}
			else
			{
				this.position.x = this.dragObjStart.x;
				this.position.y = this.dragObjStart.y;
				error.play();
			}
		}
	}
}

for (var i = 0; i < 3; i++)
{
    //Переменные для Рандом
    random = Math.floor(Math.random() * radiusMass.length); //генерим рандомное число радиусов Круга
    randomFTP = Math.floor(Math.random() * sizeT.length); //генерим рандомное число Кводрата
    randomK = Math.floor(Math.random() * sizeK.length); //генерим рандомное число Кводрата
    randC = Math.floor(Math.random() * colors.length); //генерим рандомное число(в промежутке от 0 до количества цветов в массиве цветов)
    randF = Math.floor(Math.random() * colors.length); //генерим рандомное число(в промежутке от 0 до количества цветов в массиве цветов)
    randT = Math.floor(Math.random() * colors.length); //генерим рандомное число(в промежутке от 0 до количества цветов в массиве цветов)
    //Конец Переменных для Рандом
	new Circle(Math.floor(Math.random() * 700), Math.floor(Math.random() * 300),colors[randC],radiusMass[random]);
    new FilledRect(Math.floor(Math.random() * 700), Math.floor(Math.random() * 300),colors[randF],sizeK[randomK]);
    new Rectangle(Math.floor(Math.random() * 700), Math.floor(Math.random() * 300),colors[randT],sizeT[randomFTP]);
}
//Отрисовка линии ифигур для перетаскивания
//Линия раздела
var graphics = new PIXI.Graphics();
graphics.lineStyle(5, 0x33FF00);
graphics.moveTo(0,400);
graphics.lineTo(width, 400);
renderer.stage.addChild(graphics);
//Круг 2
var circle2 = new PIXI.Graphics();
circle2.lineStyle(1,0xFFFFFF);
circle2.beginFill();
circle2.drawCircle(0, 0, 80);
circle2.x  = 166;
circle2.y  = 500;
renderer.stage.addChild(circle2);
//Квадрат 2
const filledRect2 = new PIXI.Graphics()
filledRect2.lineStyle(1,0xFFFFFF);
filledRect2.beginFill()
filledRect2.drawRect(-80, -80, 160, 160)
filledRect2.x  = 412;
filledRect2.y  = 500;
renderer.stage.addChild(filledRect2)
//Триугольник 2
const rectangle2 = new PIXI.Graphics();
rectangle2.lineStyle(1,0xFFFFFF);
rectangle2.beginFill(); // Color it black
rectangle2.drawPolygon(-80, 0, 0, -160, 80, 0);
rectangle2.x  = 658;
rectangle2.y  = 580;
renderer.stage.addChild(rectangle2);
//Конец Отрисовки линии и фигурок
function OnDragStart(event)
{
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
    this.dragObjStart = new PIXI.Point();
    this.dragObjStart.copyFrom(this.position);
}
function OnDragMove()
{
    if (this.dragging)
    {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
    }
}
