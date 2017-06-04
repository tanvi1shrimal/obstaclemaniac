
  window.onload = function () {
    var registeredUser = new CanvasJS.Chart("registeredUser",
    {
      title:{
      text: "Registered User",
      fontSize:16,
      fontweight: "normal",
      fontFamily: "sans-serif",
      fontColor: "#666"
      },
      axisX: {
        valueFormatString: "MM",
        interval:1,
        intervalType: "month"
      },
      axisY:{
        includeZero: false
      },
      data: [
        {
          type: "line",
          dataPoints: [
          { x: new Date(2012, 00, 1), y: 10 },
          { x: new Date(2012, 01, 1), y: 50},        
          { x: new Date(2012, 03, 1), y: 60 },
          { x: new Date(2012, 04, 1), y: 100 },   
          { x: new Date(2012, 11, 1), y: 200 }
          ]
        }
      ]
    });
    registeredUser.render();


    var forApproval = new CanvasJS.Chart("waitingApproval",
    {
      title:{
      text: "Waiting for approval",
      fontSize:16,
      fontweight: "normal",
      fontFamily: "sans-serif",
      fontColor: "#666"
      },
      axisX: {
        valueFormatString: "MM",
        interval:1,
        intervalType: "month"
      },
      axisY:{
        includeZero: false
      },
      data: [
        {
          type: "line",
          dataPoints: [
            { x: new Date(2012, 00, 1), y: 450 },
            { x: new Date(2012, 01, 1), y: 414 },
            { x: new Date(2012, 02, 1), y: 520 },
            { x: new Date(2012, 03, 1), y: 460 },
            { x: new Date(2012, 04, 1), y: 450 },
            { x: new Date(2012, 05, 1), y: 500 },
            { x: new Date(2012, 06, 1), y: 480 },
            { x: new Date(2012, 07, 1), y: 480 },
            { x: new Date(2012, 08, 1), y: 410 },
            { x: new Date(2012, 09, 1), y: 500 },
            { x: new Date(2012, 10, 1), y: 480 },
            { x: new Date(2012, 11, 1), y: 510 }
          ]
        }
      ]
    });
    forApproval.render();
    
var accountDeleted = new CanvasJS.Chart("accountDeleted",
    {
      title:{
      text: "Accont Deleted",
      fontSize:16,
      fontweight: "normal",
      fontFamily: "sans-serif",
      fontColor: "#666"
      },
      axisX: {
        valueFormatString: "MM",
        interval:1,
        intervalType: "month"
      },
      axisY:{
        includeZero: false
      },
      data: [
        {
          type: "line",
          dataPoints: [
            { x: new Date(2012, 00, 1), y: 450 },
            { x: new Date(2012, 01, 1), y: 414 },
            { x: new Date(2012, 02, 1), y: 520 },
            { x: new Date(2012, 03, 1), y: 460 },
            { x: new Date(2012, 04, 1), y: 450 },
            { x: new Date(2012, 05, 1), y: 500 },
            { x: new Date(2012, 06, 1), y: 480 },
            { x: new Date(2012, 07, 1), y: 480 },
            { x: new Date(2012, 08, 1), y: 410 },
            { x: new Date(2012, 09, 1), y: 500 },
            { x: new Date(2012, 10, 1), y: 480 },
            { x: new Date(2012, 11, 1), y: 510 }
          ]
        }
      ]
    });
    accountDeleted.render();



var uploadedMedia = new CanvasJS.Chart("uploadedMedia",
    {
      title:{
      text: "Uploaded Media",
      fontSize:16,
      fontweight: "normal",
      fontFamily: "sans-serif",
      fontColor: "#666"
      }, 
      data: [
        {
          type: "pie",
          dataPoints: [
            {y: 40, legendText:"Video", indexLabel: "Video"},
            {y: 60, legendText:"Photo", indexLabel: "Photo"} 
             
          ]
        }
      ]
    });
    uploadedMedia.render();

  var abuseCount = new CanvasJS.Chart("abuseCount",
    {
      title:{
      text: "Abuse Count",
      fontSize:16,
      fontweight: "normal",
      fontFamily: "sans-serif",
      fontColor: "#666"
      },
      axisX: {
        valueFormatString: "MM",
        interval:1,
        intervalType: "month"
      },
      axisY:{
        includeZero: false
      },
      data: [
        {
          type: "line",
          dataPoints: [
            { x: new Date(2012, 00, 1), y: 450 },
            { x: new Date(2012, 01, 1), y: 414 },
            { x: new Date(2012, 02, 1), y: 520 },
            { x: new Date(2012, 03, 1), y: 460 },
            { x: new Date(2012, 04, 1), y: 450 } 
             
          ]
        }
      ]
    });
    abuseCount.render();

    var loginAnalytics = new CanvasJS.Chart("loginAnalytics",
    {
      title:{
      text: "Total numbers of login",
      fontSize:16,
      fontweight: "normal",
      fontFamily: "sans-serif",
      fontColor: "#666"
      },
      axisX: {
        valueFormatString: "MM",
        interval:1,
        intervalType: "month"
      },
      axisY:{
        includeZero: false
      },
      data: [
        {
          type: "line",
          dataPoints: [
            { x: new Date(2012, 00, 1), y: 450 },
            { x: new Date(2012, 01, 1), y: 414 },
            { x: new Date(2012, 02, 1), y: 520 },
            { x: new Date(2012, 03, 1), y: 460 },
            { x: new Date(2012, 04, 1), y: 450 } 
             
          ]
        }
      ]
    });

    loginAnalytics.render();var loginAnalytics = new CanvasJS.Chart("loginAnalytics",
    {
      title:{
      text: "Total numbers of login",
      fontSize:16,
      fontweight: "normal",
      fontFamily: "sans-serif",
      fontColor: "#666"
      },
      axisX: {
        valueFormatString: "MM",
        interval:1,
        intervalType: "month"
      },
      axisY:{
        includeZero: false
      },
      data: [
        {
          type: "line",
          dataPoints: [
            { x: new Date(2012, 00, 1), y: 450 },
            { x: new Date(2012, 01, 1), y: 414 },
            { x: new Date(2012, 02, 1), y: 520 },
            { x: new Date(2012, 03, 1), y: 460 },
            { x: new Date(2012, 04, 1), y: 450 } 
             
          ]
        }
      ]
    });

    loginAnalytics.render();

    var sourcesOflogin = new CanvasJS.Chart("sourcesOflogin",
    {
      title:{
      text: "Sources of Login",
      fontSize:16,
      fontweight: "normal",
      fontFamily: "sans-serif",
      fontColor: "#666"
      }, 
      data: [
        {
          type: "pie",
          dataPoints: [
            {y: 45, legendText:"Video"},
            {y: 30, legendText:"Photo"} 
          ]
        }
      ]
    });
    sourcesOflogin.render();

    var usernameVsemail = new CanvasJS.Chart("usernameVsemail",
    {
      title:{
      text: "Username v/s Email",
      fontSize:16,
      fontweight: "normal",
      fontFamily: "sans-serif",
      fontColor: "#666"
      },
      axisY:{
        includeZero: false
      },
      data: [
        {
          type: "pie",
          dataPoints: [
            {y: 80, legendText:"Video"},
            {y: 20, legendText:"Photo"} 
          ]
        }
      ]
    });
    usernameVsemail.render();

    var firstTimelogin = new CanvasJS.Chart("firstTimelogin",
    {
      title:{
      text: "First time login",
      fontSize:16,
      fontweight: "normal",
      fontFamily: "sans-serif",
      fontColor: "#666"
      },
      data: [
        {
          type: "pie",
          dataPoints: [
            {y: 67, legendText:"Video"},
            {y: 33, legendText:"Photo"} 
          ]
        }
      ]
    });
    firstTimelogin.render();


var totalSignup = new CanvasJS.Chart("totalSignup",
    {
      title:{
      text: "Total numbers of signup",
      fontSize:16,
      fontweight: "normal",
      fontFamily: "sans-serif",
      fontColor: "#666"
      },
      axisX: {
        valueFormatString: "MM",
        interval:1,
        intervalType: "month"
      },
      axisY:{
        includeZero: false
      },
      data: [
        {
          type: "line",
          dataPoints: [
            { x: new Date(2012, 00, 1), y: 450 },
            { x: new Date(2012, 01, 1), y: 414 },
            { x: new Date(2012, 02, 1), y: 520 },
            { x: new Date(2012, 03, 1), y: 460 },
            { x: new Date(2012, 04, 1), y: 450 } 
             
          ]
        }
      ]
    });

    totalSignup.render();

var sourcesOfsignup = new CanvasJS.Chart("sourcesOfsignup",
    {
      title:{
      text: "Sources of signup",
      fontSize:16,
      fontweight: "normal",
      fontFamily: "sans-serif",
      fontColor: "#666"
      },
      data: [
        {
          type: "pie",
          dataPoints: [
            {y: 67, legendText:"Video"},
            {y: 33, legendText:"Photo"} 
          ]
        }
      ]
    });
    sourcesOfsignup.render();

var timeTakensignup = new CanvasJS.Chart("timeTakensignup",
    {
      title:{
      text: "Time taken to signup",
      fontSize:16,
      fontweight: "normal",
      fontFamily: "sans-serif",
      fontColor: "#666"
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { y: 10 },
            { y: 6 },
            { y: 14 },
            { y: 12 },
            { y: 19 },
            { y: 14 },
            { y: 26 },
            { y: 10 },
            { y: 22 }
          ]
        }
      ]
    });

    timeTakensignup.render();

    var visitsVsSignup = new CanvasJS.Chart("visitsVsSignup",
    {
      title:{
      text: "Visits v/s Signup",
      fontSize:16,
      fontweight: "normal",
      fontFamily: "sans-serif",
      fontColor: "#666"
      },
      data: [
        {
          type: "pie",
          dataPoints: [
            {y: 67, legendText:"Video"},
            {y: 33, legendText:"Photo"} 
          ]
        }
      ]
    });
    visitsVsSignup.render();

}
  