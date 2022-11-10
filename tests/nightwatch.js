//const { usage_analytics } = require("../nightwatch.conf");

module.exports = {
    "Test 1" : function (browser){
        browser.init();
        //in this test XPath is using
        browser.useXpath();
        browser
            .assert.elementPresent('//*[@id="inputEmail"]')
            .assert.elementPresent('//*[@id="inputPassword"]')
            .assert.elementPresent('//*[@id="test-1-div"]/form/button')
            .setValue('//*[@id="inputEmail"]', 'login')
            .setValue('//*[@id="inputPassword"]', "password")
            .saveScreenshot('tests_output/test1.png');
        browser.end();
    },
    "Test 2" : function (browser) {
        browser.init();
        let elemCount = 3;
        let badgeValue = 6;
        browser
            .assert.elementsCount('//*[@id="test-2-div"]/ul/li', elemCount)
            .assert.textContains('//*[@id="test-2-div"]/ul/li[2]', 'List Item 2')
            .assert.textContains('//*[@id="test-2-div"]/ul/li[2]/span', badgeValue);
        browser.end();
    },
    "Test 3" : function (browser) {
        let waitingTime = 5; //time in seconds
        browser.init();
        //in tests 3-5 Css selectors are using
        browser.useCss();
        browser
            .assert.textEquals('#dropdownMenuButton', 'Option 1')
            .click('#dropdownMenuButton')
            .waitForElementVisible('.dropdown-menu', waitingTime * 1000)
            .click('a.dropdown-item:nth-child(3)')
            .assert.textEquals('#dropdownMenuButton', 'Option 3');
        browser.end();
    },
    "Test 4" : function (browser) {
        browser.init();
        browser
            .assert.enabled('button.btn:nth-child(2)')
            .assert.attributeEquals('button.btn:nth-child(3)', 'disabled', 'true');
        browser.end();
    },
    "Test 5" : function (browser) {
        browser.init();
        browser
            .waitForElementVisible('#test5-button', 10 * 1000)
            .click('#test5-button')
            .waitForElementVisible('#test5-alert')
            .assert.textEquals('#test5-alert', 'You clicked a button!')
            .assert.attributeEquals('#test5-button', 'disabled', 'true');
        browser.end();
    },
    "Test 6" : async function (browser) {
        browser.init();
        browser.useXpath();
        var result = (await getElem(2, 2));
        console.log("value of the cell is: " + result.value);
        browser.assert.textEquals(result.xpath, "Ventosanzap");
    },
};
async function getElem (tr, td) {
        var xpath = '//*[@id="test-6-div"]/div/table/tbody/tr[' + (tr + 1) + ']/td[' + (td + 1) + ']';
        var cellValue;
        await browser.getText('xpath', xpath, function(result) { 
            cellValue = result.value;
        });
        return {
            value : cellValue,
            xpath : xpath
        }
}