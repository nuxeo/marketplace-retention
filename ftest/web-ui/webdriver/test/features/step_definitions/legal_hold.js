
import { Then } from 'cucumber';

Then('I set a legal hold on the document', function () {
  this.ui.browser.clickDocumentActionMenu('nuxeo-hold-toggle-button:not([hold])');
});


Then('I unset the legal hold on the document', function () {
  this.ui.browser.clickDocumentActionMenu('nuxeo-hold-toggle-button[hold]');
});

Then('I see the document is under legal hold', function () {
  const page = this.ui.browser.documentPage(this.doc.type);
  page.infoBar.waitForVisible('#retentionInfoBar');
});

Then('I see the document is not under legal hold', function () {
  const page = this.ui.browser.documentPage(this.doc.type);
  page.infoBar.waitForExist('#legalHold', false);
});

Then('I can unset the legal hold on the document', function () {
  this.ui.browser.el.waitForExist('nuxeo-hold-toggle-button[hold]');
});

Then('I cannot unset the legal hold on the document', function () {
  this.ui.browser.el.waitForExist('nuxeo-hold-toggle-button[hold]', false);
});

Then('I cannot edit main blob', function () {
  const page = this.ui.browser.documentPage(this.doc.type);
  page.el.waitForExist('nuxeo-replace-blob-button', false);
  page.el.waitForExist('nuxeo-delete-blob-button', false);
});

Then('I can edit main blob', function () {
  const page = this.ui.browser.documentPage(this.doc.type);
  page.el.waitForExist('nuxeo-replace-blob-button');
  page.el.waitForExist('nuxeo-delete-blob-button');
});
