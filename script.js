//project 2
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.project2-item');
    document.getElementById('project2-container').appendChild(lists[0]);
};
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.project2-item');
    document.getElementById('project2-container').prepend(lists[lists.length - 1]);
};






