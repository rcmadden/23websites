window.onload = function() {
    const countdown = () => {
        const countdown = () => {
            const countDate = new Date("March 20, 2023 00:00:00").getTime();
            const now = new Date().getTime();
            const gap = countDate - now;
        
            // Time calculations
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;
        
            const textDay = Math.floor(gap / day);
            const textHour = Math.floor((gap % day) / hour);
            const textMinute = Math.floor((gap % hour) / minute);
            const textSecond = Math.floor((gap % minute) / second);
        
            document.getElementById("days").innerHTML = textDay;
            document.getElementById("hours").innerHTML = textHour;
            document.getElementById("minutes").innerHTML = textMinute;
            document.getElementById("seconds").innerHTML = textSecond;
        };
        
        setInterval(countdown, 1000);
    }
    
    setInterval(countdown, 1000);
    }