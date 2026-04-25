// ================================================================
// Cartografías narrativas — Apps Script v2
// AGREGA UNA COLUMNA NUEVA: space_type (público/privado)
//
// Si ya tenías una versión anterior corriendo, hacé esto:
// 1. Pegá este código completo en Extensiones → Apps Script (reemplaza el viejo)
// 2. Si la planilla tenía una hoja "Cartas" con datos viejos,
//    borrala (se va a recrear con las columnas nuevas).
// 3. Implementar → Gestionar implementaciones → editá la versión existente
//    → "Versión nueva" → guardar. La URL del endpoint NO cambia.
// ================================================================

const SHEET_NAME = 'Cartas';
const HEADERS = ['timestamp', 'author', 'place', 'address', 'lat', 'lng', 'space_type', 'seed', 'emotions'];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (!data.author || !data.place) {
      return json_({ ok: false, error: 'Faltan campos obligatorios (author, place)' });
    }

    const sheet = getSheet_();
    sheet.appendRow([
      new Date(),
      String(data.author).slice(0, 120),
      String(data.place).slice(0, 200),
      String(data.address || '').slice(0, 300),
      Number(data.lat) || '',
      Number(data.lng) || '',
      String(data.space_type || 'publico'),
      Number(data.seed) || '',
      JSON.stringify(data.emotions || {})
    ]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: err.toString() });
  }
}

function doGet(e) {
  try {
    const sheet = getSheet_();
    const rows = sheet.getDataRange().getValues();
    if (rows.length < 2) return json_([]);

    const headers = rows[0];
    const items = rows.slice(1)
      .filter(row => row[1])
      .map(row => {
        const obj = {};
        headers.forEach((h, i) => {
          const val = row[i];
          if (h === 'emotions') {
            try { obj[h] = JSON.parse(val); } catch (_) { obj[h] = {}; }
          } else if (h === 'lat' || h === 'lng' || h === 'seed') {
            obj[h] = Number(val) || 0;
          } else if (h === 'timestamp') {
            obj['generated_at'] = (val instanceof Date) ? val.toISOString() : String(val);
          } else {
            obj[h] = String(val || '');
          }
        });
        return obj;
      });
    return json_(items);
  } catch (err) {
    return json_({ error: err.toString() });
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
