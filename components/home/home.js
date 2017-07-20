angular.module("portfolioApp")

.controller("homeCtrl", ["$scope", function ($scope) {

    $(document).ready(function(){

        /**
         * This part does the "fixed navigation after scroll" functionality
         * We use the jQuery function scroll() to recalculate our letiables as the
         * page is scrolled/
         */
        $(window).scroll(function(){
            let window_top = $(window).scrollTop() + 12; // the "12" should equal the margin-top value for nav.stick
            let div_top = $('#nav-anchor').offset();
            if (window_top > div_top) {
                $('nav').addClass('stick');
            } else {
                $('nav').removeClass('stick');
            }
        });


        /**
         * This part causes smooth scrolling using scrollto.js
         * We target all a tags inside the nav, and apply the scrollto.js to it.
         */
        $("nav a").click(function(evn){
            evn.preventDefault();
            $('html,body').scrollTo(this.hash, this.hash);
        });



        /**
         * This part handles the highlighting functionality.
         * We use the scroll functionality again, some array creation and
         * manipulation, class adding and class removing, and conditional testing
         */
        let aChildren = $("nav li").children(); // find the a children of the list items
        let aArray = []; // create the empty aArray
        for (let i=0; i < aChildren.length; i++) {
            let aChild = aChildren[i];
            let ahref = $(aChild).attr('href');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values

        $(window).scroll(function(){
            let windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
            let windowHeight = $(window).height(); // get the height of the window
            let docHeight = $(document).height();

            for (let i=0; i < aArray.length; i++) {
                let theID = aArray[i];
                let divPos = $(theID).offset().top; // get the offset of the div from the top of page
                let divHeight = $(theID).height(); // get the height of the div in question
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                    $("a[href='" + theID + "']").addClass("nav-active");
                } else {
                    $("a[href='" + theID + "']").removeClass("nav-active");
                }
            }

            if(windowPos + windowHeight === docHeight) {
                if (!$("nav li:last-child a").hasClass("nav-active")) {
                    let navActiveCurrent = $(".nav-active").attr("href");
                    $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                    $("nav li:last-child a").addClass("nav-active");
                }
            }
        });
    });

}]);