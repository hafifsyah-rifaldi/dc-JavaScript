try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try"); // (3)
} catch (error) {
    console.log(error.name); // (4)
    console.log(error.message);
    console.log(error.stack);
}

/* output
Awal blok try
ReferenceError
errorCode is not defined
ReferenceError: errorCode is not defined
    at file:///home/dicoding/Playground/javascript/CoffeeMachine/error.js:3:5
    at ModuleJob.run (internal/modules/esm/module_job.js:152:23)
    at async Loader.import (internal/modules/esm/loader.js:166:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
*/