
let count=0;
function getElementById(elementId){
    return document.getElementById(elementId)
}
const fontStyleElement=document.getElementsByClassName('font-style-btn')
fontStyleElement[0].addEventListener('click',()=>{
    const textAreaElement=getElementById('text-area')
    count++;
    if(count===1){
        textAreaElement.style.fontWeight='bold'
    }
    else{
        textAreaElement.style.fontWeight='normal'
        count=0;
    }
})
fontStyleElement[1].addEventListener('click',()=>{
    const textAreaElement=getElementById('text-area');
    count++;
    if(count===1){
        textAreaElement.style.fontStyle='italic'
    }
    else{
        textAreaElement.style.fontStyle='normal'
        count=0
    }
    
})
fontStyleElement[2].addEventListener('click',()=>{
   const textAreaElement=getElementById('text-area')
   count++;
   if(count===1){
    textAreaElement.style.textDecoration='underline'
   }
   else{
    textAreaElement.style.textDecoration='none'
    count=0;
   }
})

// Text Align
const textAlignElement=document.getElementsByClassName('text-align');
textAlignElement[0].addEventListener('click',()=>{
    const textAreaElement=getElementById('text-area')
    count++;
    if(count===1){
        textAreaElement.style.textAlign='left'
    }
    else{
        textAreaElement.style.textAlign='left'
        count=0;
    }
})
textAlignElement[1].addEventListener('click',()=>{
    const textAreaElement=getElementById('text-area')
    count++;
    if(count===1){
        textAreaElement.style.textAlign='center'
    }
    else{
        textAreaElement.style.textAlign='left'
        count=0;
    }
})
textAlignElement[2].addEventListener('click',()=>{
    const textAreaElement=getElementById('text-area')
    count++;
    if(count===1){
        textAreaElement.style.textAlign='right'
    }
    else{
        textAreaElement.style.textAlign='left'
        count=0;
    }
})
textAlignElement[3].addEventListener('click',()=>{
    const textAreaElement=getElementById('text-area')
    count++;
    if(count===1){
        textAreaElement.style.textAlign='justify'
    }
    else{
        textAreaElement.style.textAlign='left'
        count=0;
    }
})


// FontSize

document.getElementById('font-size').addEventListener('input',()=>{
    const inputElement=getElementById('font-size')
    const inputValueString=inputElement.value;
    // const inputValue=parseFloat(inputValueString)
    const textAreaElement=document.getElementById('text-area')
    textAreaElement.style.fontSize=`${inputValueString}px`
   
})

// alternating uppercase and lowercase
document.getElementById('altering-uppercase-lowercase').addEventListener('click',()=>{
    const textAreaElement=getElementById('text-area')
    const textAreaElementValue=textAreaElement.value
    count++;
    if(count===1){
        let formattedString=''
        for(let i=0;i<textAreaElementValue.length;i++){
            if(i%2==0){
                formattedString+=textAreaElementValue[i].toLowerCase()
                
            }
            else{
                formattedString+=textAreaElementValue[i].toUpperCase();
            }
        }
        textAreaElement.value=formattedString;
    }
    else{
        let formattedString=''
        for(let i=0;i<textAreaElementValue.length;i++){
            if(i===0){
                formattedString+=textAreaElementValue[i].toUpperCase()
                
            }
            else{
                formattedString+=textAreaElementValue[i].toLowerCase();
            }
        }
        textAreaElement.value=formattedString;
        count=0;
    }
   

})


// Color picker

document.getElementById('color-picker').addEventListener('input',()=>{
    const colorPicker=getElementById('color-picker')
    const colorPicked=colorPicker.value;
    const textAreaElement=document.getElementById('text-area')
    textAreaElement.style.color=`${colorPicked}`
})
