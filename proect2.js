
var brends = ["hp","aplle","aser","bosh","samsung","hp","aser","bosh","aser","bosh","samsung","hp"];
var catTemplate = document.querySelector('#cat-copy').content;
var newCatTemplate = catTemplate.querySelector('.cat');
var cats = document.querySelector('.cats');
var allCheckPicter = document.querySelector('.line_input');
var lineText = document.querySelector('.line_text');
var lineExpand = document.querySelector('.line__expand');

var addPicterCat = function (item,brend) {
    var bitmap = item.querySelector('.bitmap');
    var picter= bitmap.querySelector('img');
    var text="Picture/"+ brend +".png";
    picter.src = text;
    cats.appendChild(item);
};
var clearPicter = function () {
    var cat = document.querySelectorAll('.cat');
    for (var i = 0; i < cat.length; i++) {
        cat[i].remove();
};
};
allCheckPicter.addEventListener('change', function () {
    clearPicter();
    if (lineText.textContent === "Показать все") {
    for (var i = 0; i < brends.length; i++) {
        var newCat = newCatTemplate.cloneNode(true);
        addPicterCat(newCat,brends[i]); 
    };
    lineText.textContent = "Скрыть все";
    lineExpand.style.transform = "rotate(180deg)";
    } else {for (var i = 0; i <=5; i++) {
        var newCat = newCatTemplate.cloneNode(true);
        addPicterCat(newCat,brends[i]);
    };
    lineText.textContent = "Показать все";
    lineExpand.style.transform = "rotate(0deg)";
    };
        });


        for (var i = 0; i <=5; i++) {
            var newCat = newCatTemplate.cloneNode(true);
            addPicterCat(newCat,brends[i]);
        };
        
        

/*
for (var i = 0; i < brends.length; i++) {
    var newCat = newCatTemplate.cloneNode(true);
    addPicterCat(newCat,brends[i]);
}
var brends = [aple,aser,bosh,samsung,hp];
var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');
var newItemTitle = newItemForm.querySelector('.add-form-input');
var taskTemplate = document.querySelector('#task-template').content;
var newItemTemplate = taskTemplate.querySelector('.todo-list-item');

var toggleEmptyListMessage = function () {
  if (items.length === 0) {
    emptyListMessage.classList.remove('hidden');
  }
};

var addCheckHandler = function (item) {
  var checkbox = item.querySelector('.todo-list-input');
  checkbox.addEventListener('change', function () {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

newItemForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var taskText = newItemTitle.value;
  var task = newItemTemplate.cloneNode(true);
  var taskDescription = task.querySelector('span');
  taskDescription.textContent = taskText;
  addCheckHandler(task);

  list.appendChild(task);
});
*/