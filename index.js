const command = process.argv[2];
const param = process.argv.slice(3);
const TodoController = require("./controller/TodoController");

switch(command) {
	case "show":
		// console.log("Showing...");
		TodoController.show();
		break;
	case "add":
		// console.log("Added...");
		TodoController.add(param);
		break;
	case "update":
		// console.log("Updated...");
		TodoController.update(param);
		break;
	case "delete":
		// console.log("Deleted...");
		TodoController.delete(param);
		break;
	case "finish_task":
		// console.log("Finish task...");
		TodoController.finishTask(param);
		break;
	case "delete_all":
		// console.log("Deleted all...");
		TodoController.deleteAll();
		break;
	case undefined:
		// console.log("Please, input your http request!");
		TodoController.emptyHttpRequest();
		break;
	default:
		// console.log("Bad http request...");
		TodoController.badHttpRequest();
		break;
}