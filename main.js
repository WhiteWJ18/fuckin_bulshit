curr=0;
words=["Свободу","Прыжки","Полеты","Небеса"]
setInterval(()=>{
    document.getElementById("word_anim").innerText=words[curr];
    curr= curr==3? 0 : curr+1;
    document.getElementById("word_anim").classList.add("word_anim");
    
    setTimeout(()=>{
        document.getElementById("word_anim").classList.remove("word_anim");
    },900)
},2000)