Array.prototype.pushIfNotPresent = function (pValue){
    var lArray = this || [];
    
    if (lArray.indexOf(pValue) == -1){
        lArray.push(pValue);
        return true;
    }
    
    return false;
}

Array.prototype.hasValue = function (pValue){
    var lArray = this || [];
    
    return !(lArray.indexOf(pValue) == -1);
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

Array.prototype.countOf = function (pValue){
    var count   = 0;
    var lArray  = this || [];
    var lLength = lArray.length
    
    for (var i = 0 ; i < lLength; i++){
        if (lArray[i] == pValue){
            count++;
        }
    }
    
    return count;
}
