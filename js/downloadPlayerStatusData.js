function submitToAPI(e) {
     $.ajax({
      type: "POST",
      url : "https://0e0c55ie39.execute-api.eu-central-1.amazonaws.com/default/fplAnalytics-DownloadPlayerStatusData",		 
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8"
      });
  }