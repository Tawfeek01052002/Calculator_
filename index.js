

//Clear 
document.querySelector('.clear').addEventListener('click',function(){
    // console.log(this);
    playSound(document.querySelector('.clear'));
    reset();
});

function reset(){
    document.querySelectorAll('.data')[0].innerHTML="";
    document.querySelectorAll('.data')[1].innerHTML="";
    first=null;
    second=null;
    operation=null;
    dotf=false;
    dots=false;
}

var first;
var second;
var operation;


//for Minus values
document.querySelector('.plusminus').addEventListener('click',()=>{
    if(operation==null){
        first=parseFloat(first)*-1;
        document.querySelectorAll('.data')[1].innerHTML=first;
    }
    else{
        second=parseFloat(second)*-1;
        document.querySelectorAll('.data')[1].innerHTML=first+operation+second;
    }
});

//Number Clicks
var docs=document.querySelectorAll('.but');
for(var i=0;i<docs.length;i++){
    
    docs[i].addEventListener('click',function(){

        // console.log(this);
        playSound(this);

        if(operation==null){
            if(first==null){
                first=this.value;
            }
            else{
                first=first+this.value;
            }
            firstadd();
        }
        else{
            if(second==null){
                second=this.value;
            }
            else{
                second=second+this.value;
            }
            secondadd();
        }
    });
}


//Operations Click
var oper=document.querySelectorAll('.operation');
for(var i=0;i<oper.length;i++){
    
    oper[i].addEventListener('click',function(){
        playSound(this);
        if(first!=null && operation==null){
            operation=this.value;
            operation1();
        }
    });
}



//Adding Dot
var dotf=false;
var dots=false;
document.querySelector('.dot').addEventListener('click',function(){
    playSound(document.querySelector('.dot'));
    if(operation==null){
        if(dotf==false){
            if(first==null){
                first=0;
            }
            first=first+'.';
            dotf=true;
            document.querySelectorAll('.data')[1].innerHTML=first;
        }
    }
    else{
        if(dots==false){
            if(second==null){
                second=0;
            }
            second=second+'.';
            dots=true;
            document.querySelectorAll('.data')[1].innerHTML=first+operation+second;
        }
    }
});

//Delete button
document.querySelector('.delete').addEventListener('click',()=>{
    playSound(document.querySelector('.delete'));
    if(document.querySelectorAll('.data')[0].innerHTML.length>1){
        reset();
    }
    // console.log("enter");
    if(second!=null){
        if(second.length==1){
            second=null;
            document.querySelectorAll('.data')[1].innerHTML=first+operation;

        }
        else{
            second=second.substring(0,second.length-1);
            document.querySelectorAll('.data')[1].innerHTML=first+operation+second;

        }

    }
    else if(operation!=null){
        operation=null;
        second=null;
        document.querySelectorAll('.data')[1].innerHTML=first;
    }
    else{
        if(first.length==1){
            first=null;
            document.querySelectorAll('.data')[1].innerHTML="";
        }
        else{
            first=first.substring(0,first.length-1);
            document.querySelectorAll('.data')[1].innerHTML=first;

        }
        
    }


});


//Equals to
document.querySelector('.equals').addEventListener('click',()=>{
    playSound(document.querySelector('.equals'));
    document.querySelectorAll('.data')[0].innerHTML=first+operation+second;
    var op=document.querySelectorAll('.data')[1];
    var value;
    if(first==null || operation==null || second==null){
        document.querySelectorAll('.data')[0].innerHTML="";
        document.querySelectorAll('.data')[1].innerHTML="NaN";
    }   
    switch(operation){
        case '%':
            value=(parseFloat(first)/100*parseFloat(second)).toFixed(3);
            op.innerHTML=value;
            break;
        case '+':
            value=parseFloat(first)+parseFloat(second);
            op.innerHTML=value;
            break;
        case '-':
            value=parseFloat(first)-parseFloat(second);
            op.innerHTML=value;
            break;
        case 'X':
            value=parseFloat(first)*parseFloat(second);
            op.innerHTML=value;
            break;
        case '/':
            value=(parseFloat(first)/parseFloat(second)).toFixed(3);
            op.innerHTML=value;
            break;
    }
    first=value;
    operation=null;
    second=null;
});


function firstadd(){
    document.querySelectorAll('.data')[1].innerHTML=first;
}

function secondadd(){
    document.querySelectorAll('.data')[1].innerHTML=first+operation+second;
}

function operation1(){
    document.querySelectorAll('.data')[1].innerHTML=first+operation;
}


//play Background Sounds
function playSound(obj){
    var audio=new Audio('sounds/Button_Click.mp3');
    audio.play();

    // console.log(obj.classList);
    var obj=obj.classList;
    obj.add('animation');
    setTimeout(function() {
         obj.remove("animation");
    }, 200);
}