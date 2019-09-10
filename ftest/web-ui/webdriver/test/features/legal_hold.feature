Feature: Legal Hold

  As a Legal Hold Manager, I can set and unset legal hold

  Scenario: Set/Unset Legal Hold
    Given I have a File document
    And This document has file "sample.png" for content
    Given user "John" exists
    Given user "Jack" exists
    And I login as "Administrator"
    And I browse to the document
    When I give ManageLegalHold permission to "John" on the document
    Then I can see that "John" has the ManageLegalHold permission
    When I give ReadWrite permission to "Jack" on the document
    Then I can see that "Jack" has the ReadWrite permission
    And I logout
    And I login as "John"
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
