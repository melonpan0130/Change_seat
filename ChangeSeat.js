// window.onload = Random;

function Random(){
    var setting = new Array(19);
    setting.fill(0, 0, 19);
    var front = document.getElementById("front").value.split(", ");
    for(var i=0; i<front.length; i++)
        front[i] = parseInt(front[i]);
    var back = document.getElementById("back").value.split(", ");
    for(var i=0; i<back.length; i++)
        back[i] = parseInt(back[i]);
    var count = 0;

    // 겹치지 않는 19가지
    /*
    for(var i=0; i<19; i++){
        var random = Math.floor(Math.random()*18);
        if(setting[random] == 0){
            setting[random] = ++count;
        }
            
        /*
        if(number[random] != null){
            var output = number[random];
            // document.getElementById(i+1).innerHTML = output;
            number[random] = null;
        }
        else {
            i--;
            continue;
        }
    }*/

    for(var i=0; i<19; i++)
    {
        var random = Math.floor(Math.random()*19);

        if(setting[random]==0) 
            setting[random] = ++count;
        else --i;
    }
    console.log(setting);
    // 큰 수 앞으로
    // 큰 수 뒤로

    // front sort
    for(var i=0; i<front.length-1; i++)
        if(setting[front[i]] < setting[front[i+1]]){
            var a = front[i];
            front[i] = front[i+1];
            front[i+1] = a;
            console.log(setting.pop(front[i]));
            setting.pop(front[i+1]);
        }

    for(var i=0; i<back.length-1; i++)
        if(setting[back[i]] < setting[back[i+1]]){
            var a = back[i];
            back[i] = back[i+1];
            back[i+1] = a;
            setting.pop(back[i]);
            setting.pop(back[i+1]);
        }
    
    console.log(front);
    console.log(back);

    var result = new Array(19);
    for(var i=0; i<front.length; i++)
        result[i] = front[i];
    for(var i=0; i<back.length; i++)
        result[result.length-i-1] = back[i];
    
    count = 0;
    for(var i=front.length; i<result.length-back.length; i++)
        result[i] = setting[count++];
    console.log(result);
    return false;
}