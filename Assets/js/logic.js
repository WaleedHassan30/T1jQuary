export class GetDuration {
    constructor(date) {
      this.date = date;
      this.now = new Date().getTime();
    }
  
    countTime() {
      return new Promise((resolve) => {
        let timeDifference = {};
            let distance = new Date(this.date) - this.now;
            timeDifference.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            timeDifference.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            timeDifference.min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            timeDifference.years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
            timeDifference.months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
            timeDifference.seconds =Math.floor((distance % (1000 * 60)) / 1000);
    
            if (timeDifference.days < 0 && timeDifference.hours < 0 && timeDifference.min < 0 && timeDifference.years < 0 && timeDifference.months < 0 && timeDifference.seconds < 0) {
                $(".counterContainer").html("<h2>Let's have Fun</h2>")
                $(".counterContainer").append("<h2>Start</h2>")
                $(".date").html(this.date.split()[1]);
                $(".clock").html(this.date.split()[3]);
                
                $("#duration .title h3").html("Lets Go").css("background-color","var(--successColor)").css("font-size","22px").css("font-weight","bold")

            } else {
              resolve(timeDifference);
              
              $(".years").html(`${timeDifference.years}`);
              $(".monthes").html(`${timeDifference.months}`);
              $(".days").html(`${timeDifference.days}`);
              $(".minutes").html(`${timeDifference.min}`);
              $(".second").html(`${timeDifference.seconds}`);
              $(".hours").html(`${timeDifference.hours}`);
            }
    })}
  }


export class Design{
    constructor(){
    }
    
    // Start Handling Menu Events
    menu(){
        $(function(){
            // Close Button
            function closeBtn(){
              
              $(".menuItems").animate({left:"-20%"},1000) // to close the side menu
              $(".active").css("backgroundColor","")
              $(".active").toggleClass("active-removeAfter")
              setTimeout(function(){
                $(".menuBtnToggle").html(`<i class="fa-solid fa-bars"></i> Open`)
              },700)
              $(".changeTheme .colors").slideUp(1000);
              $(".setting").slideUp(1000); 
            //   $(".datetime-input").slideUp(1000);

            }
            $(".closeBtn").click(function(){
              closeBtn()
            })
          
            $("section").click(function(){
              closeBtn()
            })
          
          // -----------------------------------------------------
          // Open Menu Button
          
          let toggleFlag = false
          
          // 
          $(".menuBtnToggle").click(function(){
          
              if(toggleFlag){
                $(".menuItems").animate({left:"0"},1000) // to Open the side menu
                $(".active").removeClass("active-removeAfter")
                toggleFlag = false;
            
                setTimeout(function(){
                  $(".menuBtnToggle").html(`<i class="fa-solid fa-right-from-bracket fa-rotate-180"></i> Close`)
                },700)
              }
              else{
                closeBtn()
                toggleFlag = true;  
              }
          
          
              // sync menu links with sections
          
          
          
          
          
          
          
          })
          
          // $(".menuItems").animate({left:"0"},1000)
          //  make responsive
          
          $(function(){
          
            $(window).resize(function() {
              var screenWidth = $(window).width();
            
              if (screenWidth <= 372) {
                $(".menu .menuItems").css({
                  left: "-100%",
                  width: "100%"
                  
                }
                )
          
            
                $(".menuBtnToggle").css({
                  right: "10px"
                });
            
                $(".toUp").css({
                  display: "block"
                });
              } else {
                // Reset styles for screens larger than 768 pixels
                $(".menu .menuItems").css({
                  left: "-20%",
                  width: "20%"
                });
            
                $(".menuBtnToggle").css({
                  right: "-5rem"
                });
            
                $(".toUp").css({
                  display: "none"
                });
              }
            });
          
          }).ready()
          
          
          // -------------------------------------------------------
          // Handling Open Button Color for colored section
          let color = ""
          $(window).scroll(function(e) {
            let currentScroll = $(window).scrollTop()
            $("section").each(function(){
              let sectionHeight = $(this).outerHeight()
              let sectionTop = $(this).offset().top;
              let sectionBottom = sectionTop + sectionHeight;
              
              if(currentScroll > sectionTop - 500 && currentScroll < sectionBottom ){
                // console.log(`offset = ${$(this).offset().top}  - Scrolltop = ${$(window).scrollTop()} id = ${$(this).attr("id")}  height = ${sectionHeight}`);
                $(".menuBtnToggle").css("color","var(--btnColor)")
                // check it has background 
                if($(this).css("background") != "none"){
                  $(".menuBtnToggle").css("color","var(--btnColor))").css("background-color","white").css("padding","10px").css("border-radius","5px")
                  $("footer").css("color","white)").css("background-color","rgba(115, 177, 188, 0.171)")
          
                }else{
                  $(".menuBtnToggle").css("color","var(--lightColor)").css("background-color","var(--btnColor)").css("padding","10px").css("border-radius","5px")
                  $("footer").css("color","var(--mainColor))").css("background-color","var(--mainColor)")
          
                }
          
                
          
                // open first Acordion element when user arrive that section
                function openToggleAccordion(content,element){
                    $(content).slideDown(1000)
                    $(element).css("background-color","var(--mainColor)").parent().siblings().find(".accordionTitle").css("background-color","var(--linear-gradientColor)")
                    $(element).parent().siblings().find(".accordionContent").slideUp(1000);
                  }

                let counter = 0;
                const accordionContents = $(".accordionContent");
                const accordionTitles = $(".accordionTitle");

                if ($(this).attr("id") === "details") {

                    // let interval = setInterval(() => {
                    // }, ).clearInterval();

                    const currentIndex = counter % accordionContents.length;
                    const currentContent = accordionContents.eq(currentIndex)
                    const currentTitle = accordionTitles.eq(currentIndex)
                    // ------------------------------------
                    if (!currentContent.is(":visible")) {
                      openToggleAccordion(currentContent, currentTitle);
                  } else {
                    currentContent.slideUp(1000)
                    }

                    counter++;

                    if(counter === accordionContents.length){
                        clearInterval(interval);
                        setTimeout(() => {

                            $(accordionTitles).css("background-color","var(--linear-gradientColor)")

                            
                        }, 3000);


                    }




                  }else{

                    $("#accordion").children().each(function(){

                        $(this).siblings().find(accordionContents).slideUp(1000)
                        

                    });



                    

     

                  }

                      
              }
              
            })})
          
          
          
          
            // Go the current section 
            $(".items li").click(function(e) {
              e.preventDefault();
            
              let sectionToGo = $(this).find("a[href]:not([href='setting'])").attr("href");
              console.log(sectionToGo);
              let scrollTop = $(sectionToGo).offset().top-50;  
              console.log(scrollTop);
              $("html, body").animate({
                scrollTop: scrollTop
              }, 1000);
              $(this).addClass("active").siblings().removeClass("active");
          
            });
          
            $(window).scroll(function(){
              $("section").each(function(){
                if($(window).scrollTop() > $(this).offset().top - 300){
                  let id = $(this).attr("id");
                  // $(`.menu ul li a`).removeClass("active")
                  // $(`.menu ul li a[data-scroll=${id}]`).addClass("active");
                  $(`.menu ul li[data-scroll=${id}]`).addClass("active").siblings().removeClass("active");
          
                }
              })
            });
          
          
          
          
          
          
          
          
          // add active section to menu item
          
          
          
          
          
          
          
          
          
          }).ready()
    }
    // End Handling Menu Events
    // --------------------------------------------

