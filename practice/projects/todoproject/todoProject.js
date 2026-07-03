import fs from "fs";
import readline from "readline";

const FILE_NAME = "demo.json";

// check whether file exists or not

if (!fs.existsSync(FILE_NAME)) {
  fs.writeFileSync(FILE_NAME, JSON.stringify([]));
//   showMenu()
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getFileData = () => {
  const getData = fs.readFileSync(FILE_NAME, "utf8");
//   console.log({getData})
  return JSON.parse(getData);
};

const addTask = (tasks) => {
  fs.writeFileSync(FILE_NAME, JSON.stringify(tasks, null, 2));
};

const showMenu = () => {
  console.log("___\n TODO APPLICATION _____");
  console.log("1. ADD TASK");
  console.log("2. VIEW TASK");
  console.log("3. DELETE TASK");
  console.log("4. EXIST");
  rl.question("Choose an option: ", handleMenu);
};

const handleMenu = (option) => {
  switch (option) {
    case "1":
      rl.question("Enter TASK: ", (task) => {
        const tasks = getFileData();
        tasks.push({ task, done: false });
        addTask(tasks);

        console.log("Task added successfully");
        showMenu();
      });
      break;

    case "2":
      {
        const allTasks = getFileData();
        // console.log({allTasks})

        if (allTasks.length==0) {
          console.error("No task found!!");
          showMenu()
          return;
        } else {
          allTasks.forEach((element, index) => {
            console.log(`${index + 1}: ${element.task} , ${element.done}`);
          });
        }
      }
      showMenu()
      break;
    case "3":
      const allTasks = getFileData();

      if (allTasks.length==0) {
        console.error("No task to delete");
        showMenu()
        return;
      } else {
        console.log("LIST OF ALL TASKS, ENTER ANY ONE TASK NUMBER ________")
        allTasks.forEach((element, index) => {
            console.log(`${index + 1}: ${element.task} , ${element.done}`);
        });
      }

      rl.question(`ENTER TASK NO: `, (taskNo) => {
        //   console.log({allTasks,taskNo})
        const index = parseInt(taskNo) - 1;
        if (index >= 0 && index < allTasks.length) {
          allTasks.splice(index, 1);
          addTask(allTasks)
          console.log(`TASK DELETE SUCCESSFULLY!!`)
          showMenu()
        }
        else{
            console.error("_____IN VALID TASK ENTERED _______")
            showMenu()
        }
      });
   
    case "4":
      rl.close()
      break
      default:
        console.log("Invalid task selection , ")
        showMenu()
      break;
  }
};


showMenu()


// how to callback work here internally even we dont pass any arguument to hadlemenu function


// Node.js Example
// rl.question("Choose an option: ", handleMenu);

// After the user types:

// 2

// Node.js internally does something like:

// handleMenu("2");

// So,

// const handleMenu = (option) => {
//     console.log(option);
// };

// receives:

// option = "2"