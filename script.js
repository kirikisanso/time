let clock = () => {
  let date = new Date();
 
    let month_num = date.getMonth() 
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds() 
  
     if(hours<9)hours="0"+hours
 if(minutes<9)minutes="0"+minutes;
 if (second < 10) second = "0" + second;

    let month =["janu","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]

    // let date_time = "today : "+day+"-"+month[month_num]+"|"+hours+":"+minutes+":"+second
      let date_time = ""+hours+":"+minutes+":"+second
      
      let element = document.getElementById('time').innerHTML =date_time
   
    setTimeout(() => {
        clock()
    }, 1000);
};
clock()



