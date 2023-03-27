
<template>
    <div class="spinner">
      <div class="dot1"></div>
      <div class="dot2"></div>
    </div>
  </template>
  
  <style>
  .spinner {
    width: 200px;
    height: 200px;
    position: relative;
    margin: 100px auto;
  }
  
  .spinner div {
    width: 60%;
    height: 60%;
    background-color: #333;
    border-radius: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: bounce 2.0s infinite ease-in-out;
  }
  
  .spinner .dot2 {
    animation-delay: -1.0s;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: scale(0.0);
    }
  
    50% {
      transform: scale(1.0);
    }
  }
  </style>
  