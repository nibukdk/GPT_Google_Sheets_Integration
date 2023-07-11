/**
 * Simplifies the given passage in layman's term.
 * @customfunction
 */
function gptSimplifyMenu() {
  try {
    // get sheets and data
    const ss = SpreadsheetApp.getActiveSheet();
    const data = ss.getDataRange().getValues();
    const lastRow = data.length;
    const lastCol = data[0].length;

    //console.log(data[0]);


    // define gpt's role play
    const systemContent = "Simplify The Given Passage in layman's term.";

    for (let i = 1; i < data.length; i++) {
      if (data[i][1] === "" || data[i][1] === "Some Error Occured, please try again after some time.") {
        data[i][1] = fetchData(systemContent, data[i][0]);
      }
    }

    // set sprd with new values
    ss.getRange(1, 1, lastRow, lastCol).setValues(data);

  } catch (e) {
    console.log(e);
    SpreadsheetApp.getActiveSpreadsheet().toast("Some Error Occured, please try again after some time.")

  }
}


/**
 * Summarizes the given passage in 3 to 5 bullet points
 * @customfunction
 */
function gptSummarizeMenu() {
  try {
    // get sheets and data
    const ss = SpreadsheetApp.getActiveSheet();
    const data = ss.getDataRange().getValues();
    const lastRow = data.length;
    const lastCol = data[0].length;

    //console.log(data[0]);


    // define gpt's role play
    const systemContent = "Summarize The Given Passage. Provide atleast 3 and atmost 5 bullet points";

    for (let i = 1; i < data.length; i++) {
      if (data[i][2] === "" || data[i][2] === "Some Error Occured, please try again after some time.") {
        data[i][2] = fetchData(systemContent, data[i][0]);
      }
    }

    // set sprd with new values
    ss.getRange(1, 1, lastRow, lastCol).setValues(data);

  } catch (e) {
    console.log(e);
    SpreadsheetApp.getActiveSpreadsheet().toast("Some Error Occured, please try again after some time.")

  }
}


/**
 * Create custom menu tab in sprd UI
 */
function createCustomMenu() {
  let menu = SpreadsheetApp.getUi().createMenu("GPT Functions");

  menu.addItem("GPT SIMPLIFY", "gptSimplifyMenu")
  menu.addItem("GPT SUMMARIZE", "gptSummarizeMenu")


  menu.addToUi();
}

/**
 * On spreadsheet open creates menu
 * 
 */
function onOpen(e) {

  createCustomMenu();
}