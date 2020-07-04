function hello () {
    const li = document.createElement('li');
    var val = document.querySelector("#todays").value
    li.innerHTML = val;
    document.querySelector("#myDIV").append(li);
    document.querySelector('#todays').value='';
}