import "./partials/_pad"
import "./clinics/_data"
import "./partials/_helper"
import "./partials/_events"
import "./partials/_canvas"
import "./partials/_sceneLights"
import "./partials/_hotspots"
import "./partials/_raycaster"
import "./partials/_comments"
import "./partials/_floor"
import "./partials/_media"
import "./partials/_clinics"
import "./partials/_controller"

var g = document.createElement("script");
g.src = "https://www.googletagmanager.com/gtag/js?id=UA-138062674-1";
document.body.appendChild(g);

window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }

gtag('js', new Date());
gtag('config','UA-138062674-1', {'site_speed_sample_rate':100} );