// Carga la API de Google Sheets
function loadSheetsAPI() {
  gapi.client.load('sheets', 'v4', function() {
    // La API de Google Sheets está cargada, puedes comenzar a interactuar con las hojas de cálculo
    // Aquí es donde puedes llamar a las funciones de la API de Google Sheets para obtener datos del archivo abierto
    // y realizar acciones en base a ellos.
    // Por ejemplo, puedes utilizar gapi.client.sheets.spreadsheets.get para obtener los datos de la hoja de cálculo abierta.
    // Consulta la documentación de la API de Google Sheets para obtener más información sobre las funciones disponibles.
  });
}

// Inicializa la API de Google Client
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    scope: 'https://www.googleapis.com/auth/spreadsheets'
  }).then(function () {
    // La API de Google Client está lista, carga la API de Google Sheets
    loadSheetsAPI();
  }, function(error) {
    console.log('Error al inicializar la API de Google Client:', error);
  });
}

// Ejemplo de obtención de datos de la hoja de cálculo abierta
function obtenerDatosHojaCalculo() {
  const spreadsheetId = 'ID_DE_TU_HOJA_DE_CÁLCULO'; // Reemplaza con el ID de tu hoja de cálculo

  gapi.client.sheets.spreadsheets.get({
    spreadsheetId: spreadsheetId
  }).then(function(response) {
    const hojaCalculo = response.result;
    console.log('Datos de la hoja de cálculo:', hojaCalculo);
    // Realiza acciones basadas en los datos obtenidos
  }, function(error) {
    console.log('Error al obtener los datos de la hoja de cálculo:', error);
  });
}

// Configura las credenciales de OAuth y la API de Google Sheets
var CLIENT_ID = '362884150141-c5dvcb88ojlqbsk6lf4m8unnn2ivrfoh.apps.googleusercontent.com';
var API_KEY = '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';

// Carga la API de Google Client y las bibliotecas al cargar el documento
document.addEventListener('DOMContentLoaded', function() {
  // Carga la API de Google Client
  gapi.load('client:auth2', initClient);
});