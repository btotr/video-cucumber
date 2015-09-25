Feature: resource selection
  As an media element
  I would like to select a resource
  So that I could fetch it for later use

  Scenario: network is empty
    Given the video player is loaded
    When i request the network state
    Then i should see the state: NETWORK_EMPTY