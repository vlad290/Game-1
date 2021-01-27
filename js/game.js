var width = 800; //получаем ширину экрана
var height = 600; // получаем высоту экрана
var renderer = PIXI.autoDetectRenderer(width, height, { antialias: true });
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
stage.interactive = true;
var circlemass = []; //массив хранящий наши Круги
var filledRectmass = []; //массив хранящий наши Кводраты
var rectanglemass = []; //массив хранящий наши Треуголдьнкик
//Массивы для рондома
var radius_mass = [10,20,30,40,50,60]; //массив радиуса
var razmer_k = [10,20,30,40,50,60,70,80,90,100]; //массив Ширины
var razmer_T = [[-40, 0, 0, -100, 40, 0],[-40, 0, 0, 100, 40, 0],[100, 0, 0, 40, 0, -40],[-100, 0, 0, 40, 0, -40]]
var colors = [0xFFFF0B, 0xFF700B, 0x4286f4, 0x4286f4, 0xf441e8, 0x8dff6d, 0x41ccc9, 0xe03375, 0x95e032, 0x77c687, 0x43ba5b, 0x0ea3ba]; //массив цветов
//Конец Массивов для рандома

for (var i = 0; i < 3; i++)
{
    //Переменные для Рандом
    random = Math.floor(Math.random() * radius_mass.length); //генерим рандомное число радиусов Круга
    randomFTP = Math.floor(Math.random() * razmer_T.length); //генерим рандомное число Кводрата
    randomK = Math.floor(Math.random() * razmer_k.length); //генерим рандомное число Кводрата
    randC = Math.floor(Math.random() * colors.length); //генерим рандомное число(в промежутке от 0 до количества цветов в массиве цветов)
    randF = Math.floor(Math.random() * colors.length); //генерим рандомное число(в промежутке от 0 до количества цветов в массиве цветов)
    randT = Math.floor(Math.random() * colors.length); //генерим рандомное число(в промежутке от 0 до количества цветов в массиве цветов)
    //Конец Переменных для Рандом
    createcircle(Math.floor(Math.random() * 600), Math.floor(Math.random() * 200),colors[randC],radius_mass[random]);
    createfilledRect(Math.floor(Math.random() * 600), Math.floor(Math.random() * 200),colors[randF],razmer_k[randomK]);
    createrectangle(Math.floor(Math.random() * 600), Math.floor(Math.random() * 200),colors[randT],razmer_T[randomFTP]);
}

function createcircle(x, y, z, f)
{
    var circle = new PIXI.Graphics();
    circle.interactive = true;
    circle.buttonMode = true;
    circle.lineStyle(2,z);
    circle.beginFill();
    circle.drawCircle(0, 0, f);
    circle
        .on('mousedown', onDragStart)
        .on('touchstart', onDragStart)
        .on('mouseup', onDragEnd)
        .on('mouseupoutside', onDragEnd)
        .on('touchend', onDragEnd)
        .on('touchendoutside', onDragEnd)
        .on('mousemove', onDragMove)
        .on('touchmove', onDragMove);
    circle.Itcircle = true; //указываем что это наш шарик
    circlemass.push(circle); //обратиться на прямую к объекту circle мы не можем, поэтому отправляем его в массив
    circle.position.x = x;
    circle.position.y = y;
    if ((circle.x < f || circle.x > (renderer.screen.width + f))
        || circle.y < f || circle.y > (renderer.screen.height + f)) {
        circle.position.set(Math.floor(Math.random() * 550), Math.floor(Math.random() * 200));
    }
    stage.addChild(circle);
}
function createfilledRect(x, y, z, f)
{
    var filledRect = new PIXI.Graphics();
    filledRect.interactive = true;
    filledRect.buttonMode = true;
    filledRect.lineStyle(2,z);
    filledRect.beginFill()
    filledRect.drawRect(f/-2, f/-2, f, f)
    filledRect
        .on('mousedown', onDragStart)
        .on('touchstart', onDragStart)
        .on('mouseup', onDragEnd)
        .on('mouseupoutside', onDragEnd)
        .on('touchend', onDragEnd)
        .on('touchendoutside', onDragEnd)
        .on('mousemove', onDragMove)
        .on('touchmove', onDragMove);
    filledRect.ItfilledRect = true; //указываем что это наш Квадрат
    filledRectmass.push(filledRect); //обратиться на прямую к объекту circle мы не можем, поэтому отправляем его в массив
    filledRect.position.x = x;
    filledRect.position.y = y;
    if ((filledRect.x < f || filledRect.x > (renderer.screen.width + f))
        || filledRect.y < f || filledRect.y > (renderer.screen.height + f)) {
        filledRect.position.set(Math.floor(Math.random() * 550), Math.floor(Math.random() * 200));
    }
    stage.addChild(filledRect);
}
function createrectangle(x, y, z, f,)
{
    var rectangle = new PIXI.Graphics();
    rectangle.interactive = true;
    rectangle.buttonMode = true;
    rectangle.lineStyle(2,z);
    rectangle.beginFill(); // Color it black
    rectangle.drawPolygon(f);
    rectangle
        .on('mousedown', onDragStart)
        .on('touchstart', onDragStart)
        .on('mouseup', onDragEnd)
        .on('mouseupoutside', onDragEnd)
        .on('touchend', onDragEnd)
        .on('touchendoutside', onDragEnd)
        .on('mousemove', onDragMove)
        .on('touchmove', onDragMove);
    rectangle.Itrectangle = true; //указываем что наш Триугольник
    rectanglemass.push(rectangle); //обратиться на прямую к объекту circle мы не можем, поэтому отправляем его в массив
    rectangle.position.x = x;
    rectangle.position.y = y;
    if ((rectangle.x < 110 || rectangle.x > (renderer.screen.width + 110))
        || rectangle.y < 110 || rectangle.y > (renderer.screen.height + 110)) {
        rectangle.position.set(Math.floor(Math.random() * 550), Math.floor(Math.random() * 200));
    }
    stage.addChild(rectangle);
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
function onDragStart(event)
{
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
    this.dragObjStart = new PIXI.Point();
    this.dragObjStart.copyFrom(this.position);
}
function onDragEnd()
{
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
    if (((this.Itcircle) && ((this.position.x > circle2.x - 80 && this.position.x < circle2.x + 80) && (this.position.y > filledRect2.y - 80 && this.position.y < filledRect2.y + 80))) ||
        ((this.ItfilledRect) && ((this.position.x > filledRect2.x - 80 && this.position.x < filledRect2.x + 80) && (this.position.y > filledRect2.y - 80 && this.position.y < filledRect2.y + 80))) ||
        ((this.Itrectangle) && ((this.position.x > rectangle2.x - 80 && this.position.x < rectangle2.x + 80) && (this.position.y > rectangle2.y - 80 && this.position.y < rectangle2.y + 80))))
    {
        this.clear();
    }
    else
    {
        this.position.x = this.dragObjStart.x;
        this.position.y = this.dragObjStart.y;
    }
}
function onDragMove()
{
    if (this.dragging)
    {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
    }
}
