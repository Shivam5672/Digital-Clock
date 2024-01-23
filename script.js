function animate(){
    let hour = document.getElementById('hour');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let ap = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    ap.innerHTML = (h < 12)? "AM" : "PM";

    h = (h > 12)? h - 12 : h;
    h = (h < 10)? "0" + h : h;
    m = (m < 10)? "0" + m : m;
    s = (s < 10)? "0" + s : s;

    hour.innerHTML = h + "<br><span>Hours</span>";
    min.innerHTML = m + "<br><span>Minutes</span>";
    sec.innerHTML = s + "<br><span>Seconds</span>";

    let hrs = document.getElementById('hrs');
    let mins = document.getElementById('mins');
    let secs = document.getElementById('secs');
    let h_dot = document.getElementById('h-dot')
    let m_dot = document.getElementById('m-dot');
    let s_dot = document.getElementById('s-dot');

    hrs.style.strokeDashoffset = 440 - (440 * h)/12;
    mins.style.strokeDashoffset = 440 - (440 * m)/60;
    secs.style.strokeDashoffset = 440 - (440 * s)/60;

    h_dot.style.transform = `rotate(${h * 30}deg)`;
    m_dot.style.transform = `rotate(${m * 6}deg)`;
    s_dot.style.transform = `rotate(${s * 6}deg)`;


    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);