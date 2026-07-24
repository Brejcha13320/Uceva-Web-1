// Crear el modelo
const calculatorModel = new CalculatorModel();

// Crear la vista
const calculatorView = new CalculatorView();

// Crear el controlador
const calculatorController = new CalculatorController(calculatorModel, calculatorView);

// Inicializar la aplicación
calculatorController.init();