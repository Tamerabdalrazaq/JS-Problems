function busCount(arrays){
    return arrays.reduce((count,stopData) => count+stopData[0]-stopData[1] ,0);
}


console.log(busCount([[15,0],[2,2],[10,20],[0,0],[14,12]]));