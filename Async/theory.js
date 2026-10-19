/* JavaScript is synchronous by default -> Synchronous means JavaScript executes code one operation at a time, in order
JavaScript is single-threaded -> Single-threaded means JavaScript normally executes your code using one main thread
Execution context -> An execution context is the environment in which JavaScript code runs. It keeps track of variables and the code being executed
Call stack -> The call stack keeps track of which function is currently running and which function should run next
Memory heap -> The memory heap is an area used to store objects and other dynamically allocated data
*/

/*
Blocking code (Synchronous) --> Blocking code means the program has to wait for the current operation to finish before moving to the next operation
Non-blocking code (Asynchronous) --> Non-blocking code means the program can continue doing other work while an operation is in progress
*/

/*
Call stack: Where JavaScript executes functions
Web APIs: Browser features that handle tasks like timers
Callback queue: Holds callbacks waiting to run
Event loop: Checks when the call stack is free so queued callbacks can run
*/

// Callback --> A callback is simply a function passed to another function