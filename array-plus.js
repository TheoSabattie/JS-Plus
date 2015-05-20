Array.prototype.pushIfNotPresent = function (pValue){
    var lArray = this || [];
    
    if (lArray.indexOf(pValue) == -1){
        lArray.push(pValue);
        return true;
    }
    
    return false;
}

Array.prototype.removeDuplicatedValues = function (){
    var lArray  = this || [];
    var lLength = lArray.length;
    
    for (var i = lLength - 1; i > -1; i--){
        
        if (lArray.indexOf(lArray[i]) != i){
            lArray.splice(i, 1);
        }
    }
    
    if (lLength != lArray.length){
        return true;
    }
    
    return false;
}