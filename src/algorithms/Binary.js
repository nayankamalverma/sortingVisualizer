

const Binary = (array, position, steps, colors,targetVal) => {
    let colorKey = colors[colors.length - 1].slice();
    let s=0,e=array.length-1,mid;
    

    while(s<=e){
        colorKey[s]=1;
        colorKey[e]=2;
        mid = s + Math.floor((e - s) / 2);
        
        colorKey[mid]=5;
        console.log(array[s]+'start')
        console.log(array[mid]+'mid')
        console.log(array[e]+'end')
        steps.push(array.slice());
        colors.push(colorKey.slice());
        if(array[mid]===targetVal){
            colorKey[mid]=5;            
            steps.push(array.slice());
            colors.push(colorKey.slice());
            return mid; 
        }
        else if(array[mid]>targetVal){
            colorKey[e]=0;
            e=mid-1;

            colorKey[e]=2;
        }else{
            colorKey[s]=0
            s=mid+1;
            colorKey[s]=1;
            steps.push(array.slice());
        colors.push(colorKey.slice());
        }
        colorKey[mid]=0;
        steps.push(array.slice());
        colors.push(colorKey.slice());
    } 
    return -1;
   
};

export default Binary;