const path = require('path');
const webController = {
index: function(req,res){
    res.sendFile(path.resolve(__dirname,'../views/web/index.html'));
}
}
nosotros function (req,res) {
    res.sendFile(path.resolve(__dirname,'../views/web/nosotros.html'));
    
}
module.exports = webController;