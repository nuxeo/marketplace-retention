import { Then } from 'cucumber';

Then('I set a legal hold on the document', function () {
  this.ui.browser.clickDocumentActionMenu('nuxeo-hold-toggle-button:not([hold])');
});

Then('I unset the legal hold on the document', function () {
  this.ui.browser.clickDocumentActionMenu('nuxeo-hold-toggle-button[hold]');
});

Then('I see the document is under legal hold', function () {
  const page = this.ui.browser.documentPage(this.doc.type);
  page.infoBar.waitForVisible('#retentionInfoBar #legalHold');
});

Then('I see the document is not under legal hold', function () {
  const page = this.ui.browser.documentPage(this.doc.type);
  page.infoBar.waitForExist('#legalHold', false);
});

Then('I can unset the legal hold on the document', function () {
  this.ui.browser.el.waitForExist('nuxeo-hold-toggle-button[hold]');
});

Then('I cannot set the legal hold on the document', function () {
  this.ui.browser.el.waitForExist('nuxeo-hold-toggle-button', false);
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

Then('I can see the retention menu', function () {
  this.ui.drawer.waitForVisible('nuxeo-menu-icon[name="retention"]');
});

Then('I cannot see the retention menu', function () {
  this.ui.drawer.waitForNotVisible('nuxeo-menu-icon[name="retention"]');
});

Then('I go the retention rules location', function () {
  const menu = this.ui.drawer.open('retention');
  menu.waitForVisible('nuxeo-menu-item[name="rules"]');
  menu.element('nuxeo-menu-item[name="rules"]').click();
});

Then('I attach the {string} rule to the document', function (ruleName) {
  this.ui.browser.clickDocumentActionMenu('nuxeo-attach-rule-button');
  const dialog = this.ui.browser.el.element('nuxeo-attach-rule-button #dialog');
  dialog.waitForVisible();
  const select = dialog.element('nuxeo-document-suggestion');
  fixtures.layouts.setValue(select, ruleName);
  this.el.waitForEnabled('paper-button[name="add"]');
  this.el.click('paper-button[name = "add"]');
});

Then('I see the document is under retention', function () {
  const page = this.ui.browser.documentPage(this.doc.type);
  page.infoBar.waitForVisible('#retentionInfoBar #retention');
});
