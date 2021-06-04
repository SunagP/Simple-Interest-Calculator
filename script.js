function sl(){
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
       output.innerHTML = this.value;
            }
          
}
function highlight(text,pid) {
    var inputText = document.getElementById(pid);
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>";
     inputText.innerHTML = innerHTML;
    }
   
}

        function compute(){
            var pr = document.getElementById("principal").value;
            var t = document.getElementById("years").value;
            var r = document.getElementById("myRange").value;
            if(pr<=0 ||pr==NaN ){
                alert("Please enter a positive number");
                document.getElementById("principal").focus();
            }
            
            // if(pr<=0 ){
            //     alert("Please enter a positive number");
            //     document.getElementById("principal").focus();
            // }
            else{
                pr = parseInt(pr);
            t = parseInt(t);
            r = parseFloat(r);
            var total =  (pr*r*t)/100;
            var totalT = t+2021;
            document.getElementById("c").innerHTML = "If you deposit "+ pr;
            document.getElementById("c1").innerHTML = "at an intrest rate of "+ r;
            document.getElementById("c2").innerHTML = "you will receive any amount of "+ total;
            document.getElementById("c3").innerHTML = "in the year  "+ totalT;
            highlight(pr.toString(),"c");
            highlight(r.toString(),"c1");
            highlight(total.toString(),"c2");
            highlight(totalT.toString(),"c3");
            

}
     
            
       
        }
        
        var ddl = document.getElementById('AgeDropdownId');

        for (var i = 1; i <= 100; i++) {
            var theOption = new Option;
            theOption.text = i;
            theOption.value = i;
            ddl.options[i] = theOption;
        }
        // window.onload = dropdown();