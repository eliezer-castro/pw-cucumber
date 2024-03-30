Feature: Login

  Scenario: Valid login
    Given I am on the login page
    When I type my "test.pw@cucumber.com" and "test"
    Then I have a successful login

  Scenario: Invalid login
    Given I am on the login page
    When I type my "test.invalido@cucumber.com" and "password"
    Then I have a failed login