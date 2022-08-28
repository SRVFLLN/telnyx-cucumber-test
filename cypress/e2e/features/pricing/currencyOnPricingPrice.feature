Feature: Currency on pages

    Currency on pages should displayed correct currency.

    Background: Go to main page
        Given Main page is opened
        And I hover mouse on "Pricing" tab

    Scenario: Currencies on "Pricing" page
        When I click on "See all pricing" link
        Then Url contains "pricing"
        And In all price lines the currency symbol "$" is displayed
        