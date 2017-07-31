var app = angular.module("myApp", ["ngRoute"]);

// Picture Slideshow

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
};

function showSlides(n) {
  if (n > 3) {slideIndex = 1} 
  if (n < 1) {slideIndex = 3}
  
  var slides1, slides2, slides3; 
  var text1, text2, text3;

  slides1 = document.getElementById('icon1');
  text1 = document.getElementById('icon-text1');
  slides2 = document.getElementById('icon2');
  text2 = document.getElementById('icon-text2');
  slides3 = document.getElementById('icon3');
  text3 = document.getElementById('icon-text3');
  
  if (slideIndex == 1) {
    slides1.style.opacity = 1;
    slides2.style.opacity = 0;
    slides3.style.opacity = 0;
    text1.style.opacity = 1;
    text2.style.opacity = 0;
    text3.style.opacity = 0;

    slides1.style.left = "7vw";
    slides2.style.left = "14vw";
    slides3.style.left = "0vw";
    text1.style.left = "20vw";
    text2.style.left = "27vw";
    text3.style.left = "13vw";
  }
  if (slideIndex == 2) {
    slides1.style.opacity = 0;
    slides2.style.opacity = 1;
    slides3.style.opacity = 0;
    text1.style.opacity = 0;
    text2.style.opacity = 1;
    text3.style.opacity = 0;

    slides1.style.left = "0vw";
    slides2.style.left = "7vw";
    slides3.style.left = "14vw";
    text1.style.left = "13vw";
    text2.style.left = "20vw";
    text3.style.left = "27vw";
  }
  if (slideIndex == 3) {
    slides1.style.opacity = 0;
    slides2.style.opacity = 0;
    slides3.style.opacity = 1;
    text1.style.opacity = 0;
    text2.style.opacity = 0;
    text3.style.opacity = 1;

    slides1.style.left = "14vw";
    slides2.style.left = "0vw";
    slides3.style.left = "7vw";
    text1.style.left = "27vw";
    text2.style.left = "13vw";
    text3.style.left = "20vw";
  }
};


var travelSlideIndex = 1;

function plusTravelSlides(n) {
  showTravelSlides(travelSlideIndex += n);
};

