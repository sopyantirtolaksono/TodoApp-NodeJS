const fs = require("fs");

class TodoModel {
	constructor(id, task, status, start_date, finish_date) {
		this.id = id;
		this.task = task;
		this.status = status;
		this.start_date = start_date;
		this.finish_date = finish_date;
	}

	static getTodos() {
		let datas = fs.readFileSync("./data.json", "utf-8");
		let parsedDatas = JSON.parse(datas);
		let todos = parsedDatas.map(todo => {
			let {id, task, status, start_date, finish_date} = todo;
			return new TodoModel(id, task, status, start_date, finish_date);
		});

		return todos;
	}

	static show() {
		let todos = this.getTodos();
		return todos;
	}

	static add(data) {
		let todos = this.getTodos();
		let id;

		switch(data[0]) {
			case undefined:
				return false;
				break;
			default:
				if(todos.length < 1) {
					id = 1;
				} else {
					id = todos[todos.length - 1].id + 1;
				}
				
				let task = data[0];
				let status = false;
				let startDate = new Date();
				let finishDate = "";

				let temp = new TodoModel(id, task, status, startDate, finishDate);
				todos.push(temp);
				this.save(todos);

				return true;
				break;
		}
	}

	static save(data) {
		fs.writeFileSync("./data.json", JSON.stringify(data, null, 3));
	}

	static delete(id) {
		let todos = this.getTodos();
		let selectedId = Number(id[0]);
		let idFound = false;

		if(selectedId > 0) {
			todos.map(todo => {
				if(todo.id === selectedId) {
					idFound = true;
					if(idFound) {
						todos = todos.filter(todo => todo.id !== selectedId);
						this.save(todos);

						// Mengurutkan kembali IDnya secara ASC
						// let no = 0;
						// todos = todos.map(todo => {
						// 	todo.id = no + 1;
						// 	no++;

						// 	return todo;
						// });
						// this.save(todos);
					}
				}
			});

			if(idFound) {
				return "Delete is success.";
			} else {
				return "Not found!";
			}
		} else {
			return "ID is not number!";
		}
	}

	static deleteAll() {
		let todos = this.getTodos();
		todos = [];
		this.save(todos);
		return "Delete is success.";
	}

	static update(datas) {
		let todos = this.getTodos();
		let id = Number(datas[0]);
		let task = datas[1];
		let foundOrNot = false;

		if(id > 0) {
			switch(task) {
				case undefined:
					return "Oops.. You must fill the task!";
					break;
				default:
					todos = todos.map(todo => {
						if(todo.id === id) {
							todo.task = task;
							foundOrNot = true;
						}

						return todo;
					});

					if(foundOrNot) {
						this.save(todos);
						return "Update is success.";
					} else {
						this.save(todos);
						return "Not found!";
					}
					break;
			}
		} else {
			return "ID is not number!";
		}
	}

	static finishTask(id) {
		let todos = this.getTodos();
		let selectedId = Number(id[0]);
		let status = true;
		let finishDate = new Date();
		let foundOrNot = false;

		if(selectedId > 0) {
			todos = todos.map(todo => {
				if(todo.id === selectedId) {
					todo.status = status;
					todo.finish_date = finishDate;
					foundOrNot = true;
				}

				return todo;
			});
			
			if(foundOrNot) {
				this.save(todos);
				return "Task is finished.";
			} else {
				this.save(todos);
				return "Not found!";
			}
		} else {
			return "ID is not number!";
		}

	}
}

module.exports = TodoModel;