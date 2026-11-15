# Where the RSVP answers go

The form on the website needs one address to send the answers to.

## Option 1: Google Sheet (recommended, free, unlimited)

1. Go to sheets.google.com and create a new blank spreadsheet. Name it "Wedding RSVP".
2. Click **Extensions → Apps Script**.
3. Delete the example code, paste in everything from `rsvp-google-sheet.gs`, and click the save icon.
4. Click **Deploy → New deployment**. Click the gear icon next to "Select type" and choose **Web app**.
5. Set **Execute as: Me** and **Who has access: Anyone**. Click **Deploy**.
6. Google asks you to authorise the script. Click **Authorise access**, choose your account, then **Advanced → Go to (project name) → Allow**.
7. Copy the **Web app URL** (it ends in `/exec`).
8. In your GitHub repository, open `rsvp-config.js`, click the pencil icon, and paste the address between the quotes:
   `window.RSVP_ENDPOINT = "https://script.google.com/macros/s/XXXX/exec";`
   Then click **Commit changes**.
9. Test: open the website, fill in the form, and check that a row appears in the sheet (tab "RSVP").

If you later change the script code, use **Deploy → Manage deployments → edit → New version**.

## Option 2: Formspree (answers by email)

1. Create a free account at formspree.io and click **New form**.
2. Copy the form address (it looks like `https://formspree.io/f/xxxxxxxx`).
3. Paste it into `rsvp-config.js` as above and commit.
4. The free plan has a monthly limit on answers, so check their site before relying on it.

## Privacy

The answers include names and food allergies. Keep the sheet private (only you two), and delete it after the wedding.
