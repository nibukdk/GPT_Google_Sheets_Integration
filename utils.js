const CHAT_GPT_API = "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";
const BASE_URL = "https://api.openai.com/v1/chat/completions";


function fetchData(systemContent = "You are an expert mathematics teacher", userContent = "Help me understand calculus in easy way.") {
  try {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${CHAT_GPT_API}`
    };

    const options = {
      headers,
      method: "GET",
      muteHttpExceptions: true,
      payload: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{
          "role": "system",
          "content": systemContent
        },
        {
          "role": "user",
          "content": userContent
        }
        ],
        "temperature": 0.7
      })
    };

    const response = JSON.parse(UrlFetchApp.fetch(BASE_URL, options));

    /*  console.log(response)
     console.log(response.choices[0].message.content); */

    return response.choices[0].message.content;
  } catch (e) {
    console.log(e);
    SpreadsheetApp.getActiveSpreadsheet().toast("Some Error Occured, please try again after some time.")

    return "Some Error Occured, please try again after some time.";
  }
}

