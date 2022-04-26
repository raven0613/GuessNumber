let answer;

let max;
let min;

let inputNumber;

function initialize()
{
    answer = Math.ceil( Math.random() * 100) ;
    console.log("answer: "+answer);
    max = 100;
    min = 0;
}

function input(_min , _max)
{
   inputNumber = Number( prompt("請輸入數字 (於 " + _min + " ~ " + _max + " 之間)"));
} 

initialize();
input(min , max);
Guess();


function Guess()
{ 
    if(isNaN(inputNumber)) //確定是不是數字(不是數字)
    {
        alert("請輸入半形阿拉伯數字");
        input(min , max);
        Guess()
    }
    else
    {
        if(inputNumber %1 !== 0) //確定是不是整數
        {
            alert("請輸入整數");
            input(min , max);
            Guess()
        }
        else if(inputNumber< max && inputNumber > min)  //確定她沒有超出範圍
        {
            if(inputNumber == answer )
            {
                alert("你贏了! 答案是 " + answer);
                initialize();
                input(min , max);
                Guess()

            }
            else if(inputNumber < answer)
            {

                min = inputNumber;

                input(min , max);
            
                Guess()
            }
            else //(inputNumber > answer)
            {
                max = inputNumber;
                input(min , max);
            
                Guess()
            }
        }
        else
        {
            alert("請輸入範圍內的數字");
            input(min , max);
            Guess()
        }
    }
}

