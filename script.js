function sl(){
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
       output.innerHTML = this.value;
            }
          
}


        function compute(){
            var pr = document.getElementById("principal").value;
            var t = document.getElementById("years").value;
            var r = document.getElementById("myRange").value;

            pr = parseInt(pr);
            t = parseInt(t);
            r = parseFloat(r);
            var total = pr + (pr*r*t)/100;
            var totalT = t+2021;
            document.getElementById("c").innerHTML = "If you deposit "+ pr;
            document.getElementById("c1").innerHTML = "at an intrest rate of "+ r;
            document.getElementById("c2").innerHTML = "you will receive any amount of "+ total;
            document.getElementById("c3").innerHTML = "in the year  "+ totalT;


            
            
       
        }
        
 