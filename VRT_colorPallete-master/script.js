function randomPalette(){
    let base = Math.floor(Math.random() * 72);
    let colors = [];
    let rgb = []
    colors[0]=base;
    rgb[0]=hsvToRgb(colors[0]/60,1,1)[0]
    rgb[1]=hsvToRgb(colors[0]/60,1,1)[1]
    rgb[2]=hsvToRgb(colors[0]/60,1,1)[2]
    let rules=[];
    rules[0]= 'rgb('+Math.round(rgb[0])+','+Math.round(rgb[1])+','+Math.round(rgb[2])+')';
    document.getElementById('color1').style.color = 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
    for (var i = 1; i < 5; i++) {
        colors[i]= colors[i-1]+72;
        rgb[0]=hsvToRgb(colors[i]/60,1,1)[0]
        rgb[1]=hsvToRgb(colors[i]/60,1,1)[1]
        rgb[2]=hsvToRgb(colors[i]/60,1,1)[2]
        document.getElementById('color'+(i+1)).style.color = 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
        rules[i]='rgb('+Math.round(rgb[0])+','+Math.round(rgb[1])+','+Math.round(rgb[2])+')'
        hsvToRgb(colors[i]/60,1,1)
    }
    generateRules(rules);
}

function limpiarPaleta(){
    let rules=[];
    for (var i = 1; i <= 5; i++) {
        document.getElementById('color'+(i)).style.color = '#000000';
        rules[i-1]= '#FFFFFF';
    }
    generateRules(rules);
}



function generateRules(rules){
document.getElementById("css-rules").value = "\n.website-background{ color: "+rules[0]+";} \n \n" +
    ".element-text{ color: "+rules[1]+";} \n \n" +
    ".element-border{ border-color: "+rules[2]+";} \n \n" +
    ".element-background{ background-color: "+rules[3]+";} \n \n" +
    ".header{ color: "+rules[4]+";}";
}
