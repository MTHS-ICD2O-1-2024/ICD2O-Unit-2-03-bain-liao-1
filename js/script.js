// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function buttonClicked() {
  // input
  const streetName = document.getElementById("street-name").value
  const streetNumber = parseInt(document.getElementById("street-number").value)
  // output
  document.getElementById("user-info").innerHTML =
    "Your info is: " + streetNumber + ", " + streetName + "."
}
