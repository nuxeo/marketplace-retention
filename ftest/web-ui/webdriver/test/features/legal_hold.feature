Feature: Legal Hold

  As a Legal Hold Manager, I can set and unset legal hold

  Scenario: Set/Unset Legal Hold
    Given user "John" exists
    Given user "Jack" exists
    Given I have a File document
    And This document has file "sample.png" for content
    And "John" has ManageLegalHold permission on the document
    And "Jack" has ReadWrite permission on the document
    When I login as "John"
    And I browse to the document
    Then I can see the "my document" document
    And I can edit main blob
    When I set a legal hold on the document
    Then I see the document is under legal hold
    And I cannot edit main blob
    When I logout
    And I login as "Jack"
    And I browse to the document
    Then I see the document is under legal hold
    And I cannot edit main blob
    And I cannot unset the legal hold on the document
    When I logout
    And I login as "John"
    And I browse to the document
    Then I see the document is under legal hold
    When I unset the legal hold on the document
    Then I see the document is not under legal hold
    And I can edit main blob
