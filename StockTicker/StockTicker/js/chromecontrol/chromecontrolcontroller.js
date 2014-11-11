var hostWebUrl, hostWebTitle, hostWebLogoUrl, options;

chromecontrol.controller('chromecontrolController', function ($scope, $filter) {

    // get the HostWeb URL, title & logo image
    hostWebUrl = decodeURIComponent($.getQueryStringValue("SPHostUrl"));
    hostWebTitle = decodeURIComponent($.getQueryStringValue("SPHostTitle"));
    hostWebLogoUrl = decodeURIComponent($.getQueryStringValue("SPHostLogoUrl"));

    // create chrome control settings
    options = {
        siteUrl: hostWebUrl,
        siteTitle: hostWebTitle,
        appIconUrl: hostWebLogoUrl,
        appTitle: "Stock Ticker",
        settingsLinks: [
          {
              linkUrl: "../Lists/Stock Symbol",
              displayName: "LIST: Stock Symbol"
          }          
        ]
    };

    // create the chrome control
    var nav = new SP.UI.Controls.Navigation("chrome_ctrl_container", options);

    // show chrome control
    nav.setVisible(true);

    // hide top app chrome (image & app name)
    nav.setBottomHeaderVisible(false);

});