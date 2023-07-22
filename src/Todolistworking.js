function Todo_listworking(){


    return

    <>
    <form>
    <input type="text" class='todo-inputs'>
    <button class='todo-button'>
      <i class='fas fa-plus-square'></i>
    </button>
    <div class="select">
      <select name="todos" class='filter-todos'>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
  <div class="todo-container">
    <ul class="todo-list"></ul>
  </div>
    </>


  
  //javascript
}