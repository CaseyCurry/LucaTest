Feature: Register a New User
  As an anonymous user
  I want to register on the site
  so that I can use the application.

  Background:
    Given I open the home page
    When I try to access a secured area of the site

  @ContinuousIntegration
  Scenario: The user must enter a strong password.
    Given I choose to register
    When I enter email address "test@fake.com"
    And I enter password "123"
    Then I expect to see an error indicating my password is too weak

  @ContinuousIntegration
  Scenario: The user must confirm their password.
    Given I choose to register
    When I enter email address "test@fake.com"
    And I enter password "lucath3app"
    And I confirm password "123"
    Then I expect to see an error indicating my passwords do not match
