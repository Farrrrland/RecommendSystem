# Generated by Selenium IDE
# Modified by farrrrland
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestChangePwd():
  def setup_method(self, method):
    options=webdriver.ChromeOptions()
    options.add_argument('--disable-web-security')
    self.driver = webdriver.Chrome(chrome_options=options)
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_changePwd(self):
    self.driver.get("http://127.0.0.1:8080/")
    self.driver.set_window_size(1051, 846)
    self.driver.find_element(By.CSS_SELECTOR, "div:nth-child(2) > button:nth-child(1)").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-main").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(4) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(4) > .el-input__inner").send_keys("Farrrrland")
    self.driver.find_element(By.CSS_SELECTOR, ".el-input-group > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input-group > .el-input__inner").send_keys("888888")
    self.driver.find_element(By.CSS_SELECTOR, ".el-button--warning").click()
    self.driver.implicitly_wait(100)
    self.driver.find_element(By.CSS_SELECTOR, "div:nth-child(2) > button:nth-child(1)").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(5) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(5) > .el-input__inner").send_keys("888")
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(8) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(8) > .el-input__inner").send_keys("666666")
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(11) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(11) > .el-input__inner").send_keys("666666")
    self.driver.find_element(By.CSS_SELECTOR, ".el-button--success > span").click()
    self.driver.implicitly_wait(100)
    element = self.driver.find_element(By.CSS_SELECTOR, ".el-button--success")
    actions = ActionChains(self.driver)
    actions.move_to_element(element).perform()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(5) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(5) > .el-input__inner").send_keys("888888")
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(8) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(8) > .el-input__inner").send_keys("2")
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(11) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(11) > .el-input__inner").send_keys("31313")
    self.driver.find_element(By.CSS_SELECTOR, ".el-button--success").click()
    self.driver.implicitly_wait(100)
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(5) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(5) > .el-input__inner").send_keys("888888")
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(8) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(8) > .el-input__inner").send_keys("666666")
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(11) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(11) > .el-input__inner").send_keys("666666")
    self.driver.find_element(By.CSS_SELECTOR, ".el-button--success > span").click()
    self.driver.implicitly_wait(100)
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(4) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(4) > .el-input__inner").send_keys("Farrrrland")
    self.driver.find_element(By.CSS_SELECTOR, ".el-input-group > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input-group > .el-input__inner").send_keys("666666")
    self.driver.find_element(By.CSS_SELECTOR, ".el-button--warning > span").click()
    self.driver.implicitly_wait(100)
    element = self.driver.find_element(By.CSS_SELECTOR, ".el-button--warning")
    actions = ActionChains(self.driver)
    actions.move_to_element(element).perform()
    self.driver.find_element(By.CSS_SELECTOR, "div:nth-child(2) > button:nth-child(1)").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(5) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(5) > .el-input__inner").send_keys("666666")
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(8) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(8) > .el-input__inner").send_keys("888888")
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(11) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(11) > .el-input__inner").send_keys("888888")
    self.driver.find_element(By.CSS_SELECTOR, ".el-button--success > span").click()
    self.driver.implicitly_wait(100)
    element = self.driver.find_element(By.CSS_SELECTOR, ".el-button--success")
    actions = ActionChains(self.driver)
    actions.move_to_element(element).perform()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(4) > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input:nth-child(4) > .el-input__inner").send_keys("Farrrrland")
    self.driver.find_element(By.CSS_SELECTOR, ".el-input-group > .el-input__inner").click()
    self.driver.find_element(By.CSS_SELECTOR, ".el-input-group > .el-input__inner").send_keys("888888")
    self.driver.find_element(By.CSS_SELECTOR, ".el-button--warning").click()
    self.driver.implicitly_wait(100)
    self.driver.close()
  
if __name__ == '__main__':
    pytest.main()