function showTravelSlides(n) {
  var slides = document.getElementById('travel-image');
  var country = document.getElementById('country-image');
  var caption = document.getElementById('caption-text');

  if (n > 19) {travelSlideIndex = 1} 
  if (n < 1) {travelSlideIndex = 19}
  if (travelSlideIndex === 1) {
    slides.style.backgroundImage = "url('Images/Travel/rome.JPG')";
    country.style.backgroundImage = "url('Images/rome.png')";
    caption.innerHTML = "Rome is my favorite city in the world. The streets are drenched in history and you can hardly turn a corner without walking past a breathtaking relic.";
  } else if (travelSlideIndex === 2) {
    slides.style.backgroundImage = "url('Images/Travel/florence.JPG')";
    country.style.backgroundImage = "url('Images/florence.png')";
    caption.innerHTML = "After admiring the art of Florence, we took a quick sojourn to a villa in Tuscany for a cooking lesson. Easily the best lasagna I've ever had!";
  } else if (travelSlideIndex === 3) {
    slides.style.backgroundImage = "url('Images/Travel/venice.JPG')";
    country.style.backgroundImage = "url('Images/venice.png')";
    caption.innerHTML = "This blue sky in this picture is a bit deceptive: the thunderstorm that rocked Venice that night lit up the canals and the sea electric blue with every crack of lightning.";
  } else if (travelSlideIndex === 4) {
    slides.style.backgroundImage = "url('Images/Travel/sorrento.JPG')";
    country.style.backgroundImage = "url('Images/pompeii.png')";
    caption.innerHTML = "My family was living in Naples, which is only a brief train ride from the beachside city of Sorrento, the start of Amalfi coast.";
  } else if (travelSlideIndex === 5) {
    slides.style.backgroundImage = "url('Images/Travel/bologna.JPG')";
    country.style.backgroundImage = "url('Images/bologna.png')";
    caption.innerHTML = "To kick off my two-week-long solo travel, I spent a night in Bologna, known for its red roofs, two towers, and the oldest university in the Western world.";
  } else if (travelSlideIndex === 6) {
    slides.style.backgroundImage = "url('Images/Travel/austria.JPG')";
    country.style.backgroundImage = "url('Images/austria.png')";
    caption.innerHTML = "I spent a couple of days in Austria so I could see the breathtaking Dachstein glacier (there were people skiing in June!) and brave the 'Stairway to Nothingness.'";
  } else if (travelSlideIndex === 7) {
    slides.style.backgroundImage = "url('Images/Travel/munich.JPG')";
    country.style.backgroundImage = "url('Images/munich.png')";
    caption.innerHTML = "Though the architecture here was stunning, the highlight of my trip to Munich was watching the Eisbach river surfing.";
  } else if (travelSlideIndex === 8) {
    slides.style.backgroundImage = "url('Images/Travel/cannes.JPG')";
    country.style.backgroundImage = "url('Images/cannes.png')";
    caption.innerHTML = "My trip was a bit derailed (literally) by a train strike in France, but I eventually arrived to the beaches and incredibly friendly people of Cannes.";
  } else if (travelSlideIndex === 9) {
    slides.style.backgroundImage = "url('Images/Travel/avignon.JPG')";
    country.style.backgroundImage = "url('Images/avignon.png')";
    caption.innerHTML = "My day here was cut short, again thanks to the train strike, but the bridge, gardens, and Palais des Papes was everything it promised to be.";
  } else if (travelSlideIndex === 10) {
    slides.style.backgroundImage = "url('Images/Travel/paris.JPG')";
    country.style.backgroundImage = "url('Images/paris.png')";
    caption.innerHTML = "I spent a week in Paris, but really only needed a couple of days to completely fall in love. Bookstores, history, architecture, art, cafes, Paris has it all.";
  } else if (travelSlideIndex === 11) {
    slides.style.backgroundImage = "url('Images/Travel/cinque.jpg')";
    country.style.backgroundImage = "url('Images/cinque.png')";
    caption.innerHTML = "On my second Europe trip, I was able to spend a weekend in Cinque Terre, five cities that are as stunning as all of the pictures advertise.";
  } else if (travelSlideIndex === 12) {
    slides.style.backgroundImage = "url('Images/Travel/pompeii.JPG')";
    country.style.backgroundImage = "url('Images/pompeii.png')";
    caption.innerHTML = "This city has been frozen in time for nearly 2000 years, but the art and innovation in Pompeii is still impressive.";
  } else if (travelSlideIndex === 13) {
    slides.style.backgroundImage = "url('Images/Travel/sagradafamilia.JPG')";
    country.style.backgroundImage = "url('Images/spain.png')";
    caption.innerHTML = "A weekend truly wasn't enough to explore all of Barcelona. La Sagrada Familia alone is an incredible spectacle, to say nothing of the beaches, food, art, and music.";
  } else if (travelSlideIndex === 14) {
    slides.style.backgroundImage = "url('Images/Travel/capetown.JPG')";
    country.style.backgroundImage = "url('Images/southafrica.png')";
    caption.innerHTML = "Two months in Cape Town really flew by. Lined with mountains on one side and the beach on another, it is a city graced by natural beauty. The memories and friends I made here can't be summed up in a few sentences.";
  } else if (travelSlideIndex === 15) {
    slides.style.backgroundImage = "url('Images/Travel/sharks.JPG')";
    country.style.backgroundImage = "url('Images/southafrica.png')";
    caption.innerHTML = "Achieving a dream that was born during hours of binge-watching Shark Week, I got to cage dive with Great White Sharks in South Africa.";
  } else if (travelSlideIndex === 16) {
    slides.style.backgroundImage = "url('Images/Travel/pancakes.JPG')";
    country.style.backgroundImage = "url('Images/netherlands.png')";
    caption.innerHTML = "On my way home from Cape Town I had a 24 hour layover in Amsterdam. I managed to squeeze in the Van Gogh museum, the Anne Frank House, a canal ride, the sex museum, and even some Dutch pancakes."
  } else if (travelSlideIndex === 17) {
    slides.style.backgroundImage = "url('Images/Travel/cabo.JPG')";
    country.style.backgroundImage = "url('Images/mexico.png')";
    caption.innerHTML = "In a much-needed post-graduation vacation, my family and I went to Cabo for a few days in December, 2016.  Nothing like fruity drinks and 80 degree weather to melt the stress away.";
  } else if (travelSlideIndex === 18) {
    slides.style.backgroundImage = "url('Images/Travel/tanzania.JPG')";
    country.style.backgroundImage = "url('Images/tanzania.png')";
    caption.innerHTML = "For a quasi-family reunion in Summer of 2017, 10 of my family members and I went on safari in Tanzania for 11 days. We got to see nature in action and our personal favorites: all the baby animals.";
  } else if (travelSlideIndex === 19) {
    slides.style.backgroundImage = "url('Images/Travel/rwanda.JPG')";
    country.style.backgroundImage = "url('Images/rwanda.png')";
    caption.innerHTML = "After safari, the rest of our family members returned home, but my mother and I flew to Rwanda to trek gorillas. What I wasn't expecting was the amazing people of Rwanda that we met along the way.";
  }

};

var cardSlideIndex = 1;

function plusCards(n) {
  showCardSlides(cardSlideIndex += n);
};

