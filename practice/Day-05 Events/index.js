/**********************************************************************
 * Node.js EventEmitter Practice
 *
 * How to Practice:
 * 1. Uncomment ONE example at a time.
 * 2. Run the file.
 * 3. Observe the output.
 * 4. Read the comments carefully.
 **********************************************************************/

const EventEmitter = require("events");
const event = new EventEmitter();

/**********************************************************************
 * Example 1
 * Basic Event Registration and Trigger
 **********************************************************************/

/*
Explanation

event.on()
------------
Registers a listener.

Nothing happens yet.

event.emit()
------------
Triggers the event.

Node checks whether any listener is registered.

If found,
it executes the callback.

Flow

Register Listener
       ↓
Nothing Happens
       ↓
emit()
       ↓
Listener Executes
*/

// event.on("greet", () => {
//     console.log("Hello Event");
// });

// event.emit("greet");

/*
Output

Hello Event
*/




/**********************************************************************
 * Example 2
 * Calling emit() Multiple Times
 **********************************************************************/

/*
Question

One listener

Two emits

How many times does callback execute?

Answer

2 Times

Formula

Total Callback Executions

=

Number of Listeners

×

Number of emit()

=

1 × 2

=

2
*/

// event.on("greet", () => {
//     console.log("Hello");
// });

// event.emit("greet");
// event.emit("greet");

/*
Output

Hello
Hello
*/





/**********************************************************************
 * Example 3
 * once()
 **********************************************************************/

/*
once()

Registers a listener that executes only once.

After first execution,

Node automatically removes it.
*/

// event.once("greet", () => {
//     console.log("Runs Only Once");
// });

// event.emit("greet");
// event.emit("greet");
// event.emit("greet");

/*
Output

Runs Only Once
*/





/**********************************************************************
 * Example 4
 * Passing Arguments
 **********************************************************************/

/*
emit()

can send data

↓

Listener receives it.
*/

// const greetUser = (name, age) => {
//     console.log(`Name : ${name}`);
//     console.log(`Age  : ${age}`);
// };

// event.on("greet", greetUser);

// event.emit("greet", "Sainath", 25);

/*
Output

Name : Sainath
Age  : 25
*/





/**********************************************************************
 * Example 5
 * Multiple Listeners
 **********************************************************************/

/*
Question

2 listeners

1 emit

How many executions?

Answer

2

Flow

emit()

↓

Listener 1

↓

Listener 2
*/

// event.on("greet", () => {
//     console.log("Listener 1");
// });

// event.on("greet", () => {
//     console.log("Listener 2");
// });

// event.emit("greet");

/*
Output

Listener 1
Listener 2
*/





/**********************************************************************
 * Example 6
 * Multiple Listeners + Multiple emit()
 **********************************************************************/

/*
Question

2 Listeners

2 emit()

Total Executions ?

Formula

2 × 2 = 4
*/

// event.on("greet", () => {
//     console.log("Listener A");
// });

// event.on("greet", () => {
//     console.log("Listener B");
// });

// event.emit("greet");
// event.emit("greet");

/*
Output

Listener A
Listener B
Listener A
Listener B
*/





/**********************************************************************
 * Example 7
 * Same Callback Registered Twice
 **********************************************************************/

/*
Node DOES NOT

check duplicate listeners.

It stores both.
*/

// function demo() {
//     console.log("Hello");
// }

// event.on("greet", demo);
// event.on("greet", demo);

// event.emit("greet");

/*
Output

Hello
Hello
*/





/**********************************************************************
 * Example 8
 * removeListener()
 **********************************************************************/

/*
removeListener()

removes ONLY

the specified listener.
*/

// function removeFun() {
//     console.log("Hello");
// }

// event.on("greet", removeFun);

// event.removeListener("greet", removeFun);

// event.emit("greet");

/*
Output

No Output
*/





/**********************************************************************
 * Example 9
 * emit() Returns true
 **********************************************************************/

/*
emit()

returns true

if listener exists.
*/

// event.on("login", () => {});

// console.log(event.emit("login"));

/*
Output

true
*/





/**********************************************************************
 * Example 10
 * emit() Returns false
 **********************************************************************/

/*
No listener

↓

emit()

↓

false
*/

// console.log(event.emit("login"));

/*
Output

false
*/





/**********************************************************************
 * Example 11
 * emit() before on()
 **********************************************************************/

/*
Question

What happens?

emit()

↓

No Listener

↓

Event Lost
*/

// event.emit("greet");

// event.on("greet", () => {
//     console.log("Hello");
// });

/*
Output

No Output
*/





/**********************************************************************
 * Example 12
 * One Event Triggering Another Event
 **********************************************************************/

/*
login

↓

email

↓

notification
*/

// event.on("login", () => {

//     console.log("Login");

//     event.emit("email");

// });

// event.on("email", () => {

//     console.log("Welcome Email");

// });

// event.emit("login");

/*
Output

Login
Welcome Email
*/