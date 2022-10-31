class TodoView {
	static show(todos) {
		if(todos.length < 1) {
			console.log("Nothing task.");
		} else {
			let no = 1;
			todos.forEach(todo => {
				if(todo.status === false) {
					console.log(`${no}. ${todo.id} | [] ${todo.task} | Start: ${todo.start_date} | Finish: ${todo.finish_date}`);
				} else {
					console.log(`${no}. ${todo.id} | [X] ${todo.task} | Start: ${todo.start_date} | Finish: ${todo.finish_date}`);
				}

				no++;
			});
		}
	}

	static emptyTask(todo) {
		if(todo) {
			console.log("Added new task.");
		} else {
			console.log("Oops.. You must fill the task!");
		}
	}

	static emptyHttpRequest() {
		console.log("Please, input your http request!");
	}

	static badHttpRequest() {
		console.log("Bad http request!");
	}

	static update(todo) {
		console.log(todo);
	}

	static finishTask(todo) {
		console.log(todo);
	}

	static delete(todo) {
		console.log(todo);
	}

	static deleteAll(todos) {
		console.log(todos);
	}
}

module.exports = TodoView;