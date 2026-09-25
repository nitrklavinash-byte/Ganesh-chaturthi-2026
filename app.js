function money(n){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n)}
function link(id,url){const e=document.getElementById(id);if(e)e.href=url}
const d=NAVRATRI_DATA;
link("donateBtn",d.settings.donationUrl);link("donate2",d.settings.donationUrl);link("registerBtn",d.settings.registrationUrl);
document.getElementById("liveTitle").textContent=d.live.title;document.getElementById("liveMessage").textContent=d.live.message;document.getElementById("updated").textContent="Updated: "+d.live.updatedAt;
document.getElementById("today").innerHTML=d.today.map(x=>`<div class="card"><div>${x.icon}</div><b>${x.time}</b><div>${x.name}</div><small>${x.note||""}</small></div>`).join("");
document.getElementById("schedule").innerHTML=d.schedule.map(x=>`<div class="rowcard"><div><div class="day">${x.day}</div><small class="muted">${x.date}</small></div><div>${x.event}<br><small class="muted">${x.note||""}</small></div><div class="time">${x.time}</div></div>`).join("");
const pct=d.donation.target?Math.min(100,d.donation.raised/d.donation.target*100):0;
document.getElementById("raised").textContent=money(d.donation.raised);document.getElementById("target").textContent="Target "+money(d.donation.target);
document.getElementById("target2").textContent=money(d.donation.target);document.getElementById("pct").textContent=pct.toFixed(1)+"%";document.getElementById("bar").style.width=pct+"%";
document.getElementById("garbaTitle").textContent=d.garba.title;document.getElementById("garbaDate").textContent=d.garba.date;document.getElementById("garbaNote").textContent=d.garba.note;link("garbaBtn",d.garba.registrationUrl);
document.getElementById("highlights").innerHTML=d.garba.highlights.map(x=>`<div>${x}</div>`).join("");
document.getElementById("sponsors").innerHTML=d.sponsors.map(x=>`<div class="sponsor"><strong>${x.name}</strong><br><span class="muted">${x.amount}</span></div>`).join("");