
function makeTimer() {

			var endTime = new Date("15 March 2018 23:59:59 GMT+05:30");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  			
  // 		var canvas = document.getElementById("demo-canvas");
		// var ctx = canvas.getContext("2d");
		// // ctx.font = "30px Arial"; "Hello World",10,50);
		// // ctx.fillText("Hello World",10,50);

			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days +  "<span class='spantext'>Days</span>");
			$("#hours").html(hours + "<span class='spantext'>Hours</span>");
			$("#minutes").html(minutes + "<span class='spantext'>Minutes</span>");
			$("#seconds").html(seconds + "<span class='spantext'>Seconds</span>");		


	}

	setInterval(function() { makeTimer(); }, 1000);
