var width = 800; //получаем ширину экрана
var height = 600; // получаем высоту экрана
var renderer = PIXI.autoDetectRenderer(width, height, { antialias: true });
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
stage.interactive = true;
var CircleMass = []; //массив хранящий наши Круги
var FilledRectMass = []; //массив хранящий наши Кводраты
var RectangleMass = []; //массив хранящий наши Треуголдьнкик
//Массивы для рондома
var RadiusMass = [10,20,30,40,50,60]; //массив радиуса
var RazmerK = [10,20,30,40,50,60,70,80,90,100]; //массив Ширины
var RazmerT = [[-40, 0, 0, -100, 40, 0],[-40, 0, 0, 100, 40, 0],[100, 0, 0, 40, 0, -40],[-100, 0, 0, 40, 0, -40]]
var Colors = [0xFFFF0B, 0xFF700B, 0x4286f4, 0x4286f4, 0xf441e8, 0x8dff6d, 0x41ccc9, 0xe03375, 0x95e032, 0x77c687, 0x43ba5b, 0x0ea3ba]; //массив цветов
//Звуковые файлы
var Good = new Audio();
var Error = new Audio();
Good.src = "sound/chime.mp3";
Error.src = "sound/boing.mp3";
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
		var Circle = new PIXI.Graphics();
		Circle.interactive = true;
		Circle.buttonMode = true;
		Circle.lineStyle(2,colors);
		Circle.beginFill();
		Circle.drawCircle(0, 0, size);
		Circle
			.on('pointerdown', OnDragStart)
			.on('pointerup', OnDragEnd)
			.on('pointerupoutside', OnDragEnd)
			.on('pointermove', OnDragMove);
		Circle.Itcircle = true; //указываем что это наш шарик
		CircleMass.push(Circle); //обратиться на прямую к объекту Circle мы не можем, поэтому отправляем его в массив
		Circle.position.x = x;
		Circle.position.y = y;
		if ((Circle.x < size || Circle.x > (renderer.screen.width + size))
			|| Circle.y < size || Circle.y > (renderer.screen.height + size)) {
			Circle.position.set(Math.floor(Math.random() * 700), Math.floor(Math.random() * 300));
		}
		stage.addChild(Circle);
		function OnDragEnd()
		{
			this.alpha = 1;
			this.dragging = false;
			this.data = null;
			if ((this.Itcircle) && ((this.position.x > circle2.x - 80 && this.position.x < circle2.x + 80) && (this.position.y > filledRect2.y - 80 && this.position.y < filledRect2.y + 80)))
			{
				this.clear();
				Good.play();
			}
			else
			{
				this.position.x = this.dragObjStart.x;
				this.position.y = this.dragObjStart.y;
				Error.play();
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
		var FilledRect = new PIXI.Graphics();
		FilledRect.interactive = true;
		FilledRect.buttonMode = true;
		FilledRect.lineStyle(2,colors);
		FilledRect.beginFill()
		FilledRect.drawRect(size/-2, size/-2, size, size)
		FilledRect
			.on('pointerdown', OnDragStart)
			.on('pointerup', OnDragEnd)
			.on('pointerupoutside', OnDragEnd)
			.on('pointermove', OnDragMove);
		FilledRect.ItfilledRect = true; //указываем что это наш Квадрат
		FilledRectMass.push(FilledRect); //обратиться на прямую к объекту circle мы не можем, поэтому отправляем его в массив
		FilledRect.position.x = x;
		FilledRect.position.y = y;
		if ((FilledRect.x < size || FilledRect.x > (renderer.screen.width + size))
			|| FilledRect.y < size || FilledRect.y > (renderer.screen.height + size)) {
			FilledRect.position.set(Math.floor(Math.random() * 700), Math.floor(Math.random() * 300));
		}
		stage.addChild(FilledRect);
		function OnDragEnd()
		{
			this.alpha = 1;
			this.dragging = false;
			this.data = null;
			if ((this.ItfilledRect) && ((this.position.x > filledRect2.x - 80 && this.position.x < filledRect2.x + 80) && (this.position.y > filledRect2.y - 80 && this.position.y < filledRect2.y + 80)))
			{
				this.clear();
				Good.play();
			}
			else
			{
				this.position.x = this.dragObjStart.x;
				this.position.y = this.dragObjStart.y;
				Error.play();
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
		var Rectangle = new PIXI.Graphics();
		Rectangle.interactive = true;
		Rectangle.buttonMode = true;
		Rectangle.lineStyle(2,colors);
		Rectangle.beginFill(); // Color it black
		Rectangle.drawPolygon(size);
		Rectangle
			.on('pointerdown', OnDragStart)
			.on('pointerup', OnDragEnd)
			.on('pointerupoutside', OnDragEnd)
			.on('pointermove', OnDragMove);
		Rectangle.Itrectangle = true; //указываем что наш Триугольник
		RectangleMass.push(Rectangle); //обратиться на прямую к объекту circle мы не можем, поэтому отправляем его в массив
		Rectangle.position.x = x;
		Rectangle.position.y = y;
		if ((Rectangle.x < 110 || Rectangle.x > (renderer.screen.width + 110))
			|| Rectangle.y < 110 || Rectangle.y > (renderer.screen.height + 110)) {
			Rectangle.position.set(Math.floor(Math.random() * 700), Math.floor(Math.random() * 300));
		}
		stage.addChild(Rectangle);
		function OnDragEnd()
		{
			this.alpha = 1;
			this.dragging = false;
			this.data = null;
			if ((this.Itrectangle) && ((this.position.x > rectangle2.x - 80 && this.position.x < rectangle2.x + 80) && (this.position.y > rectangle2.y - 80 && this.position.y < rectangle2.y + 80)))
			{
				this.clear();
				Good.play();
			}
			else
			{
				this.position.x = this.dragObjStart.x;
				this.position.y = this.dragObjStart.y;
				Error.play();
			}
		}
	}
}

for (var i = 0; i < 3; i++)
{
    //Переменные для Рандом
    Random = Math.floor(Math.random() * RadiusMass.length); //генерим рандомное число радиусов Круга
    RandomFTP = Math.floor(Math.random() * RazmerT.length); //генерим рандомное число Кводрата
    RandomK = Math.floor(Math.random() * RazmerK.length); //генерим рандомное число Кводрата
    RandC = Math.floor(Math.random() * Colors.length); //генерим рандомное число(в промежутке от 0 до количества цветов в массиве цветов)
    RandF = Math.floor(Math.random() * Colors.length); //генерим рандомное число(в промежутке от 0 до количества цветов в массиве цветов)
    RandT = Math.floor(Math.random() * Colors.length); //генерим рандомное число(в промежутке от 0 до количества цветов в массиве цветов)
    //Конец Переменных для Рандом
	new Circle(Math.floor(Math.random() * 700), Math.floor(Math.random() * 300),Colors[RandC],RadiusMass[Random]);
    new FilledRect(Math.floor(Math.random() * 700), Math.floor(Math.random() * 300),Colors[RandF],RazmerK[RandomK]);
    new Rectangle(Math.floor(Math.random() * 700), Math.floor(Math.random() * 300),Colors[RandT],RazmerT[RandomFTP]);
}
//Отрисовка линии ифигур для перетаскивания
//Линия раздела
var graphics = new PIXI.Graphics();
graphics.lineStyle(5, 0x33FF00);
graphics.moveTo(0,400);
graphics.lineTo(width, 400);
stage.addChild(graphics);
//Круг 2
var circle2 = new PIXI.Graphics();
circle2.lineStyle(1,0xFFFFFF);
circle2.beginFill();
circle2.drawCircle(0, 0, 80);
circle2.x  = 166;
circle2.y  = 500;
stage.addChild(circle2);
//Квадрат 2
const filledRect2 = new PIXI.Graphics()
filledRect2.lineStyle(1,0xFFFFFF);
filledRect2.beginFill()
filledRect2.drawRect(-80, -80, 160, 160)
filledRect2.x  = 412;
filledRect2.y  = 500;
stage.addChild(filledRect2)
//Триугольник 2
const rectangle2 = new PIXI.Graphics();
rectangle2.lineStyle(1,0xFFFFFF);
rectangle2.beginFill(); // Color it black
rectangle2.drawPolygon(-80, 0, 0, -160, 80, 0);
rectangle2.x  = 658;
rectangle2.y  = 580;
stage.addChild(rectangle2);
//Конец Отрисовки линии и фигурок
requestAnimationFrame( animate );
function animate()
{
    requestAnimationFrame(animate);
    renderer.render(stage);
}
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
