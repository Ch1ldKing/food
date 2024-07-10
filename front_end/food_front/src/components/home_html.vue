<!-- ExistingHtmlComponent.vue -->
<template>
    <div class="existing-html">
      <!-- 你的现有 HTML 结构 -->

<!DOCTYPE html>
<html lang="en">
  <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@900&display=swap" rel="stylesheet" />
    </head>

    <header class="header"></header>
    <div class="header-inner">
      <h1 class="header-title">Your tour starts here!</h1>
      <h2 class="header-subtitle">Explore the World Through Sound; Embark on Journeys; Immerse in Authentic Experiences</h2>

      <div class="search-container">
        <form action="/search" method="get">
          <button id="search-button" (click)="toSearchPage(searchBar.value)" type="submit"></button>
        </form>
      </div>
    </div>

    <body>
      <main class="main">
        <div class="main-content toggle-class">
          <div class="recommendations-container">
            <div class="recommMessage-container">
              <span id="recommMessage" *ngIf="userLogin != ''">Not what you are looking for?</span>
              <span id="recommMessage" *ngIf="userLogin == ''">Log in to get personalised recommendations :></span>
              <div class="preference-button">
                <button *ngIf="userLogin != ''" type="submit" id="customisePreferences" class="btn" (click)="directToPreferencePage()">
                  <fa-icon icon="heart"></fa-icon>&nbsp;<span>Customise preferences</span>
                </button>
                <button *ngIf="userLogin == ''" type="submit" id="login" class="btn" (click)="directToPreferencePage()">
                  <span>Login</span>
                </button>
              </div>
            </div>

            <h3 id="recommTitle">Our recommendations for you...</h3>

            <div class="recommResults-container" *ngIf="recommendedTours.length > 0 && !isLoading">
              <div *ngFor="let tour of recommendedTours; let i = index">
                <button class="tour" (click)="toTourDetails(tour.id)">
                  <img [src]="tourImageSrcs.get(tour.id)" alt="[no tour image available]" />
                  <div class="tourInfo-container">
                    <span class="tour-name"> {{ tour.tourName }} </span>
                    <div *ngIf="tourIdRatings.get(tour.id)">
                      <span class="tour-rating"> {{ tourIdRatings.get(tour.id)?.toFixed(1) }} / 5.0 </span>
                    </div>

                    <div *ngIf="!tourIdRatings.get(tour.id)">
                      <span class="tour-rating"> No ratings </span>
                    </div>
                    <div *ngIf="tour.tourDuration">
                      <span class="tour-duration">Duration: {{ parseDuration(tour.tourDuration) }} </span>
                    </div>
                    <span class="tour-startPoint">Departs from: {{ tour.startingPoint?.placeName }} </span>
                    <span class="tour-endPoint">Arrives at: {{ tour.destination?.placeName }} </span>
                  </div>
                </button>
            
              </div>
            </div>
            <div class="recommResults-container" *ngIf="isLoading">
              <!-- <span>Loading...</span> -->
              <div class="wrap">
                <div class="loading">
                  <div class="bounceball"></div>
                  <div class="loader-text">LOADING OUR BEST TOURS</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </main>
    </body>
  </html>
