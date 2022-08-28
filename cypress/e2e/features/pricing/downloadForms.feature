Feature: Download Forms

    Download Forms on pages should correctly handled temporary email addresses.

    Background: Go to main page
        Given Main page is opened
        And I hover mouse on "Pricing" tab


    Scenario: Download form on "Elastic SIP" page 
        When I click on "Elastic SIP Trunking" link
        Then Url contains "pricing/elastic-sip"
        When I scroll into Download form
        And Fill the form
        Then Message about incorrect email address should be visible 

    Scenario: Download form on "SMS API" page 
        When I click on "SMS API" link
        Then Url contains "pricing/messaging"
        When I scroll into Download form
        And Fill the form
        Then Message about incorrect email address should be visible 