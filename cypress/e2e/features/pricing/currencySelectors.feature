Feature: Currency selectors

    Currency selector on pages should work correctly.

    Background: Go to main page
        Given Main page is opened
        And I hover mouse on "Pricing" tab
        

    Scenario Outline: Currency selector on "Elastic SIP" page
        When I click on "Elastic SIP Trunking" link
        Then Url contains "pricing/elastic-sip"
        When I choose "<currencyCode>" in currency selector
        Then In "Pay-as-you-go" table "Local calls" row contains only "<currencySymbol>"

        Examples:
            | currencyCode | currencySymbol |
            | USD          | $              |
            | AUD          | A$             |
            | GBP          | £              |
            | EUR          | €              |

    Scenario Outline: Currency selector on "Voice API" page
        When I click on "Voice API" link
        Then Url contains "pricing/call-control"
        When I choose "<currencyCode>" in currency selector
        Then In "Pay-as-you-go" table "Local Calls" row contains only "<currencySymbol>"

        Examples: 
            | currencyCode | currencySymbol |
            | USD          | $              |
            | AUD          | A$             |
            | GBP          | £              |
            | EUR          | €              |

    Scenario Outline: Currency selector on "SMS API" page
        When I click on "SMS API" link
        Then Url contains "pricing/messaging"
        When I choose "<currencyCode>" in currency selector
        Then In "Pay-as-you-go" table "Local numbers" row contains only "<currencySymbol>"

        Examples: 
            | currencyCode | currencySymbol |
            | USD          | $              |
            | AUD          | A$             |
            | GBP          | £              |
            | EUR          | €              |

    Scenario Outline: Currency selector on "Fax" page
        When I click on "Fax" link
        Then Url contains "pricing/fax"
        When I choose "<currencyCode>" in currency selector
        Then In "Pay-as-you-go" table "Send and receive Fax via API" row contains only "<currencySymbol>"

        Examples: 
            | currencyCode | currencySymbol |
            | USD          | $              |
            | AUD          | A$             |
            | GBP          | £              |
            | EUR          | €              |

    Scenario Outline: Currency selector on "Wireless" page
        When I click on "Wireless" link
        Then Url contains "pricing/wireless-pricing"
        When I choose "<currencyCode>" in currency selector
        Then In "IoT SIM Card Pricing" table "Multi-size SIM card" row contains only "<currencySymbol>"

        Examples: 
            | currencyCode | currencySymbol |
            | USD          | $              |
            | AUD          | A$             |
            | GBP          | £              |
            | EUR          | €              |

    Scenario Outline: Currency selector on "WhatsApp Business API" page
        When I click on "WhatsApp Business API" link
        Then Url contains "pricing/whatsapp-business-api"
        When I choose "<currencyCode>" in currency selector
        Then In "Pay-as-you-go" table, "Business-initiated" row, "Message fee" column contains only "<currencySymbol>"

        Examples: 
            | currencyCode | currencySymbol |
            | USD          | $              |
            | AUD          | A$             |
            | GBP          | £              |
            | EUR          | €              |

    Scenario Outline: Currency selector on "Identity Services & Data" page
        When I click on "Identity Services & Data" link
        Then Url contains "pricing/id-services-and-data"
        When I choose "<currencyCode>" in currency selector
        Then In "Caller ID and CNAM" table "Inbound CNAM" row contains only "<currencySymbol>"

        Examples: 
            | currencyCode | currencySymbol |
            | USD          | $              |
            | AUD          | A$             |
            | GBP          | £              |
            | EUR          | €              |

    Scenario Outline: Currency selector on "Networking" page
        When I click on "See all pricing" link
        Then Url contains "pricing"
        When I click on "Networking" link
        Then Url contains "pricing/networking"
        When I choose "<currencyCode>" in currency selector
        Then In "Virtual Cross Connects" table "50 Mbps" row contains only "<currencySymbol>"

        Examples: 
            | currencyCode | currencySymbol |
            | USD          | $              |
            | AUD          | A$             |
            | GBP          | £              |
            | EUR          | €              |