</html>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExistingHtmlComponent'
    // 你可以在这里添加组件的逻辑
  };
  </script>
  
  <style scoped>
  .existing-html {
    /* 你可以在这里添加组件的样式 */

    :root {
  --translate-value: -40;
}

html {
  box-sizing: border-box;
  cursor: default;
  width: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background-color: #f6f8f9;
  color: #3d3d3d;
  margin: 0;
  padding: 0;
  margin: 0;
  height: 100%; /* 设置html和body高度为100% */
}

em {
  font-style: italic;
}

.header {
  height: 200%;
  background-image: url('../../content/images/city-view.jpg');
  background-size: cover;
  background-position: center center;
  background-color: #67697c;
  background-blend-mode: multiply;
  position: fixed;
  width: 100%;
  top: 0;
  transform: translateY(calc(var(--translate-value) * 1%));
  will-change: auto;
  transition: 0.5s cubic-bezier(0.22, 0.44, 0, 1);
  &-inner {
    position: fixed;
    color: #fefff4;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    transform: translateY(calc(var(--translate-value-header) * 1%));
    will-change: auto;
    transition: 0.8s cubic-bezier(0.22, 0.44, 0, 1);
  }

  :host-context(.dark-theme2) &-inner {
    color: #000000;
  }

  :host-context(.dark-theme3) &-inner {
    color: #000000;
  }

  &-title {
    text-align: center;
    font-family: 'Roboto Condensed';
    text-transform: uppercase;
    font-weight: 900;
    font-size: 6vw;
    margin-bottom: 30px;
    letter-spacing: 0.2rem;
    padding-left: 5px;
    padding-right: 5px;
  }
  &-subtitle {
    text-align: center;
    font-family: 'Playfair Display';
    font-weight: 400;
    -webkit-text-stroke: 0.015rem;
    letter-spacing: 0.03rem;
    font-size: 1.5rem;
    padding-left: 3px;
    padding-right: 3px;
  }
}

.main {
  margin-top: 101vh;
  padding: 10vh 5vw;
  background-color: #fefff4;
  position: relative;
  z-index: 1;
  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    transition: 1.5s cubic-bezier(0.22, 0.44, 0, 1);
  }
}

:host-context(.dark-theme) .main {
  background-color: #000000;
}

.toggle-class {
  opacity: 0;
  transform: translateY(120px);
}
/* ==========================================================================
Main page styles
========================================================================== */


@media (max-width: 768px) {
  .header {
    background-image: url('../../content/images/city-mobile-view.jpg');
    min-height: 100vh; /* 在移动视图下保证背景图片至少和视口一样高 */
  }
  /* 根据需要添加更多移动视图下的样式调整 */
}




:host-context(.dark-theme) .header {
  background-image: url('../../content/images/city-night-view.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
}

:host-context(.dark-theme2) .header {
  background-image: none;
  background-color: #abbfd3;
}

:host-context(.dark-theme3) .header {
  background-image: none;
  background-color: #cdc3c2;
}


.search-container {
  position: relative;
  width: 100%;
  margin-top: 7vh;
  text-align: center;
  color: #fefff4;
  font-family: 'Gill Sans', sans-serif;
}

#search-input {
  color: #fefff4;
  background-color: rgb(254, 255, 244, 0.1);
  border: 4px solid #fefff4;
  letter-spacing: 0.1rem;
}

:host-context(.dark-theme2) #search-input {
  color: #000000;
  font-weight: bold;
}

:host-context(.dark-theme3) #search-input {
  color: #000000;
  font-weight: bold;
}

#search-input::placeholder {
  color: #fefff4;
  opacity: 0.8; /* Firefox */
  letter-spacing: 0.1rem;
}

:host-context(.dark-theme2) #search-input::placeholder {
  color: #000000;
  font-weight: bold;
}

:host-context(.dark-theme3) #search-input::placeholder {
  color: #000000;
  font-weight: bold;
}

@media (max-width: 768px) {
  .search-container {
    width: 120%; /* 在小屏幕上减少宽度占比 */
    padding: 10px; /* 添加一些内边距 */
    font-size: 16px; /* 增大字体大小以提高可读性 */
  }
}

:host-context(.dark-theme) .search-container {
  color: #ffffff;
}

:host-context(.dark-theme2) .search-container {
  color: #233a52;
  font-weight: bold;
}

:host-context(.dark-theme3) .search-container {
  color: #4c3c13;
  font-weight: bold;
}


:host-context(.dark-theme) .h1 {
  color: #f1cf9a;
}

:host-context(.dark-theme2) .h1 {
  color: #233a52;
  font-weight: bold;
  font-size: 2em; /* Larger font size for better readability */
  line-height: 1.2;
}

:host-context(.dark-theme3) .h1 {
  color: #4c3c13;
  font-weight: bold;
  font-size: 2em; /* Larger font size for better readability */
  line-height: 1.2;
}

