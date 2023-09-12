function setElements(ids){
   const element = new Map();
   ids.forEach((id) => {
    element.set(id, document.getElementById(`${id}`));
    element.get(id).style = 'user-select:none;font-size:20px;margin:10px 0;padding:20px;'
   });

   return element;
}

const elementId = [
    "id-1",
    "id-2",
    "id-3",
    "id-4",
    "id-5",
    "id-6",
    "id-7",
    "id-8",
    "id-9",
    "id-10",
]

// call the function to get the elements array as parameters
const elements1 = setElements(elementId);


elements1.get('id-1').addEventListener('click', function(){
    alert(elements1.get('id-1').innerText)
})

elements1.get('id-2').addEventListener('click', function(){
    alert(elements1.get('id-2').innerText);
});

elements1.get('id-3').addEventListener('click', function(){
    alert(elements1.get('id-3').innerText);
})

elements1.get('id-4').addEventListener('click', function(){
    alert(elements1.get('id-4').innerText);
})

elements1.get('id-5').addEventListener('click', function(){
    alert(elements1.get('id-5').innerText);
})

elements1.get('id-6').addEventListener('click', function(){
    alert(elements1.get('id-6').innerText);
})

elements1.get('id-7').addEventListener('click', function(){
    alert(elements1.get('id-7').innerText);
});

elements1.get('id-8').addEventListener('click', function(){
    alert(elements1.get('id-8').innerText)
});

elements1.get('id-9').addEventListener('click', function(){
    alert(elements1.get('id-9').innerText)
});

elements1.get('id-10').addEventListener('click', function(){
    alert(elements1.get('id-10').innerText)
})