function showCardSlides(n) {
  var pics = document.getElementById('sport-pic');
  var text = document.getElementById('sport-text');

  if (n > 7) {cardSlideIndex = 1} 
  if (n < 1) {cardSlideIndex = 7}
  if (cardSlideIndex === 1) {
    pics.style.backgroundImage = "url('Images/baseball.JPG')";
    text.innerHTML = "I've been in and out of organized sports my entire life.  I started with  tee-ball and was convinced I had found my calling: I was going to be a professional baseball player when I grew up. Of course that dream went out the window when I learned that women cannot play baseball and my tee-ball career went with it when I learned I would have to transition to softball the following year.";
  } else if (cardSlideIndex === 2) {
    pics.style.backgroundImage = "url('Images/basketball.JPG')";
    text.innerHTML = "After my short-lived baseball career, I moved onto basketball where I probably made two baskets the whole time I played.  I always got a little anxious for games because I didn't like having the responsibility of having the ball, but I loved my team and enjoyed practices so I stuck with it for a couple of years.";
  } else if (cardSlideIndex === 3) {
    pics.style.backgroundImage = "url('Images/soccer.JPG')";
    text.innerHTML = "The story that sums up my one season of soccer involves me getting hit in the face with the ball and as my vision went black for a few seconds I heard 'Nice header, Courtney!' from one of my more supportive teammates.  After that I mostly played goalie, but I hated feeling like every goal scored on us was my fault."
  } else if (cardSlideIndex === 4) {
    pics.style.backgroundImage = "url('Images/swim.jpg')";
    text.innerHTML = "Clearly I wasn't cut out for traditional team sports, so when I was 11 I began swim team.  Though I had a love-hate relationship with competing in swim meets, I worked hard in practice and I could see and feel the changes in my body as the summer went on. For a few years I did year-round swimming, but it as the days got shorter and colder, standing outside in the dark dripping wet became untenable. However, I continued with my summer team every year until I aged out at 18."
  } else if (cardSlideIndex === 5) {
    pics.style.backgroundImage = "url('Images/tapping.PNG')";
    text.innerHTML = "In high school I began to dance a bit.  I never got to be particularly flexible or skilled, but I adored every minute of it. I did dance in lieu of PE my sophomore year and we got to spend a couple of weeks on each different style (ballet, jazz, modern, African, Indian, etc.).  Then we spent the second semester working in small groups to choreograph our own dance that we performed at the end of the year.  Then in college I took up tap dancing for a few years. I still wouldn't say I can actually tap dance, but my teacher was fantastic and encouraging and I had a blast.";
  } else if (cardSlideIndex === 6) {
    pics.style.backgroundImage = "url('Images/muderella.jpg')";
    text.innerHTML = "I began running at the end of my senior year to help deal with the stress of making college decisions. I am a terrible runner which means about 20 minutes into all I can think is 'This is the worst. When can I stop?' It's not fun, but I get to turn my brain off for a little while. I started running some fun 5ks (like the Mud Run!) and I even did a triathalon in the summer of 2012 which inspired me to join the triathalon team during my freshman year of college."
  } else if (cardSlideIndex === 7) {
    pics.style.backgroundImage = "url('Images/hiking.JPG')";
    text.innerHTML = "One of my favorite ways to get exercise nowadays is hiking. You get cardio on the way up, a gorgeous view, and then strength on the way down. Plus fresh air, nature, all that good stuff. I go to Yosemite at least once a year, but my favorite hikes have been in Cape Town on Table Mountain and Lion's Head.  Those views are unparalleled.";
  }
};


  // var newone = slides.cloneNode(true);
  // slides.parentNode.replaceChild(newone, slides);

  // var newonetext = text.cloneNode(true);
  // text.parentNode.replaceChild(newonetext, text);

  // if (slideIndex === 1) {
  // 	newone.style.backgroundImage = "url('Images/pbk.png')";
  //   newonetext.innerHTML = "I am proud and honored to call myself a member of Phi Beta Kappa since 2015. Founded in 1776, Phi Beta Kappa invites the top 10% of liberal arts and sciences students at select universities to join this honors society.  It is both humbling and inspiring to share this status with past U.S. Presidents, Supreme Court Justices, and Nobel Laureates."
  // } else if (slideIndex === 2) {
  //   newone.style.backgroundImage = "url('Images/seal.png')";
  //   newonetext.innerHTML = "In December, 2016 I graduated from U.C. Berkeley with High Honors and a GPA of 3.936."     
  // } else if (slideIndex === 3) {
  // 	newone.style.backgroundImage = "url('Images/ix.png')";
  //   newonetext.innerHTML = "For 4 weeks in the summer of 2016 I studied web development in Cape Town, South Africa through the program I_Xperience. It was one of the most useful skills I have learned and in the most beautiful setting too! Our studies were punctuated by hikes up Table Mountain, diving with Great White Sharks, and surfing at the picturesque Muizenberg beach."
  // }

