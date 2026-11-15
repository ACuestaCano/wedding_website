/* Google Apps Script that saves each RSVP as a new row in your Google Sheet.
   See RSVP-SETUP.md for the steps. */

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var book = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = book.getSheetByName('RSVP') || book.insertSheet('RSVP');

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Received', 'Language', 'Attending', 'Name', 'Email',
      'Total guests', 'Adults', 'Children', 'Guests (names and food requirements)',
      'Bus to venue', 'People on bus', 'Return trip', 'Message'
    ]);
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    new Date(), data.language, data.attending, data.name, data.email,
    data.total_guests, data.adults, data.children, data.guests,
    data.bus_to_venue, data.bus_seats, data.return_trip, data.message
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