form {
  max-width: 80%;
  margin: 2em auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

input[type='search'] {
  padding: 20px 30px;
  margin-right: 2em;
  border: 1px solid #ccc;
  border-radius: 50px;
  outline: none;
  font-size: 30px;
  width: 50%;
}

@media (max-width: 768px) {
  input[type='search'] {
    padding: 10px 20px;
    width: 80%;
  }
}

:host-context(.dark-theme) input[type='search'] {
  padding: 20px 30px;
  margin-right: 2em;
  border: 1px solid #f1cf9a;
  border-radius: 50px;
  outline: none;
  font-size: 30px;
  width: 50%;
}

@media (max-width: 768px) {
  :host-context(.dark-theme) input[type='search'] {
    padding: 5vw; /* 增加内边距 */
    margin-right: 1em; /* 减少右边距 */
    font-size: 4vw; /* 增加字体大小以便在小屏幕上阅读 */
    width: 90%; /* 在小屏幕设备上增加宽度 */
    border-radius: 30px; /* 在小屏幕上减少边框半径 */
  }
}

:host-context(.dark-theme2) input[type='search'] {
  padding: 20px 30px;
  margin-right: 2em;
  border: 10px solid #ff0000;
  border-radius: 50px;
  outline: none;
  font-size: 50px;
  width: 50%;
}

@media (max-width: 768px) {
  :host-context(.dark-theme2) input[type='search'] {
    border: 10px solid #ff0000;
    border-radius: 50px;
    padding: 5vw; /* 增加内边距 */
    margin-right: 1em; /* 减少右边距 */
    font-size: 4vw; /* 增加字体大小以便在小屏幕上阅读 */
    width: 90%; /* 在小屏幕设备上增加宽度 */
    border-radius: 30px; /* 在小屏幕上减少边框半径 */
  }
}

:host-context(.dark-theme3) input[type='search'] {
  padding: 20px 30px;
  margin-right: 2em;
  border: 10px solid #ff0000;
  border-radius: 50px;
  outline: none;
  font-size: 50px;
  width: 50%;
}

@media (max-width: 768px) {
  :host-context(.dark-theme3) input[type='search'] {
    border: 10px solid #ff0000;
    border-radius: 50px;
    padding: 5vw; /* 增加内边距 */
    margin-right: 1em; /* 减少右边距 */
    font-size: 4vw; /* 增加字体大小以便在小屏幕上阅读 */
    width: 90%; /* 在小屏幕设备上增加宽度 */
    border-radius: 30px; /* 在小屏幕上减少边框半径 */
  }
}

#search-button {
  background-image: url('../../content/images/search-white-icon.png');
  background-size: 60%;
  background-repeat: no-repeat; /* Prevent the background image from repeating */
  background-position: center center;
  height: 50px;
  width: 50px;
  padding: 30px;
  border: 3px solid #fefff4;
  border-radius: 50%;
  background-color: rgb(254, 255, 244, 0.1);
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;
}

#search-button:hover {
  background-color: #fefff4;
  background-image: url('../../content/images/search-black-icon.png');
}

button {
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 30px;
}

@media (max-width: 768px) {
  button {
    display: block; /* 使按钮独占一行 */
    font-size: 20px; /* 增大字体大小 */
    margin: 0 auto; /* 添加上下边距为0，左右自动，使按钮水平居中 */
    padding: 10px 20px; /* 增加内边距，改善点击体验 */
    width: auto; /* 根据内容自动调整宽度 */
  }
}

:host-context(.dark-theme) button {
  background-color: #f1cf9a;
  color: #ffffff;
}

:host-context(.dark-theme2) button {
  background-color: #035dbc;
  color: #ffffff;
  outline: red;
  font-size: 50px;
}

:host-context(.dark-theme3) button {
  background-color: #035dbc;
  color: #ffffff;
  outline: red;
  font-size: 50px;
}



:host-context(.dark-theme) button:hover {
  background-color: #e7bd7a;
  font-size: 30px;
}

:host-context(.dark-theme2) button:hover {
  background-color: #ff0000;
  font-size: 60px;
}

:host-context(.dark-theme3) button:hover {
  background-color: #ff0000;
  font-size: 60px;
}

.recommendations-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#recommTitle {
  margin-top: 10px;
  color: #253d5b;
  font-family: 'Gill Sans', sans-serif;
  font-size: 5vw;
}

:host-context(.dark-theme) #recommTitle {
  color: #ffffff;
}
.recommMessage-container {
  width: 100%;
  padding: 5em;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#recommMessage {
  text-align: center;
  color: #53667e;
  font-family: 'Gill Sans', sans-serif;
  font-size: 3vh;
  margin-bottom: 10px;
}

