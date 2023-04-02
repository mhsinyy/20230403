let points = [[7,10],[12,6],[12,4],[9,1],[10,-2],[10,-7],[5,-10],[1,-11],[1,-13],[-3,-13],[-14,-4],[-13,4],
[-11,9],[-12,13],[-10,16],[-8,17],[-5,13],[3,13],[7,16],[10,15],[10,13],[7,10]];
let polygon = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < points.length; i++){
    let p = createVector(points[i][0],points[i][1]);
    p.mult(20);
    polygon.push(p);
  }
}

function draw() {
  background(255);
  translate(width/2,height/2);

  let mouseXpos = mouseX - width/3; 
  let mouseYpos = height/2 - mouseY;
  let scaleAmt = map(abs(mouseXpos), 0, width/3, 0.2, 1); // 根据鼠标位置调整缩放比例
  scaleAmt = constrain(scaleAmt, 0.2, 1); // 确保缩放比例在0.2到1之间
  let interpX = lerp(0, mouseXpos, 0.1); // 平滑插值鼠标位置
  let interpY = lerp(0, mouseYpos, 0.1);
  translate(interpX, interpY); // 平移画布

  for(let i = 1; i <=5; i++){
    push();
    scale(scaleAmt * i/6); // 调整缩放比例
    scale(1,-1);
    strokeWeight(3);

    for(let j = 0; j<polygon.length-1; j++){
      let from = color("#fb5607");
      let to = color("#640d14");
      stroke(lerpColor(from,to,j/polygon.length));
      line(polygon[j].x,polygon[j].y,polygon[j+1].x,polygon[j+1].y);
    }
    pop();
  }

  // 添加文本
  textSize(20);
  textAlign(CENTER, CENTER);
  text("淡江教科系", -5, -20);
}