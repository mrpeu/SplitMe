'use strict';

const selector = {
  mainActionButton: '[data-test=MainActionButton]',
  expenseList: '[data-test=ExpenseList]',
  expenseAddSave: '[data-test=ExpenseSave]',
  expenseAddDescription: '[data-test=ExpenseAddDescription]',
  expenseAddAmount: '[data-test=ExpenseAddAmount]',
  expenseAddCurrency: '[data-test=ExpenseAddCurrency]',
  expenseAddRelatedAccount: '[data-test=ExpenseAddRelatedAccount]',
  expenseAddRelatedAccountDialog: '.testExpenseAddRelatedAccountDialog',
  expenseAddPaidFor: '[data-test=ExpenseAddPaidFor]',
  expenseAddPaidBy: '[data-test=ExpenseAddPaidBy]',
  expenseAddPaidByDialog: '.testExpenseAddPaidByDialog',
  expenseAddPaidByDialogIcon: '[data-test=ExpenseAddPaidByDialogIcon]',
  bottomButton: '[data-test=BottomButton]',
  modal: '.testModal',
  listItem: '[data-test=ListItem]',
  listItemBody: '[data-test=ListItemBody]',
  listItemBodyRight: '[data-test=ListItemBodyRight]',
  listSubheader: '[data-test=ListSubheader]',
  appBarLeftButton: '[data-test=AppBar] button',
  appBarTitle: '[data-test=AppBar] h1',
  appBarTab: '[data-test=AppBar] > div > div:nth-child(1)',
  accountBalance: '[data-test=AccountBalance]',
  accountBalanceChart: '[data-test=AccountBalanceChart]',
  accountDebts: '[data-test=AccountDebts]',
  accountTransfer: '[data-test=AccountTransfer]',
  accountTransferValue: '[data-test=AccountTransfer] div:nth-child(2)',
  accountMore: '.testAccountMore',
  accountEditSetting: '[data-test=AccountEditSetting]',
  accountEditDelete: '[data-test=AccountEditDelete]',
  accountEditSave: '[data-test=AccountEditSave]',
  accountEditName: '[data-test=AccountEditName]',
  settings: '[data-test=Settings]',
  settingsExport: '[data-test=SettingsExport]',
  settingsExportTextarea: '[data-test=SettingsExportTextarea]',
  settingsExportDialog: '.testSettingsExportDialog',
  settingsImport: '[data-test=SettingsImport]',
  settingsImportTextarea: '[data-test=SettingsImportTextarea]',
  settingsImportDialog: '.testSettingsImportDialog',
  snackbar: '[data-test=Snackbar]',
};

module.exports = selector;