    details(){
        function openToggleAccordion(content,element){
            $(content).slideToggle(1000)
            $(element).css("background-color","var(--mainColor)").parent().siblings().find(".accordionTitle").css("background-color","var(--linear-gradientColor)")
            $(element).parent().siblings().find(".accordionContent").slideUp(1000);
          }
          
          $(function(){
          
            $(".accordionElement .accordionTitle").click(function(){
              let element = $(this)
              let content = $(this).parent().find(".accordionContent")[0]
              openToggleAccordion(content,element)
          
            })

            return openToggleAccordion()
          
          }).ready()
    }

      // ...

    duration(){

        // getDate by User
        $(document).ready(function() {
            $('.datetime-input .icon').click(function() {
              $('#datetimeInput').focus();
            });
          });
          
          $(document).ready(function() {
            const datetimeInput = $('#datetimeInput');
            const currentDate = new Date();
            const currentDateString = currentDate.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:mm
            datetimeInput.attr('min', currentDateString);
            console.log(datetimeInput)
          
          });

          
        
        $(function(){

            function convertDateFormat(dateString) {
                const date = new Date(dateString);
                const options = {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                };
                const formattedDate = date.toLocaleDateString('en-eg', options);
              
                return formattedDate;
              }

            let dateValue;




            $('[type="datetime-local"]').change(function() {
                dateValue = $(this).val();
                console.log(dateValue)
                let date = convertDateFormat(dateValue).split("at")[0];
                let time = convertDateFormat(dateValue).split("at")[1];
                localStorage.setItem("DateSaved", JSON.stringify([date, time]));
                // duration
                console.log(date , time)
                setInterval(() => {
                  const duration = new GetDuration(`${date} ${time}`);
                  duration.countTime().then((timeDifference) => {
                    //   console.log(timeDifference);
                  $(".date").html(date);
                  $(".clock").html(time);      
                  }, 1000);
                  $(".date").html(date);
                  $(".clock").html(time);  
                  });   
                  });
            });


            $(function() {
                let storedDate = JSON.parse(localStorage.getItem("DateSaved"));
              
                if (storedDate === null) {
                  $("#duration").css("display", "none");
                } else {
                  $("#duration").css("display", "flex");
              
                  setInterval(() => {
                    const duration = new GetDuration(`${storedDate[0]} ${storedDate[1]}`);
                    duration.countTime().then((timeDifference) => {
                      $(".date").html(storedDate[0]);
                      $(".clock").html(storedDate[1]);
              
                      // Additional code for updating the time difference displayed
                    });
                  }, 1000);
              
                  $(".date").html(storedDate[0]);
                  $(".clock").html(storedDate[1]);
                }
              });
            





            // let date = "19 october 2025";
            // let time = "10:55:00";
        
        

        

        
        
        // End Handling Counter Events
        // ---------------------------------------------------------------------
        
        // Start Form  Events
        

        
            }
    // Start Handling form Events

