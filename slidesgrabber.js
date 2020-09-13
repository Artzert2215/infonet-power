var rAmount = 0;
var rTitles = new Array;
var rContent =  new Array;
var iserror = 0;
var cursldisp = 0;

function start() {
    var bin = document.getElementById("gwd-iframe_2").contentWindow.document.getElementsByClassName("et_pb_slides");
    if (bin.length > 1) {
        iserror = 1;
    }
    if (bin !== null) {
        var slides = bin[0].children;
        //console.log(slides);
        //console.log("--Slides Summary Begin--");
        //console.log("Slides amount: %s", slides.length);
        var cursld = 1
        rTitles = new Array;
        rContent =  new Array;
        for (let item of slides) {
            //console.log(item);
            var temptitlebin = item.getElementsByClassName("et_pb_slide_title").item(0);
            var temptitle = temptitlebin.children.item(0).innerHTML;
            var tempcontentbin = item.getElementsByClassName("et_pb_slide_content").item(0);
            var tempcontent = tempcontentbin.children.item(0);
            //console.log("--Slide %s Begin--", cursld);
            //console.log("Title: %s",temptitle);
            //console.log("Saved Title and HTML content into their lists.");
            //below this line is the saving process
            rTitles.push(temptitle);
            rContent.push(tempcontent);
            rAmount = slides.length;
            //console.log(temptitle);
            //console.log(tempcontent);
            //console.log(rTitles);
            //console.log(rContent);
            //above this line is the saving process
            cursld++;
        }
    }
    rAmount = slides.length;
    cursldisp = 0;
    slider()
}
function slider() {
    var slidetitle = document.getElementById("slidetitle");
    var slidecontent = document.getElementById("slidecontent");
    slidetitle.innerHTML = rTitles[cursldisp];
    if (slidecontent.children.item(0) !== null) {
        slidecontent.removeChild(slidecontent.children.item(0));
    }
    //console.log(slidecontent.outerHTML)
    slidecontent.appendChild(rContent[cursldisp])
    //console.log(slidecontent.getElementsByTagName("iframe"))
    if (slidecontent.getElementsByTagName("iframe").length !== 0) {
        slidecontent.children.item(0).children.item(0).children.item(0).children.item(0).children.item(0).setAttribute("class", "fluid-width-video-wrapper"); 
    }
    if (slidecontent.getElementsByTagName("img").length !== 0) {
        slidecontent.children.item(0).children.item(0).children.item(0).setAttribute("class", "wp-block-image"); 
    }
    if (cursldisp == rAmount-1) {
        cursldisp = 0;
    } else {
        cursldisp++;
    }
    setTimeout(slider, "25000");
}

//You are one curious developer aren't you?