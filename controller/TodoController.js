const TodoModel = require("../model/TodoModel");
const TodoView = require("../view/TodoView");

class TodoController {
	static show() {
		let todos = TodoModel.show();
		TodoView.show(todos);
	}

	static add(data) {
		let todo = TodoModel.add(data);
		TodoView.emptyTask(todo);
	}

	static delete(id) {
		let todo = TodoModel.delete(id);
		TodoView.delete(todo);
	}

	static deleteAll() {
		let todos = TodoModel.deleteAll();
		TodoView.deleteAll(todos);
	}

	static update(datas) {
		let todo = TodoModel.update(datas);
		TodoView.update(todo);
	}

	static finishTask(id) {
		let todo = TodoModel.finishTask(id);
		TodoView.finishTask(todo);
	}

	static emptyHttpRequest() {
		TodoView.emptyHttpRequest();
	}

	static badHttpRequest() {
		TodoView.badHttpRequest();
	}
}

module.exports = TodoController;