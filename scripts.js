/*Richard Tapalian
  SE240
  Week 9 Lab
  09/18/2013
  */
			
var can = document.getElementById("can"),
ctx = can.getContext("2d");
				
function draw()
	{	
		//styles the lines
		ctx.strokeStyle = "black";
		ctx.lineJoin = "square";
		ctx.lineCap = "round";
		ctx.lineWidth = 2;
		
		//draws the lines for the x and y axis
		ctx.beginPath();
		ctx.moveTo(100,0);
		ctx.lineTo(100, can.height-60);
		ctx.lineTo(can.width, can.height-60);
			
		ctx.stroke();//stroke draws the line
				
			
		ctx.fillStyle = "black";//color of text
		ctx.font = "8pt Helvetica";//font style
		ctx.fillText("1990's", 20, can.height-320);//text to be inserted

 		ctx.fillStyle = "black";
		ctx.font = "8pt Helvetica";
		ctx.fillText("2000's", 20, can.height-220);
				
		ctx.fillStyle = "black";
		ctx.font = "8pt Helvetica";
		ctx.fillText("2010's", 20, can.height-120);
				
		ctx.fillStyle = "black";
		ctx.font = "8pt Helvetica";
		ctx.fillText("50K/Year", 200, can.height-25);

 		ctx.fillStyle = "black";
		ctx.font = "8pt Helvetica";
		ctx.fillText("100K/Year", 350, can.height-25);
				
		ctx.fillStyle = "black";
		ctx.font = "8pt Helvetica";
		ctx.fillText("150K/Year", 500, can.height-25);
	}
		draw();
		//declare variables
		var bar1990x = 101,
			bar1990wdt = can.width - 700,
			bar2000x = 101,
			bar2000wdt = can.width - 700,
			bar2010x = 101,
			bar2010wdt = can.width -700;
					
		//function to call the three drawing functions		
		function Next(){
			var	interval1 = setInterval(draw1990, 100),
				interval2 = setInterval(draw2000, 60),
				interval3 = setInterval(draw2010, 40);
		}
				//Function to draw the 1990 data
		function draw1990(){
			if (bar1990wdt > 150){
				clearInterval(interval1);//clears interval when complete
				}
				else{
					ctx.clearRect(102,can.height-350,600,50);//continuously clears the line to provide fluid motion
					
					
					if(bar1990wdt <150){
					ctx.fillStyle="blue";
					ctx.fillRect(bar1990x, can.height-330, bar1990wdt, 20);//fill the rectangle and build it to the proper width
					bar1990wdt +=5;
					}
					else{
					ctx.fillStyle="blue";
					ctx.fillRect(bar1990x, can.height-330, bar1990wdt, 20);
					}
			}
			
		}//Function to draw the 2000 data
		function draw2000(){
			if (bar2000wdt > 240){
				clearInterval(interval2);//clears interval when complete
				}
				else{
					ctx.clearRect(102,can.height-250,600,50);//continuously clears the line to provide fluid motion
					
					
					if(bar2000wdt <240){
					ctx.fillStyle="red";
					ctx.fillRect(bar2000x, can.height-230, bar2000wdt, 20);//fill the rectangle and build it to the proper width
					bar2000wdt +=5;
					}
					else{
					ctx.fillStyle="red";
					ctx.fillRect(bar2000x, can.height-230, bar2000wdt, 20);
					}
			}
			
		}
			//Function to draw the 2010 data
		function draw2010(){
			if (bar2010wdt > 350){
				clearInterval(interval3);//clears interval when complete
				}
				else{
					ctx.clearRect(102,can.height-150,600,50);//continuously clears the line to provide fluid motion
					
					
					if(bar2010wdt <350){
					ctx.fillStyle="orange";
					ctx.fillRect(bar2010x, can.height-130, bar2010wdt, 20);//fill the rectangle and build it to the proper width
					bar2010wdt +=5;
					}
					else{
					ctx.fillStyle="orange";
					ctx.fillRect(bar2010x, can.height-130, bar2010wdt, 20);
					}
			}
			
		}
			
			
			
			
		var Nextdecade = document.getElementById("nextdecade");
		Nextdecade.addEventListener("click", Next);
			
		
