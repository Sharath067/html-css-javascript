function changeClick(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i=0;i<6;i++)
    {
        var res = Math.floor(Math.random()*16);
        color = color+letters[res];
    }
    document.body.style.background = color;
}