// Overlay

app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'>\n  <div class='ng-modal-overlay' ng-click='hideModal()'></div>\n  <div class='ng-modal-dialog' ng-style='dialogStyle'>\n    <span class='ng-modal-title' ng-show='dialogTitle && dialogTitle.length' ng-bind='dialogTitle'></span>\n    <div class='ng-modal-close' ng-click='hideModal()'>\n      <div ng-bind-html='closeButtonHtml'></div>\n    </div>\n    <div class='ng-modal-dialog-content' id='modalOverlay' ng-transclude></div>\n  </div>\n</div>"
  };
});

app.controller('myCtrl', function($scope) {

  $scope.modalPicShown = false;
  $scope.modalShown = false;
  $scope.modalShown1 = false;
  $scope.modalShown2 = false;
  $scope.modalShown3 = false;
  $scope.modalShown4 = false;
  $scope.modalShown5 = false;
  $scope.modalShowProject1 = false;
  $scope.modalShowProject2 = false;
  $scope.modalShowProject3 = false;
  
  // $scope.toggleModalPic = function() {
  //   console.log('clicked!');
  //   $scope.modalPicShown = !$scope.modalPicShown;
  // };

  // $scope.toggleModal = function() {
  //   console.log('clicked!');
  //   $scope.modalShown = !$scope.modalShown;
  // };

  $(document).on('click', '.project-pic', function () {
      console.log(this.id);
      $('.ng-modal-overlay').css( "height", $(document).height());
      if (this.id == 'project1') {
        $scope.modalShowProject1 = !$scope.modalShowProject1;
        $('.bubble-image').css( "backgroundImage", "url(Images/beecalm-watch.png)");
        $('.bubble-image').css( "backgroundSize", "contain");
      } else if (this.id == 'project2') {
        $scope.modalShowProject2 = !$scope.modalShowProject2;
        $('.bubble-image').css( "backgroundImage", "url(Images/waitsfor.png)");
        $('.bubble-image').css( "backgroundSize", "contain");
        $('.bubble-image').css( "boxShadow", "none");
      } else if (this.id == 'project3') {
        $scope.modalShowProject3 = !$scope.modalShowProject3;
        $('.bubble-image').css( "backgroundImage", "url(Images/raytrace2.png)");
        $('.bubble-image').css( "boxShadow", "none");
      } else if (this.id == 'project4') {
        $scope.modalShowProject4 = !$scope.modalShowProject4;
        $('.bubble-image').css( "backgroundImage", "url(Images/raytrace2.png)");
        $('.bubble-image').css( "boxShadow", "none");
      }
  });

  $(document).on('click', '.book', function () {
      console.log(this.id);
      $('.ng-modal-overlay').css( "height", $(document).height());
      if (this.id == 'one') {
        $scope.modalShown1 = !$scope.modalShown1;
      } else if (this.id == 'two') {
        $scope.modalShown2 = !$scope.modalShown2;
      } else if (this.id == 'three') {
        $scope.modalShown3 = !$scope.modalShown3;
      } else if (this.id == 'four') {
        $scope.modalShown4 = !$scope.modalShown4;
      } else if (this.id == 'five') {
        $scope.modalShown5 = !$scope.modalShown5;
      }
  });

  $('a#resume').attr({target: '_blank', 
                    href  : 'resume.pdf'});
  //   $(document).on('click', '.book', function () {
  //     console.log(this.id);
  //     $('.ng-modal-overlay').css( "height", $(document).height());
  //     if (this.id == 'two') {
  //       $scope.modalShown2 = !$scope.modalShown2;
  //     }
  // });
  //     $(document).on('click', '.book', function () {
  //     console.log(this.id);
  //     $('.ng-modal-overlay').css( "height", $(document).height());
  //     if (this.id == 'three') {
  //       $scope.modalShown3 = !$scope.modalShown3;
  //     }
  // });
  //       $(document).on('click', '.book', function () {
  //     console.log(this.id);
  //     $('.ng-modal-overlay').css( "height", $(document).height());
  //     if (this.id == 'four') {
  //       $scope.modalShown4 = !$scope.modalShown4;
  //     }
  // });
  //   $(document).on('click', '.book', function () {
  //     console.log(this.id);
  //     $('.ng-modal-overlay').css( "height", $(document).height());
  //     if (this.id == 'five') {
  //       $scope.modalShown5 = !$scope.modalShown5;
  //     }
  // });
});


// Scroll

$('#scrollUp').fadeOut(0);

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#scrollUp').fadeIn(200);    // Fade in the arrow
    } else {
        $('#scrollUp').fadeOut(200);   // Else fade out the arrow
    }
});

$('#scrollUp').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 800);
});