:host-context(.dark-theme) #recommMessage {
  color: #ffffff;
}

.btn {
  cursor: pointer;
  position: relative;
  padding: 5px 20px;
  font-size: 25px;
  color: #fefff4;
  border-radius: 20px;
  background-color: #95a5b9;
  border: 2px solid #95a5b9;
  font-weight: 400;
  font-family: 'Gill Sans', sans-serif;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
}
:host-context(.dark-theme) .btn {
  color: #000000;
  border: 2px solid #e7bd7a;
}

:host-context(.dark-theme2) .btn {
  color: #2a3c5b;
}

:host-context(.dark-theme3) .btn {
  color: #2a3c5b;
}

#login {
  color: #fefff4;
  background-color: #6b8db7;
  border: 2px solid #6b8db7;
}
#login:hover {
  color: #6b8db7;
}
.btn::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: inherit;
  scale: 0;
  z-index: -1;
  background-color: #fefff4;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.btn:hover::before {
  scale: 10;
}
.btn:hover {
  color: #95a5b9;
  background-color: transparent;
  scale: 1;
}
.btn:active {
  scale: 1;
}

.recommResults-container {
  width: 100%;
  min-height: 550px;
  position: relative;
  top: 40px;
  z-index: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around; 
  align-items: center;
  align-content: flex-start; 
  row-gap: 15px; 
  column-gap: 40px;
}

.tour {
  position: relative;
  border-radius: 8px;
  background-color: #eef4f8;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 25px;
  height: 200px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin: auto;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  -webkit-animation-delay: 0.5s;
  -moz-animation-delay: 0.5s;
  animation-delay: 0.5s;

  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
/*=== FADE IN  ===*/
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.tour img {
  position: relative;
  left: 0;
  width: 180px; /* Set the width to 100% to fill the entire button */
  height: 180px; /* Set the height to 100% to fill the entire button */
  margin: 10px;
  object-fit: cover; /* Maintain aspect ratio while covering the button */
  box-shadow: 0px 1px 4px 1px #bed1e0;
  border-radius: 2px;
  z-index: 0;
}
.tour:hover {
  transform: scale(1.1);
  box-shadow: 0px 2px 5px 2px #bed1e0;
  z-index: 1;
}
.tourInfo-container {
  position: relative;
  top: 0px;
  height: 100%;
  max-width: 380px;
  margin: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.tour-name {
  color: #515662;
  font-size: 90%;
  font-family: 'Gill Sans', sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.tour-rating {
  color: white;
  background-color: #033f99;
  padding: 3px;
  border-radius: 5px;
  font-size: 70%;
  margin-top: 5px;
  font-family: 'Gill Sans', sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.tour-duration {
  background-color: rgb(225, 228, 236);
  color: #818488;
  padding: 3px;
  border-radius: 5px;
  font-size: 80%;
  margin-top: 5px;
  font-family: 'Gill Sans', sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
}
.tour-endPoint,
.tour-startPoint {
  color: #818488;
  font-size: 70%;
  margin-top: 2px;
  font-family: 'Gill Sans', sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
}

@media (max-width: 600px) {
  .tour {
    height: auto;
    width: 80vw;
    flex-direction: column;
  }
  .tour img {
    width: 80%;
  }
}

@import url(https://fonts.googleapis.com/css?family=Montserrat);


.wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Montserrat;
}

.loader-text {
  color: #7dbaef;
  display: inline-block;
  margin-left: 10px;
  font-size: 20px;
}

.bounceball {
  position: relative;
  display: inline-block;
  height: 37px;
  &:before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    border-radius: 50%;
    background-color: #7dbaef;
    transform-origin: 50%;
    animation: bounce 500ms alternate infinite ease;
  }
}

@keyframes bounce {
  0% {
    top: $bounce_height;
    height: 7px;
    border-radius: 60px 60px 20px 20px;
    transform: scaleX(2);
  }
  35% {
    height: $height;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0;
  }
}

:host-context(.dark-theme) .loader-text {
  color: white;
}
:host-context(.dark-theme) .bounceball::before {
  background-color: white;
}

}
  </style>
  