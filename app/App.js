import { AuthController } from './controllers/AuthController.js';
import { ToDoController } from './controllers/ToDoController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  ToDoController = new ToDoController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}

function fetchQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("quote").textContent = `"${data.content}"`;
      document.getElementById("author").textContent = `- ${data.author}`;
    })
    .catch(() => {
      console.error("Failed to fetch quote.");
    });
}

const app = new App()
// @ts-ignore
window.app = app