    form(){
        $(function(){
        
            $("textarea").val("")
        
            $("textarea").keydown(function (event) {
            var textareaValue = $(this).val();
            var remainingChars = 100 - textareaValue.length;
            if (remainingChars < 0) {
                event.preventDefault();
                $("textarea").attr("readonly");

            } else {
                $(".char").text(remainingChars);
                $("textarea").removeAttr("readonly");
            }
            });
        
        
        
        
        }).ready()
    }

    // End Handling form Events
    // Start Setting

    setting(){
        $(".settingBtn").click(function(){
            console.log($(".settingBtn"));
            console.log("walee");

            $(".setting").slideToggle(500)
        });
    }

    changeTheme() {
        $(".themeIcon").click(function() {
          if ($(".changeTheme .colors").is(":visible")) {
            $(".changeTheme .colors").slideUp(1000);
            $(".datetime-input").slideDown(1000);
            console.log("visible");
          } else {
            $(".changeTheme .colors").slideDown(1000);
            $(".datetime-input").slideUp(1000);
            console.log("Not visible");
          }
        });
      
        $(".changeTheme .colors .pallete").siblings().each(function(index) {
          if (index === 0) {
            $(this).css("background-color", "rgba(23, 46, 45, 0.874)");
          } else if (index === 1) {
            $(this).css("background-color", "rgba(214, 46, 51, 0.9)");
          } else if (index === 2) {
            $(this).css("background-color", "rgba(50, 92, 86, 0.845)");
          }
        });
      
        // on load page
        let storedColorsData = JSON.parse(localStorage.getItem("activeColors"));
        let palette = {};
      
        if (storedColorsData === null) {
          palette = {
            "--mainColor": "rgba(0, 0, 0, 0.74)",
            "--secondaryColor": "#495057",
            "--lightColor": "white",
            "--btnColor": "#D62E33",
            "--focasColor": "#80bdff",
            "--boxShadowColor": "rgba(0, 123, 255, .25)",
            "--grayColor": "#ced4da",
            "--linear-gradientColor": "rgba(214, 46, 51, 0.6)",
            "--successColor": "rgba(57, 143, 64, 0.938)",
            "--body":"white",

          };
      
          $(":root").css(palette);
        } else {
          $(":root").css(storedColorsData);
        }
      
        $("#color1").click(function() {
          palette = {
            "--mainColor": "rgba(23, 46, 45, 0.774)",
            "--secondaryColor": "#495057",
            "--lightColor": "white",
            "--btnColor": "#d62e34e7",
            "--focasColor": "#80bdff",
            "--boxShadowColor": "rgba(0, 123, 255, .25)",
            "--grayColor": "#ced4da",
            "--linear-gradientColor": "rgba(23, 46, 45, 0.674)",
            "--successColor": "rgba(57, 143, 64, 0.938)",
            "--body":"white",
            "--loader": "rgba(23, 46, 45, 0.774)",
            "--loaderSpan": "rgba(214, 46, 51 , 0.6)"

          };
      
          $(":root").css(palette);
          localStorage.setItem("activeColors", JSON.stringify(palette));
        });
      
        $("#color2").click(function() {
          palette = {
            "--mainColor": "rgba(59, 83, 77, 0.705)",
            "--secondaryColor": "#495057",
            "--lightColor": "white",
            "--btnColor": "#d62e34e7",
            "--focasColor": "#80bdff",
            "--boxShadowColor": "rgba(0, 123, 255, .25)",
            "--grayColor": "#ced4da",
            "--linear-gradientColor": "rgba(214, 46, 51, 0.5)",
            "--successColor": "rgba(57, 143, 64, 0.938)",
            "--body":"white",
            "--loader": "rgba(23, 46, 45, 0.774)",
            "--loaderSpan": "rgba(214, 46, 51 , 0.6)"

          };
      
          $(":root").css(palette);
          localStorage.setItem("activeColors", JSON.stringify(palette));
        });
      
        $("#color3").click(function() {
          palette = {
            "--mainColor": "rgba(50, 92, 86, 0.745)",
            "--secondaryColor": "#495057",
            "--lightColor": "white",
            "--btnColor": "#d62e34e7",
            "--focasColor": "#80bdff",
            "--boxShadowColor": "rgba(0, 123, 255, .25)",
            "--grayColor": "#ced4da",
            "--linear-gradientColor": "rgba(50, 92, 86, 0.545)",
            "--successColor": "rgba(57, 143, 64, 0.938)",
            "--body":"white",
            "--loader": "rgba(23, 46, 45, 0.774)",
            "--loaderSpan": "rgba(214, 46, 51 , 0.6)"

          };
      
          $(":root").css(palette);
          localStorage.setItem("activeColors", JSON.stringify(palette));
        });
      }


      loadingScreen(){    
        setTimeout(() => {

            $('#loader').fadeOut(1000, function() {
                $('.loaded').addClass('loaded');
              });
            
        }, 2000);
 
      }

    

        }




    
