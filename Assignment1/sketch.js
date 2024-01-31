function setup() {
  createCanvas(4000, 4000);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function draw() {
  background(225);
  fill(20,250,25);
  noStroke();
  quad(0, 10, 450, 10, 450, 300, 0, 300);
  stroke('black');
  strokeWeight(1);
  fill('white');
  square(250, 55, 185);
  circle(105, 150, 200);
  //Example 1 Here^

  noStroke();
  fill("#f006");
  circle(185, 475, 185);
  fill("#00f6");
  circle(115, 600, 185);
  fill("#0f06")
  circle(245, 600, 185);
  //Example 2 Here^ 

  fill('black');
  quad(0, 850, 650, 850, 650, 1200, 0, 1200);
  fill(243, 195, 0);
  arc(105, 1000,200,200,450, 700);
  fill("#D3494E");
  square(305, 920, 175,80,80,0,0);
  fill('white');
  circle(345, 1000, 50);
  fill('blue');
  circle(345, 1000, 30);
  fill('white');
  circle(435, 1000, 50);
  fill('blue');
  circle(435, 1000, 30);

  //Example 3  here^
 
  fill("#002366");
  quad(0, 1550, 650, 1550, 650, 2150, 0, 2150);
  stroke('white');
  strokeWeight(4);
  fill('green');
  circle(300,1875,350);
  noStroke();
  stroke('white')
  strokeWeight(4)
  fill('red');
  beginShape();
vertex(300, 1690); //1
vertex(350, 1775); //2
vertex(475, 1775); //3
vertex(380, 1850); //4
vertex(425,2005); //5 
vertex(300,1925); //6
vertex(185,2005); //7
vertex(230,1850); //8
vertex(105,1775); //9
vertex(250, 1775); 
vertex(300, 1690); 

endShape(CLOSE);


 
 
  //arc(405, 1000, 200, 300, PI, radians(360),CHORD);




}
