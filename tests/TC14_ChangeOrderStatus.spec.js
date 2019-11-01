// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe(' Change Order Status', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it(' Change Order Status', async function() {
    await driver.get("http://localhost/all_order.html")
    await driver.findElement(By.css("tr:nth-child(1) .fa")).click()
    await driver.findElement(By.id("Editstatus")).click()
    {
      const dropdown = await driver.findElement(By.id("Editstatus"))
      await dropdown.findElement(By.xpath("//option[. = 'Out for Delivery']")).click()
    }
    await driver.findElement(By.id("Editstatus")).click()
    await driver.findElement(By.id("UpdateStatusBtn")).click()
  })
})