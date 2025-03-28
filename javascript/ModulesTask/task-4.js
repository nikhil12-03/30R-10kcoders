
async function loadModule() {
    try {
      const module = await import('./greetings.js'); 
      module.sayHello(); 
    } catch (error) {
      console.error("Error loading the module:", error);
    }
  }
  
loadModule();