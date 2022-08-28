Feature: Country selectors

    Country selector on pages should work correctly.

    Background: Go to main page
        Given Main page is opened
        And I hover mouse on "Pricing" tab
        
    Scenario Outline: Country selector on "Elastic SIP" page
        When I click on "Elastic SIP Trunking" link
        Then Url contains "pricing/elastic-sip"
        When I choose "<country>" in country selector
        Then Url contains "<code>"
        And Page header contains "<country>"

        Examples:
            | country     | code |
            | Austria     | at   |
            | Guatemala   | gt   |
            | New Zealand | nz   |
            | Ukraine     | ua   |

    Scenario Outline: Country selector on "Voice API" page
        When I click on "Voice API" link
        Then Url contains "pricing/call-control"
        When I choose "<country>" in country selector
        Then Url contains "<code>"
        And Page header contains "<country>"

        Examples: 
            | country     | code |
            | Austria     | at   |
            | Guatemala   | gt   |
            | New Zealand | nz   |
            | Ukraine     | ua   |

    Scenario Outline: Country selector on "Wireless" page
        When I click on "Wireless" link
        Then Url contains "pricing/wireless-pricing"
        When I choose "<country>" in country selector
        Then Url contains "<code>"
        And Page header contains "<country>"

        Examples: 
            | country     | code |
            | Austria     | at   |
            | Guatemala   | gt   |
            | New Zealand | nz   |
            | Ukraine     | ua   |

    Scenario Outline: Country selector on "WhatsApp Business API" page
        When I click on "WhatsApp Business API" link
        Then Url contains "pricing/whatsapp-business-api"
        When I choose "<country>" in country selector
        Then Url contains "<code>"
        And Page header contains "<country>"

        Examples: 
            | country     | code |
            | Austria     | at   |
            | Guatemala   | gt   |
            | New Zealand | nz   |
            | Ukraine     | ua   |
